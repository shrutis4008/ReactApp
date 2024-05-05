import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import crypto from "crypto"

const postsSchema = new mongoose.Schema({
    title:{
        type: String, 
        required: [true, "Please enter title."],
        maxLength: [255, "Cannot exceed 255 characters."],
        minLength: [2, "Cannot be less than 2 characters."],
        // unique: [true, "email already exists"],
    
    },
    description:{
        type: String,
        // validate: [validator.isEmail, "please enter a valid email"],
        // unique: [true, "email already exists"],
        required: [true, "Please enter a description for your post."],
        maxLength: [1024, "Cannot exceed 1000 characters."],

    },

    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required: true,
    },

    // image:{
    //     type:Image,
    //     required: [false, "Please enter password."],
    // }

    date:{
        type:Date,
        default: Date.now,
        // minLength: [8, "Cannot be less than 8 characters."],
        // select: false,
    }
})

var Post = mongoose.model('Posts', postsSchema);

export default Post
// userSchema.methods.getJWTToken = async function (){
// }