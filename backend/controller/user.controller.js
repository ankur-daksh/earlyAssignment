
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import userModel from "../models/user.model.js";

export const Register = async(req,res) =>{
    const {username,password,role} = req.body;
     console.log(req.body)
     const hashPassword = bcrypt.hashSync(password,10);
     console.log(hashPassword)
     const user = new userModel({
        username,
        password:hashPassword,
        role
     })

     user.save((err)=>{
        if(err){
            console.log(err)
     res.send(err)
        }
        else {
            console.log(user)
            res.status(200).json(user)
        }
     })
     
    


}