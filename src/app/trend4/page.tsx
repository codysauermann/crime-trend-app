import HomeButton from '@/components/homebutton'
import LineGraph from '@/components/LineGraph'
import NavButtons from '@/components/navButtons'
import Trend4Interface from '@/components/trend4Interface'
import TrendInterface from '@/components/trendInterface'
import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'
import { queryDB } from '../api/oracleFunctions'

async function page4() {
  
  const response = await queryDB('');

  const dataset = []
  for(let i = 0; i < response.length; i++) {
    let temp = {
      year: response[i][0].toString(),
      violentCrime: response[i][1],
      propertyCrime: response[i][2],
      financialCrime: response[i][3],
      sexCrime: response[i][4],
    }
    dataset[i] = temp;
  }
  console.log(dataset);


  return (
    <main className="min-h-screen min-w-screen">
      <HomeButton/>
      <div className="p-9">
        <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-center">Difference between arrest made in cases vs cases still under investigation each year</h1>
      </div>
      <Trend4Interface
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
      <NavButtons previous='/trend3' next='/trend5'/>
    </main>
  )
}

export default page4