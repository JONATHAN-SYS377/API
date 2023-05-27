import sql from "mssql"
import config from "../config"
const dbSettings = {
    server: config.dbServer,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase,
    options:
    {
        encrypt: true,
        trusServerCertificate: true
    },
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }

}
export {sql};
