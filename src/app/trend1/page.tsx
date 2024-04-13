import LineGraph from "@/components/LineGraph"
import HomeButton from "@/components/homebutton"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { queryDB } from "../api/oracleFunctions"
import TrendInterface from "@/components/trendInterface"

async function page1() {
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
      data={
        [
          {
            year: '2000',
            d1: 0,
            d2: 1
          },
          {
            year: '2001',
            d1: 4,
            d2: 2
          },
          {
            year: '2002',
            d1: 5,
            d2: 3
          },
          {
            year: '2003',
            d1: 4,
            d2: 3
          },
          {
            year: '2004',
            d1: 6,
            d2: 6
          },
          {
            year: '2005',
            d1: 8,
            d2: 7
          },]
      }/>
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