'use client'
import React, { useState } from 'react'
import { Checkbox } from './ui/checkbox'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type Props = {data:any[]}
const Trend2Interface: React.FC<Props> = ({data}) => {

  const [trendData, setTrendData] = useState(data);
  const [afterDate, setAfterDate] = useState('2010');
  const [beforeDate, setBeforeDate] = useState('2019');
  const [violentCrime, setViolentCrime] = useState(true);
  const [propertyCrime, setPropertyCrime] = useState(false);
  const [financialCrime, setFinancialCrime] = useState(false);
  const [sexCrime, setSexCrime] = useState(false);

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

  const handleViolent = () => {
    const newState = !violentCrime;
    setViolentCrime(newState);
  }
  const handleProperty = () => {
    const newState = !propertyCrime;
    setPropertyCrime(newState);
  }
  const handleFinancial = () => {
    const newState = !financialCrime;
    setFinancialCrime(newState);
  }
  const handleSex = () => {
    const newState = !sexCrime;
    setSexCrime(newState);
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
                        {violentCrime ? <Line type="monotone" stroke="#FF5733" strokeDasharray="0" strokeWidth={3} dataKey="Violent Crime"/>: ''}
                        {propertyCrime ? <Line  type="monotone" stroke="#3357FF" strokeDasharray="5 5" strokeWidth={3} dataKey="Property Crime"/> : ''}
                        {financialCrime ? <Line type="monotone" stroke="#A1FF33" strokeDasharray="10 5" strokeWidth={3} dataKey="Financial Crime"/> : ''}
                        {sexCrime ? <Line type="monotone" stroke="#FF8C33" strokeDasharray="2 2" strokeWidth={3} dataKey="Sex Crime"/> : ''}
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
        <div className='grid grid-cols-4 gap-8 p-9'>
            <div className="items-top flex space-x-2">
                <Checkbox id='violentCrime' checked={violentCrime} onCheckedChange={handleViolent}/>
                <label htmlFor='violentCrime' className="text-sm font-medium leading-none">
                    Violent Crime
                </label>
            </div>
            <div className="items-top flex space-x-2">
                <Checkbox id='propertyCrime' checked={propertyCrime} onCheckedChange={handleProperty}/>
                <label htmlFor='propertyCrime' className="text-sm font-medium leading-none">
                    Property Crime
                </label>
            </div>
            <div className="items-top flex space-x-2">
                <Checkbox id='financialCrime' checked={financialCrime} onCheckedChange={handleFinancial}/>
                <label htmlFor='financialCrime' className="text-sm font-medium leading-none">
                    Financial Crime
                </label>
            </div>
            <div className="items-top flex space-x-2">
                <Checkbox id='sexCrime' checked={sexCrime} onCheckedChange={handleSex}/>
                <label htmlFor='sexCrime' className="text-sm font-medium leading-none">
                    Sex Crime
                </label>
            </div>
        </div>
      </div>
  )
}

export default Trend2Interface