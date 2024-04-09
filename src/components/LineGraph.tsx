'use client'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts'

const data = [
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
    },
]

export default function LineGraph() {
  return (
    <div className='w-[500px] h-[400px]'>
        <ResponsiveContainer height="100%" width="100%">
            <LineChart width={800} height={500} data={data}>
                <XAxis dataKey="year"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="5 5" />
                <Line type="monotone" dataKey="d1"/>
                <Line  type="monotone" dataKey="d2"/>
                <Line type="monotone" dataKey="d3"/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
