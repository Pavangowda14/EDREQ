import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const isAuthenticated=async(req,res,next)=>{
    try{
        const token=req.cookies.token;
        
        if(!token){
            return res.status(401).json({
                message:"user not authorised",
                success:false
            })
        }
        const decode=jwt.verify(token,process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"invalid token",
                success:false
            })
        }
        req.id=decode.userId;
        req.user=await User.findById(decode.userId);
        
        next()
    }catch(e){
        res.status(500).json({
            message:"login first",
            success:false
        })
        console.log(e);
        
    }
}

export const isAdmin=async(req,res,next)=>{
    try {
        if(req.user.role !== "admin"){
            return res.status(400).json({
                message:"you are not autherised",
                success:false
            })
        }

        next()
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success:false
        })
        console.log(error);
    }
}
