import LineGraph from "@/components/LineGraph"
import HomeButton from "@/components/homebutton"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { queryDB } from "../api/oracleFunctions"
import TrendInterface from "@/components/trendInterface"

async function page1() {
  const response = await queryDB(`SELECT EXTRACT(YEAR FROM crimedate)AS year, COUNT(crimeid) AS "total crime" 
  FROM sreasor.CrimeTable
  GROUP BY EXTRACT(YEAR FROM crimedate)
  ORDER BY EXTRACT(YEAR FROM crimedate)`);
  const dataset = []
  for(let i = 0; i < response.length; i++) {
    let temp = {
      year: response[i][0].toString(),
      d1: response[i][1]
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
        "male",
        "female"
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