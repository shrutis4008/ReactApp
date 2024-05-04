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
        maxLength: [1000, "Cannot exceed 1000 characters."],

    },

    // image:{
    //     type:Image,
    //     required: [false, "Please enter password."],
    // }

    date:{
        type:Date,
        required: [true, "Please enter password."],
        // minLength: [8, "Cannot be less than 8 characters."],
        // select: false,
    }
})

var User = mongoose.model('Posts', postsSchema);

export default User
// userSchema.methods.getJWTToken = async function (){
// }