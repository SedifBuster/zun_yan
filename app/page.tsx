import Image from "next/image";
import CarouselPhoto from "./components/carousels/carouselPhoto";
import { EmblaOptionsType } from 'embla-carousel'
import { Header } from "./components/header/header";
import logoPic1 from "../public/logo1.webp"
import CarouselHits from "./components/carousels/carouselHits";

//slidersPhoto
import slide1 from "../public/carouselPh/1.webp"
import slide2 from "../public/carouselPh/2.webp"
import slide3 from "../public/carouselPh/3.webp"
import slide4 from "../public/carouselPh/4.webp"
import slide5 from "../public/carouselPh/5.webp"
import slide6 from "../public/carouselPh/6.webp"
import slide7 from "../public/carouselPh/7.webp"
import slide8 from "../public/carouselPh/8.webp"
import slide9 from "../public/carouselPh/9.webp"
import slide10 from "../public/carouselPh/10.webp"
import slide11 from "../public/carouselPh/11.webp"
import CarouselDinners from "./components/carousels/carouselDinners";

const slidesPhoto = [
  {
    id: 1,
    sourse: slide1,
    altText: "Зун Ян - ресторан китайской кухни"
  },
  {
    id: 2,
    sourse: slide2,
    altText: "принимаем заявки на Новогодние корпоративы"
  },
  {
    id: 3,
    sourse: slide3,
    altText: "бизнес ланчи по будням. Китайская кухня по доступным ценам"
  },
  {
    id: 4,
    sourse: slide4,
    altText: "живая музыка и танцпол - все для идеального вечера"
  },
  {
    id: 5,
    sourse: slide5,
    altText: "фотография внутри ресторана"
  },
  {
    id: 6,
    sourse: slide6,
    altText: "повара приготовят настоящие шедевры китайской кухни"
  },
  {
    id: 7,
    sourse: slide7,
    altText: "фотография террасы"
  },
  {
    id: 8,
    sourse: slide8,
    altText: "аутентичное меню с большими порциями, свежие морепродукты и пельмешки"
  },
  {
    id: 9,
    sourse: slide9,
    altText: "место для проведений банкетов и мероприятий"
  },
  {
    id: 10,
    sourse: slide10,
    altText: "уютная терраса, открытая в любое время года"
  },
  {
    id: 11,
    sourse: slide11,
    altText: "Аквариум с живыми крабами"
  },
]

export
  default function Home(

) {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true, duration: 10 }
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
       <CarouselHits slides={SLIDES} />
     
      </div>
      </section>

      <section className="pt-6 pb-6 bg-[#413026]" id="about_usAnchor">
        <div className="flex flex-col gap-4 items-center sm:items-start container mx-auto">
          <CarouselPhoto slides={slidesPhoto} options={OPTIONS}/>
        </div>
      </section>

      <section className="pb-12 pt-12" id="menuAnchor">
      <div className="flex flex-col gap-8 items-center container mx-auto">
       <h3 className="text-black w-full text-center text-5xl pt-8 font-semibold">Комплексные

обеды

с 12:00 до 15:00

за 350 рублей</h3>
     <CarouselDinners slides={SLIDES}/>
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
