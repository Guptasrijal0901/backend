const express = require("express");  // express library ko main file mai daal rahe hai 
const app = express(); // express filr ko nam diye hai app or usme daal die 
// yaha pr hm mordern js ka import of function use kar rahe hai, express jo function hai usko app mai daal k usko use ka rahe hai 
app.listen(900,()=> { // jaise pincode hota hai vaise hi port number hota jo alag alag server ka hota hai jisse uski phechan hoti hai 
console.log("server is ready and running at port 900") ;
})
// ek frontend h or bhut sare server toh toh vo frontend vaha jayega jaha se port number match karega 
// hmesha file ka nam index.js hi dale usse aage deploy karne mai aasani hota hai 