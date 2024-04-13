import HomeButton from '@/components/homebutton'
import LineGraph from '@/components/LineGraph'
import NavButtons from '@/components/navButtons'
import TrendInterface from '@/components/trendInterface'
import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'

function page3() {
  return (
    <main className="min-h-screen min-w-screen">
      <HomeButton/>
      <div className="p-9">
        <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-center">Percentage of each race to be a victim of each crime type over time</h1>
      </div>
      <TrendInterface
      filters={[
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4",
        "Option 5"
      ]}
      data={[
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
        },]}
      />
      <NavButtons previous='/trend2' next='/trend4'/>
    </main>
  )
}

export default page3