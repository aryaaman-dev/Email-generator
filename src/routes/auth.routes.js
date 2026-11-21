const express=require("express")
const authController=require("../controllers/auth.controller")
const router=express.Router()

router.post("/register",authController.userRegisterController)  //POST /api/auth/register
router.post("/login",authController.userLoginController) //POST/api/auth/login

module.exports=router