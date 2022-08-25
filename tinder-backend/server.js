import express from 'express'
import mongoose from 'mongoose'
import Cards from "./dbCards.js";
import cors from "cors";

//App Config

const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://tinder:tinder@cluster0.ysdb0gx.mongodb.net/?retryWrites=true&w=majority'

//Middlewares

app.use(express.json());
app.use(cors());


//Db config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true,
},(err) => {
    if(!err)
    {
        console.log("connected to db")
    }
    else{
        console.log("error")

    }
});

//API endpoint
app.get('/',(req,res) => res.status(200).send("hello shiva"))
app.post('/tinder/cards',async(req,res) => {
    console.log("we are inside the post");
    const dbCard = req.body;
    Cards.create(dbCard,(err,data) =>{
        if(err){
            res.status(500).send(err);
        }else {
            res.status(201).send(req.body);
        }
    });
    /*const data = new Cards({
        name:req.body.name,
        imgUrl:req.body.imgUrl
    });
    const val = await data.save(); //saves data into mongo db
    res.json(val);*/
});

app.get('/tinder/cards',(req, res) => {
     
    Cards.find((err,data) =>{
        if(err){
            res.status(500).send(err);
        }else {
            res.status(200).send(data);
        }
    });
});



//listener
app.listen(port,()=>console.log(`listening on localhost: ${port}`));