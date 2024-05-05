import User from "../models/userSchema.js"
import jwt from "jsonwebtoken"

export const isAuthenticatedUser = async (req, res, next)=>{
    if (!req.headers.authorization){
        return res.status(401).json({
          success:false,
          message:"No authorization header found."
        })      
        }
        const token = req.headers.authorization.split(" ")[1]
        // console.log(token)
        if (!token) {
            res.status(401).json({
            success:false,
            message:"Please Login"
                    })
                }
        try {
                const decodedData = jwt.verify(token, process.env.JWT_SECRET)
                console.log(decodedData)
                req.user=""
                req.user= await User.findById(decodedData.id)
                // console.log("auth user", req.user)
                next()

        }catch (err){
            return res.status(500).json({
                success:false,
                message:`Error: ${err.message}`
              }) 
        }

    }


// export const isAuthenticatedUser = async (req, res, next)=>{
//     const {token}= req.headers 
//     // checks if the jwt token is available and if not, asks to login

//     if (!token) {
//         res.status(401).json({
//             success:false,
//             message:"Please Login"
//         })
//     }

//     const decodedData = jwt.verify(token, process.env.JWT_SECRET)
//  // user token being verified by jwt secret in config folder
//   req.user= await User.findById(decodedData._id)
//   next()
// }
