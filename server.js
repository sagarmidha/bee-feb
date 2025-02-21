const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}))
let userdata=[]
app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+"/signup.html")
})
app.post("/signup",(req,res)=>{
   let{username,useremail,userpassword}=req.body;
   let newuser={
     name:username,
     email:useremail,
     password:userpassword
   }
   userdata.push(newuser);
   //console.log(username,useremail,userpassword);
   res.send(userdata);
})

app.listen(3434,()=>{
    console.log("Server is running on port ");
})