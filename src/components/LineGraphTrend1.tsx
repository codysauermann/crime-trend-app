'use client'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'

type Props = {trendData:any[]}
const LineGraph: React.FC<Props> = ({trendData}) => {
  return (
    <div className='w-[800px] h-[400px]'>
        <ResponsiveContainer height="100%" width="100%">
            <LineChart width={800} height={500} data={trendData}>
                <XAxis dataKey="year"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="5 5" />
                <Line type="monotone" dataKey="d1" stroke="#0000ff" strokeDasharray="0" strokeWidth={3}/>
                <Line type="monotone" dataKey="d2" stroke="#ff69b4" strokeDasharray="0" strokeWidth={3}/>
                <Line type="monotone" dataKey="d3" stroke="#0000ff" strokeDasharray="5 5" strokeWidth={3}/>
                <Line type="monotone" dataKey="d4" stroke="#ff69b4" strokeDasharray="5 5" strokeWidth={3}/>
                <Line type="monotone" dataKey="d5" stroke="#0000ff" strokeDasharray="10 5" strokeWidth={3}/>
                <Line type="monotone" dataKey="d6" stroke="#ff69b4" strokeDasharray="10 5" strokeWidth={3}/>
                <Line type="monotone" dataKey="d7" stroke="#0000ff" strokeDasharray="2 2" strokeWidth={3}/>
                <Line type="monotone" dataKey="d8" stroke="#ff69b4" strokeDasharray="2 2" strokeWidth={3}/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
export default LineGraph;