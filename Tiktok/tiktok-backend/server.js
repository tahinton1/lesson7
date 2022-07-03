import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import Videos from './dbModel.js';


//app config
const app = express();
const port = process.env.PORT || 9000;

//midware
app.use(express.json());
app.use((req, res, next)=>{
    console.log(res);
    console.log(req);
    res.setHeaders('Access-Control-Allow-Origin','*'),
    res.setHeaders('Access-Control-Allow-Headers','*'),
    next();
    console.log(res);
    console.log(req);
});

//dbconfig
const connection_url = 'mongodb+srv://admin:0EOEeAFBlpGRiFJy@cluster0.li7azs3.mongodb.net/tiktok?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useNewURLparser:true,
    UseUnifiedTopology:true,
})

//api endpoints
app.get('/',(req,res)=>res.status(200).send('hello world'));
app.get('/v1/posts',(req,res)=>res.status(200).send(data));
app.get('/v2/posts', (req,res)=>{
    Videos.find((err, data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    });
});

app.post('/v2/posts', (req,res)=>{
    //adds data
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

//listener
app.listen(port, ()=> console.log (`listen on localhost: ${port}`));