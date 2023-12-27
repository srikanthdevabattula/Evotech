import React from 'react'
import blocks from '../../../assets/tabs/blocks.png'
import lboard from '../../../assets/tabs/lboard.png'
import Library from '../../../assets/tabs/Library.png'
import video from '../../../assets/tabs/video.png'
import security from '../../../assets/tabs/security.png'
import wave from '../../../assets/tabs/wave.png'
import { FaAngleDown } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaDotCircle } from "react-icons/fa";
const DashboardTabs = () => {
  return (
    <div className='w-[65%] md:w-[100%] mt-8 ml-8 lg:mt-6 lg:ml-6 md:ml-0 md:px-6 font-poppins space-y-8 lg:space-y-6'>

        <div className='tabs  flex sm:flex-wrap sm:gap-3 justify-between'>
            <div className='tab1 h-[197px] w-[144px] lg:h-[170px] lg:w-[120px] sm:w-[47%] flex flex-col items-center justify-center rounded-[12px] border-[1px] border-[#EFF2F5] bg-[white] space-y-2'>
                <img src={Library} alt="" />
               <h1 className='text-center text-[#B5B5C3] font-semibold text-[14px]' >Saas <br /> Application</h1> 
            </div>
            <div className='tab1 h-[197px] w-[144px] lg:h-[170px] lg:w-[120px]  sm:w-[47%] flex flex-col items-center justify-center rounded-[12px] border-[1px] border-[#EFF2F5] bg-[white] space-y-2'>
                <img src={blocks} alt="" />
               <h1 className='text-center text-[#B5B5C3] font-semibold text-[14px]' >Main <br />
Categories</h1> 
            </div>
            <div className='tab1 h-[197px] w-[144px] lg:h-[170px] lg:w-[120px]  sm:w-[47%] flex flex-col items-center justify-center rounded-[12px] border-[1px] border-[#EFF2F5] bg-[#50CD89] space-y-2'>
                <img src={video} alt="" />
               <h1 className='text-center text-[#FFFFFF] font-semibold text-[14px]' >Video <br />
Tutorials</h1> 
            </div>
            <div className='tab1 h-[197px] w-[144px] lg:h-[170px] lg:w-[120px]  sm:w-[47%] flex flex-col items-center justify-center rounded-[12px] border-[1px] border-[#EFF2F5] bg-[white] space-y-2'>
                <img src={lboard} alt="" />
               <h1 className='text-center text-[#B5B5C3] font-semibold text-[14px]' >Sales <br />
Statistics</h1> 
            </div>
            <div className='tab1 h-[197px] w-[144px] lg:h-[170px] lg:w-[120px]  sm:w-[47%] flex flex-col items-center justify-center rounded-[12px] border-[1px] border-[#EFF2F5] bg-[white] space-y-2'>
                <img src={security} alt="" />
               <h1 className='text-center text-[#B5B5C3] font-semibold text-[14px]' >ARC <br />
Security</h1> 
            </div>
        </div>

        <div className='flex sm:flex-wrap space-x-8 md:space-x-4 sm:space-x-0 sm:space-y-3'>
            <div className='w-[50%] sm:w-[100%] h-[341px] lg:h-[270px]  bg-[white] rounded-[12px] '>

                <div className='h-[242px] lg:h-[200px]  w-[100%] bg-[#F64E60] rounded-[12px]   '>
                    <div className='flex justify-between px-10 h-[50%] pt-10 lg:pt-6 lg:px-6'>
                        <h1 className='text-[#FFFFFF] text-[17px] font-semibold'>Categories</h1>
                        <button className='flex items-center justify-center rounded-[6px]  bg-[#ffffff28] text-[white] h-[30px] w-[85px] text-[11px] font-semibold'>Export <FaAngleDown  className='ml-2'/></button>
                    </div>
                    <img src={wave} alt="" className='w-[100%] rounded-[12px]'/>
                </div>
            </div>
            <div className='w-[50%] sm:w-[100%] h-[341px] lg:h-[270px]  bg-[white] rounded-[12px]'>
                
                <div className='flex items-center justify-between px-6 pt-6 lg:px-4 lg:pt-4 h-[20%]'>
                    <div>
                        <h1 className='text-[#464E5F] font-semibold text-[17px]'>Recent Activities</h1>
                        <p className='text-[#80808F] font-medium text-[12px]'>890,344 Sales</p>
                        </div>

                        <div className='flex space-x-1 text-[#B5B5C3B2]'>
                        <GoDotFill />
                        <GoDotFill />
                        </div>
                </div>

                <div className='h-[80%] flex'>
                    <div className='w-[20%] flex flex-col justify-between items-end h-[100%] py-[7%] text-[#464E5F] font-semibold text-[14px] lg:text-[11px]'>
                        <h1 className='flex items-center'>08:42   <FaDotCircle  className='text-[#663259] ml-2'/></h1>
                        <h1 className='text-[#E5EAEE] pr-1'>|</h1>
                        <h1 className='flex items-center'>10:00 <FaDotCircle  className='text-[#1BC5BD] ml-2'/></h1>
                        <h1 className='text-[#E5EAEE] pr-1'>|</h1>
                        <h1 className='flex items-center'>14:37   <FaDotCircle className='text-[#F64E60] ml-2' /></h1>
                        <h1 className='text-[#E5EAEE] pr-1'>|</h1>
                        <h1 className='flex items-center'>16:50  <FaDotCircle  className='text-[#3699FF] ml-2'/></h1>
                        <h1 className='text-[#E5EAEE] pr-1'>|</h1>
                    </div>

                    <div className='w-[80%]  flex flex-col justify-between  h-[100%] pt-[7%] pb-[9%] px-2'>
                        <h4 className='text-[#80808F] text-[12px] lg:text-[10px] h-[14px] lg:h-[17px]'>Outlines keep you honest. Indulging in poorly driving and keep structure</h4>
                        <h4 className='font-semibold text-[#464E5F] text-[13px] lg:text-[11px] lg:mt-2 '>AEOL meeting with</h4>
                        <h4 className='text-[13px] lg:text-[11px] font-semibold text-[#464E5F] '>Make deposit <span className='text-[#8950FC]'>USD 700</span> to ESL</h4>
                        <h4 className='text-[12px] lg:text-[10px] text-[#80808F] '>Outlines keep you honest. Indulging in poorly driving and keep structure keep you honest great</h4>
                    </div>

                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardTabs