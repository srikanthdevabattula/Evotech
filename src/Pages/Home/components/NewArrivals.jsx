import React from 'react'
import n1 from '../../../assets/new/n1.png'
import n2 from '../../../assets/new/n2.png'
import n3 from '../../../assets/new/n3.png'
import n4 from '../../../assets/new/n4.png'
import n5 from '../../../assets/new/n5.png'
import settings from '../../../assets/new/settings.png'
import trash from '../../../assets/new/Trash.png'
import write from '../../../assets/new/Write.png'
const NewArrivals = () => {
  return (
    <div className='w-[65%] md:w-[100%] h-[495px] lg:h-[400px] sm:h-auto bg-[white] mt-8 ml-8 lg:mt-6 lg:ml-6 md:ml-0 sm:px-1 sm:py-3 rounded-[12px] font-poppins'>

            <div className='flex justify-between p-8 lg:p-5 sm:p-2 items-center'>
                <div >
                    <h1 className='text-[18px] lg:text-[16px] sm:text-[11px] font-medium text-[#212121]'>New Arrivals</h1>
                    <p className='text-[#B5B5C3] font-medium text-[12px] lg:text-[11px] sm:text-[9px]'>More than 400+ new members</p>
                </div>
                <div className='flex space-x-3 text-[#B5B5C3] font-semibold text-[12px] sm:text-[9px]'>
                   <button className='w-[53px] sm:w-[30px]'>Month</button>
                   <button className='w-[53px] sm:w-[30px]'>Week</button>
                   <button className='h-[34px] w-[53px] sm:w-[30px] bg-[#464E5F] rounded-[6px]'>Day</button>
                </div>
            </div>

            <div className='px-8 sm:px-0 space-y-5 sm:space-y-2'>

                <div className='flex justify-between'>
                    <div className='flex items-center space-x-4'>
                        <div className='bg-[#F3F6F9] h-[50px] w-[50px] lg:h-[40px] lg:w-[40px] flex justify-center items-center rounded-[6px] sm:hidden'> <img src={n1} alt="" /></div>
                   
                    <div>
                        <h1 className='text-[#464E5F] font-semibold text-[14px] lg:text-[12px] sm:text-[9px]'>Sant Outstanding</h1>
                    <p className='text-[13px] sm:text-[9px] font-semibold text-[#464E5F]'>FTP: <span className='text-[#B5B5C3]'>bprow@bnc.cc</span></p>
                    </div>
                    </div>
                    <div className='flex space-x-[50px] lg:space-x-[30px] sm:space-x-1 items-center'>
                    <div className='text-right'>
                        <h1 className='text-[#464E5F] text-[14px] lg:text-[12px] sm:text-[8px] font-semibold'>$2,000,000</h1>
                        <p className='text-[#B5B5C3] font-medium text-[13px] lg:text-[11px] sm:text-[7px]'>paid</p>
                    </div>
                    <button className='bg-[#EEE5FF] rounded-[6px] w-[74px] h-[26px] text-[#8950FC] font-medium text-[11px] sm:text-[6px] sm:w-[40px] sm:h-[20px]'>Approved</button>
                    <div className='flex space-x-3 sm:space-x-1'>
                        <div className='h-[32px] w-[32px] sm:w-[20px] sm:h-[20px] bg-[#F3F6F9] rounded-[6px] flex items-center justify-center'><img src={settings} alt="" /></div>
                        <div className='h-[32px] w-[32px] sm:w-[20px] sm:h-[20px] bg-[#F3F6F9] rounded-[6px] flex items-center justify-center'><img src={write} alt="" /></div>
                        <div className='h-[32px] w-[32px] sm:w-[20px] sm:h-[20px] bg-[#F3F6F9] rounded-[6px] flex items-center justify-center'><img src={trash} alt="" /></div>
                       
                    </div>
                </div>
                </div>

                <div className='flex justify-between'>
                    <div className='flex items-center space-x-4'>
                        <div className='bg-[#F3F6F9] h-[50px] w-[50px] lg:h-[40px] lg:w-[40px] flex justify-center items-center rounded-[6px] sm:hidden'> <img src={n2} alt="" /></div>
                   
                    <div>
                        <h1 className='text-[#464E5F] font-semibold text-[14px] lg:text-[12px] sm:text-[9px]'>Telegram Application</h1>
                    <p className='text-[13px] sm:text-[9px] font-semibold text-[#464E5F]'>FTP: <span className='text-[#B5B5C3]'>bprow@bnc.cc</span></p>
                    </div>
                    </div>
                    <div className='flex space-x-[50px] lg:space-x-[30px] sm:space-x-1 items-center'>
                    <div className='text-right'>
                        <h1 className='text-[#464E5F] text-[14px] lg:text-[12px] sm:text-[8px] font-semibold'>$4,600,000</h1>
                        <p className='text-[#B5B5C3] font-medium text-[13px] lg:text-[11px] sm:text-[7px]'>paid</p>
                    </div>
                    <button className='bg-[#FFF4DE] rounded-[6px] w-[74px] h-[26px] text-[#FFA800] font-medium text-[11px] sm:text-[6px] sm:w-[40px] sm:h-[20px]'>In Progress</button>
                    <div className='flex space-x-3 sm:space-x-1'>
                        <div className='h-[32px] w-[32px] sm:w-[20px] sm:h-[20px] bg-[#F3F6F9] rounded-[6px] flex items-center justify-center'><img src={settings} alt="" /></div>
                        <div className='h-[32px] w-[32px] sm:w-[20px] sm:h-[20px] bg-[#F3F6F9] rounded-[6px] flex items-center justify-center'><img src={write} alt="" /></div>
                        <div className='h-[32px] w-[32px] sm:w-[20px] sm:h-[20px] bg-[#F3F6F9] rounded-[6px] flex items-center justify-center'><img src={trash} alt="" /></div>
                       
                    </div>
                </div>
                </div>


                <div className='flex justify-between'>
                    <div className='flex items-center space-x-4'>
                        <div className='bg-[#F3F6F9] h-[50px] w-[50px] lg:h-[40px] lg:w-[40px] flex justify-center items-center rounded-[6px] sm:hidden'> <img src={n3} alt="" /></div>
                   
                    <div>
                        <h1 className='text-[#464E5F] font-semibold text-[14px] lg:text-[12px] sm:text-[9px]'>Cisco Management</h1>
                    <p className='text-[13px] sm:text-[9px] font-semibold text-[#464E5F]'>FTP: <span className='text-[#B5B5C3]'>bprow@bnc.cc</span></p>
                    </div>
                    </div>
                    <div className='flex space-x-[50px] lg:space-x-[30px] sm:space-x-1 items-center'>
                    <div className='text-right'>
                        <h1 className='text-[#464E5F] text-[14px] lg:text-[12px] sm:text-[8px] font-semibold'>$560,000</h1>
                        <p className='text-[#B5B5C3] font-medium text-[13px] lg:text-[11px] sm:text-[7px]'>paid</p>
                    </div>
                    <button className='bg-[#C9F7F5] rounded-[6px] w-[74px] h-[26px] text-[#1BC5BD] font-medium text-[11px] sm:text-[6px] sm:w-[40px] sm:h-[20px]'>Success</button>
                    <div className='flex space-x-3 sm:space-x-1'>
                        <div className='h-[32px] w-[32px] sm:w-[20px] sm:h-[20px] bg-[#F3F6F9] rounded-[6px] flex items-center justify-center'><img src={settings} alt="" /></div>
                        <div className='h-[32px] w-[32px] sm:w-[20px] sm:h-[20px] bg-[#F3F6F9] rounded-[6px] flex items-center justify-center'><img src={write} alt="" /></div>
                        <div className='h-[32px] w-[32px] sm:w-[20px] sm:h-[20px] bg-[#F3F6F9] rounded-[6px] flex items-center justify-center'><img src={trash} alt="" /></div>
                       
                    </div>
                </div>
                </div>




                <div className='flex justify-between'>
                    <div className='flex items-center space-x-4'>
                        <div className='bg-[#F3F6F9] h-[50px] w-[50px] lg:h-[40px] lg:w-[40px] flex justify-center items-center rounded-[6px] sm:hidden'> <img src={n4} alt="" /></div>
                   
                    <div>
                        <h1 className='text-[#464E5F] font-semibold text-[14px] lg:text-[12px] sm:text-[9px]'>HR Management</h1>
                    <p className='text-[13px] sm:text-[9px] font-semibold text-[#464E5F]'>FTP: <span className='text-[#B5B5C3]'>bprow@bnc.cc</span></p>
                    </div>
                    </div>
                    <div className='flex space-x-[50px] lg:space-x-[30px] sm:space-x-1 items-center'>
                    <div className='text-right'>
                        <h1 className='text-[#464E5F] text-[14px] lg:text-[12px] font-semibold sm:text-[8px]'>$57,000</h1>
                        <p className='text-[#B5B5C3] font-medium text-[13px] lg:text-[11px] sm:text-[7px]'>paid</p>
                    </div>
                    <button className='bg-[#FFE2E5] rounded-[6px] w-[74px] h-[26px] text-[#F64E60] font-medium text-[11px] sm:text-[6px] sm:w-[40px] sm:h-[20px]'>Rejected</button>
                    <div className='flex space-x-3 sm:space-x-1'>
                        <div className='h-[32px] w-[32px] sm:w-[20px] sm:h-[20px] bg-[#F3F6F9] rounded-[6px] flex items-center justify-center'><img src={settings} alt="" /></div>
                        <div className='h-[32px] w-[32px] sm:w-[20px] sm:h-[20px] bg-[#F3F6F9] rounded-[6px] flex items-center justify-center'><img src={write} alt="" /></div>
                        <div className='h-[32px] w-[32px]  sm:w-[20px] sm:h-[20px] bg-[#F3F6F9] rounded-[6px] flex items-center justify-center'><img src={trash} alt="" /></div>
                       
                    </div>
                </div>
                </div>




                <div className='flex justify-between'>
                    <div className='flex items-center space-x-4'>
                        <div className='bg-[#F3F6F9] h-[50px] w-[50px] lg:h-[40px] lg:w-[40px] flex justify-center items-center rounded-[6px] sm:hidden'> <img src={n5} alt="" /></div>
                   
                    <div>
                        <h1 className='text-[#464E5F] font-semibold text-[14px] lg:text-[12px] sm:text-[9px]'>KTR Mobile Application</h1>
                    <p className='text-[13px] sm:text-[9px] font-semibold text-[#464E5F]'>FTP: <span className='text-[#B5B5C3]'>bprow@bnc.cc</span></p>
                    </div>
                    </div>
                    <div className='flex space-x-[50px] lg:space-x-[30px] sm:space-x-1 items-center'>
                    <div className='text-right'>
                        <h1 className='text-[#464E5F] text-[14px] lg:text-[12px] font-semibold sm:text-[8px]'>$45,200,000</h1>
                        <p className='text-[#B5B5C3] font-medium text-[13px] lg:text-[11px] sm:text-[7px]'>paid</p>
                    </div>
                    <button className='bg-[#FFF4DE] rounded-[6px] w-[74px] h-[26px] text-[#FFA800] font-medium text-[11px] sm:text-[6px] sm:w-[40px] sm:h-[20px]'>In Progress</button>
                    <div className='flex space-x-3 sm:space-x-1'>
                        <div className='h-[32px] w-[32px] sm:w-[20px] sm:h-[20px] bg-[#F3F6F9] rounded-[6px] flex items-center justify-center'><img src={settings} alt="" /></div>
                        <div className='h-[32px] w-[32px] sm:w-[20px] sm:h-[20px] bg-[#F3F6F9] rounded-[6px] flex items-center justify-center'><img src={write} alt="" /></div>
                        <div className='h-[32px] w-[32px] sm:w-[20px] sm:h-[20px] bg-[#F3F6F9] rounded-[6px] flex items-center justify-center'><img src={trash} alt="" /></div>
                       
                    </div>
                </div>
                </div>
            </div>
    </div>
  )
}

export default NewArrivals