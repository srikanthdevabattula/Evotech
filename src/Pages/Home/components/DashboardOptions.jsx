import React from 'react'
import fileplus from '../../../assets/fileplus.png'
const DashboardOptions = () => {
  return (
    <div className='h-[68px] sm:h-auto flex  sm:flex-wrap sm:space-y-4 items-center justify-between px-[38px] lg:px-[30px] sm:px-2 sm:py-2 font-poppins bg-[#FFFFFF]'>
        <div className='flex items-center'>
            <h3 className='font-poppins text-[13px] md:text-[11px] font-medium text-[#434349] border-r-[1px] border-[#EBEDF2]  pr-[36px]'>Dashboard</h3>
            <button className='mx-[36px] bg-[#FFF4DE] h-[38px] w-[95px] md:h-[33px] md:w-[75px] text-[#FFA800] font-poppins font-medium text-[13px] md:text-[11px] rounded-[4px]'>Add New</button>
        </div>


        <div className='flex items-center text-[13px] md:text-[11px] font-medium text-[#959CB6] w-[422px] md:w-[350px] justify-between h-[38px]'>
            <h1 className='bg-[#F3F6F9] rounded-[4px] h-[33px] w-[71px] md:w-[65px] text-[13px] font-medium text-[#6993FF] flex items-center justify-center '>Today</h1>
            <h1>Month</h1>
            <h1>Year</h1>
            <h1 className='w-[93px] md:w-[80px] h-[38px] md:h-[33px] rounded-[4px] bg-[#F3F6F9] flex items-center justify-center'>Actions</h1>
            <img src={fileplus} alt="" className='ml-[-40px] md:ml-2 sm:ml-0'/>

        </div>
    </div>
  )
}

export default DashboardOptions