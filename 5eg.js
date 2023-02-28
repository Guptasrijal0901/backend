// // here we are going with 5 differtent examples of get statement in backend server 
// // though we don't have frontend ready so we will use use postman for result of our backend code

// // syntax of get 
// // name of express.get( url or address , (callbackfunction)  => {
// // return res.json({message: "......................."});
// // )};

// // five example:


// // 1.
// // const express = require("express"); // yaha function import kar rahe hai
// // const app = express(); // yaha function call kar rahe hai 

// // app.get("/srijal", (req, res)=> {  //yaha address bata rahe or function call kar rahe
// //     return res.json({message: "srijal is good girl"})  //yaha msg likh rahe jo postman mai print  hona hai 
// // });

// // app.listen(900, () => {   // yaha port no. k sath function call kar rahe
// //     console.log("server 1 is ready" ); // yeh print hoga vs code mai 
// // });

// // 2.
// // const express = require("express") ;
// // const app = express();

// // app.get("/shreya" , (req, res) => {
// //     return res.json({message: " shreya is good girl"})
// // });

// // app.listen(800, () => {
// //     console.log("server 2 is ready");
// // });

// // 3.
// // const express = require("express") ;
// // const app = express();

// // app.get("/mummy" , (req, res) => {
// //     return res.json({message: " mummy is good girl"})
// // });

// // app.listen(800, () => {
// //     console.log("server 3 is ready");
// // });

// // 4.
// // const express = require("express");
// // const wait = express();

// // wait.get("/papa" , (req, res) => {
// //     return res.json({message: "papa is good boy"});
// // }) ;

// // wait.listen(500, ()=> {
// //     console.log("server 4 is ready");
// // });

// // 5.
// // const express = require("express");
// // const last = express();

// // last.get ("/didi", (req, res) => {
// //     return res.json ({message: "didi is girl"});
// // });

// // last.listen(600, ()=> {
// //     console.log("server 5 is ready");
// // });

// // const express= require("express");
// // const eg1 = express();


// // let arr = ["prty1" , "prty2" , "prty3", "prty4", "prty5"];
// // arr.get("/ex1", (req , res ) =>) {
// // if { (arr.length > 2) }
// //     return res.json ({party:" party done" , success:"party done"})
// // } 

// // const express = require("express");
// // const fam = express();

// // fam.get("/family" , (req, res) => {
// //     let family = [ "mummy" , "papa", "sister", "brother"];
// //     if(family.length > 3){
// //         return res.json({data: "family is completed"});
// //     }
// //     else {
// //         return res.json({data:  "family is incompleted" , success: true});
// //         }
// // });

// // fam.get("/family", (req, res)=>{
// // return res.json({data: "user data fetched"});
// // });

// // fam.listen(8000, () => {
// //     console.log("family is ready");
// // });



// const express = require("express");
// const fam = express();

// fam.get("/family" , (req, res) => {
//     let family = [ "mummy" , "papa", "sister", "brother"];
//     if(family.length > 9){
//         return res.json({data: "family is completed"});
//     }
//     else {
//         return res.status(500).json({data:  "family is incompleted" , success: true  });
//         }
// });

// fam.get("/family", (req, res)=>{
// return res.json({data: "user data fetched"});
// });

// fam.listen(800, () => {
//     console.log("family is ready");
// });

const express= require("express");
const friends = express();


friends.get ("/college/user/:no", (req, res)=>{
    try
    {   
        let userid = res.params.no
        let friends = [
        { name :"astha", no : 1},
        { name : "sakshi", no : 2,},
        { name : "megha", no : 3},
        { name : "ayushi", no : 4}
    ];

    const user = friends.find((v)=> {
        return v.no === userid;
    console.log(v);
    })
    if (friends.length == 2 ){
        return res.json ({message: "You have friend"});
    }
    else if (friends.length == 3){
        return res.json({message: "you have trio"});
    }
    else{ return res.json ({message: "You have friend circle", success: "circle"});
    } 
}catch(error){
    return res.json({success: "false", error: error.message})
}
});
friends.listen ( 900, () =>{
console.log("About number of friends you have in your college");
});




