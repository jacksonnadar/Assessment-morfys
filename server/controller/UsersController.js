const Register = require('../api/models/register');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.register = async (req, res) => {
  console.log(req.body);
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);

    const userexist = await Register.findOne({ email: req.body.email });
    if (userexist) {
      return res.status(400).json({ message: 'User is already register' });
    }

    const register = new Register({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      email: req.body.email,
      password: hashedpassword,
      date: Date.now(),
    });

    register.save();
    const accessToken = await creatJwtToken({ _id: user._id, name: user.name });

    return res
      .status(200)
      .json({
        accessToken: accessToken,
        message: 'You are registered',
        redirectURL: '/',
      });
  } catch (err) {
    res.status(500).json({ message: 'something went wrong' });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await Register.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ message: 'You are not registered' });
    }
    const validpass = await bcrypt.compare(req.body.password, user.password);
    if (!validpass) {
      return res.status(400).json({ message: 'Incorrect email or password ' });
    }
    const accessToken = await creatJwtToken({ _id: user._id, name: user.name });
    console.log(accessToken);
    return res
      .status(200)
      .json({
        accessToken: accessToken,
        message: 'You are Logged in',
        redirectURL: '/',
      });
  } catch (err) {
    res.status(500).json({ message: 'something went wrong' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await Register.find();
    console.log(users);
    res.status(200).json(JSON.stringify(users));
  } catch (err) {
    res.status(500).json({ message: 'something went wrong' });
  }
};

exports.updateUsers = async (req, res) => {
  try {
    const result = await Register.updateOne(
      { email: req.body.email },
      {
        $set: { name: req.body.name },
      }
    );
    console.log(result);
    return res.status(200).json({ message: 'Name updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'something went wrong' });
  }
};

const creatJwtToken = async (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '12h',
  });
};
