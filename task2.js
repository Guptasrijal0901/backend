const express= require("express");
const task2 = express();

task2.use(express.json());

task2.post("/api/task2" , (req, res)=>{
    console.log(req, res);
});

task2.listen(4000, ()=>{
    console.log("server is ready")
});