"use client"

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from './carouselHitsArrowButtons'
import { StaticImageData } from 'next/image'
import Image from "next/image";

type PropType = {
  slides: { id: number; sourse: StaticImageData; altText: string; text: string; price: number; }[]
  options?: EmblaOptionsType
}

const EmblaCarouselHits: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)


  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla w-[89vw] max-w-[90vw]">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slideHit) => (
            <div className="embla__slide" key={slideHit.id}>
              <div className="embla_slide flex items-center" key={slideHit.id}>
                <div className='h-full flex '>
                  <Image src={slideHit.sourse} alt={slideHit.altText} />
                </div>
              <div
                className='
                  ml-[-3vh]
                  bg-white
                  text-[#413026]
                  text-2xl
                  font-semibold
                  h-16
                  w-40
                  flex
                  items-center
                  justify-center
                  max-md:font-normal
                  max-md:ml-[-8vh]
                  max-md:w-44
                '
              ><p className='p-4 '>{slideHit.price} руб</p></div>
            </div> 
              <p className='pt-4 text-2xl font-semibold'>{slideHit.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>


      </div>
    </section>
  )
}

export default EmblaCarouselHits
