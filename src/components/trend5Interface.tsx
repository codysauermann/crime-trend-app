'use client'
import React, { useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type Props = {data:any[]}
const Trend5Interface: React.FC<Props> = ({data}) => {

  const [trendData, setTrendData] = useState(data);
  const [afterDate, setAfterDate] = useState('2010');
  const [beforeDate, setBeforeDate] = useState('2019');
  const [raceSelection, setRaceSelection] = useState('a');

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

  const handleRaceSelectionChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setRaceSelection(e.target.value);
  }

  return (
    <div className="flex flex-col items-center space-y-4">
        <div className='flex p-9 border-4 border-black rounded-lg'>
            <div className='w-[800px] h-[400px]'>
                <ResponsiveContainer height="100%" width="100%">
                    <LineChart width={800} height={500} data={trendData}>
                        <Tooltip/>
                        <Legend/>
                        <XAxis dataKey="year"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="5 5" />
                        <Line type="monotone" stroke='#991f17' dataKey={raceSelection}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
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
        <div className='grid grid-cols-1 gap-8 p-9'>
            <select defaultValue={raceSelection} onChange={(e) => handleRaceSelectionChange(e)} className='p-2'>
                <option value="Other Asian">Other Asian</option>
                <option value="Black">Black</option>
                <option value="Chinese">Chinese</option>
                <option value="Cambodian">Cambodian</option>
                <option value="Filipino">Filipino</option>
                <option value="Guamanian">Guamanian</option>
                <option value="Hispanic/Latin/Mexican">Hispanic/Latin/Mexican</option>
                <option value="American Indian/Alaskan Native">American Indian/Alaskan Native</option>
                <option value="Japanese">Japanese</option>
                <option value="Korean">Korean</option>
                <option value="Laotian">Laotian</option>
                <option value="Other">Other</option>
                <option value="Pacific Islander">Pacific Islander</option>
                <option value="Samoan">Samoan</option>
                <option value="Hawaiian">Hawaiian</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="White">White</option>
                <option value="Unknown">Unknown</option>
                <option value="Asian Indian">Asian Indian</option>
            </select>
        </div>
      </div>
  )
}

export default Trend5Interface