import Image from "next/image";
import CarouselPhoto from "./components/carousels/carouselPhoto";
import { EmblaOptionsType } from 'embla-carousel'
import { Header } from "./components/header/header";
import logoPic1 from "../public/logo1.webp"

export default function Home() {

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div className=" font-[family-name:var(--font-geist-sans)] ">
      <section className="bg-[url('../public/back.jpg')] bg-center bg-no-repeat bg-cover">
        <Header />
        <div className="container mx-auto">
          <div  className="flex flex-col gap-8 row-start-2 items-center pt-36 sm:items-start h-[90vh] " >
            <h1 className="text-white text-[250px] w-full text-center mb-0 pb-0">ZUN YAN</h1>
            <h2 className="text-white w-full text-5xl text-center">РЕСТОРАН КИТАЙСКОЙ КУХНИ</h2>
          </div>
        </div>
      </section>

      <section className=" h-[85vh] bg-[#413026]" id="about_usAnchor">
        <div className="flex flex-col gap-4 items-center sm:items-start container mx-auto">
          <Image src={logoPic1} alt='фото ресторана' className="mx-auto"/>
          <h3 className="text-white text-5xl font-bold w-full text-center">О НАС</h3>
          <p className="text-white text-lg text-center w-full pl-36 pr-36">
            Ресторан в самом сердце Владивостока подарит вам незабываемые вечера и в целом текст о том, как здесь хорошо.
            Ресторан в самом сердце Владивостока подарит вам незабываемые вечера и в целом текст о том, как здесь хорошо.
            Ресторан в самомсердце Владивостока подарит вам незабываемые вечера и в целом текст о том, как здесь хорошо
          </p>
        </div>
      </section>


      <section className="pb-12 pt-12" id="menuAnchor">
      <div className="flex flex-col gap-8 items-center container mx-auto">
       <h3 className="text-black w-full text-center text-5xl pt-8 font-semibold">ХИТЫ В НАШЕМ ЗАВЕДЕНИИ</h3>
       <CarouselPhoto slides={SLIDES} options={OPTIONS}/>
      </div>
      </section>

      <section className=" h-[85vh] bg-[#413026]" id="about_usAnchor">
        <div className="flex flex-col gap-4 items-center sm:items-start container mx-auto">
          <h3 className="text-white text-5xl font-bold w-full text-center">slider</h3>
          <CarouselPhoto slides={SLIDES} options={OPTIONS}/>
        </div>
      </section>

      <section className="pb-12 pt-12" id="menuAnchor">
      <div className="flex flex-col gap-8 items-center container mx-auto">
       <h3 className="text-black w-full text-center text-5xl pt-8 font-semibold">Комплексные

обеды

с 12:00 до 15:00

за 350 рублей</h3>
       <CarouselPhoto slides={SLIDES} options={OPTIONS}/>
      </div>
      </section>

      <section className="flex flex-col gap-8 row-start-2 items-center sm:items-start h-[85vh] bg-yellow-500" id="contactsAnchor">
      <p className="text-black">секция с отзывами с яндекса(не точно)</p>
      <p className="text-black">секция с адресом и картой</p>

      </section>

      <div>
        <div className="h-[5vh] w-full bg-yellow-300"></div>
        <div className="h-[5vh] w-full bg-[#00a86b]"></div>
        <div className="h-[5vh] w-full bg-[#f70505]"></div>
      </div>
    </div>
  );
}
