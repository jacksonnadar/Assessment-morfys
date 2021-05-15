const express = require("express");
const router = express.Router();
const Register = require("../api/models/register");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


router.get('/',async (req,res)=>{
    try{const users = await Register.find()
    res.status(200).json(JSON.stringify(users))
    }catch(err){
        res.status(500).json({"message":"something went wrong"})

    }
})


router.post("/register" ,async (req,res)=>{
  console.log(req.body);
    try{
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);

    const userexist = await Register.findOne({ email: req.body.email });
    if(userexist){
        return res.status(400).json({"message":"User is already register"})
    }

    const register = new Register({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      password: hashedpassword,
      date: Date.now()
    });

    const result = register.save();
    res.status(200).json({"message":"You are registered"})
    }catch(err){
        res.status(500).json({"message":"something went wrong"})
    }
})

router.post('/login',async (req,res)=>{
    try{const user = await Register.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({"message":"You are not registered"});
    }

    const validpass = await bcrypt.compare(req.body.password, user.password);
    if (!validpass) {
      return res.status(400).json({"message":"Incorrect email or password "})
    }

    return res.status(200).json({"message":"You are signed in"})
    }catch(err){
        res.status(500).json({"message":"something went wrong"})
    }
})


router.put('/update',async (req,res)=>{
    try{const result = await Register.updateOne(
        { email: req.body.email },
        {
          $set: {name : req.body.name}
        }
      );
      console.log(result);
      return res.status(200).json({"message":"Name updated successfully"})
    }catch(err){
        res.status(500).json({"message":"something went wrong"})
    }
})

module.exports = router;
