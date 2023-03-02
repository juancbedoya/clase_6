//vamos hacer la conexion a la base de dato
const e = require('express');
const mysql = require('mysql');

const conexion=mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '',
    database:'node'
});

conexion.connect((error)=>{
    if(error){
        console.error("El error es: "+error);
        return
    }
    console.log("conexion hecha");
});



//exportamos nuestro mudulo local
module.exports=conexion;