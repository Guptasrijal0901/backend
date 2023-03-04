const express = require("express");
const app = express();

app.get("/api/relation/:id" , (req, res)=>{
    let userid = parseInt(req.params.id);
    let relation = [
{id:01 , name: "srijal"  },
{id:02 , name: "shreya"  },
{id:03 , name: "mummy"  },
{id:04 , name: "papa"  },
{id:05 , name: "didi"  }
    ];
    const user = relation.find((v)=>{
        return v.id == userid;
    });
    if (user){
        return res.json({user});
    }
    else{
        return res.json ({message: "somthing is wrong "});
        
    }
});
app.listen(8000, ()=>{
    console.log("server is ready ")
});