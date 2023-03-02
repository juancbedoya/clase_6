//vamos acrear un servidor

const express = require('express');
const app=express();
const host="localhost";
const port=5040;
const path=require('path')


//configuramos nuesto motor de plantilla
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));
app.use(express.urlencoded({extended:false}))
app.use(express(JSON));

//configuramos el bootstrap
// app.use(express.static(path.join(__dirname,'public')));
app.use(express.static('./public'))

//aqui exportamos nuestro rutas
app.use('/',require('./router'));

app.use((req,res)=>{
    res.status(400).send("no se ecuntra la pagina")
})

app.listen(port,host,()=>{
    console.log(`Direccion de servidor: http://${host}:${port}`)
})
