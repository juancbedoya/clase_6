// const mysql = require("mysql2/promise");

// async function conexiondb() {
//     const conexion = await mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'clase6'
//     })
//     // const result=await conexion.query('INSERT INTO persona VALUES("","Camilo","bedoya")');
//     const arrayObje=await conexion.query('SELECT * FROM persona');
//     console.log(arrayObje[0]);
//     conexion.end()
    
// }

// conexiondb();
// module.exports=conexiondb