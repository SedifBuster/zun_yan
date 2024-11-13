"use client"

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import style from "./carouselMain.module.css"
//import style2 from "../../../../videos/liveMusicGor.mp4"


import useEmblaCarousel from 'embla-carousel-react'


type PropType = {
  slides: { id: number; source: string; sourceMobile: string; altText: string; text: string; }[],
  options?: EmblaOptionsType
}

const CarouselMain: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <section className={style.embla}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.id}>

       <div className="relative max-sm:hidden">
        <div className="bg-hero-section bg-no-repeat h-screen bg-center bg-cover">
          <video autoPlay loop muted className="absolute inset-0 object-cover h-screen xl:h-auto">
            <source
              src={slide.source}
              type="video/mp4"
            />
          </video>
        <div className="absolute inset-0">
          <div className="sm:text-5xl  font-thin sm:my-56 my-32 mx-16 text-center text-white text-[250px] mb-0 pb-0 max-md:text-8xl max-lg:text-7xl">
              {slide.text}
          </div>
        </div>
      </div>
      </div>

      <div className="relative sm:hidden">
        <div className="bg-hero-section bg-no-repeat h-screen bg-center bg-cover">
          <video autoPlay loop muted className="absolute inset-0 object-cover h-screen xl:h-auto mx-auto">
            <source
              src={slide.sourceMobile}
              type="video/mp4"
            />
          </video>
        <div className="absolute inset-0">
          <div className="max-sm:text-5xl font-thin sm:my-56 my-32 mx-16 text-center text-white text-[250px] mb-0 pb-0 max-md:text-8xl max-lg:text-7xl">
              {slide.text}
          </div>
        </div>
      </div>
      </div>

  </div>
          ))}

          <div  className="embla__slide">
            <div  className="flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start h-[90vh] max-md:h-[70vh]  max-lg:h-[70vh]" >
            <h1 className="text-white text-[250px] w-full text-center mb-0 pb-0 max-md:text-8xl max-lg:text-7xl">ZUN YAN</h1>
            <h2 className="text-white w-full text-5xl text-center max-md:text-3xl max-lg:text-2xl">РЕСТОРАН КИТАЙСКОЙ КУХНИ</h2>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CarouselMain
