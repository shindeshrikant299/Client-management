import pg from "pg"
import env from "dotenv"
import fs from 'fs'
env.config();
// const db = new pg.Client({
//     user: 'neondb_owner',
//     host: 'ep-jolly-poetry-a5tvgyl6.us-east-2.aws.neon.tech',
//     database: 'postgresql://neondb_owner:FckeSsjw16qM@ep-jolly-poetry-a5tvgyl6.us-east-2.aws.neon.tech/neondb?sslmode=require',
//     password: 'FckeSsjw16qM',
//     port:'5432',


//   });
  const db= new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database:process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port:process.env.PG_PORT,
    ssl: {
      rejectUnauthorized: false, 
   }
  });
db.connect();

db.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
  });

export const query = (text, params) => db.query(text, params);