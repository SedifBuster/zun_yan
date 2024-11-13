import Image from "next/image";
import CarouselPhoto from "./components/carousels/carouselPhoto/carouselPhoto";
import { EmblaOptionsType } from 'embla-carousel'
import logoPic1 from "../public/logo1.webp"
import CarouselHits from "./components/carousels/carouselHits/carouselHits";

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


//slidersHits
import sliderHit1 from "../public/carouselHits/hit1.jpg"
import sliderHit2 from "../public/carouselHits/hit2.jpg"
import sliderHit3 from "../public/carouselHits/hit3.webp"
import Link from "next/link";

const slidesHits = [
  {
    id: 1,
    sourse: sliderHit1,
    altText: "Гуобаджоу",
    text: "Гуобаджоу",
    price: 100
  },
  {
    id: 2,
    sourse: sliderHit3,
    altText: "Краб из аквариума",
    text: "Краб из аквариума",
    price: 200
  },
  {
    id: 3,
    sourse: sliderHit3,
    altText: "Салат",
    text: "Салат",
    price: 300
  },
  {
    id: 4,
    sourse: sliderHit1,
    altText: "Гуобаджоу",
    text: "Гуобаджоу",
    price: 100
  },
  {
    id: 5,
    sourse: sliderHit2,
    altText: "Краб из аквариума",
    text: "Краб из аквариума",
    price: 200
  },
  {
    id: 6,
    sourse: sliderHit3,
    altText: "Салат",
    text: "Салат",
    price: 300
  },
  {
    id: 7,
    sourse: sliderHit1,
    altText: "Гуобаджоу",
    text: "Гуобаджоу",
    price: 100
  },
  {
    id: 8,
    sourse: sliderHit2,
    altText: "Краб из аквариума",
    text: "Краб из аквариума",
    price: 200
  },
  {
    id: 9,
    sourse: sliderHit3,
    altText: "Салат",
    text: "Салат",
    price: 300
  },

]


export
  default function Home(

) {

  /**
   * Первый и главный раздел
Новогодние корпоративы в Зун Ян, смахиваешь диджеи и живая музыка,
 смахиваешь комплексные обеды за 350 рублей с 12:00 до 15:00 и последняя пикча просто зун ян
Раздел о нас сделать как небольшую галерею с интерьером
Главная с объявлениями
О нас(галерея)
Хиты заведения
Команда
Отзывы
Карта с контактами

   */
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true, duration: 10 }
 // const SLIDE_COUNT = 5
 // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const OPTIONSHITS: EmblaOptionsType = { slidesToScroll: 3, dragFree: true, loop: true }
//const SLIDE_COUNT = 10
//const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className=" font-[family-name:var(--font-geist-sans)] ">
       
      <section className="bg-[url('../public/back.jpg')] bg-center bg-no-repeat bg-cover">
      
        <div className="container mx-auto">
          <div  className="flex flex-col gap-8 row-start-2 items-center pt-36 sm:items-start h-[90vh] max-md:h-[70vh]  max-lg:h-[70vh]" >
            <h1 className="text-white text-[250px] w-full text-center mb-0 pb-0 max-md:text-8xl max-lg:text-7xl">ZUN YAN</h1>
            <h2 className="text-white w-full text-5xl text-center max-md:text-3xl max-lg:text-2xl">РЕСТОРАН КИТАЙСКОЙ КУХНИ</h2>
          </div>
        </div>
      </section>

      <section className="  bg-[#413026]" id="about_usAnchor">
        <div className="flex flex-col gap-4 items-center sm:items-start container mx-auto">
          <Image src={logoPic1} alt='фото ресторана' className="mx-auto"/>
          <h3 className="text-white text-5xl font-bold w-full text-center">О НАС</h3>
          <p className="text-white pb-12 text-lg text-center w-full pl-36 pr-36 max-md:pl-10 max-md:pr-10">
            Ресторан в самом сердце Владивостока подарит вам незабываемые вечера и в целом текст о том, как здесь хорошо.
            Ресторан в самом сердце Владивостока подарит вам незабываемые вечера и в целом текст о том, как здесь хорошо.
            Ресторан в самомсердце Владивостока подарит вам незабываемые вечера и в целом текст о том, как здесь хорошо
          </p>
        </div>
      </section>


      <section className="pb-6 pt-12" id="menuAnchor">
      <div className="flex flex-col gap-8 items-center container mx-auto">
       <h3 className="text-[#413026] w-full text-center text-5xl pt-8 font-semibold max-md:pt-2">
        ХИТЫ В НАШЕМ ЗАВЕДЕНИИ
      </h3>
       <CarouselHits slides={slidesHits} options={OPTIONSHITS}/>
      </div>
      </section>

      <section className="pt-6 pb-6 bg-[#413026] max-md:hidden max-lg:hidden" id="about_usAnchor">
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
     {/*<CarouselDinners slides={SLIDES}/>*/}
      </div>
      </section>

      <section className="flex flex-col gap-8 row-start-2 items-center sm:items-start h-[85vh] bg-yellow-500" id="contactsAnchor">
      <p className="text-black">секция с отзывами с яндекса(не точно)</p>
      <p className="text-black">секция с адресом и картой</p>
      <h3 className="text-[#413026] w-full text-center text-5xl pt-8 font-semibold">
        Контакты
      </h3>
      <p className="text-black">секция с адресом и картой</p>
      <Link href={`tel:+79341004777`}><p className="text-xl">+7 (934) 100-47-77</p></Link>
      </section>
    </div>
  );
}

/**
 *     <div>
        <div className="h-[5vh] w-full bg-yellow-300"></div>
        <div className="h-[5vh] w-full bg-[#00a86b]"></div>
        <div className="h-[5vh] w-full bg-[#f70505]"></div>
      </div>


                  <div className="embla_slide" key={slide.id}>
                <Image src={slide.sourse} alt={slide.altText} width={150}/>
              <div >{slide.price}</div>
              <div >{slide.text}</div>
            </div> 
             slides: { id: number; sourse: StaticImageData; altText: string; text: string; price: number; }[]
 */
