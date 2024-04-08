import HomeButton from '@/components/homebutton'
import NavButtons from '@/components/navButtons'
import LineGraph from '@/components/LineGraph'
import Link from 'next/link'

function page2() {
  return (
    <main className="min-h-screen min-w-screen">
      <HomeButton/>
      <div className="p-9">
        <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-center">Proportion of the type of crime over time</h1>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className='flex p-9 border-4 border-black rounded-lg'>
          <LineGraph/>
        </div>
        <div className='flex p-9'>
          filters
        </div>
        
      </div>
      <NavButtons previous='/trend1' next='/trend3'/>
    </main>
  )
}

export default page2