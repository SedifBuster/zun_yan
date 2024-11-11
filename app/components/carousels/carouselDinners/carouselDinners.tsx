"use client"

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'

import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const CarouselDinners: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)



  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}asdsdaasd</div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">

        </div>


      </div>
    </section>
  )
}

export default CarouselDinners
