const express = require('express');
const path = require('path');

const app = express();
let port = 8080;
/* app.listen(port,()=>
console.log("Corriendo servidor 8080")); */
app.listen(process.env.PORT || 8080, function(){
    console.log("Servidor corriendo en el puerto 8080")
})

app.get('/home',(req, res)=>{
    res.sendFile( path.join(__dirname,'./views/./home.html'))
})
app.get('/login',(req, res)=>{
    res.sendFile( path.join(__dirname,'/views/login.html'))
})
app.get('/register',(req, res)=>{
    res.sendFile( path.join(__dirname,'./views/register.html'))
})
app.use(express.static('public'));