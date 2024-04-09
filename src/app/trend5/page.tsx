import HomeButton from '@/components/homebutton'
import LineGraph from '@/components/LineGraph'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import React from 'react'

function page5() {
  return (
    <main className="min-h-screen min-w-screen">
      <HomeButton/>
      <div className="p-9">
        <h1 className="text-lg md:text-xl lg:text-3xl font-semibold text-center">Breakdown of crime status by crime type</h1>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className='flex p-9 border-4 border-black rounded-lg'>
          <LineGraph/>
        </div>
        <div className='grid grid-cols-4 gap-8 p-9'>
          <div className="items-top flex space-x-2">
            <Checkbox id='cd1'/>
            <label htmlFor="terms1" className="text-sm font-medium leading-none">
              Option 1
            </label>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox id='cd1'/>
            <label htmlFor="terms1" className="text-sm font-medium leading-none">
              Option 2
            </label>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox id='cd1'/>
            <label htmlFor="terms1" className="text-sm font-medium leading-none">
              Option 3
            </label>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox id='cd1'/>
            <label htmlFor="terms1" className="text-sm font-medium leading-none">
              Option 4
            </label>
          </div>
          <div className="items-top flex space-x-2">
            <Checkbox id='cd1'/>
            <label htmlFor="terms1" className="text-sm font-medium leading-none">
              Option 5
            </label>
          </div>
        </div>
        
      </div>
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