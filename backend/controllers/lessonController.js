import { Course } from "../models/courseModel.js";
import { Lesson } from "../models/lessonModel.js";
import { User } from "../models/userModel.js";

export const createLesson=async(req,res)=>{
    try {   
        const { courseId,title,description,videoLink,lessonNo }=req.body;
        if(!courseId || !title || !description || !videoLink || !lessonNo){
            return res.status(400).json({
                message:"some fields are missing",
                success:false
            })
        }
        const course=await Course.findById(courseId);
        if (!course){
            return res.status(400).json({
                message:"course not found",
                success:false
            })
        }

        const lesson=await Lesson.create({
            title,
            description,
            videoLink,
            course: course._id,
            lessonNo,
        })
        return res.status(201).json({
            message:"lesson created successfully",
            lesson,
            success:true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:error.message,
            success:false
        })
    }
} 

export const fetchLessons=async(req,res)=>{
    try {
        const courseId=req.params.id;
        if(!courseId){
            return res.status(400).json({
                message:"some fields are missing",
                success:false
            })
        }

        const user=await User.findById(req.user._id);
        const lessons=await Lesson.find({course:courseId}).sort({ lessonNo: 1 }).exec();
        if (user.role=="admin"){
            return res.status(200).json({
                lessons,
                success:true
            })
        }
        if(!user.coursesEnrolled.includes(courseId)){
            return res.status(400).json({
                message:"you are not enrolled",
                success:false
            })
        }

        return res.status(200).json({
            lessons,
            success:true
        })
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            message:error.message,
            success:false
        })
    }
    
        
}