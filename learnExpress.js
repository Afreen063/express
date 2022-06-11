// module statement which is used to import files, here we basically use  require("lib name").
const express= require("express");
const authRouter= require("./routs/auth");
const path = require("path")
// configuration



// app or server start statements
const appstart= express();
appstart.use(express.static(path.join(__dirname, "public")));


// middleware is basically the middle of client req and controller of server(logic to res the req of client).
// it is used to check user id password.
appstart.use(authRouter);


//routes
appstart.get('/hello/:name',(req,res)=>{
    res.send("hello world"+ req.params.name);// make variable and use it
});
 appstart.get("/checkuser");
 appstart.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
 });
 appstart.get("/json",(req,res)=>{
    res.json({"harry":89});//send json file

 })


//listen
appstart.listen(8000, ()=>{
    console.log("server started at port 8000");
});
