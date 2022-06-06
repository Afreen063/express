exports.checkUserMiddelware = (req,res,next)=>{
    const {username,password}=req.query;
    if(username=="afreen"&&password=="ansari"){
        next();
    }
    else{
        res.status(401).send("invalid user");
    }
}