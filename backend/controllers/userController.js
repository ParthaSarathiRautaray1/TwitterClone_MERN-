import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const Register = async (req, res) =>{
    try{
        const{name , username , email , password}= req.body;
        //basic validation:-- 

        if(!name || !username || !email || !password){
            return res.status(401).json({
                message:"All fields are required.",
                success: false
            })
        }

        //validating if the email is present and want to create accout again so showing message already exist 
        const user = await User.findOne({email})
        if(user){
            return res.status(401).json({
                message:"User Already Exist !!!",
                success:false
            })
        }

        //hashing the password get from user by hash method
        const hashedPassword = await bcryptjs.hash(password, 16);

        // if the email is fress then we have to create an account by this field recieved form the user at frontend 
        await User.create({
            name,
            username,
            email,
            password:hashedPassword
        })

        return res.status(201).json({
            message:"Account Created Successfully.",
            success:true
        })
    }catch(error){
        console.log(error);
        
    }
}

// login user 
export const Login = async (req, res) =>{
    try{
        const {email, password } = req.body;
        if(!email || !password){
            return res.status(401).json({
                message:"All fields are required.",
                success: false
            })

        }
        const user = await User.findOne({email});

        console.log(user);
        
        if(!user){
            return res.status(401).json({
                message:"Incorrect Email or Password.",
                success:false

            })
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({
                message:"Incorrect Email or Password.",
                success:false
            })
        }

        const tokenData = {
            useId:user._id
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn:"1d"})
        return res.status(201).cookie("token", token , {expiresIn:"1d", httpOnly:true}).json({
            message:`Welcome Back ${user.name}`,
            user,
            success:true
        })
    }catch(error){
        console.log(error);
        
    }
}


export const logout = (req,res)=>{
    return res.cookie("token","",{expiresIn:new Date(Date.now())}).json({
        message:"User LoggedOut Successfully.",
        success:true
    })
}


export const bookmark = async (req,res) =>{
    try {
        const loggedInUserId = req.body.id;
        const tweetId = req.params.id;
        const user = await User.findById(loggedInUserId);
        if(user.bookmarks.includes(tweetId)){
            //remove bookmark
            await User.findByIdAndUpdate(loggedInUserId,{$pull:{bookmarks:tweetId}})
            return res.status(200).json({
                message:"Removed From Bookmarks."
            })
        }else{
            // bookmark
            await User.findByIdAndUpdate(loggedInUserId,{$push:{bookmarks:tweetId}})
            return res.status(200).json({
                message:"Saved To Bookmarks."
            })
        }
        
    } catch (error) {
        console.log(error);
        
        
    }
}

export const getMyProfile = async (req,res) =>{
    try {
        const id = req.params.id;
        const user = await User.findById(id).select("-password")
        return res.status(200).json({
            user,
        })
        
    } catch (error) {
        console.log(error)
        
    }
}

export const getOtherUsers = async (req,res) =>{
    try {
        const {id} = req.params;
        const otherUsers = await User.find({_id:{$ne:id}}).select("-password");
        if(!otherUsers){
            return res.status(401).json({
                message:"Currently dont have any Users."
            })
        }
        return res.status(200).json({
            otherUsers
        })
        
    } catch (error) {
        console.log(error);
        
        
    }
}

//follow :-
export const follow = async (req,res) =>{
    try {
        const loggedInUserId = req.body.id; //pinu
        const userId = req.params.id; //user2

        const loggedInUser = await User.findById(loggedInUserId);// pinu
        const user = await User.findById(userId) //user2
        if(!user.followers.includes(loggedInUserId)){
            await user.updateOne({$push:{followers:loggedInUserId}});
            await loggedInUser.updateOne({$push:{following:userId}});
        }
        else{
            return res.status(400).json({
                message:`User already Following ${user.name}`
            })
        }
        return res.status(200).json({
            message:`${loggedInUser.name} just follow to ${user.name}`,
            success:true
        })
        
    } catch (error) {
        console.log(error);
        
        
    }
}


//unfollow :-
export const unfollow = async (req,res) =>{
    try {
        const loggedInUserId = req.body.id; //pinu
        const userId = req.params.id; //user2

        const loggedInUser = await User.findById(loggedInUserId);// pinu
        const user = await User.findById(userId) //user2
        if(loggedInUser.following.includes(userId)){
            await user.updateOne({$pull:{followers:loggedInUserId}});
            await loggedInUser.updateOne({$pull:{following:userId}});
        }
        else{
            return res.status(400).json({
                message:`User has not followed yet.`
            })
        }
        return res.status(200).json({
            message:`${loggedInUser.name} unfollow to ${user.name}`,
            success:true
        })
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}