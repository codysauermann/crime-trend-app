import LineGraph from "@/components/LineGraph"
import HomeButton from "@/components/homebutton"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { queryDB } from "../api/oracleFunctions"

async function page1() {
  return (
    <main className="min-h-screen min-w-screen">
      <HomeButton/>
      <div className="p-9">
        <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-center">Percentage of each gender to be a victim of each crime</h1>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className='flex p-9 border-4 border-black rounded-lg'>
          <LineGraph/>
        </div>
        <div className='grid grid-cols-2 gap-8 p-9'>
          <div className="items-top flex space-x-2">
            <Checkbox id='cd1'/>
            <label htmlFor="terms1" className="text-sm font-medium leading-none">
              Male
            </label>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox id='cd1'/>
            <label htmlFor="terms1" className="text-sm font-medium leading-none">
              Female
            </label>
          </div>
        </div>
        
      </div>
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