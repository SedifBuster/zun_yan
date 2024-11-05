import Image from "next/image";
import CarouselPhoto from "./components/carousels/carouselPhoto";
import { EmblaOptionsType } from 'embla-carousel'

export default function Home() {

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      <section className="flex flex-col gap-8 row-start-2 items-center sm:items-start h-[90vh] bg-gray-300" id="about_usAnchor">
      <p className="text-black">NAZVANIE</p>
      <p className="text-black">HOME SLIDER S PHOTO ZAVEDDENIA</p>
      <CarouselPhoto slides={SLIDES} options={OPTIONS}/>
      <div>
        <div className="h-[5vh] w-full bg-yellow-300"></div>
        <div className="h-[5vh] w-full bg-[#00a86b]"></div>
        <div className="h-[5vh] w-full bg-[#f70505]"></div>
        </div>
      </section>

      <section className="flex flex-col gap-8 row-start-2 items-center sm:items-start h-[85vh] bg-gray-500" id="menuAnchor">
      <p className="text-black">Слайдер с блюдами четыре - пять блюд с описанием</p>
      <p className="text-black">меню ссылка на пдф(есть ли он?)</p>
      <p className="text-black">мелкая подпись будет норм гармнонировать</p>
        
      </section>

      <section className="flex flex-col gap-8 row-start-2 items-center sm:items-start h-[85vh] bg-yellow-500" id="contactsAnchor">
      <p className="text-black">секция с отзывами с яндекса(не точно)</p>
      <p className="text-black">секция с адресом и картой</p>

      </section>

    </div>
  );
}
