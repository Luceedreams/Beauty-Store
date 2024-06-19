import React, { useState } from 'react'
import './Brand.css'
import { RxDot, RxDotFilled } from 'react-icons/rx'
import logo_001 from "../../assets/logo_001.png";
import logo_002 from "../../assets/logo_002.png"
import logo_003 from "../../assets/logo_003.png"
import logo_004 from "../../assets/logo_004.png"
import logo_005 from "../../assets/logo_005.png"
import logo_006 from "../../assets/logo_006.png"


const Brand = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const slide = [


  ]
  function handlePreviousSlide() {
    setSlideIndex((previousIndex) => previousIndex - 1)
  }
  function handleNextSlide() {
    setSlideIndex((previousIndex) => previousIndex + 1)
  }
  // useEffect(() => {
  //   function scrollToDiv(){
  //     var target = document.getElementById('targetDiv');
  //     target.scrollIntoView({behavior:'smooth'});
  //   }
  return (

    <>
      <div className='brand_slides' style={{ transform: `translateX(-${slideIndex * 50}%)` }}>
        <div id='targetDiv'>
          <img src={logo_001} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_002} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_003} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_004} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_005} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_006} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_001} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_002} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_003} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_004} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_005} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_006} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_001} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_002} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_003} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_004} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_005} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_006} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_001} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_002} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_003} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_004} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_005} alt="" />
        </div>
        <div id='targetDiv'>
          <img src={logo_006} alt="" />
        </div>
      </div>
      <div className='brand_ctrl'>
        <RxDotFilled onClick={handlePreviousSlide} className='brand_dot' />
        <RxDotFilled onClick={handleNextSlide} className='brand_dot' />
      </div>
    </>
  )
}

export default Brand