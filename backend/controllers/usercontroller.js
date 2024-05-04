import User from "../models/userschema.js";

export const Register = async (req, res, next)=>{
    const {username, email, password} = req.body;
    const user = await User.create({
        username, email, password
    });

    res.status(201).json({
        success:true, 
        user
    })
}