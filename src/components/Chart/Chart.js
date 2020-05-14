import React, { useState, useEffect } from 'react';
import {fetchDailyData} from '../../api'
import { Line, Bar,BarChart } from 'react-chartjs-2';
const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        // fetchDailyData().then(res => setDailyData(res.data)).catch(err => console.log(err));

        const fetchApi = async () =>{
            setDailyData(await fetchDailyData())
        }
        fetchApi();
    }, [])
    console.log(dailyData);
    const lineChart = (
        dailyData.length ? (        <Line  data={{
            labels:dailyData.map(({date})=>date),
            datasets:[{

               data:dailyData.map(({confirmed})=>confirmed),
               label:'Infected',
               borderColor:'#3333ff',
               fill:true,
            },
            {

               data:dailyData.map(({deaths})=>deaths),
               label:'Deaths',
               borderColor:'red',
               fill:true,
            }]
   }} />):null

    
    )


    
    return (
        <div>
{
    lineChart
}
        </div>
    );
};

export default Chart;