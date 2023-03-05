const express= require("express");
const task3 = express();

task3.use(express.json());

task3.post("/api/task3" , (req, res)=>{
       {
        let userpassword =1234566789;
        let password = req.body.password;
        if(userpassword === password){
            return res.json({success: true , message: "loggedin successfully"})   
        }
        else{
                return res.json ({success: false, message: "check your password"})
            }
    }
    
})
task3.listen(5000, ()=>{
    console.log("server is ready")
})