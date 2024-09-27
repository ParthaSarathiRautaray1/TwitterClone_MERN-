import {Tweet} from "../models/tweetSchema.js"
import { User } from "../models/userSchema.js";




export const createTweet = async(req,res)=>{
    try{
        const{description,id}= req.body;
        if(!description || !id){
            return res.status(401).json({
                message:"Fields are Required.",
                success:false
            })
        }

        await Tweet.create({
            description,
            userId: id
        })
        return res.status(201).json({
            message:"Tweet create Successfully.",
            success:true
        })

    }catch(error){
        console.log(error)
    }

}


export const deleteTweet = async (req,res)=>{
    try{
        const {id} = req.params;
        await Tweet.findByIdAndDelete(id);
        return res.status(200).json({
            message:"Tweet deleted successfully.",
            success:true
        })
    }catch(error){
        console.log(error);
        
    }
}

export const likeOrDislike = async (req,res) =>{
    try {
        const loggedInUserId = req.body.id;
        const tweetId = req.params.id;
        const tweet = await Tweet.findById(tweetId);
        if(tweet.like.includes(loggedInUserId)){
            //dislike
            await Tweet.findByIdAndUpdate(tweetId,{$pull:{like:loggedInUserId}})
            return res.status(200).json({
                message:"User Disliked YOUR Tweet."
            })
        }else{
            //like
            await Tweet.findByIdAndUpdate(tweetId,{$push:{like:loggedInUserId}})
            return res.status(200).json({
                message:"User Liked YOUR Tweet."
            })

        }
        
    }catch (error) {
        console.log(error)    
    }
}

//showing tweet on the ui
export const getAllTweets = async (req,res) =>{
    try {
        const id = req.params.id;
        const loggedInUser = await User.findById(id);
        const loggedInUserTweets = await Tweet.find({userId:id});
        const followingUserTweet = await Promise.all(loggedInUser.following.map((otherUsersId) =>{
            return Tweet.find({userId:otherUsersId});
        }));
        return res.status(200).json({
            tweets:loggedInUserTweets.concat(...followingUserTweet)
        })

        
    } catch (error) {
        console.log(error);
        
        
    }
}

//get only following peoples tweet (following part)

export const getFollowingTweets = async (req,res) =>{
    try {
        const id = req.params.id;
        const loggedInUser = await User.findById(id);
        const followingUserTweet = await Promise.all(loggedInUser.following.map((otherUsersId) =>{
            return Tweet.find({userId:otherUsersId});
        }));
        return res.status(200).json({
            tweets:[].concat(...followingUserTweet)
        })
        
    } catch (error) {
        console.log(error);
        
        
    }
}