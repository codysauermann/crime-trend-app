import HomeButton from '@/components/homebutton'
import LineGraph from '@/components/LineGraph'
import NavButtons from '@/components/navButtons'
import Trend4Interface from '@/components/trend4Interface'
import TrendInterface from '@/components/trendInterface'
import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'
import { queryDB } from '../api/oracleFunctions'

async function page4() {
  
  const response = await queryDB(`WITH ViolentCrimes AS (
        SELECT 
            EXTRACT(YEAR FROM c.crimedate) AS "Year",
            ROUND(100.0 * SUM(CASE WHEN c.Status LIKE '%Arrest%' THEN 1 ELSE 0 END) / COUNT(*), 2) AS "Violent Crimes"
        FROM 
            sreasor.crimetable c
        WHERE
            c.crimedescription LIKE '%ROBBERY%' OR c.crimedescription LIKE '%ASSAULT%' OR c.crimedescription LIKE '%HOMICIDE%' OR c.crimedescription LIKE '%KIDNAPPING%' OR c.crimedescription LIKE '%BATTERY%' OR c.crimedescription LIKE '%SHOTS FIRED%' OR c.crimedescription LIKE '%RAPE%' OR c.crimedescription LIKE '%FALSE IMPRISONMENT%' OR c.crimedescription LIKE '%LYNCHING%' OR c.crimedescription LIKE '%WEAPON%'   
        GROUP BY 
            EXTRACT(YEAR FROM c.crimedate)
    ),
    PropertyCrimes AS (
        SELECT 
            EXTRACT(YEAR FROM c.crimedate) AS "Year",
            ROUND(100.0 * SUM(CASE WHEN c.Status LIKE '%Arrest%' THEN 1 ELSE 0 END) / COUNT(*), 2) AS "Property Crimes"
        FROM 
            sreasor.crimetable c
        WHERE
            c.crimedescription LIKE '%VANDALISM%' OR c.crimedescription LIKE '%DAMAGE%' OR c.crimedescription LIKE '%STOLEN%' OR c.crimedescription LIKE '%BURGLARY%' OR c.crimedescription LIKE '%THEFT%' OR c.crimedescription LIKE '%DOCUMENT WORTHLESS%' OR c.crimedescription LIKE '%TILL TAP - PETTY%' OR c.crimedescription LIKE '%DRUNK ROLL%' OR c.crimedescription LIKE '%PICKPOCKET%' OR c.crimedescription LIKE '%PURSE SNATCHING%' OR c.crimedescription LIKE '%DRIVING WITHOUT OWNER CONSENT (DWOC)%' OR c.crimedescription LIKE '%TILL TAP - ATTEMPT%' 
        GROUP BY 
            EXTRACT(YEAR FROM c.crimedate)
    ),
    FinancialCrimes AS (
        SELECT 
            EXTRACT(YEAR FROM c.crimedate) AS "Year",
            ROUND(100.0 * SUM(CASE WHEN c.Status LIKE '%Arrest%' THEN 1 ELSE 0 END) / COUNT(*), 2) AS "Financial Crimes"
        FROM 
            sreasor.crimetable c
        WHERE
            c.crimedescription LIKE '%GRAND THEFT%' OR c.crimedescription LIKE '%DRUGS, TO A MINOR%' OR c.crimedescription LIKE '%DEFRAUDING INNKEEPER%' OR c.crimedescription LIKE '%EMBEZZELMENT%' OR c.crimedescription LIKE '%BUNCO%' OR c.crimedescription LIKE '%CREDIT CARDS%' OR c.crimedescription LIKE '%DOCUMENT FORGERY%' OR c.crimedescription LIKE '%COUNTERFEIT%' OR c.crimedescription LIKE '%THEFT OF IDENTITY%' OR c.crimedescription LIKE '%BRIBERY%' 
        GROUP BY 
            EXTRACT(YEAR FROM c.crimedate)
    ),
    SexCrimes AS (
        SELECT 
            EXTRACT(YEAR FROM c.crimedate) AS "Year",
            ROUND(100.0 * SUM(CASE WHEN c.Status LIKE '%Arrest%' THEN 1 ELSE 0 END) / COUNT(*), 2) AS "Sex Crimes"
        FROM 
            sreasor.crimetable c
        WHERE
            c.crimedescription LIKE '%SODOMY%' OR c.crimedescription LIKE '%LEWD%' OR c.crimedescription LIKE '%PORNOGRAPHY%' OR c.crimedescription LIKE '%SEX%' OR c.crimedescription LIKE '%SEXUAL PENETRATION%' OR c.crimedescription LIKE '%HUMAN TRAFFICKING%' OR c.crimedescription LIKE '%INCEST%' OR c.crimedescription LIKE '%BESTIALITY%' OR c.crimedescription LIKE '%RAPE%'
        GROUP BY 
            EXTRACT(YEAR FROM c.crimedate)
    )
    SELECT 
        COALESCE(vc."Year", pc."Year", fc."Year", sc."Year") AS "Year",
        vc."Violent Crimes",
        sc."Sex Crimes",
        pc."Property Crimes",
        fc."Financial Crimes"
    FROM 
        ViolentCrimes vc
    FULL OUTER JOIN 
        PropertyCrimes pc ON vc."Year" = pc."Year"
    FULL OUTER JOIN 
        FinancialCrimes fc ON vc."Year" = fc."Year"
    FULL OUTER JOIN 
        SexCrimes sc ON vc."Year" = sc."Year"
    ORDER BY 
        COALESCE(vc."Year", pc."Year", fc."Year", sc."Year")`
  );

  const dataset = []
  for(let i = 0; i < response.length; i++) {
    let temp = {
      year: response[i][0].toString(),
      'Violent Crime': response[i][1],
      'Property Crime': response[i][2],
      'Financial Crime': response[i][3],
      'Sex Crime': response[i][4],
    }
    dataset[i] = temp;
  }
  console.log(dataset);


  return (
    <main className="min-h-screen min-w-screen">
      <HomeButton/>
      <div className="p-9">
        <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-center">Percent of crimes ending in an arrest for each crime category</h1>
      </div>
      <Trend4Interface
      data={dataset}
      />
      <NavButtons previous='/trend3' next='/trend5'/>
    </main>
  )
}

export default page4