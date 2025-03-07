import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { sendVerificationMail } from "../mail/emails.js";

export const register=async(req,res)=>{
    try{
        const {fullName,email,phoneNumber,password,classNo}=req.body;
        if(!fullName || !email || !password ){
            return res.status(400).json({
                message:"some fields are missing",
                success:false
            });
        };
        
        const userEmail=await User.findOne({email});
        if(userEmail){
            return res.status(400).json({
                message:"user already exist",
                success:false
            })
        }
        const hashPassword= await bcrypt.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
        
        const newUser=await User.create({
            fullName,email,phoneNumber,password:hashPassword,classNo,verificationToken,verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
        });

        const tokenData = { userId: newUser._id };
        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "7d" });

        const user = {
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
            phoneNumber: newUser.phoneNumber
        };

        await sendVerificationMail(user.email,verificationToken)

        return res.status(200).cookie("token",token,
            {
                maxAge:7*24*60*60*1000,
                httpOnly:true, 
                secure: false,
                sameSite:"strict",
            })
            .json({
            message:`Account created and logged in`,
            user,
            success:true
        })

    }catch(e){
        return res.status(500).json({
            message: "error"+e.message,
            success: false
        });
    }
}

export const verifyEmail = async (req, res) => {
	const { code } = req.body;
	try {
		const user = await User.findOne({
			verificationToken: code,
			verificationTokenExpiresAt: { $gt: Date.now() },
		});

		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid or expired verification code" });
		}

		user.isVerified = true;
		user.verificationToken = undefined;
		user.verificationTokenExpiresAt = undefined;
		await user.save();

		// await sendWelcomeEmail(user.email, user.name);

		res.status(200).json({
			success: true,
			message: "Email verified successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});
	} catch (error) {
		console.log("error in verifyEmail ", error);
		res.status(500).json({ success: false, message: "Server error" });
	}
};


export const login=async (req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email || !password ){
            return res.status(400).json({
                message:"some fields are missing",
                success:false
            });
        };
        let user=await User.findOne({email})
        if (!user){
            return res.status(400).json({
                message:"Incorect Email",
                success:false
            })
        };
        const passwordMatch=await bcrypt.compare(password,user.password);
        if (!passwordMatch){
            return res.status(400).json({
                message:"Incorect password",
                success:false
            })
        };
        const tokenData={userId:user._id}

        const token = jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:"7d"});

        user={
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            phoneNumber:user.phoneNumber,
    
        }

        return res.status(200).cookie("token",token,
            {
                maxAge:7*24*60*60*1000,
                httpOnly:true, 
                secure: false,
                sameSite:"strict",
            })
            
            .json({
            message:`welcome back ${user.fullName}`,
            user,
            success:true
        })

    } catch (error) {
        console.log(error);
        
    }
}

export const logout=async (req,res)=>{
    try{
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"logout successfully",
            success:true
        })
    }
    catch(e){
        console.log(e);
        
    }
}

export const verifyToken = (req, res) => {
    const token = req.cookies.token;
  
    if (!token) {
      return res.status(401).json({ success: false, message: "No token found" });
    }
  
    try {
      const verified = jwt.verify(token, process.env.SECRET_KEY);
      if (verified) {
        return res.status(200).json({ success: true, message: "Token is valid" });
      }
    } catch (error) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }
  };