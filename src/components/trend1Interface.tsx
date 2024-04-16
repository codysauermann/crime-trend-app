'use client'
import React, { use, useState } from 'react'
import { Checkbox } from './ui/checkbox'
import LineGraph from './LineGraph'

type Props = {filters:string[], data:any[]}
const TrendInterface: React.FC<Props> = ({filters, data}) => {
  
  const [selectedFilters, setSelectedFilters] = useState({
    violent: false,
    property: false,
    financial: false,
    sexual: false
  })
  const [trendData, setTrendData] = useState(data);
  const [afterDate, setAfterDate] = useState('2010');
  const [beforeDate, setBeforeDate] = useState('2019');

  function handleInputChange(e) {
    console.log("e.type:");
    console.log(e.target.type);
    if (e.target.type === "checkbox") {
        console.log("target.checked:");
        console.log(e.target.checked);
        console.log(e.target.name);
        
        // Use functional update for selectedFilters
        setSelectedFilters(prevSelectedFilters => {
            const updatedFilters = { ...prevSelectedFilters, [e.target.name]: e.target.checked };

            // Update trendData based on the updated filters
            let newData = [];
            for (let i = 0; i < data.length; i++) {
                // Check the date range
                if (parseInt(data[i].year) >= parseInt(afterDate) && parseInt(data[i].year) <= parseInt(beforeDate)) {
                    let dataEntry = { year: data[i].year };

                    // Add data based on selected filters
                    if (updatedFilters.violent) {
                        dataEntry = { ...dataEntry, d1: data[i].d1, d2: data[i].d2 };
                    }
                    if (updatedFilters.property) {
                        dataEntry = { ...dataEntry, d3: data[i].d3, d4: data[i].d4 };
                    }
                    if (updatedFilters.financial) {
                        dataEntry = { ...dataEntry, d5: data[i].d5, d6: data[i].d6 };
                    }
                    if (updatedFilters.sexual) {
                        dataEntry = { ...dataEntry, d7: data[i].d7, d8: data[i].d8 };
                    }

                    // Add dataEntry to newData if any filter was selected
                    if (updatedFilters.violent || updatedFilters.property || updatedFilters.financial || updatedFilters.sexual) {
                        newData.push(dataEntry);
                    }
                }
            }
            
            // Update trendData with newData
            setTrendData(newData);
            
            // Return updated filters at the end
            return updatedFilters;
        });
    }
}


  const handleAfterDateChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setAfterDate(e.currentTarget.value);
    let newData = [];
    
    for(let i = 0; i < data.length; i++) {
      if(parseInt(data[i].year) >= parseInt(e.target.value) && parseInt(data[i].year) <= parseInt(beforeDate)) {
        newData.push(data[i]);
      }
    }
    setTrendData(newData);
  }

  const handleBeforeDateChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setBeforeDate(e.currentTarget.value);
    let newData = [];
    
    for(let i = 0; i < data.length; i++) {
      if(parseInt(data[i].year) >= parseInt(afterDate) && parseInt(data[i].year) <= parseInt(e.target.value)) {
        newData.push(data[i]);
      }
    }
    setTrendData(newData);
  }

  return (
    <div className="flex flex-col items-center space-y-4">
        <div className='flex p-9 border-4 border-black rounded-lg'>
          <LineGraph
          trendData={trendData}/>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          <select defaultValue={afterDate} onChange={(e) => handleAfterDateChange(e)} className='p-2'>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
          </select>
          <div className='text-center text-lg content-center font-normal'>to</div>
          <select defaultValue={beforeDate} onChange={(e) => handleBeforeDateChange(e)} className='p-2'>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
          </select>

        </div>
        <div className={filters.length >= 4 ? 'grid grid-cols-4 gap-8 p-9' : 'grid grid-cols-2 gap-8 p-9'}>
          {filters.map((filter, idx) => (
            <div key={idx} className="items-top flex space-x-2">
                <input type="checkbox" id={filter} name={filter} onClick={(e) => handleInputChange(e)}/>
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