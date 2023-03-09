const express = require("express");
const app =  express();
const mongoose = require("mongoose");
app.use(express.json())


const mongoUrl ="mongodb+srv://mulandiglen51:CIT-221-022%2F2020@cluster0.p80llax.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect (mongoUrl, {
    useNewUrlParser: true,
})
.then(() =>{
    console.log("Connected to database");
})
.catch((e)=> console.log(e));


app.listen(3000, () =>{
    console.log("Server Started");
});

app.post("/post", async (req, res) =>{
    console.log(req.body);
    const {data}=req.body;


    try{
        if(data=="glen"){
            res.send({status:"ok"})
        } else{
            res.send({status:"User Not found"})
        } 

    } catch {error} {
        res.send({status:"something went wrong try again"})
    }



});