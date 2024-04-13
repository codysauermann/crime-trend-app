const oracleDB = require('oracledb');

export async function queryDB(query: string | string[]) {
    try {
        const connection = await oracleDB.getConnection({
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            connectString: process.env.DATABASE_URL
        });

        const result = await connection.execute(query);
        await connection.close();
        return result.rows;
    } catch (error) {
        console.log(error);
        return error;
    }
}