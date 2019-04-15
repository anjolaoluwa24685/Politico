import { Pool } from 'pg';
import dotenv from 'dotenv';
import config from '../config';
dotenv.config();

const environment = process.env.NODE_ENV
let pool;
if (environment === 'development') {
    pool = new Pool(config.development);
}

export default pool;