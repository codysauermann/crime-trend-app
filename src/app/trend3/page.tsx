import HomeButton from '@/components/homebutton'
import LineGraph from '@/components/LineGraph'
import NavButtons from '@/components/navButtons'
import TrendInterface from '@/components/trend3Interface'
import { Checkbox } from '@/components/ui/checkbox'
import { queryDB } from "../api/oracleFunctions"
import React from 'react'

async function page3() {
  const response = await queryDB(`WITH ViolentCrimes AS (
    SELECT 
        EXTRACT(YEAR FROM c.crimedate) AS "Year",
        ROUND(SUM(CASE WHEN v.descent = 'A' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_A_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'B' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_B_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'C' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_C_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'D' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_D_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'F' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_F_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'G' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_G_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'H' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_H_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'I' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_I_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'J' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_J_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'K' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_K_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'L' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_L_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'O' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_O_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'P' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_P_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'S' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_S_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'U' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_U_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'V' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_V_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'W' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_W_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'X' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_X_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'Z' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS VIOLENT_VICTIM_Z_PERCENT
    FROM 
        sreasor.crimetable c
    JOIN 
        sreasor.victimtable v ON c.crimeid = v.crimeid
    WHERE
        c.crimedescription LIKE '%ROBBERY%' OR c.crimedescription LIKE '%ASSAULT%' OR c.crimedescription LIKE '%HOMICIDE%' OR c.crimedescription LIKE '%KIDNAPPING%' OR c.crimedescription LIKE '%BATTERY%' OR c.crimedescription LIKE '%SHOTS FIRED%' OR c.crimedescription LIKE '%RAPE%' OR c.crimedescription LIKE '%FALSE IMPRISONMENT%' OR c.crimedescription LIKE '%LYNCHING%' OR c.crimedescription LIKE '%WEAPON%'   
    GROUP BY 
        EXTRACT(YEAR FROM c.crimedate)
),
PropertyCrimes AS (
    SELECT 
        EXTRACT(YEAR FROM c.crimedate) AS "Year",
        ROUND(SUM(CASE WHEN v.descent = 'A' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_A_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'B' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_B_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'C' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_C_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'D' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_D_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'F' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_F_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'G' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_G_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'H' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_H_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'I' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_I_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'J' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_J_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'K' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_K_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'L' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_L_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'O' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_O_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'P' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_P_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'S' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_S_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'U' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_U_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'V' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_V_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'W' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_W_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'X' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_X_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'Z' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS PROPERTY_VICTIM_Z_PERCENT
    FROM 
        sreasor.crimetable c
    JOIN 
        sreasor.victimtable v ON c.crimeid = v.crimeid
    WHERE
        c.crimedescription LIKE '%VANDALISM%' OR c.crimedescription LIKE '%DAMAGE%' OR c.crimedescription LIKE '%STOLEN%' OR c.crimedescription LIKE '%BURGLARY%' OR c.crimedescription LIKE '%THEFT%' OR c.crimedescription LIKE '%DOCUMENT WORTHLESS%' OR c.crimedescription LIKE '%TILL TAP - PETTY%' OR c.crimedescription LIKE '%DRUNK ROLL%' OR c.crimedescription LIKE '%PICKPOCKET%' OR c.crimedescription LIKE '%PURSE SNATCHING%' OR c.crimedescription LIKE '%DRIVING WITHOUT OWNER CONSENT (DWOC)%' OR c.crimedescription LIKE '%TILL TAP - ATTEMPT%' 
    GROUP BY 
        EXTRACT(YEAR FROM c.crimedate)
),
FinancialCrimes AS (
    SELECT 
        EXTRACT(YEAR FROM c.crimedate) AS "Year",
        ROUND(SUM(CASE WHEN v.descent = 'A' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_A_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'B' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_B_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'C' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_C_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'D' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_D_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'F' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_F_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'G' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_G_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'H' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_H_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'I' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_I_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'J' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_J_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'K' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_K_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'L' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_L_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'O' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_O_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'P' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_P_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'S' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_S_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'U' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_U_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'V' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_V_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'W' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_W_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'X' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_X_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'Z' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS FINANCIAL_VICTIM_Z_PERCENT
    FROM 
        sreasor.crimetable c
    JOIN 
        sreasor.victimtable v ON c.crimeid = v.crimeid
    WHERE
        c.crimedescription LIKE '%GRAND THEFT%' OR c.crimedescription LIKE '%DRUGS, TO A MINOR%' OR c.crimedescription LIKE '%DEFRAUDING INNKEEPER%' OR c.crimedescription LIKE '%EMBEZZELMENT%' OR c.crimedescription LIKE '%BUNCO%' OR c.crimedescription LIKE '%CREDIT CARDS%' OR c.crimedescription LIKE '%DOCUMENT FORGERY%' OR c.crimedescription LIKE '%COUNTERFEIT%' OR c.crimedescription LIKE '%THEFT OF IDENTITY%' OR c.crimedescription LIKE '%BRIBERY%' 
    GROUP BY 
        EXTRACT(YEAR FROM c.crimedate)
),
SexCrimes AS (
    SELECT 
        EXTRACT(YEAR FROM c.crimedate) AS "Year",
        ROUND(SUM(CASE WHEN v.descent = 'A' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_A_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'B' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_B_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'C' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_C_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'D' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_D_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'F' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_F_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'G' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_G_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'H' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_H_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'I' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_I_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'J' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_J_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'K' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_K_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'L' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_L_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'O' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_O_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'P' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_P_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'S' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_S_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'U' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_U_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'V' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_V_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'W' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_W_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'X' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_X_PERCENT,
        ROUND(SUM(CASE WHEN v.descent = 'Z' THEN 1 ELSE 0 END) * 100.0 / COUNT(*), 2) AS SEXCRIMES_VICTIM_Z_PERCENT
    FROM 
        sreasor.crimetable c
    JOIN 
        sreasor.victimtable v ON c.crimeid = v.crimeid
    WHERE
        c.crimedescription LIKE '%SODOMY%' OR c.crimedescription LIKE '%LEWD%' OR c.crimedescription LIKE '%PORNOGRAPHY%' OR c.crimedescription LIKE '%SEX%' OR c.crimedescription LIKE '%SEXUAL PENETRATION%' OR c.crimedescription LIKE '%HUMAN TRAFFICKING%' OR c.crimedescription LIKE '%INCEST%' OR c.crimedescription LIKE '%BESTIALITY%' OR c.crimedescription LIKE '%RAPE%'
    GROUP BY 
        EXTRACT(YEAR FROM c.crimedate)
)
SELECT 
    COALESCE(vc."Year", pc."Year", fc."Year", sc."Year") AS "Year",
    VIOLENT_VICTIM_A_PERCENT, VIOLENT_VICTIM_B_PERCENT, VIOLENT_VICTIM_C_PERCENT, VIOLENT_VICTIM_D_PERCENT, VIOLENT_VICTIM_F_PERCENT, VIOLENT_VICTIM_G_PERCENT, VIOLENT_VICTIM_H_PERCENT, VIOLENT_VICTIM_I_PERCENT, VIOLENT_VICTIM_J_PERCENT, VIOLENT_VICTIM_K_PERCENT, VIOLENT_VICTIM_L_PERCENT, VIOLENT_VICTIM_O_PERCENT, VIOLENT_VICTIM_P_PERCENT, VIOLENT_VICTIM_S_PERCENT, VIOLENT_VICTIM_U_PERCENT, VIOLENT_VICTIM_V_PERCENT, VIOLENT_VICTIM_W_PERCENT, VIOLENT_VICTIM_X_PERCENT, VIOLENT_VICTIM_Z_PERCENT,
    PROPERTY_VICTIM_A_PERCENT, PROPERTY_VICTIM_B_PERCENT, PROPERTY_VICTIM_C_PERCENT, PROPERTY_VICTIM_D_PERCENT, PROPERTY_VICTIM_F_PERCENT, PROPERTY_VICTIM_G_PERCENT, PROPERTY_VICTIM_H_PERCENT, PROPERTY_VICTIM_I_PERCENT, PROPERTY_VICTIM_J_PERCENT, PROPERTY_VICTIM_K_PERCENT, PROPERTY_VICTIM_L_PERCENT, PROPERTY_VICTIM_O_PERCENT, PROPERTY_VICTIM_P_PERCENT, PROPERTY_VICTIM_S_PERCENT, PROPERTY_VICTIM_U_PERCENT, PROPERTY_VICTIM_V_PERCENT, PROPERTY_VICTIM_W_PERCENT, PROPERTY_VICTIM_X_PERCENT, PROPERTY_VICTIM_Z_PERCENT,
    FINANCIAL_VICTIM_A_PERCENT, FINANCIAL_VICTIM_B_PERCENT, FINANCIAL_VICTIM_C_PERCENT, FINANCIAL_VICTIM_D_PERCENT, FINANCIAL_VICTIM_F_PERCENT, FINANCIAL_VICTIM_G_PERCENT, FINANCIAL_VICTIM_H_PERCENT, FINANCIAL_VICTIM_I_PERCENT, FINANCIAL_VICTIM_J_PERCENT, FINANCIAL_VICTIM_K_PERCENT, FINANCIAL_VICTIM_L_PERCENT, FINANCIAL_VICTIM_O_PERCENT, FINANCIAL_VICTIM_P_PERCENT, FINANCIAL_VICTIM_S_PERCENT, FINANCIAL_VICTIM_U_PERCENT, FINANCIAL_VICTIM_V_PERCENT, FINANCIAL_VICTIM_W_PERCENT, FINANCIAL_VICTIM_X_PERCENT, FINANCIAL_VICTIM_Z_PERCENT,
    SEXCRIMES_VICTIM_A_PERCENT, SEXCRIMES_VICTIM_B_PERCENT, SEXCRIMES_VICTIM_C_PERCENT, SEXCRIMES_VICTIM_D_PERCENT, SEXCRIMES_VICTIM_F_PERCENT, SEXCRIMES_VICTIM_G_PERCENT, SEXCRIMES_VICTIM_H_PERCENT, SEXCRIMES_VICTIM_I_PERCENT, SEXCRIMES_VICTIM_J_PERCENT, SEXCRIMES_VICTIM_K_PERCENT, SEXCRIMES_VICTIM_L_PERCENT, SEXCRIMES_VICTIM_O_PERCENT, SEXCRIMES_VICTIM_P_PERCENT, SEXCRIMES_VICTIM_S_PERCENT, SEXCRIMES_VICTIM_U_PERCENT, SEXCRIMES_VICTIM_V_PERCENT, SEXCRIMES_VICTIM_W_PERCENT, SEXCRIMES_VICTIM_X_PERCENT, SEXCRIMES_VICTIM_Z_PERCENT
FROM 
    ViolentCrimes vc
FULL OUTER JOIN 
    PropertyCrimes pc ON vc."Year" = pc."Year"
FULL OUTER JOIN 
    FinancialCrimes fc ON vc."Year" = fc."Year"
FULL OUTER JOIN 
    SexCrimes sc ON vc."Year" = sc."Year"
ORDER BY 
    COALESCE(vc."Year", pc."Year", fc."Year", sc."Year")
`);
  const dataset =[];
  for(let i = 0; i < response.length; i++) {
    let temp = {
      year: response[i][0].toString(),
      d1: response[i][1],
      d2: response[i][2],
      d3: response[i][3],
      d4: response[i][4],
      d5: response[i][5],
      d6: response[i][6],
      d7: response[i][7],
      d8: response[i][8],
      d9: response[i][9],
      d10: response[i][10],
      d11: response[i][11],
      d12: response[i][12],
      d13: response[i][13],
      d14: response[i][14],
      d15: response[i][15],
      d16: response[i][16],
      d17: response[i][17],
      d18: response[i][18],
      d19: response[i][19],
      d20: response[i][20],
      d21: response[i][21],
      d22: response[i][22],
      d23: response[i][23],
      d24: response[i][24],
      d25: response[i][25],
      d26: response[i][26],
      d27: response[i][27],
      d28: response[i][28],
      d29: response[i][29],
      d30: response[i][30],
      d31: response[i][31],
      d32: response[i][32],
      d33: response[i][33],
      d34: response[i][34],
      d35: response[i][35],
      d36: response[i][36],
      d37: response[i][37],
      d38: response[i][38],
      d39: response[i][39],
      d40: response[i][40],
      d41: response[i][41],
      d42: response[i][42],
      d43: response[i][43],
      d44: response[i][44],
      d45: response[i][45],
      d46: response[i][46],
      d47: response[i][47],
      d48: response[i][48],
      d49: response[i][49],
      d50: response[i][50],
      d51: response[i][51],
      d52: response[i][52],
      d53: response[i][53],
      d54: response[i][54],
      d55: response[i][55],
      d56: response[i][56],
      d57: response[i][57],
      d58: response[i][58],
      d59: response[i][59],
      d60: response[i][60],
      d61: response[i][61],
      d62: response[i][62],
      d63: response[i][63],
      d64: response[i][64],
      d65: response[i][65],
      d66: response[i][66],
      d67: response[i][67],
      d68: response[i][68],
      d69: response[i][69],
      d70: response[i][70],
      d71: response[i][71],
      d72: response[i][72],
      d73: response[i][73],
      d74: response[i][74],
      d75: response[i][75],
      d76: response[i][76]
    }
    dataset[i] = temp;
  }
  console.log(dataset);
  return (
    <main className="min-h-screen min-w-screen">
      <HomeButton/>
      <div className="p-9">
        <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-center">Percentage of each race to be a victim of each crime type over time</h1>
      </div>
      <TrendInterface
      filters={[
        "Violent",
        "Property",
        "Financial",
        "Sexual"
      ]}
      data={dataset}
      />
      <NavButtons previous='/trend2' next='/trend4'/>
    </main>
  )
}

export default page3