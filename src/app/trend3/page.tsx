import HomeButton from '@/components/homebutton'
import LineGraph from '@/components/LineGraph'
import NavButtons from '@/components/navButtons'
import React from 'react'

function page3() {
  return (
    <main className="min-h-screen min-w-screen">
      <HomeButton/>
      <div className="p-9">
        <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-center">Percentage of each race to be a victim of each crime type over time</h1>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className='flex p-9 border-4 border-black rounded-lg'>
          <LineGraph/>
        </div>
        <div className='flex p-9'>
          filters
        </div>
        
      </div>
      <NavButtons previous='/trend2' next='/trend4'/>
    </main>
  )
}

export default page3