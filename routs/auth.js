const express =require("express");
const { cart } = require("../controller/auth");
const { checkUserMiddelware } = require("../middleware/auth");


const Router = express.Router();

Router.get("/checkuser",checkUserMiddelware,cart)

module.exports=Router;