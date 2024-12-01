"use client"

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import style from "./carouselMain.module.css"

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

type PropType = {
  slides: { id: number; source: string; sourceMobile: string; altText: string; text: string; text2: string; text3: string;}[],
  options?: EmblaOptionsType
}

const CarouselMain: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({delay: 10000, jump: false})])

  return (
    <section className={style.embla}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.id}>

       <div className="relative max-sm:hidden ">
        <div className=" bg-no-repeat h-screen bg-center bg-cover">
          <video autoPlay loop muted className="absolute inset-0 object-cover h-screen xl:h-auto lg:mx-auto">
            <source
              src={slide.source}
              type="video/mp4"
            />
          </video>
        <div className="absolute inset-0  backdrop-brightness-[80%] h-full flex">
            <div
        className='
          container
          mx-auto
          flex
          flex-col
          gap-4
          select-none
          justify-center
          text-white
          text-7xl
          max-lg:text-7xl
          max-md:text-6xl
          max-md:w-full
          max-md:text-center
          max-md:leading-16
        '
      >
        <h3 className="font-evolventaBold [text-shadow:_0_6px_6px_rgb(0_0_0_/_0.5)]">{slide.text}</h3>
        <h4 className="[text-shadow:_0_6px_6px_rgb(0_0_0_/_0.5)]">{slide.text2}</h4>
        <h4 className='max-md:text-5xl [text-shadow:_0_6px_6px_rgb(0_0_0_/_0.5)]'>{slide.text3}</h4>
            </div>
            {/**<span className="font-bold text-9xl text-white inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
       </span>
             * 
             */}
        </div>
      </div>
    </div>

      <div className="relative sm:hidden">
        <div className="bg-hero-section bg-no-repeat h-screen bg-center bg-cover">
          <video autoPlay loop muted className="absolute inset-0 object-cover h-screen xl:h-auto mx-auto">
            <source
              src={slide.sourceMobile}
              type="video/mp4"
              about={slide.altText}
            />
          </video>
        <div className="absolute inset-0  backdrop-brightness-[80%] flex">
          {/**
           * <div className="max-sm:text-5xl font-thin sm:my-56 my-32 mx-16 text-center select-none text-white text-[250px] mb-0 pb-0 max-md:text-8xl max-lg:text-7xl">
              {slide.text}
          </div>
           */}
        <div
          className='
            container
            mx-auto
            flex
            flex-col
            gap-4
            select-none
            justify-center
            text-white
            text-7xl
            max-lg:text-7xl
            max-md:text-5xl
            max-md:w-full
            max-md:text-center
            max-md:leading-16
          '
        >
        <h3 className="font-evolventaBold [text-shadow:_0_6px_6px_rgb(0_0_0_/_0.5)]">{slide.text}</h3>
        <h4 className="max-md:text-4xl [text-shadow:_0_6px_6px_rgb(0_0_0_/_0.5)]">{slide.text2}</h4>
        <h4 className='max-md:text-4xl max-md:pl-12 max-md:pr-12 [text-shadow:_0_6px_6px_rgb(0_0_0_/_0.5)]'>{slide.text3}</h4>
      </div>
        </div>
      </div>
      </div>
      </div>
  ))}

<div  className="embla__slide bg-[url('/carouselMain/crab.jpg')]  bg-no-repeat bg-center max-md:bg-[center_left_-20rem] bg-cover ">
    <div
      className="
       flex
       gap-4
       h-full
       backdrop-brightness-[80%]
      "
    >

      <div
        className='
          container
          mx-auto
          flex
          flex-col
          gap-4
          select-none
          justify-center
          text-white
          text-7xl
          max-lg:text-7xl
          max-md:text-6xl
          max-md:w-full
          max-md:text-center
          max-md:leading-16
        '
      >
        <h3 className="font-evolventaBold [text-shadow:_0_6px_6px_rgb(0_0_0_/_0.5)]">ВЫБЕРИТЕ СВОЮ УСТРИЦУ</h3>
        <h4 className="font-evolventaBold max-md:pl-12 max-md:pr-12 [text-shadow:_0_6px_6px_rgb(0_0_0_/_0.5)]">ИЛИ КРАБА</h4>
        <h4 className='max-md:text-4xl max-md:pl-2 max-md:pr-2 [text-shadow:_0_6px_6px_rgb(0_0_0_/_0.5)]'>ПРЯМО ИЗ АКВАРИУМА</h4>
      </div>

    </div>
  </div>
      <div  className="embla__slide">
        <div  className="flex select-none flex-col gap-8 row-start-2 items-center justify-center sm:items-start h-[90vh] max-md:h-[70vh]  max-lg:h-[70vh]" >
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

/**
 * <div  className="embla__slide bg-[url('/carouselMain/lunchMain.jpg')]  bg-no-repeat bg-center bg-cover ">
    <div
      className="
       flex
       gap-4
       max-lg:flex-col
       h-full
       backdrop-brightness-[80%]
      "
    >
      <div className=' flex flex-col max-md:w-full gap-4 select-none '>

        <h4 className="text-white text-6xl w-full mb-0 pb-0 max-md:text-center max-md:text-6xl max-lg:text-7xl">Комплексные обеды</h4>
        <h5 className="text-white w-full text-5xl max-md:text-3xl max-md:text-center max-lg:text-2xl">всего за 350 рублей</h5>
        <h5 className="text-white w-full text-5xl max-md:text-3xl max-md:text-center max-lg:text-2xl">ПН-ПТ с 12:00 до 15:00</h5>
      </div>
      <div>
        
      </div>
    </div>
  </div>
 */