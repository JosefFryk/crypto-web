import {ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart} from  'recharts';
import {format, parseISO, subDays } from 'data-fns'

///waiting for data-fns update to 2.4

format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]

const data = [];
for (let num = 30; num >=0 ; num --) {
    data.push ({
        data: subDays(new Date(), num).toISOString().substr(0,10),
        value: 1 + Math.random(),
    });
}



function Chart() {

    

        
return(
    <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
            <Area dataKey="value"/>
            <XAxis dataKey="date"/>
            <YAxis dataKey="value"/>
            <Tooltip/>
        </AreaChart>
    </ResponsiveContainer>
    )
}


export default Chart;