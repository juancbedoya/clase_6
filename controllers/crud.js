const conexion = require("../database/db");

exports.save=(req,res)=>{
    const nombre= req.body.nombre;
    const rol=req.body.rol;
    conexion.query('INSERT INTO users SET ?',{user:nombre,rol:rol},(error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });
}

exports.update=(req,res)=>{
    const id=req.body.id;
    const nombre=req.body.nombre;
    const rol=req.body.rol;
    conexion.query('UPDATE users SET ? WHERE id=?',[{user:nombre,rol:rol},id], (error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}