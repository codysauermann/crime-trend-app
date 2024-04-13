import HomeButton from '@/components/homebutton'
import NavButtons from '@/components/navButtons'
import LineGraph from '@/components/LineGraph'
import Link from 'next/link'
import { Checkbox } from '@/components/ui/checkbox'
import TrendInterface from '@/components/trendInterface'

function page2() {
  return (
    <main className="min-h-screen min-w-screen">
      <HomeButton/>
      <div className="p-9">
        <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-center">Proportion of the type of crime over time</h1>
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
      <NavButtons previous='/trend1' next='/trend3'/>
    </main>
  )
}

export default page2