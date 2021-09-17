const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000
/* app.listen(port,()=>
console.log("Corriendo servidor 8080")); */
app.listen(PORT, function(){
    console.log("Servidor corriendo en el puerto 3000")
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

/* const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => res.send("Hola Mundo!"));

app.get('/html', (req, res) => res.sendFile(path.join(__dirname, "/views/index.html")));

app.listen(PORT, () => {
    console.log('App listening on http://localhost:3000');
});


{
  "name": "nuevo",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
*/