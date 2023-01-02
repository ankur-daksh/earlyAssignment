import mongoose from "mongoose";

const schema = mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        role:['admin','client']
    }
})

const userModel = mongoose.model('User',schema)
export default  userModel;