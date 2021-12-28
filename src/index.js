const express = require("express"); 
const app = express(); 
const db = require("./infra/db/db"); 

app.use("/", (req, res, next) => { 
    res.json({ 
        message: "wellcome !", 
        status: 1, 
        data: null,
    })
}) 

db 
.sync() 
// .sync({  force: true}) 
.then(() => { 
app.listen(5000, () => {  
    console.log(`
    Connected to the database ....
    server is running on port 5000 ..... 
    ` 
    ); 
 })
}).catch(err => {   
    console.log(err); 
    console.log("Error while connecting to the database"); 
}); 
