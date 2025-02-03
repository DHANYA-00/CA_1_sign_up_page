const express=require('express');
const app=express();
const port =3001;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to signup page");
});

app.post("/signup",(req,res)=>{
    const {username,email,password,dob} = req.body;
    if(!username){
        return res.status(400).json({error:"Username cannot be empty"})
    }
    if(!email){
        return res.status(400).json({error:"Email cannot be empty"})
    }
    if(!(password>8 || password<=16)){
        return res.status(400).json({error:"Password length should be greater than 8 or less than or equal to 16"})
    }
    if(!dob){
        return res.status(400).json({error:"Date of Birth cannot be empty"})
    }

    res.json({
        message:"signuped successfully"
    })
})

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
});