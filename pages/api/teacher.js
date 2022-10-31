import mysql from "mysql2/promise";

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
        const query = `SELECT * FROM teacher`;
        const values = [];
        const [results] = await connection.execute(query, values)
        connection.end();
        res.status(200).json(results);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}