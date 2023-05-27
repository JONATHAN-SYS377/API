import { config } from "dotenv"

config();

export default {
    port :  process.env.PORT || 3000,
    dbUser: process.env.USERNAME || '',
    dbPassword: process.env.PASSWORD || '',
    dbServer: process.env.SERVER || '',
    dbDatabase: process.env.DATABASE || '',
}