import React from 'react'
import { useRef } from 'react';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import Slider from "react-slick";
import everseImg from '../../assets/projects/eversepro.jpeg'
import loginImg from '../../assets/projects/login.jpeg'
import ecomImg from '../../assets/projects/Ecom.jpg'
import travelioImg from '../../assets/projects/travelio.jpeg'
import wineryImg from '../../assets/projects/winery.jpeg'
import ngoImg from '../../assets/projects/ngo.jpeg'
import ecommerceImg from '../../assets/projects/ecommerce.jpeg'
import netflixImg from '../../assets/projects/netflix.jpeg'


const ProjectSection = () => {

  const sliderRef = useRef(null); 

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows:2
  };
  return (
    <>
    <div className="container " id='projects'>
    <div class="heading-container">
        <div class="screen-heading">
            <span>Projects</span>
        </div>
    <div class="screen-sub-heading">
        <span>What I've built</span>
    </div>
    <div class="heading-seperator">
        <div class="seperator-line"></div>
        <div class="seperator-blob"><div>
    </div>

    </div>
    </div>

    
    </div>
    
    
    
    </div>
    <div className='p-4'>
      <div className='flex flex-row items-end justify-end'>
      <MdChevronLeft className='hover:bg-gray-300  rounded-[50%]'
         size={30}
         onClick={()=>sliderRef.current.slickPrev()}/>
      <MdChevronRight className='hover:bg-gray-300  rounded-[50%]'
      size={30}
      onClick={()=>sliderRef.current.slickNext()}/>
      </div>
    <Slider {...settings} ref={sliderRef}>
    
   
    <div className='relative flex items-center justify-center h-[350px] w-[40%]  shadow-gray-400  rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <img className='rounded-xl group-hover:opacity-20  shadow-md shadow-black/30' src={everseImg} alt={'everse'}/>
        <div className='hidden absolute group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl font-bold text-white text-center -tracking-wider'>Ecommerce</h3>
          <p className='pb-4 pt-2 text-white text-center'>Next JS</p>
          <a href='https://eversepro.com/homepage'>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>View demo</p>
          </a>
        </div>
    </div>

    <div className='relative flex items-center justify-center h-[350px] w-[40%]  shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <img className='rounded-xl group-hover:opacity-20  shadow-md shadow-black/30' src={netflixImg} alt={'everse'}/>
        <div className='hidden absolute group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl font-bold text-white text-center -tracking-wider'>Netflix UI </h3>
          <p className='pb-4 pt-2 text-white text-center'>React JS</p>
          <a href='https://arunwosti.github.io/signup'>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>View demo</p>
          </a>
        </div>
    </div>
  
  <div className='relative flex items-center justify-center h-[350px] w-[40%]  shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <img className='rounded-xl group-hover:opacity-20  shadow-md shadow-black/30' src={loginImg} alt={'everse'}/>
        <div className='hidden absolute group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl font-bold text-white text-center -tracking-wider'>NGO Website</h3>
          <p className='pb-4 pt-2 text-white text-center'>React JS</p>
          <a href='https://cvwn.logindesigns.com/'>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>View demo</p>
          </a>
        </div>
    </div>

    <div className='relative flex items-center justify-center h-[350px] w-[40%] shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <img className='rounded-xl group-hover:opacity-20 shadow-md shadow-black/30' src={ecommerceImg} alt={'everse'}/>
        <div className='hidden absolute group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl font-bold text-white text-center -tracking-wider'>Ecommerce</h3>
          <p className='pb-4 pt-2 text-white text-center'>React JS</p>
          <a href='https://arunwosti.github.io/Akira-Ecommerce/'>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>View demo</p>
          </a>
        </div>
    </div>

    <div className='relative flex items-center justify-center h-[350px] w-[40%] shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <img className='rounded-xl group-hover:opacity-20 shadow-md shadow-black/30' src={travelioImg} alt={'everse'}/>
        <div className='hidden absolute group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl font-bold text-white text-center -tracking-wider'>Travel Agency</h3>
          <p className='pb-4 pt-2 text-white text-center'>HTML, CSS, JS & Bootstrap</p>
          <a href='https://arunwosti.github.io/Travel_website/#home'>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>View demo</p>
          </a>
        </div>
    </div>

    <div className='relative flex items-center justify-center h-[350px] w-[40%] shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <img className='rounded-xl group-hover:opacity-20 shadow-md shadow-black/30' src={wineryImg} alt={'everse'}/>
        <div className='hidden absolute group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl font-bold text-white text-center -tracking-wider'>Corporate website for winery</h3>
          <p className='pb-4 pt-2 text-white text-center'>HTML, CSS, JS & Bootstrap</p>
          <a href='https://arunwosti.github.io/winery_website/'>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>View demo</p>
          </a>
        </div>
    </div>

    <div className='relative flex items-center justify-center h-[350px] w-[40%] shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <img className='rounded-xl group-hover:opacity-20 shadow-md shadow-black/30' src={ngoImg} alt={'everse'}/>
        <div className='hidden absolute group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl font-bold text-white text-center -tracking-wider'>NGO Website</h3>
          <p className='pb-4 pt-2 text-white text-center'>HTML, CSS, JS & Bootstrap</p>
          <a href='https://arunwosti.github.io/ngo_website/'>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>View demo</p>
          </a>
        </div>
    </div>
    <div className='relative flex items-center justify-center h-[350px] w-[40%] shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <img className='rounded-xl group-hover:opacity-20 shadow-md shadow-black/30' src={ecomImg} alt={'everse'}/>
        <div className='hidden absolute group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl font-bold text-white text-center -tracking-wider'>Ecommerce</h3>
          <p className='pb-4 pt-2 text-white text-center'>REact JS</p>
          <a href='https://arun-clothing-ecommerce.herokuapp.com/'>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>View demo</p>
          </a>
        </div>
    </div>
  </Slider>
    </div>
  </>
  )
}

export default ProjectSection