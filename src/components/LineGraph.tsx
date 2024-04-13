'use client'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts'

type Props = {trendData:any[]}
const LineGraph: React.FC<Props> = ({trendData}) => {
  return (
    <div className='w-[500px] h-[400px]'>
        <ResponsiveContainer height="100%" width="100%">
            <LineChart width={800} height={500} data={trendData}>
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
export default LineGraph;
