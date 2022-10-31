import mysql from "mysql2/promise";

// Host: sql12.freesqldatabase.com
// Database name: sql12531115
// Database user: sql12531115
// Database password: baPlnkG5gW
// Port number: 3306

export default async function handler(req, res) {
    let connection;
    try{
        connection = await mysql.createConnection({
            host: 'sql12.freesqldatabase.com',
            user: 'sql12531115',
            password: 'baPlnkG5gW',
            port: '3306',
            database: 'sql12531115'
        });
    }catch(err){
        console.log({error: err.message});
    }

    try{
        
        const query = `SELECT * FROM student`;
        const values = [];
        const [results] = await connection.execute(query, values)
        connection.end();
        res.status(200).json(results);
    }catch(err){
        res.status(500).json({error: err.message});
    }      
}