// module statement which is used to import files, here we basically use  require("lib name").
const express= require("express");
 

// configuration



// app or server start statements
const appstart= express();



// middleware



//routes
appstart.get('/',(req,res)=>{
    res.send("hello world");
});



//listen
appstart.listen(8000, ()=>{
    console.log("server started at port 8000");
});
