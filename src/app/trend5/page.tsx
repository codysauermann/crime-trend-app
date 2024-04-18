import HomeButton from '@/components/homebutton'
import Trend5Interface from '@/components/trend5Interface'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { queryDB } from '../api/oracleFunctions'

async function page5() {

  const response = await queryDB(`WITH CrimeStats AS (
    SELECT 
        TO_CHAR(c.CRIMEDATE, 'YYYY') AS Crime_Year,
        CASE v.DESCENT
            WHEN 'A' THEN 'Other Asian'
            WHEN 'B' THEN 'Black'
            WHEN 'C' THEN 'Chinese'
            WHEN 'D' THEN 'Cambodian'
            WHEN 'F' THEN 'Filipino'
            WHEN 'G' THEN 'Guamanian'
            WHEN 'H' THEN 'Hispanic/Latin/Mexican'
            WHEN 'I' THEN 'American Indian/Alaskan Native'
            WHEN 'J' THEN 'Japanese'
            WHEN 'K' THEN 'Korean'
            WHEN 'L' THEN 'Laotian'
            WHEN 'O' THEN 'Other'
            WHEN 'P' THEN 'Pacific Islander'
            WHEN 'S' THEN 'Samoan'
            WHEN 'U' THEN 'Hawaiian'
            WHEN 'V' THEN 'Vietnamese'
            WHEN 'W' THEN 'White'
            WHEN 'X' THEN 'Unknown'
            WHEN 'Z' THEN 'Asian Indian'
            ELSE 'Unknown'
        END AS Victim_Race,
        COUNT(*) AS Total_Crimes,
        SUM(CASE WHEN c.STATUS IN ('Adult Arrest', 'Juv Arrest') THEN 1 ELSE 0 END) AS Arrests
    FROM sreasor.VictimTable v
    JOIN sreasor.CrimeTable c ON v.CRIMEID = c.CRIMEID
    GROUP BY 
        TO_CHAR(c.CRIMEDATE, 'YYYY'),
        CASE v.DESCENT
            WHEN 'A' THEN 'Other Asian'
            WHEN 'B' THEN 'Black'
            WHEN 'C' THEN 'Chinese'
            WHEN 'D' THEN 'Cambodian'
            WHEN 'F' THEN 'Filipino'
            WHEN 'G' THEN 'Guamanian'
            WHEN 'H' THEN 'Hispanic/Latin/Mexican'
            WHEN 'I' THEN 'American Indian/Alaskan Native'
            WHEN 'J' THEN 'Japanese'
            WHEN 'K' THEN 'Korean'
            WHEN 'L' THEN 'Laotian'
            WHEN 'O' THEN 'Other'
            WHEN 'P' THEN 'Pacific Islander'
            WHEN 'S' THEN 'Samoan'
            WHEN 'U' THEN 'Hawaiian'
            WHEN 'V' THEN 'Vietnamese'
            WHEN 'W' THEN 'White'
            WHEN 'X' THEN 'Unknown'
            WHEN 'Z' THEN 'Asian Indian'
            ELSE 'Unknown'
        END
      )
      SELECT 
          Crime_Year,
          ROUND((MAX(CASE WHEN Victim_Race = 'Other Asian' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Other Asian",
          ROUND((MAX(CASE WHEN Victim_Race = 'Black' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Black",
          ROUND((MAX(CASE WHEN Victim_Race = 'Chinese' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Chinese",
          ROUND((MAX(CASE WHEN Victim_Race = 'Cambodian' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Cambodian",
          ROUND((MAX(CASE WHEN Victim_Race = 'Filipino' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Filipino",
          ROUND((MAX(CASE WHEN Victim_Race = 'Guamanian' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Guamanian",
          ROUND((MAX(CASE WHEN Victim_Race = 'Hispanic/Latin/Mexican' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Hispanic/Latin/Mexican",
          ROUND((MAX(CASE WHEN Victim_Race = 'American Indian/Alaskan Native' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "American Indian/Alaskan Native",
          ROUND((MAX(CASE WHEN Victim_Race = 'Japanese' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Japanese",
          ROUND((MAX(CASE WHEN Victim_Race = 'Korean' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Korean",
          ROUND((MAX(CASE WHEN Victim_Race = 'Laotian' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Laotian",
          ROUND((MAX(CASE WHEN Victim_Race = 'Other' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Other",
          ROUND((MAX(CASE WHEN Victim_Race = 'Pacific Islander' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Pacific Islander",
          ROUND((MAX(CASE WHEN Victim_Race = 'Samoan' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Samoan",
          ROUND((MAX(CASE WHEN Victim_Race = 'Hawaiian' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Hawaiian",
          ROUND((MAX(CASE WHEN Victim_Race = 'Vietnamese' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Vietnamese",
          ROUND((MAX(CASE WHEN Victim_Race = 'White' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "White",
          ROUND((MAX(CASE WHEN Victim_Race = 'Unknown' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Unknown",
          ROUND((MAX(CASE WHEN Victim_Race = 'Asian Indian' THEN Arrests / Total_Crimes * 100 ELSE NULL END)), 2) AS "Asian Indian"
      FROM CrimeStats
      GROUP BY Crime_Year
      ORDER BY Crime_Year`
);

  const dataset = []
  for(let i = 0; i < response.length; i++) {
    let temp = {
      year: response[i][0].toString(),
      'Other Asian': response[i][1],
      'Black': response[i][2],
      'Chinese': response[i][3],
      'Cambodian': response[i][4],
      'Filipino': response[i][5],
      'Guamanian': response[i][6],
      'Hispanic/Latin/Mexican': response[i][7],
      'American Indian/Alaskan Native': response[i][8],
      'Japanese': response[i][9],
      'Korean': response[i][10],
      'Laotian': response[i][11],
      'Other': response[i][12],
      'Pacific Islander': response[i][13],
      'Samoan': response[i][14],
      'Hawaiian': response[i][15],
      'Vietnamese': response[i][16],
      'White': response[i][17],
      'Unknown': response[i][18],
      'Asian Indian': response[i][19],
    }
    dataset[i] = temp;
  }
  console.log(dataset);

  return (
    <main className="min-h-screen min-w-screen">
      <HomeButton/>
      <div className="p-9">
        <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-center">Percent of crimes ending in an arrest against each race</h1>
      </div>
      <Trend5Interface
      data={dataset}
      />
      <div className="fixed left-9">
        <Button asChild>
          <Link href="/trend4">
            Previous
          </Link>
        </Button>
      </div>
    </main>
  )
}

export default page5