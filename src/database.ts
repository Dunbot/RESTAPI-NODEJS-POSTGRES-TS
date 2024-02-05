//configuracion para poder conectar a la DB
import {Pool} from 'pg';

export async function connect(){
    const pool = await new Pool({
        host: 'localhost',
        user: 'postgres',
        password: 'clave',
        database: 'node_pg_ts'//,
        //port: 5432
        
    });
    return pool;
}