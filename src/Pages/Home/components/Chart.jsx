import React, { useState } from 'react'
import {Bar} from 'react-chartjs-2';

import{
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);
const Chart = () => {
    const data={
        labels: ['1 Aug', '8 Aug', '15 Aug', '22 Aug', '29 Aug', '5 Sep'],
        datasets:[
            {
                label:'Reality',
                data:[30,60,90,120,90,67],
                backgroundColor:'#FFA800',
                borderRadius:3,
            },
            {
                label:'Target',
                data:[33,40,80,145,70,57],
                backgroundColor:"#E5EAEE",
                borderRadius:3,
            },
          
        ]
}
const options={
        scales:{
            x:{
                grid: {
                    display: false,
                  },
               
                ticks: {
                    color: 'gray', // X-axis label text color
                    fontSize: 12, 
                    fontFamily: 'poppins',
                  },
                
            },
            y:{
                display: true,
                grid: {
                    display: true,
                  },
               
                ticks: {
                    display: true, // Hide y-axis step count
                    
                  },
            }
        },
        plugins: {
            legend: false,
          
           
          },
}
  return (
    <div className='w-[58%] md:w-[100%] bg-[white]  rounded-[12px] ml-8 sm:ml-2 mt-8 md:mx-8 sm:mr-0 sm:w-[95%]'>
  <div className='flex justify-between p-8 items-center'>
                <div >
                    <h1 className='text-[18px] sm:text-[12px] font-medium text-[#212121]'>Recent Stats</h1>
                    <p className='text-[#B5B5C3] font-medium text-[12px] sm;text-[9px]'>More than 400+ new members</p>
                </div>
                <div className='flex space-x-3 sm:space-x-1 text-[#B5B5C3] font-semibold text-[12px] sm:text-[10px]'>
                   <button className='w-[53px]'>Month</button>
                   <button className='w-[53px]'>Week</button>
                   <button className='h-[34px] w-[53px] bg-[#464E5F] rounded-[6px]'>Day</button>
                </div>
            </div>





<div className=' h-[360px]  lg:h-[300px] sm:h-auto  flex pl-14 lg:p-6 pb-6 mt-4  '>
            <Bar data={data} options={options} />
        </div>

       
    

    </div>
  )
}

export default Chart