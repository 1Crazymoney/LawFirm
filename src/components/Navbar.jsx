import React, {useState} from "react";
import { Link } from "react-router-dom";

let Navitem = ["Home", "Services", "About", "Contact"];

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return(
        <div className="font-poppins flex flex-col justify-center items-center !bg-white">
        <div className="w-full h-[110px] bg-[#FFFFFF] flex justify-center">
          <div className="flex justify-between md:justify-center items-center px-5 w-full max-w-[1440px] sm:px-5 lg:px-24 sm:gap-7 md:gap-12 lg:gap-20 xl:gap-32">
            <Link to="/" className="w-full max-w-fit">
              <img src={"./logo.svg"} alt="logo" />
            </Link>
            <div className="-mb-2.5 hidden md:flex justify-between min-w-[200px] sm:min-w-[200px] md:min-w-[280px] gap-0 sm:gap-5 lg:min-w-[400px] xl:gap-20 w-full font-medium sm:text-xs xl:text-lg md:text-[15px] lg:text-[15px] tracking-tight leading-7">
              {Navitem.map((navitem, index) => {
                return (
                  <Link to= {`/${navitem.toLowerCase()}`}
                    key={index}
                    className="text-[#1C1C23] hover:text-[#DDA45C] font-semibold">
                    {navitem}
                  </Link>
                );
              })}
            </div>
            <div className=" hidden md:flex items-center justify-center gap-6">
              <a
                href="#_"
                className="xl:min-w-[141px] md:min-w-[80px] sm:min-w-[60px] w-full sm:py-2.5 sm:px-5 xl:py-2.5 md:py-1 flex justify-center items-center rounded-[5px] border border-[#DDA45C]"
              >
                <button className="font-normal sm:text-xs xl:text-lg md:text-xs lg:text-sm leading-7 tracking-tight">
                  Login
                </button>
              </a>
              <a
                href="#_"
                className="xl:min-w-[141px] md:min-w-[80px] sm:min-w-[60px] sm:py-2.5 sm:px-5 w-full xl:py-2.5 md:py-1 flex justify-center items-center text-white rounded-[5px] bg-[#DDA45C]"
              >
                <button className="font-normal xl:text-lg sm:text-xs md:text-xs lg:text-sm leading-7 tracking-tight">
                  Register
                </button>
              </a>
            </div>
            <div
              className={
                navbar
                  ? "block max-h-fit py-9 w-[200px] absolute top-20 right-6 bg-white shadow-2xl rounded-lg transition-all ease-in-out duration-500 z-30 md:hidden"
                  : "hidden"
              }
            >
              <div className="flex flex-col -mb-2.5 sm:flex items-center justify-between gap-2.5 sm:gap-5 w-full font-medium sm:text-xs xl:text-lg md:text-[15px] lg:text-[15px] tracking-tight leading-7">
                {Navitem.map((navitem, index) => {
                  return (
                    <Link to= {`/${navitem.toLowerCase()}`}
                    key={index}
                    className="text-[#1C1C23] hover:text-[#DDA45C] font-semibold">
                    {navitem}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div
              className="md:hidden cursor-pointer"
              onClick={() => setNavbar(!navbar)}
            >
              <img
                src={"./menu.svg"}
                alt="menu"
                className="h-[30px]"
              />
            </div>
          </div>
        </div>
    </div>
    )
}
export default Navbar