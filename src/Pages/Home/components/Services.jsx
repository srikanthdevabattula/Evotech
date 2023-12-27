import React from 'react'
import lb from '../../../assets/dsf/lb.png'
import add from '../../../assets/dsf/add.png'
import comp from '../../../assets/dsf/comp.png'
import mail from '../../../assets/dsf/mail.png'
const Services = () => {
  return (
    <div className='w-[40%] md:w-[100%] mt-8 ml-8 lg:ml-6 lg:mt-6 flex flex-wrap gap-4 lg:gap-3 sm:gap-2 sm:ml-2 sm:mr-2'>

        <div className='bg-[#FFF4DE] rounded-[12px] w-[48%] h-[211px] lg:h-[190px] flex flex-col items-center justify-center space-y-1'>
            <img src={lb} alt="" />
            <h1 className='text-[24px] sm:text-[16px] font-medium text-[#634000ac]'>Weekly Sales</h1>
        </div>


        <div className='bg-[#EEE5FF] rounded-[12px] w-[48%] h-[211px]  lg:h-[190px]  flex flex-col items-center justify-center space-y-1'>
            <img src={add} alt="" />
            <h1 className='text-[24px] sm:text-[16px] font-medium text-[#8A50FC]'>New Users</h1>
        </div>


        <div className='bg-[#FFE2E6] rounded-[12px] w-[48%] h-[211px]  lg:h-[190px]  flex flex-col items-center justify-center space-y-1'>
            <img src={comp} alt="" />
            <h1 className='text-[24px] sm:text-[16px] font-medium text-[#f65464bf]'>Item Orders</h1>
        </div>


        <div className='bg-[#C9F7F5] rounded-[12px] w-[48%] h-[211px]  lg:h-[190px]  flex flex-col items-center justify-center space-y-1'>
            <img src={mail} alt="" />
            <h1 className='text-[24px] sm:text-[16px] font-medium text-[#74BBB7]'>Bug Reports</h1>
        </div>
    </div>
  )
}

export default Services