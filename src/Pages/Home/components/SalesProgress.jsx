import React from 'react'
import { GoDotFill } from "react-icons/go";
import s1 from '../../../assets/Sales/s1.png'
import s2 from '../../../assets/Sales/s2.png'
import s3 from '../../../assets/Sales/s3.png'
import s4 from '../../../assets/Sales/s4.png'
import s5 from '../../../assets/Sales/s5.png'

const SalesProgress = () => {
  return (
    <div className='w-[33%] md:w-[100%] bg-[white] h-[495px] lg:h-[400px] px-8 lg:px-6  mt-8 lg:mt-6 rounded-[12px]  font-poppins'>

        <div className='flex justify-between  pt-8 lg:pt-6'>
            <h1 className='text-[#212121] text-[17px] font-semibold'>Sales Progress</h1>
            <div className='flex space-x-1 text-[#B5B5C3B2]'>
                        <GoDotFill />
                        <GoDotFill />
                        </div>
        </div>

 
<div className='mt-6 space-y-8 lg:space-y-6'>
    <div className='flex items-center space-x-3'>
        <div className='h-[40px] w-[40px] lg:w-[35px] lg:h-[35px] bg-[#EEE5FF] rounded-[12px] flex items-center justify-center'><img src={s1} alt="" /></div>
        <div>
            <h1 className='text-[13px] font-medium '>Briviba SaaS</h1>
        <p className='text-[12px] text-[#B5B5C3] font-medium'>PHP, SQLite, Artisan CLIмм</p>
        </div>
    </div>


    <div className='flex items-center space-x-3'>
        <div className='h-[40px] w-[40px] lg:w-[35px] lg:h-[35px] bg-[#FFF4DE] rounded-[12px] flex items-center justify-center'><img src={s2} alt="" /></div>
        <div>
            <h1 className='text-[13px] font-medium '>Briviba SaaS</h1>
        <p className='text-[12px] text-[#B5B5C3] font-medium'>PHP, SQLite, Artisan CLIмм</p>
        </div>
    </div>


    <div className='flex items-center space-x-3'>
        <div className='h-[40px] w-[40px] lg:w-[35px] lg:h-[35px] bg-[#C9F7F5] rounded-[12px] flex items-center justify-center'><img src={s3} alt="" /></div>
        <div>
            <h1 className='text-[13px] font-medium '>Briviba SaaS</h1>
        <p className='text-[12px] text-[#B5B5C3] font-medium'>PHP, SQLite, Artisan CLIмм</p>
        </div>
    </div>


    <div className='flex items-center space-x-3'>
        <div className='h-[40px] w-[40px] lg:w-[35px] lg:h-[35px] bg-[#FFE2E5] rounded-[12px] flex items-center justify-center'><img src={s4} alt="" /></div>
        <div>
            <h1 className='text-[13px] font-medium '>Briviba SaaS</h1>
        <p className='text-[12px] text-[#B5B5C3] font-medium'>PHP, SQLite, Artisan CLIмм</p>
        </div>
    </div>

    <div className='flex items-center space-x-3'>
        <div className='h-[40px] w-[40px] lg:w-[35px] lg:h-[35px] bg-[#E1E9FF] rounded-[12px] flex items-center justify-center'><img src={s5} alt="" /></div>
        <div>
            <h1 className='text-[13px] font-medium '>Briviba SaaS</h1>
        <p className='text-[12px] text-[#B5B5C3] font-medium'>PHP, SQLite, Artisan CLIмм</p>
        </div>
    </div>
</div>

    </div>
  )
}

export default SalesProgress