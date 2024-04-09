const oracledb = require('oracledb');

export async function queryDB(query: string) {
    try {
        const connection = await oracledb.getConnection({
            user: 'temp',
            password: 'temp',
            connectString: 'temp'
        });

        const result = await connection.execute(query);
        return result.rows;
    } catch (error) {
        console.log(error);
        return error;
    }
}