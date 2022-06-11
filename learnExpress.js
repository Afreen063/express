// module statement which is used to import files, here we basically use  require("lib name").
const express= require("express");
const authRouter= require("./routs/auth");
const path = require("path")
// configuration



// app or server start statements
const appstart= express();



// middleware is basically the middle of client req and controller of server(logic to res the req of client).
// it is used to check user id password.
appstart.use(authRouter);


//routes
appstart.get('/',(req,res)=>{
    res.send("hello world");
});
 appstart.get("/checkuser");
 appstart.get('/about',(req,res)=>{
    res.sendFile(path.join(_dirname, "index.html"));
 })


//listen
appstart.listen(8000, ()=>{
    console.log("server started at port 8000");
});
