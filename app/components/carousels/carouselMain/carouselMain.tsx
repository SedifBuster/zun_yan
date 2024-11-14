"use client"

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import style from "./carouselMain.module.css"
import lunch1 from "../../../../public/carouselMain/lunch.webp"
import lunch2 from "../../../../public/carouselMain/lunch2.jpg"
import Image from 'next/image'


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



          <div  className="embla__slide ">

            <div  className=" flex gap-4 max-lg:flex-col container mx-auto max-md:mt-12 mt-36 h-[90vh] max-md:h-[70vh]  max-lg:h-[70vh]" >


            <div className='w-[40%] flex flex-col max-md:w-full gap-4'>
              <h4 className="text-white text-6xl w-full mb-0 pb-0 max-md:text-center max-md:text-6xl max-lg:text-7xl">Комплексные обеды</h4>
              <h5 className="text-white w-full text-5xl max-md:text-3xl max-md:text-center max-lg:text-2xl">с 12:00 до 15:00</h5>
              <h5 className="text-white w-full text-5xl max-md:text-3xl max-md:text-center max-lg:text-2xl">за 350 рублей</h5>
            </div>


              <div className='text-white flex flex-wrap max-md:justify-center '>


                <div>
                  <div className='flex flex-wrap max-md:flex-col  max-md:items-center p-2 items-end'>

                    <div
                      className='
                       bg-white
                       text-[#413026]
                        text-2xl
                        font-semibold
                        h-16
                        flex
                        items-center
                        justify-center
                        max-md:font-normal
                        max-md:w-full
                        max-md:mr-0
                        max-md:mb-0
                        mr-[-3vh]
                        z-10
                        mb-10
                      '
                    >
                      <p className='p-4 '>ПН</p>
                    </div>
                    <div className='h-[300px] w-[300px] max-2xl:w-[200px] max-2xl:h-[150px] max-md:w-[150px] max-md:h-[100px] flex'>
                      <Image src={lunch1} alt={'обед в понедельник'}/>
                    </div>
                  </div>
                  <p className='text-center text-lg font-semibold ml-4'>Squezze Orange</p>
                </div>




                <div>
                  <div className='flex  p-2 max-md:flex-col items-end'>

                    <div
                      className='
                       bg-white
                       text-[#413026]
                        text-2xl
                        font-semibold
                        h-16
                        flex
                        items-center
                        justify-center
                        max-md:font-normal
                        mr-[-3vh]
                        max-md:w-full
                        max-md:mr-0
                        max-md:mb-0
                        z-10
                        mb-10
                      '
                    >
                      <p className='p-4 '>ВТ</p>
                    </div>
                    <div className='h-[300px] w-[300px]  max-2xl:w-[200px] max-2xl:h-[150px]  max-md:w-[150px] max-md:h-[100px] flex'>
                      <Image src={lunch2} alt={'обед в понедельник'}/>
                    </div>
                  </div>
                  <p className='text-center text-lg font-semibold ml-4 max-md:ml-0'>Squezze Orange</p>
                </div>

                <div>
                  <div className='flex flex-wrap max-md:flex-col p-2 items-end'>

                    <div
                      className='
                       bg-white
                       text-[#413026]
                        text-2xl
                        font-semibold
                        h-16
                        flex
                        items-center
                        justify-center
                        max-md:font-normal
                       max-md:w-full
                        max-md:mr-0
                        max-md:mb-0
                        mr-[-3vh]
                        z-10
                        mb-10
                      '
                    >
                      <p className='p-4 '>СР</p>
                    </div>
                    <div className='h-[300px] w-[300px]  max-2xl:w-[200px] max-2xl:h-[150px] max-md:w-[150px] max-md:h-[100px] flex'>
                      <Image src={lunch1} alt={'обед в понедельник'}/>
                    </div>
                  </div>
                  <p className='text-center text-lg font-semibold ml-4 max-md:ml-0'>Squezze Orange</p>
                </div>

                <div>
                  <div className='flex flex-wrap max-md:flex-col p-2 items-end'>

                    <div
                      className='
                       bg-white
                       text-[#413026]
                        text-2xl
                        font-semibold
                        h-16
                        flex
                        items-center
                        justify-center
                        max-md:font-normal
                       max-md:w-full
                        max-md:mr-0
                        max-md:mb-0
                        mr-[-3vh]
                        z-10
                        mb-10
                      '
                    >
                      <p className='p-4 '>ЧТ</p>
                    </div>
                    <div className='h-[300px] w-[300px]  max-2xl:w-[200px] max-2xl:h-[150px] max-md:w-[150px] max-md:h-[100px] flex'>
                      <Image src={lunch1} alt={'обед в понедельник'}/>
                    </div>
                  </div>
                  <p className='text-center text-lg font-semibold ml-4 max-md:ml-0'>Squezze Orange</p>
                </div>

                <div>
                  <div className='flex flex-wrap max-md:flex-col p-2 items-end'>

                    <div
                      className='
                       bg-white
                       text-[#413026]
                        text-2xl
                        font-semibold
                        h-16
                        flex
                        items-center
                        justify-center
                        max-md:font-normal
                       max-md:w-full
                        max-md:mr-0
                        max-md:mb-0
                        mr-[-3vh]
                        z-10
                        mb-10
                      '
                    >
                      <p className='p-4 '>ПТ</p>
                    </div>
                    <div className='h-[300px] w-[300px]  max-2xl:w-[200px] max-2xl:h-[200px] max-md:w-[150px] max-md:h-[100px] flex'>
                      <Image src={lunch1} alt={'обед в понедельник'}/>
                    </div>
                  </div>
                  <p className='text-center text-lg font-semibold ml-4 max-md:ml-0'>Squezze Orange</p>
                </div>



                

  
            </div>
            <div>

              </div>
            </div>
          </div>









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
