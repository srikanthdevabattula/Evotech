import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import arrows from '../../assets/arrows.png';
import layer from '../../assets/Layers.png'
import nav1 from '../../assets/nav1.png'
import nav2 from '../../assets/nav2.png'
import nav3 from '../../assets/nav3.png'
import nav4 from '../../assets/nav4.png'
import nav5 from '../../assets/nav5.png'
import br from '../../assets/br.png'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io"
import app from '../../assets/app.png'
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const headerRef = useRef(null);

  const handleArrowClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleOutsideClick = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative font-poppins" ref={headerRef}>
      {sidebarOpen && (
        <div className="fixed top-0 left-0 bottom-0 bg-[#1E1E2D] w-[319px] esm:w-[60%] sm:w-[50%] h-[100vh] z-[1000] ">
			<div className="flex justify-between items-center bg-[#1B1B28] h-[15%] p-4">
				
				<h1 className="text-[30px] sm:text-[17px] font-extrabold text-[white]">DASHBOARD</h1>  <img
          src={arrows}
          alt=""
          className={`w-6 h-6 cursor-pointer ${sidebarOpen ? 'arrow-rotate' : ''}`}
          onClick={handleArrowClick}
        /></div>

		<div className="bg-[#1B1B28] mt-14 py-4 flex items-center pl-8">
			<img src={layer} alt="" />
			<h1 className="text-[white] text-[13px] ">Dashboard</h1>
		</div>


		<div className="mt-14 space-y-4">
			<h4 className="text-[#4A4B68] text-[12px] ml-8">CUSTOM</h4>

			<div className="flex items-center ml-8"><img src={app} alt="" />
			<h1 className="text-[white] text-[13px] ml-3 mr-[130px] sm:mr-[10px]">Applications</h1>
			<IoIosArrowDown className="text-[white]"/>
			</div>

			<div className="flex ml-8 text-[#888C9F] text-[12px] justify-between items-center px-8">
				 <h5 className=" "><span>-</span> User</h5> 
				 <IoIosArrowForward  />
			</div>

			<div className="flex ml-8 text-[#888C9F] text-[12px] justify-between items-center px-8">
				 <h5 className=" "><span>-</span> Contacts</h5> 
				 <IoIosArrowForward  />
			</div>

			<div className="flex ml-8 text-[#888C9F] text-[12px] justify-between items-center px-8">
				 <h5 className=" "><span>-</span> Chat</h5> 
				 <IoIosArrowForward  />
			</div>

			<div className="flex ml-4 text-[#888C9F] text-[12px] justify-between items-center px-8">
				 <h5 className="flex items-center "><img src={br} alt="" /> Pages</h5> 
				 <IoIosArrowForward  />
			</div>
		</div>
          
        </div>
      )}

      <div className="flex items-center p-4 sm:pl-0  z-10 justify-between h-[79px] sm:h-[60px] border-b-[1px]">
		<div className="flex items-center space-x-3">
			<h1 className="text-[20px] font-poppins font-semibold text-[grey] sm:hidden " onClick={handleArrowClick}>Menu</h1>
        <img
          src={arrows}
          alt=""
          className={`w-6 h-6 cursor-pointer rotate-180`}
          onClick={handleArrowClick}
        />
</div>
		<div className="flex">
			<div className="flex space-x-4 sm:space-x-2 items-center">
			<img src={nav1} alt="" className="h-[29px] w-[29px] sm:w-[20px] sm:h-[20px]" />
			<img src={nav2} alt="" className="h-[29px] w-[29px]  sm:w-[20px] sm:h-[20px]"/>
			<img src={nav3} alt="" className="h-[29px] w-[29px]  sm:w-[20px] sm:h-[20px]"/>
			<img src={nav4} alt="" className="h-[29px] w-[29px]  sm:w-[20px] sm:h-[20px]"/>
			<img src={nav5} alt="" className="h-[29px] w-[29px]  sm:w-[20px] sm:h-[20px]"/>
			</div>
		<div className="flex items-center ml-6 space-x-5 sm:space-x-2">
			<p className="font-poppins font-medium text-[11px] sm:text-[8px] text-[#959CB6]">Nick Thomas</p>
			<h1 className="bg-[#D7F9EF] h-[42px] w-[43px] sm:w-[30px] sm:h-[30px] rounded-[4px] text-[#0BB783] font-poppins text-[17px] sm:text-[14px] flex items-center justify-center">N</h1>
		</div>

		</div>
      </div>
    </div>
  );
};

export default Header;
