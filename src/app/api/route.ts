import { NextApiRequest, NextApiResponse } from 'next';
import { queryDB } from './oracleFunctions';
import { NextResponse } from 'next/server';

async function handler() {
    try {
        const result = await queryDB(`SELECT SUM(c) as Total_tuples
        FROM
        (
        (SELECT COUNT(*)AS c FROM sreasor.crimetable)
        UNION ALL
        (SELECT COUNT(*) AS c FROM sreasor.areatable) 
        UNION ALL
        (SELECT COUNT(*)AS c FROM sreasor.crimecodestable)
        UNION ALL
        (SELECT COUNT(*) AS c FROM sreasor.crimemocodestable)
        UNION ALL
        (SELECT COUNT(*) AS c FROM sreasor.crimereporttable)
        UNION ALL
        (SELECT COUNT(*) AS c FROM sreasor.premisetable)
        UNION ALL
        (SELECT COUNT(*) AS c FROM sreasor.victimtable)
        UNION ALL
        (SELECT COUNT(*) AS c FROM sreasor.weapontable)
        )  
        `);
        console.log(result);
        return NextResponse.json(result);
    } catch(e) {
        console.log(e);
        return NextResponse.json({ error: 'Internal Server Error' })
    }
}

export { handler as GET };


