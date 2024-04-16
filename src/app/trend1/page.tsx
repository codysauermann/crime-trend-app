import LineGraph from "@/components/LineGraph"
import HomeButton from "@/components/homebutton"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { queryDB } from "../api/oracleFunctions"
import TrendInterface from "@/components/trend1Interface"

async function page1() {
  const response = await queryDB(`SELECT violentQuery."crimeYear", ROUND(violentQuery."menVictimsViolent" / (violentQuery."menVictimsViolent" + violentQuery."womanVictimsViolent"), 2) * 100 AS "menVictimsViolentPercent", ROUND(violentQuery."womanVictimsViolent" / (violentQuery."menVictimsViolent" + violentQuery."womanVictimsViolent"), 2) * 100  AS "womenVictimsViolentPercent", ROUND(propertyQuery."menVictimsProperty" / (propertyQuery."womanVictimsProperty" + propertyQuery."menVictimsProperty"), 2) * 100 AS "menVictimsPropertyPercent", ROUND(propertyQuery."womanVictimsProperty" / (propertyQuery."womanVictimsProperty" + propertyQuery."menVictimsProperty"), 2) * 100 AS "womenVictimsPropertyPercent", ROUND(financialQuery."menVictimsFinancial" / (financialQuery."menVictimsFinancial" + financialQuery."womanVictimsFinancial"), 2) * 100 AS "menVictimsFinancialPercent", ROUND(financialQuery."womanVictimsFinancial" / (financialQuery."menVictimsFinancial" + financialQuery."womanVictimsFinancial"), 2) * 100 AS "womenVictimsFinancialPercent", ROUND(sexualQuery."menVictimsSexual" / (sexualQuery."menVictimsSexual" + sexualQuery."womanVictimsSexual"), 2) * 100 AS "menVictimsSexualPercent", ROUND(sexualQuery."womanVictimsSexual" / (sexualQuery."menVictimsSexual" + sexualQuery."womanVictimsSexual"), 2) * 100 AS "womenVictimsSexualPercent" FROM
  (
      SELECT SUM("manTotal") AS "menVictimsViolent", SUM("womanTotal") AS "womanVictimsViolent", "crimeYear" FROM (
          SELECT subquery.year AS "crimeYear", subquery2."womanCount" AS "womanTotal", subquery."total_crime" - subQuery2."womanCount" AS "manTotal", subquery.CrimeDescription
          FROM (
              SELECT EXTRACT(YEAR FROM crimedate)AS year, COUNT(crimeid) AS "total_crime", CrimeDescription
              FROM sreasor.CrimeTable
              GROUP BY EXTRACT(YEAR FROM crimedate), CrimeDescription
              ORDER BY EXTRACT(YEAR FROM crimedate)
          )subquery 
          JOIN (
              SELECT EXTRACT(YEAR FROM ct.crimeDate) AS year, COUNT(vt.sex) AS "womanCount", ct.CrimeDescription
              FROM sreasor.VictimTable vt 
              JOIN sreasor.CrimeTable ct
              ON vt.crimeID = ct.crimeID
              WHERE vt.sex = 'F'
              GROUP BY EXTRACT(YEAR FROM ct.crimedate), ct.CrimeDescription
          )subquery2 ON subquery.year = subquery2.year AND subquery2.CrimeDescription = subquery.CrimeDescription
          ORDER BY subquery.year, subquery.CrimeDescription
      ) WHERE CrimeDescription LIKE '%ROBBERY%' OR CrimeDescription LIKE '%ASSAULT%' OR CrimeDescription LIKE '%HOMICIDE%' OR CrimeDescription LIKE '%KIDNAPPING%' OR CrimeDescription LIKE '%BATTERY%' OR CrimeDescription LIKE '%SHOTS FIRED%' OR CrimeDescription LIKE '%RAPE%' OR CrimeDescription LIKE '%FALSE IMPRISONMENT%' OR CrimeDescription LIKE '%LYNCHING%' OR CrimeDescription LIKE '%WEAPON%' 
      GROUP BY "crimeYear"
  ) violentQuery 
  JOIN 
  (
      SELECT SUM("manTotal") AS "menVictimsProperty", SUM("womanTotal") AS "womanVictimsProperty", "crimeYear" FROM (
          SELECT subquery.year AS "crimeYear", subquery2."womanCount" AS "womanTotal", subquery."total_crime" - subQuery2."womanCount" AS "manTotal", subquery.CrimeDescription
          FROM (
              SELECT EXTRACT(YEAR FROM crimedate)AS year, COUNT(crimeid) AS "total_crime", CrimeDescription
              FROM sreasor.CrimeTable
              GROUP BY EXTRACT(YEAR FROM crimedate), CrimeDescription
              ORDER BY EXTRACT(YEAR FROM crimedate)
          )subquery 
          JOIN (
              SELECT EXTRACT(YEAR FROM ct.crimeDate) AS year, COUNT(vt.sex) AS "womanCount", ct.CrimeDescription
              FROM sreasor.VictimTable vt 
              JOIN sreasor.CrimeTable ct
              ON vt.crimeID = ct.crimeID
              WHERE vt.sex = 'F'
              GROUP BY EXTRACT(YEAR FROM ct.crimedate), ct.CrimeDescription
          )subquery2 ON subquery.year = subquery2.year AND subquery2.CrimeDescription = subquery.CrimeDescription
          ORDER BY subquery.year, subquery.CrimeDescription
      ) WHERE CrimeDescription LIKE '%VANDALISM%' OR CrimeDescription LIKE '%DAMAGE%' OR CrimeDescription LIKE '%STOLEN%' OR CrimeDescription LIKE '%BURGLARY%' OR CrimeDescription LIKE '%THEFT%' OR CrimeDescription LIKE '%DOCUMENT WORTHLESS%' OR CrimeDescription LIKE '%TILL TAP - PETTY%' OR CrimeDescription LIKE '%DRUNK ROLL%' OR CrimeDescription LIKE '%PICKPOCKET%' OR CrimeDescription LIKE '%PURSE SNATCHING%' OR CrimeDescription LIKE '%DRIVING WITHOUT OWNER CONSENT%' OR CrimeDescription LIKE '%TILL TAP - ATTEMPT%' 
      GROUP BY "crimeYear" 
  ) propertyQuery 
  ON propertyQuery."crimeYear" = violentQuery."crimeYear"
  JOIN
  (
      SELECT SUM("manTotal") AS "menVictimsFinancial", SUM("womanTotal") AS "womanVictimsFinancial", "crimeYear" FROM (
          SELECT subquery.year AS "crimeYear", subquery2."womanCount" AS "womanTotal", subquery."total_crime" - subQuery2."womanCount" AS "manTotal", subquery.CrimeDescription
          FROM (
              SELECT EXTRACT(YEAR FROM crimedate)AS year, COUNT(crimeid) AS "total_crime", CrimeDescription
              FROM sreasor.CrimeTable
              GROUP BY EXTRACT(YEAR FROM crimedate), CrimeDescription
              ORDER BY EXTRACT(YEAR FROM crimedate)
          )subquery 
          JOIN (
              SELECT EXTRACT(YEAR FROM ct.crimeDate) AS year, COUNT(vt.sex) AS "womanCount", ct.CrimeDescription
              FROM sreasor.VictimTable vt 
              JOIN sreasor.CrimeTable ct
              ON vt.crimeID = ct.crimeID
              WHERE vt.sex = 'F'
              GROUP BY EXTRACT(YEAR FROM ct.crimedate), ct.CrimeDescription
          )subquery2 ON subquery.year = subquery2.year AND subquery2.CrimeDescription = subquery.CrimeDescription
          ORDER BY subquery.year, subquery.CrimeDescription
      ) WHERE CrimeDescription LIKE '%GRAND THEFT%' OR CrimeDescription LIKE '%DRUGS, TO A MINOR%' OR CrimeDescription LIKE '%DEFRAUDING INNKEEPER%' OR CrimeDescription LIKE '%EMBEZZLEMENT%' OR CrimeDescription LIKE '%BUNCO%' OR CrimeDescription LIKE '%CREDIT CARDS%' OR CrimeDescription LIKE '%DOCUMENT FORGERY%' OR CrimeDescription LIKE '%COUNTERFEIT%' OR CrimeDescription LIKE '%THEFT OF IDENTITY%' OR CrimeDescription LIKE '%BRIBERY%'
      GROUP BY "crimeYear"
  ) financialQuery
  ON financialQuery."crimeYear" = propertyQuery."crimeYear"
  JOIN
  (  
       SELECT SUM("manTotal") AS "menVictimsSexual", SUM("womanTotal") AS "womanVictimsSexual", "crimeYear" FROM (
          SELECT subquery.year AS "crimeYear", subquery2."womanCount" AS "womanTotal", subquery."total_crime" - subQuery2."womanCount" AS "manTotal", subquery.CrimeDescription
          FROM (
              SELECT EXTRACT(YEAR FROM crimedate)AS year, COUNT(crimeid) AS "total_crime", CrimeDescription
              FROM sreasor.CrimeTable
              GROUP BY EXTRACT(YEAR FROM crimedate), CrimeDescription
              ORDER BY EXTRACT(YEAR FROM crimedate)
          )subquery 
          JOIN (
              SELECT EXTRACT(YEAR FROM ct.crimeDate) AS year, COUNT(vt.sex) AS "womanCount", ct.CrimeDescription
              FROM sreasor.VictimTable vt 
              JOIN sreasor.CrimeTable ct
              ON vt.crimeID = ct.crimeID
              WHERE vt.sex = 'F'
              GROUP BY EXTRACT(YEAR FROM ct.crimedate), ct.CrimeDescription
          )subquery2 ON subquery.year = subquery2.year AND subquery2.CrimeDescription = subquery.CrimeDescription
          ORDER BY subquery.year, subquery.CrimeDescription
      ) WHERE CrimeDescription LIKE '%SODOMY%' OR CrimeDescription LIKE '%LEWD%' OR CrimeDescription LIKE '%PORNOGRAPHY%' OR CrimeDescription LIKE '%SEX%' OR CrimeDescription LIKE '%SEXUAL PENETRATION%' OR CrimeDescription LIKE '%HUMAN TRAFFICKING%' OR CrimeDescription LIKE '%INCEST%' OR CrimeDescription LIKE '%BESTIALITY%' OR CrimeDescription LIKE '%RAPE%'
      GROUP BY "crimeYear"
  ) sexualQuery
  ON  sexualQuery."crimeYear" = financialQuery."crimeYear"
ORDER BY violentQuery."crimeYear"
  `);
  const dataset = []
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
      d8: response[i][8]
    }
    dataset[i] = temp;
  }
  console.log(dataset);

  return (
    <main className="min-h-screen min-w-screen">
      <HomeButton/>
      <div className="p-9">
        <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-center">Percentage of each gender to be a victim of each crime</h1>
      </div>
      <TrendInterface
      filters={[
        "violent",
        "property",
        "financial",
        "sexual"
      ]}
      data={dataset}/>
      <div className="fixed right-9">
        <Button asChild>
          <Link href="/trend2">
            Next
          </Link>
        </Button>
      </div>
    </main>
  )
}

export default page1