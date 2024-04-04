import React, {useEffect, useState} from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import Slider from "react-slick";

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
  ]
  
const About = () => {
        return (
            <div>
                
        <div className="min-h-[700px] sm:min-h-[761px] w-full flex justify-center relative">
        <img
          src="./popular_lawyer_back.png"
          alt="popular"
          className=" h-[700px] sm:h-[761px] object-cover absolute w-full object-left-top"
        />
        <div className="flex mt-5 flex-col gap-2.5 py-5 md:py-0 md:gap-12 items-center justify-center z-10">
          <div className="md:text-4xl text-3xl leading-[60px] tracking-[0.02em] text-[#1C1C23] font-semibold">
            About Us
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
            </div>
        )
    }   

export default About;