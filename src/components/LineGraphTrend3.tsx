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
                <Line type="monotone" dataKey="d1" stroke="#FF5733" strokeDasharray="0" strokeWidth={3}/>
                <Line  type="monotone" dataKey="d2" stroke="#3357FF" strokeDasharray="5 5" strokeWidth={3}/>
                <Line type="monotone" dataKey="d3" stroke="#A1FF33" strokeDasharray="10 5" strokeWidth={3}/>
                <Line type="monotone" dataKey="d4" stroke="#FF8C33" strokeDasharray="2 2" strokeWidth={3}/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
export default LineGraph;