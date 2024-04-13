'use client'
import React from 'react'
import { Checkbox } from './ui/checkbox'
import LineGraph from './LineGraph'

type Props = {filters:string[], data:any[]}
const TrendInterface: React.FC<Props> = ({filters, data}) => {
  return (
    <div className="flex flex-col items-center space-y-4">
        <div className='flex p-9 border-4 border-black rounded-lg'>
          <LineGraph
          trendData={data}/>
        </div>
        <div className={filters.length >= 4 ? 'grid grid-cols-4 gap-8 p-9' : 'grid grid-cols-2 gap-8 p-9'}>
          {filters.map((filter, idx) => (
            <div key={idx} className="items-top flex space-x-2">
              <Checkbox id={filter}/>
              <label htmlFor={filter} className="text-sm font-medium leading-none">
                {filter}
              </label>
            </div>
          ))}
        </div>
      </div>
  )
}

export default TrendInterface