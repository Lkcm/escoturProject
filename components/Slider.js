import React, { useState } from 'react'

import cityVideo from '../assets/videos/city.mp4'
import cancunVideo from '../assets/videos/cancun.mp4'
import maceioVideo from '../assets/videos/maceio.mp4'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Navbar from './Navbar'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 10000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>

      <div className="navigation-wrapper">

        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <video
              src={cityVideo}
              type="video/mp4"
              loop
              controls={false}
              muted
              autoPlay
            />
            <h1 className="absolute font-bold lg:text-[14rem] md:text-[10rem] text-[4rem]">Chicago</h1>
          </div>

          <div className="keen-slider__slide number-slide2">
            <video
              src={maceioVideo}
              type="video/mp4"
              loop
              controls={false}
              muted
              autoPlay
            />
            <h1 className="absolute font-bold lg:text-[14rem] md:text-[10rem] text-[4rem]">Maceió</h1>
          </div>

          <div className="keen-slider__slide number-slide2">
            <video
              src={cancunVideo}
              type="video/mp4"
              loop
              controls={false}
              muted
              autoPlay
            />
            <h1 className="absolute font-bold lg:text-[14rem] md:text-[10rem] text-[4rem]">Cancun</h1>
          </div>



        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>

      {/* DOTS */}
      {/* {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )} */}
    </>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}



// <div className="flex">
//   <div className="relative ">
//     <video
//     src={cityVideo}
//     type="video/mp4"
//     loop
//     controls={false}
//     muted
//     autoPlay
//     className="w-full"        
//     />
//       <h1 className="text-3xl">Chicago</h1>
//   </div>


// // </div>




export default Slider
