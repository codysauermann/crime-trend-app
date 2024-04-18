import HomeButton from '@/components/homebutton'
import NavButtons from '@/components/navButtons'
import LineGraph from '@/components/LineGraph'
import Link from 'next/link'
import { Checkbox } from '@/components/ui/checkbox'
import Trend2Interface from '@/components/trend2Interface'
import { queryDB } from '../api/oracleFunctions'

async function page2() {
  const response = await queryDB(`WITH totalcrime AS
  (
      SELECT EXTRACT(YEAR FROM crimedate) AS year,
      COUNT(crimeid) AS total
      FROM sreasor.crimetable
      GROUP BY EXTRACT(YEAR FROM crimedate)
  ),
  violentcrimes AS
  (
      SELECT EXTRACT(YEAR FROM crimedate) AS year,
      COUNT(crimeid) AS violent_crimes
      FROM sreasor.crimetable 
      WHERE CrimeDescription LIKE '%ROBBERY%' OR CrimeDescription LIKE '%ASSAULT%' OR CrimeDescription LIKE '%HOMICIDE%' OR CrimeDescription LIKE '%KIDNAPPING%' OR CrimeDescription LIKE '%BATTERY%' OR CrimeDescription LIKE '%SHOTS FIRED%' OR CrimeDescription LIKE '%RAPE%' OR CrimeDescription LIKE '%FALSE IMPRISONMENT%' OR CrimeDescription LIKE '%LYNCHING%' OR CrimeDescription LIKE '%WEAPON%' 
      GROUP BY EXTRACT(YEAR FROM crimedate)
  ),
  propertycrimes AS 
  (
      SELECT EXTRACT(YEAR FROM crimedate) AS year,
      COUNT(crimeid) AS property_crimes 
      FROM sreasor.crimetable 
      WHERE CrimeDescription LIKE '%VANDALISM%' OR CrimeDescription LIKE '%DAMAGE%' OR CrimeDescription LIKE '%STOLEN%' OR CrimeDescription LIKE '%BURGLARY%' OR CrimeDescription LIKE '%THEFT%' OR CrimeDescription LIKE '%DOCUMENT WORTHLESS%' OR CrimeDescription LIKE '%TILL TAP - PETTY%' OR CrimeDescription LIKE '%DRUNK ROLL%' OR CrimeDescription LIKE '%PICKPOCKET%' OR CrimeDescription LIKE '%PURSE SNATCHING%' OR CrimeDescription LIKE '%DRIVING WITHOUT OWNER CONSENT%' OR CrimeDescription LIKE '%TILL TAP - ATTEMPT%' 
      GROUP BY EXTRACT(YEAR FROM crimedate)
  ),
  financialcrimes AS
  (
      SELECT EXTRACT(YEAR FROM crimedate) AS year ,
      COUNT(crimeid) AS financial_crimes 
      FROM sreasor.crimetable 
      WHERE CrimeDescription LIKE '%GRAND THEFT%' OR CrimeDescription LIKE '%DRUGS, TO A MINOR%' OR CrimeDescription LIKE '%DEFRAUDING INNKEEPER%' OR CrimeDescription LIKE '%EMBEZZLEMENT%' OR CrimeDescription LIKE '%BUNCO%' OR CrimeDescription LIKE '%CREDIT CARDS%' OR CrimeDescription LIKE '%DOCUMENT FORGERY%' OR CrimeDescription LIKE '%COUNTERFEIT%' OR CrimeDescription LIKE '%THEFT OF IDENTITY%' OR CrimeDescription LIKE '%BRIBERY%'
      GROUP BY EXTRACT(YEAR FROM crimedate)
  ),
  sexcrimes AS
  (
      SELECT EXTRACT(YEAR FROM crimedate) AS year,
      COUNT(crimeid) AS sex_crimes 
      FROM sreasor.crimetable 
      WHERE CrimeDescription LIKE '%SODOMY%' OR CrimeDescription LIKE '%LEWD%' OR CrimeDescription LIKE '%PORNOGRAPHY%' OR CrimeDescription LIKE '%SEX%' OR CrimeDescription LIKE '%SEXUAL PENETRATION%' OR CrimeDescription LIKE '%HUMAN TRAFFICKING%' OR CrimeDescription LIKE '%INCEST%' OR CrimeDescription LIKE '%BESTIALITY%' OR CrimeDescription LIKE '%RAPE%'
      GROUP BY EXTRACT(YEAR FROM crimedate)
  )
  SELECT violentcrimes.year,
  ROUND(violentcrimes.violent_crimes / totalcrime.total, 4) * 100 AS violent_percent,
  ROUND(propertycrimes.property_crimes / totalcrime.total, 4) * 100 AS property_percent,
  ROUND(financialcrimes.financial_crimes / totalcrime.total, 4) * 100 AS financial_percent,
  ROUND(sexcrimes.sex_crimes / totalcrime.total, 4) * 100 AS sex_percent
  FROM 
  violentcrimes 
  JOIN 
  propertycrimes ON violentcrimes.year = propertycrimes.year
  JOIN
  financialcrimes ON violentcrimes.year = financialcrimes.year
  JOIN
  sexcrimes ON violentcrimes.year = sexcrimes.year
  JOIN 
  totalcrime ON violentcrimes.year = totalcrime.year
  ORDER BY violentcrimes.year`);
  console.log(response);

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
        <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-center">Proportion of each crime category each year </h1>
      </div>
      <Trend2Interface
      data={dataset}
      />
      <NavButtons previous='/trend1' next='/trend3'/>
    </main>
  )
}

export default page2