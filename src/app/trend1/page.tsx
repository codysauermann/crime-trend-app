import LineGraph from "@/components/LineGraph"
import HomeButton from "@/components/homebutton"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function page1() {
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
        <div className='flex p-9'>
          filters
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