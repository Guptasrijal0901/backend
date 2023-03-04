const express = require("express");
const arr = express();

arr.use(express.json());

arr.post("/api/submit", (req, res)=>{
    
    console.log(req.body);

    const newobject= {
        username: req.body.name,
        userbatch: req.body.batch,
    }
    console.log(newobject);
    return res.json({success: true, message: "post in backend"});
});

arr.listen(9000, ()=>{
    console.log("server is ready");
});