const express = require("express");
const task = express();

task.get("/api/task1" , (req, res)=>{
    try {
        let task=[
{name: "srijal", birthdate: 09 , address: "rhamat nagar" , phonenumber: 987654321, hobbies: "kathak" , linkedinid: "srijal0901", email: "srijal0901@gmail.com"},
{name: "shreya", birthdate:31 , address: "rhamat nagar" , phonenumber:876543219 , hobbies: "dancing" , linkedinid: "shreya0131", email: "shreya123@gmail.com"},
{name: "arnav", birthdate: 25, address: "nepal" , phonenumber: 765432198, hobbies: "playing" , linkedinid: "--", email: "--"}];
    } catch (error) {
        return res.json({ error: "somthing went wrong in code"})
    }
    if (task.length >= 3){
        return res.json({success:true, message:"task done" })
    }
})
task.listen(8000, ()=>{
    console.log("server is ready")
});