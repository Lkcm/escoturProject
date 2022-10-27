import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import cvc from '../assets/images/1.png'
import azul from '../assets/images/2.png'
import hotpark from '../assets/images/3.png'
import decolar from '../assets/images/4.png'
import trend from '../assets/images/5.png'
import msc from '../assets/images/6.png'
import disney from '../assets/images/7.png'
import beto from '../assets/images/8.png'
import flytour from '../assets/images/9.png'
import gapnet from '../assets/images/10.png'
import snow from '../assets/images/11.png'
import jose from '../assets/images/12.png'
import gol from '../assets/images/13.png'
import expedia from '../assets/images/14.png'
import localiza from '../assets/images/15.png'
import beach from '../assets/images/16.png'
import pergentino from '../assets/images/17.png'
import royalty from '../assets/images/18.png'






const Partners = () => {

  const animation = { duration: 15000, easing: (t) => t }

    const [sliderRef] = useKeenSlider({
      loop: true,
      renderMode: "performance",
      drag: false,

      slides: {
        perView: 10,
        spacing: 40,
      },
        
      
      created(s) {
        s.moveToIdx(5, true, animation)
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
    })

  return (

  <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide logo-slide"><Image src={cvc} alt="logo1"/></div>
      <div className="keen-slider__slide logo-slide"><Image src={azul} alt="logo2"/></div>
      <div className="keen-slider__slide logo-slide"><Image src={hotpark} alt="logo3"/></div>
      <div className="keen-slider__slide logo-slide"><Image src={decolar} alt="logo4"/> </div>
      <div className="keen-slider__slide logo-slide"><Image src={trend} alt="logo5"/></div>
      <div className="keen-slider__slide logo-slide"><Image src={msc} alt="logo6"/> </div>
      <div className="keen-slider__slide logo-slide"><Image src={disney} alt="logo7"/> </div>
      <div className="keen-slider__slide logo-slide"><Image src={beto} alt="logo8"/></div>
      <div className="keen-slider__slide logo-slide"><Image src={flytour} alt="logo9"/></div>
      <div className="keen-slider__slide logo-slide"><Image src={gapnet} alt="logo10"/></div>
      <div className="keen-slider__slide logo-slide"><Image src={snow} alt="logo11"/></div>
      <div className="keen-slider__slide logo-slide"><Image src={jose} alt="logo12"/></div>
      <div className="keen-slider__slide logo-slide"><Image src={beach} alt="logo13"/></div>
      <div className="keen-slider__slide logo-slide"><Image src={gol} alt="logo14"/></div>
      <div className="keen-slider__slide logo-slide"><Image src={expedia} alt="logo15"/></div>
      <div className="keen-slider__slide logo-slide"><Image src={localiza} alt="logo16"/></div>
      <div className="keen-slider__slide logo-slide"><Image src={pergentino} alt="logo17"/></div>
      <div className="keen-slider__slide logo-slide"><Image src={royalty} alt="logo18"/></div>


</div>
  )
}

export default Partners
