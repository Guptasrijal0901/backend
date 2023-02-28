// // const express = require("express"); // import 
// // const srijal = express();  // call

// // srijal.get("/srijal", (req, res)=>{ //address
// //     return res.json({message: "server created of name srijal"}) // message
// // });

// // srijal.listen(900, ()=>{  // port
// //     console.log("server is ready of name srijal")  // console
// // });

// // creating server 
// // different message 
// // different port
// // status code 
// // arrat print 
// // array of object
// // conditional api if else use 
// // try catch 
// // api name aur uska : proprety 
// // printing of one object as fronted require of 

// // const express = require("express");
// // const shreya = express();

// // shreya.get ("/sister", (req, res)=>{
// //     return res.status(800).json({data: "shreya is sister of srijal" })
// // });

// // shreya.listen(5000, ()=>{
// //     console.log("everything is done" )
// // });


// // const express = require("express");
// // const array = express();

// // array.get("/family", (req, res)=>{
// //     let array = [{member:"srijal",
// //     age: 22,
// // memberid: 01 }, 
// //     {member:"shreya",
// //     age: 21,
// // memberid: 02},
// //     {member:"mummy",
// //     age:46,
// // memberid: 03 } ,
// //     {member:"papa",
// //     age:57,
// // memberid: 04 },
// //     {member: "didi",
// //     age:25 ,
// // memberid: 05}]
// // if (array.length >=6){
// //     return res.status(500).json({ array, message: "members in my family"})}
// //     else{
// //         return res.json({message: "you required more members to create family"})
// //     }

// // });

// // array.listen(3000, ()=>{
// //     console.log("there are 5 members in family")
// // });

const express = require("express");
const array = express();

array.get("/api/family/:memberid", (req, res)=>{

    let userid = parseInt(req.params.memberid);
    let array =  
    [{member:"srijal",
    age: 22,
memberid: 01 }, 
    {member:"shreya",
    age: 21,
memberid: 02},
    {member:"mummy",
    age:46,
memberid: 03 } ,
    {member:"papa",
    age:57,
memberid: 04 },
    {member: "didi",
    age:25 ,
memberid: 05}]
const user = array.find((v)=>{
    return v.memberid === userid;
})

if (user){
    return res.status(500).json({ array, message: "members in my family"})
}
    else{
        return res.json({message: "you required more members to create family"})
    }}
);
array.listen(3000, ()=>{
    console.log("there are 5 members in family")
});


// const express = require("express");
// const appli = express();

// // try {
//     let userid = parseInt(req.params.id)
//     let app = [
// {name: "srijal"  , age: 22  ,  id: 01 },
// {name: "shreya"  , age: 21  ,  id: 02 },
// {name: "deepti"  , age: 25  ,  id: 03 },
// {name: "archana" , age: 47  ,  id: 04 },
// {name: "vinod"   , age: 58  ,  id: 05 } ]

// let user = app.find((v)=>{
//     return v.id === userid})
// app.get ("/api/family/:id", (req, res=>{
//     return res.json({message: "total family member in my family"})
// }))

//     if (app.length>4) {
//         return res.json({message: "enough member to have family"})
//     } else {
//         return res.json({message: "need more member to have family"})
//     }
// // } catch (error) {
// //     return res.json({message: "error occured"})
// // }

// app.listen(3000, ()=>{
//     console.log("family members in srijal's family")
// });