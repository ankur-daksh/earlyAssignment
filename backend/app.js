import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoute from './routes/user.routes.js';

const URL = `mongodb://Blog:blog123@cluster0-shard-00-00.y3qru.mongodb.net:27017,cluster0-shard-00-01.y3qru.mongodb.net:27017,cluster0-shard-00-02.y3qru.mongodb.net:27017/welcome?ssl=true&replicaSet=atlas-nyng0w-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(console.log("connect to mongodb"))
.catch((err)=>{
    console.log(err)
})

const app = express();

app.use(express.json());

app.use(cors());

app.use('/user',userRoute);



app.listen(6969,()=>{
    console.log("I am working")
})