import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link, useNavigate } from "react-router-dom";

const settings_first = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  let Navitem = ["Home", "Services", "About", "Contact"];
  
  let whychooseData = [
    "CLIENT-FOCUSED SOLUTIONS AND RESULTS",
    "FLEXIBLE, VALUE-DRIVEN APPROACH",
    "BEYOND THE BILLABLE HOUR",
    "WE POSSES LAW DEGREES AND LAW PRACTICE EXPERIENCE",
  ];
  
  let popularcatData = [
    {
      title: "Private Assets Consolidation",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in nibh tempor sit eros id sapien velit vitae. Blandit ultricies vivamus lectus ultrices mi sollicitudin magnis hendrerit.",
      img: "./aconso.jpg",
    },
    {
      title: "Corporates and Commercial",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in nibh tempor sit eros id sapien velit vitae. Blandit ultricies vivamus lectus ultrices mi sollicitudin magnis hendrerit.",
      img: "./cat_two.png",
    },
    {
      title: "Insurance Advisory",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in nibh tempor sit eros id sapien velit vitae. Blandit ultricies vivamus lectus ultrices mi sollicitudin magnis hendrerit.",
      img: "./cat_three.png",
    },
    {
      title: "Asset Acquisition & Sale",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in nibh tempor sit eros id sapien velit vitae. Blandit ultricies vivamus lectus ultrices mi sollicitudin magnis hendrerit.",
      img: "./cat_one.png",
    },
  ];
  
  let popularLawyer = [
    {
      mainTitle: "JAMES MILNER",
      subTitle: "Criminal Lawyer",
      exp: "20",
      reviews: "123",
      img_lawyer: "./lawyer_one.png",
    },
    {
      mainTitle: "JAMES MILNER",
      subTitle: "Criminal Lawyer",
      exp: "20",
      reviews: "123",
      img_lawyer: "./lawyer_two.png",
    },
    {
      mainTitle: "JAMES MILNER",
      subTitle: "Criminal Lawyer",
      exp: "20",
      reviews: "123",
      img_lawyer: "./lawyer_three.png",
    },
    {
      mainTitle: "JAMES MILNER",
      subTitle: "Criminal Lawyer",
      exp: "20",
      reviews: "123",
      img_lawyer: "./lawyer_one.png",
    },
  ];
  
  let customer = [
    {
      cus_img: "./customer_one.svg",
      cus_mainTitle: "JAMES MILNER",
      cus_subTitle: "CEO, Financial corp.",
      cus_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, orci lectus neque nascetur amet, suscipit feugiat. Et, diam tristique quisque platea viverra amet, eget.",
    },
    {
      cus_img: "./customer_three.svg",
      cus_mainTitle: "JAMES MILNER",
      cus_subTitle: "CEO, Financial corp.",
      cus_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, orci lectus neque nascetur amet, suscipit feugiat. Et, diam tristique quisque platea viverra amet, eget.",
    },
    {
      cus_img: "./customer_one.svg",
      cus_mainTitle: "JAMES MILNER",
      cus_subTitle: "CEO, Financial corp.",
      cus_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, orci lectus neque nascetur amet, suscipit feugiat. Et, diam tristique quisque platea viverra amet, eget.",
    },
    {
      cus_img: "./customer_three.svg",
      cus_mainTitle: "JAMES MILNER",
      cus_subTitle: "CEO, Financial corp.",
      cus_content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel, orci lectus neque nascetur amet, suscipit feugiat. Et, diam tristique quisque platea viverra amet, eget.",
    },
  ];
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <img src={"./Next_icon.svg"} alt="" className="w-2.5" />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <img
          src={"./previous_icon.svg"}
          alt="previous"
          className="w-2.5"
        />
      </div>
    );
  }
const Home = () => {

  const navigate = useNavigate();
  function handleConsult(){
    navigate('/contact')
  }
  function serviceHandler(){
    navigate("/services")
  }
  return (
    <>
      <div className="font-poppins flex flex-col justify-center items-center !bg-white">
       
        <div className="pt-[5%] z-10 md:pt-[30%] lg:pt-[15%] relative xl:pt-0 w-full md:min-h-[609px] min-h-[400px] flex flex-col items-center md:gap-16 sm:gap-10 gap-7 justify-center">
          <div className="w-full md:h-[609px] h-[400px]  top-0 absolute">
            <div className="h-full w-full bg-black z-20  opacity-[0.5] absolute"></div>
            <img
              src={"./bgimg.webp"}
              alt="btn-arrow"
              className="w-full md:h-[609px] h-[400px] z-10  object-left-top object-cover"
            />
          </div>
          <div className="absolute flex justify-center flex-col items-center gap-14 z-30">
            <div className="flex flex-col gap-5 md:gap-5">
              <div className="text-center text-white mx-auto text-2xl leading-9 sm:text-5xl sm:leading-[50px] md:text-4xl lg:text-5xl md:leading-[48px] lg:leading-[60px] font-extrabold lg:max-w-[514px] md:max-w-[414px] max-w-[300px] sm:max-w-[550px]">
                Here at <span className="text-[#DDA45C]"> Advocate</span>, Every
                client matters
              </div>
              <div className="text-white text-center md:max-w-[613px] max-w-[380px] sm:max-w-[500px] text-sm md:text-xl leading-5 md:leading-[28px] tracking-[0.02em]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br></br> Lectus nunc scelerisque est aenean sed nunc id
                tincidunt.
              </div>
            </div>

            
              <div onClick={handleConsult} className="flex items-center justify-center gap-6 md:max-w-[241px] max-w-[170px] w-full py-3 rounded-[6px] text-white bg-[#DDA45C] cursor-pointer">
              <button  className="text-sm md:text-xl font-medium leading-4 md:leading-7 tracking-tight">
                Consult Lawyers
              </button>
              
              <Link to='/contact'>
              <div>
                <img
                  src={"./button_arrow.svg"}
                  alt="btn-arrow"
                />
              
              </div>
              </Link>
              </div>
            
             
            
          </div>
        </div>
        <div className="min-h-[700px] sm:min-h-[761px] w-full flex justify-center relative">
          <img
            src="./popular_lawyer_back.png"
            alt="popular"
            className=" h-[700px] sm:h-[761px] object-cover absolute w-full object-left-top"
          />
          <div className="flex mt-5 flex-col gap-2.5 py-5 md:py-0 md:gap-12 items-center justify-center z-10">
            <div className="md:text-4xl text-3xl leading-[60px] tracking-[0.02em] text-[#1C1C23] font-semibold">
              Popular Lawyers
            </div>
            <div className="lawyers mx-0.5">
              <Slider {...settings_first}>
                {popularLawyer.map((data, index) => {
                  return (
                    <div className="w-full !flex !justify-center" key={index}>
                      <div
                        key={index}
                        className="max-w-[365px] bg-white rounded-b-[5px]"
                      >
                        <div>
                          <img
                            src={data.img_lawyer}
                            alt=""
                            className="w-full hover:opacity-75 cursor-pointer"
                          />
                        </div>
                        <div className="h-[224px] flex flex-col">
                          <div className="flex py-3.5 flex-col items-center">
                            <div className="text-lg leading-7 tracking-[0.04em] font-normal">
                              {data.mainTitle}
                            </div>
                            <div className="text-xs leading-[18px] tracking-[0.04em] text-[#707070] font-medium">
                              {data.subTitle}
                            </div>
                          </div>
                          <div className="h-[1px] w-full !bg-white"></div>
                          <div className="flex flex-col gap-7 mx-auto max-w-[308px] xl:max-w-[308px] lg:max-w-[280px] w-full px-1">
                            <div className=" pt-3.5 w-full items-center flex justify-between">
                              <div className="w-[87px] text-start text-base font-normal leading-5">
                                <span className="font-semibold">
                                  {data.exp}+
                                </span>
                                Yrs Experience
                              </div>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <div>5.0</div>
                                  <div className="flex items-center gap-[3px]">
                                    <img
                                      src={"./star.svg"}
                                      alt="star"
                                    />
                                    <img
                                      src={"./star.svg"}
                                      alt="star"
                                    />
                                    <img
                                      src={"./star.svg"}
                                      alt="star"
                                    />
                                    <img
                                      src={"./star.svg"}
                                      alt="star"
                                    />
                                    <img
                                      src={"./star.svg"}
                                      alt="star"
                                    />
                                  </div>
                                </div>
                                <div className="text-start">
                                  {data.reviews} Reviews
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <div className="max-w-[128px] w-full py-2 bg-[#DDA45C] rounded-[4px] flex justify-center cursor-pointer">
                                <button className="text-white flex items-center justify-center gap-2.5">
                                  <img
                                    src={"./call.svg"}
                                    alt="call"
                                  />
                                  Call Now
                                </button>
                              </div>
                              <div className="max-w-[128px] w-full py-2 rounded-[4px] border-[1px] border-[#DDA45C] flex justify-center cursor-pointer">
                                <button className="flex items-center justify-center gap-2.5">
                                  <img
                                    src={"./chat.svg"}
                                    alt="chat"
                                  />
                                  Chat Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="max-w-[158px] px-[35px] mx-auto mt-10 sm:mt-0 bg-[#DDA45C] py-[11px] flex items-center text-white justify-center rounded-[6px] cursor-pointer">
              <button className="text-base leading-6 tracking-[0.02em] font-normal">
                View All
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-14 flex flex-col items-center gap-6 lg:gap-14 md:gap-7">
          <div className="lg:text-[40px] text-[28px] md:text-[30px] leading-[68px] tracking-[0.02em] text-[#1C1C23] font-semibold">
            Popular Services
          </div>
          <div className="flex md:flex-row  xl:gap-12 md:px-[2%] md:gap-7 lawyers">
            <Slider {...settings_first}>
              {popularcatData.map((data, index) => {
                return (
                  <div key={index} className="w-full flex justify-center">
                    <div
                      className={`relative bg-black rounded-[8px] bg-no-repeat bg-cover w-full min-h-[377px] flex justify-center items-end`}
                    >
                    
                      <div
                        style={{
                          backgroundImage: `url(${data.img})`,
                          backgroundSize: "cover",
                        }}
                        className={`w-full absolute rounded-[8px] bg-black opacity-[0.4] min-h-[377px] h-full `}
                      ></div>

                      <div className="rounded-[8px] absolute z-10 flex flex-col  xl:gap-7 lg:gap-2.5 md:gap-3.5 top-7 left-11 pr-2">
                        <div className="xl:text-[32px] lg:text-[28px] text-xl md:text-[30px] text-start leading-[48px] text-white font-semibold">
                          {data.title}
                        </div>
                        <div className="lg:max-w-fit max-w-xs xl:max-w-fit md:max-w-fit pr-0 md:pr-[20%] lg:pr-[15%] text-justify text-white lg:text-xl text-lg  md:leading-[32px] lg:leading-7 font-normal description-truncate">
                          {data.des}
                        </div>
                        <div className="flex item-center gap-4 text-[#DDA45C] text-start lg:text-xl text-lg leading-7 font-medium cursor-pointer w-fit">
                          <span>Explore</span>
                          <div className="flex items-center">
                            <img
                              src={"/assets/advocate/Cat_arrow.svg"}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div>
            <div onClick={serviceHandler} className="px-[24px] text-white leading-6 tracking-[0.02em] font-normal py-2.5 bg-[#DDA45C] rounded-[6px] mt-10 sm:mt-0 cursor-pointer">
              
                <button  className="text-base">All Services</button>
              
            </div>
          </div>
        </div>
        <div className="mt-14 relative flex w-full bg-chooseus-back bg-cover md:min-h-[500px] min-h-[400px]">
          <img
            src="./chooseus_back.png"
            alt="popular"
            className="md:h-[500px] h-[400px] object-cover absolute w-full object-left-top"
          />
          <div className="h-full w-full absolute bg-black opacity-[0.7]"></div>
          <div className="flex absolute top-[50%] transform translate-x-[-52%] translate-y-[-50%] left-[50%] z-10 mx-auto flex-col lg:flex-row justify-center gap-12 md:gap-10 xl:gap-32 items-center max-w-[1216px] w-full">
            <div className="w-max mx-auto pl-[15px] text-white font-semibold lg:text-[40px] xl:text-[54px] md:text-[40px] md:leading-5 text-3xl lg:leading-[61px] xl:leading-[81px] tracking-[0.02em] lg:max-w-[140px]">
              Why<span className="text-[#DDA45C]"> Choose </span> Us ?
            </div>
            <div className="px-[10%] lg:px-0 flex flex-col md:gap-7 lg:gap-10 xl:gap-16 gap-5 sm:gap-7">
              {whychooseData.map((data, index) => (
                <div key={index} className="flex items-center md:gap-6 gap-3.5">
                  <div className="min-w-[40px]">
                    <img src={"./rightarrow.svg"} alt="arrow" />
                  </div>
                  <div className="lg:text-2xl xl:text-3xl sm:text-sm md:text-2xl text-start lg:leading-10 md:leading-7 text-sm leading-5 text-white font-medium">
                    {data}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 min-h-[440px] flex flex-col gap-5 lg:gap-14 xl:max-w-[1234px]">
          <div className="lg:text-[40px] text-center text-lg sm:text-[30px] leading-[60px] tracking-[0.02em] text-[#1C1C23] font-semibold">
            Hear it From Our Customers
          </div>
          <div className="mb-5 flex template justify-center xl:max-w-[1234px] lawyers">
            <Slider {...settings} className="flex justify-center">
              {customer.map((data, index) => {
                return (
                  <div className="w-full !flex !justify-center" key={index}>
                    <div className="hover:scale-95 duration-1000 max-w-[365px] w-full min-h-[278px] flex flex-col gap-3.5 bg-[#FFFFFF] shadow-xl rounded-b-[5px]">
                      <div className="flex items-center gap-3.5 px-6 pt-4">
                        <div>
                          <img src={data.cus_img} alt="one" />
                        </div>
                        <div className="mr-[34px]">
                          <div className="text-base md:text-lg whitespace-nowrap leading-7 tracking-[0.04em] text-[#1C1C23] font-normal">
                            {data.cus_mainTitle}
                          </div>
                          <div className="text-xs text-start leading-[18px] tracking-[0.04em] text-[#707070] font-medium">
                            {data.cus_subTitle}
                          </div>
                        </div>
                        <div>
                          <img
                            src={"./quote_mark.svg"}
                            alt="icon"
                          />
                        </div>
                      </div>
                      <div className=" w-full border-b-2 border-[#DDA45C] py-3"></div>
                      <div className="text-justify px-6 mt-2.5 pb-[25px]">
                        {data.cus_content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="w-full">
          <div className="flex md:mt-14 mt-0 flex-col items-center justify-center max-h-fit xl:max-w-full w-full bg-[#000D13]">
            <div className="flex gap-5 px-3 xl:gap-28 lg:gap-12 flex-col md:flex-row md:gap-5 justify-center mt-8 md:mt-14 xl:px-0 md:px-7 max-w-xl md:max-w-7xl">
              <div className="flex flex-col gap-3.5 lg:gap-6 md:gap-3.5">
                <a href="#_" className="max-w-fit -mt-2.5">
                  <img src={"./logofooter.svg"} alt="footer" />
                </a>
                <div className="text-[#F2F2F2] xl:max-w-[249px] lg:max-w-[249px] md:max-w-[190px] text-justify xl:text-base md:text-xs lg:text-sm leading-6 tracking-[0.02em] font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  habitant enim eget at non, integer non tempus.
                </div>
                <div className="flex justify-between max-w-[200px] lg:gap-7 gap-3.5 items-center">
                  <img
                    src={"./facebookicon.svg"}
                    alt="facebook"
                    className="cursor-pointer"
                  />
                  <img
                    src={"./linkedinicon.svg"}
                    alt="linkedin"
                    className="cursor-pointer"
                  />
                  <img
                    src={"./twittericon.svg"}
                    alt="twitter"
                    className="cursor-pointer"
                  />
                  <img
                    src={"./instagramicon.svg"}
                    alt="instagram"
                    className="cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex flex-col md:gap-6 gap-2.5">
                <div className="text-[#DDA45C] xl:text-xl lg:text-lg md:text-sm leading-7 tracking-[0.02em] text-justify font-semibold">
                  Links
                </div>
                {Navitem.map((navitem, index) => {
                  return (
                    <a
                      key={index}
                      href="#_"
                      className="text-[#F2F2F2] xl:text-base lg:text-sm md:text-xs leading-6 font-normal text-justify"
                    >
                      {navitem}
                    </a>
                  );
                })}
              </div>
              <div className="flex flex-col md:gap-6 gap-2.5">
              
                <div className="text-[#DDA45C] xl:text-xl lg:text-lg md:text-sm leading-7 tracking-[0.02em] text-justify font-semibold">
                  Services
                </div>

                <div className="flex gap-8 w-full text-[#F2F2F2] xl:text-base lg:text-sm md:text-xs leading-6 font-normal text-justify">
                  <a href="#_" className="lg:w-28 w-24 md:w-20">
                    Drug crime
                  </a>
                  <a href="#_">Evading</a>
                </div>
                <div className="flex gap-8 text-[#F2F2F2] xl:text-base lg:text-sm md:text-xs leading-6 font-normal text-justify">
                  <a href="#_" className="lg:w-28 w-24 md:w-20">
                    Robbery
                  </a>
                  <a href="#_">Hit and Run</a>
                </div>
                <div className="flex gap-8 text-[#F2F2F2] xl:text-base lg:text-sm md:text-xs leading-6 font-normal text-justify">
                  <a href="#_" className="lg:w-28 w-24 md:w-20">
                    Investigations
                  </a>
                  <a href="#_" className="tett-strat flex justify-start">
                    Theft
                  </a>
                </div>
                <div className="flex gap-8 text-[#F2F2F2] xl:text-base lg:text-sm md:text-xs leading-6 font-normal text-justify">
                  <a href="#_" className=" lg:w-28 w-24 md:w-20">
                    Assault
                  </a>
                  <a href="#_" className="whitespace-nowrap">
                    Disturbing the peace
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 lg:gap-6 md:gap-3.5">
                <div className="text-[#DDA45C] xl:text-xl lg:text-lg md:text-sm leading-7 tracking-[0.02em] text-justify font-semibold">
                  Contact
                </div>
                <div className="max-w-[243px] text-[#F2F2F2] xl:text-base lg:text-sm md:text-xs leading-6 font-normal text-start">
                  802, Orbit complex, C.G Road, Ahmedabad, 380009.
                </div>
                <div className="text-[#F2F2F2] xl:text-base lg:text-sm md:text-xs leading-6 font-normal text-justify">
                  +91 12345 67890
                </div>
                <div className="text-[#F2F2F2] xl:text-base lg:text-sm md:text-xs leading-6 font-normal text-justify">
                  info.advocate@gmail.com
                </div>
                <div className="text-[#F2F2F2]  text-sm leading-6 font-normal text-justify">
                  <a href="#_">
                    <div className="xl:max-w-[211px] lg:max-w-[170px] md:max-w-[170px] lg:py-3 md:py-2 py-2.5 bg-[#DDA45C] text-center text-white font-medium">
                      <button>Book free Consultation</button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[1.17px] md:mt-3.5 mt-2.5 w-full bg-[#A3A3A3]"></div>
            <div className="flex gap-2 items-start px-3 xl:px-0 md:px-7 md:flex-row justify-between md:items-center w-full max-w-xl md:max-w-7xl flex-wrap md:mt-7 mt-2.5 mb-3.5">
              <div className="text-white text-sm xl:text-base whitespace-nowrap lg:text-sm md:text-xs flex items-center gap-1">
                Advocate
                <img src={"./copyright.svg"} alt="copyright" />
                {new Date().getFullYear()} All Rights Reserved
              </div>
              <div className="flex md:gap-4 gap-1.5 whitespace-nowrap text-white font-normal leading-6 text-sm xl:text-base lg:text-sm md:text-xs tracking-[0.02em]">
                <div className="cursor-pointer">Terms of Service</div>
                <div>|</div>
                <div className="cursor-pointer">Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
