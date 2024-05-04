import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import crypto from "crypto"

const userSchema = new mongoose.Schema({
    username:{
        type: String, 
        required: [true, "Please enter username."],
        maxLength: [255, "Cannot exceed 255 characters."],
        minLength: [2, "Cannot be less than 2 characters."],
        unique: [true, "email already exists"],
    
    },
    email:{
        type: String,
        validate: [validator.isEmail, "please enter a valid email"],
        unique: [true, "email already exists"],
        required: [true, "Please enter email."],

    },

    password:{
        type:String,
        required: [true, "Please enter password."],
        // minLength: [8, "Cannot be less than 8 characters."],
        select: false,
    }
})

var User = mongoose.model('User', userSchema);

export default User
// userSchema.methods.getJWTToken = async function (){
// }
    
