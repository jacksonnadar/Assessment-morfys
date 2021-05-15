const express = require("express");
const app = express();
const server = require("http").createServer(app);
const mongoose = require("mongoose");
require("dotenv").config();


const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
res.send("hello")
})

server.listen(PORT, () => console.log("server connected on " + PORT));