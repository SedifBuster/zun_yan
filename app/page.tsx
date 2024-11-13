import CarouselPhoto from "./components/carousels/carouselPhoto/carouselPhoto";
import { EmblaOptionsType } from 'embla-carousel'
import CarouselHits from "./components/carousels/carouselHits/carouselHits";
import CarouselMain from "./components/carousels/carouselMain/carouselMain";
import Image from "next/image";

//slidersPhoto
import slide1 from "../public/carouselPh/slide1.jpg"
import slide2 from "../public/carouselPh/slide2.jpg"
import slide3 from "../public/carouselPh/slide3.jpg"
import slide4 from "../public/carouselPh/slide4.jpg"
import slide5 from "../public/carouselPh/slide5.jpg"
import slide6 from "../public/carouselPh/slide6.jpg"
import slide7 from "../public/carouselPh/slide7.jpg"
import slide8 from "../public/carouselPh/slide8.jpg"
import slide9 from "../public/carouselPh/slide9.jpg"
import slide10 from "../public/carouselPh/slide10.jpg"
import slide11 from "../public/carouselPh/slide11.jpg"

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
    sourse: sliderHit3,
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
    sourse: sliderHit3,
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

//slidersMain
const sliderMain = [
  {
    id: 1,
    source: '/carouselMain/newYeargor.mp4',
    sourceMobile: '/carouselMain/newYearVert.mp4',
    altText: "Отметь новый год в атмосфере китайской сказки вместе с Zun Yan",
    text: "Отметь новый год в атмосфере китайской сказки вместе с Zun Yan"
  },
  {
    id: 2,
    source: '/carouselMain/liveMusicGor.mp4',
    sourceMobile: '/carouselMain/liveMusicVert.mp4',
    altText: "Диджеи и живая музыка",
    text: "Диджеи и живая музыка"
  },
]

import teamImage from "../public/team.jpg"


export
  default function Home(

) {

  /**
 Первый и главный раздел
Новогодние корпоративы в Зун Ян, смахиваешь диджеи и живая музыка,
 смахиваешь комплексные обеды за 350 рублей с 12:00 до 15:00 и последняя пикча просто зун ян
Раздел о нас сделать как небольшую галерею с интерьером
Главная с объявлениями
О нас(галерея)
Хиты заведения
Команда
Отзывы
Карта с контактами



      <section className="pb-12 pt-12" id="menuAnchor">
      <div className="flex flex-col gap-8 items-center container mx-auto">

     <h3 className="text-black w-full text-center text-5xl pt-8 font-semibold">Комплексные

    обеды

    с 12:00 до 15:00

    за 350 рублей</h3>
     {/*<CarouselDinners slides={SLIDES}/>}
     </div>
     </section>

 */
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true, duration: 10 } 
  const OPTIONSHITS: EmblaOptionsType = { slidesToScroll: 1, dragFree: true, loop: true }


  return (
    <div className=" font-[family-name:var(--font-geist-sans)] ">
       
      <section className=" bg-center bg-no-repeat bg-cover">
      
        <div className=" bg-[url('../public/back.jpg')] bg-center bg-no-repeat bg-cover">
        <CarouselMain  slides={sliderMain}/>
        </div>
      </section>

      <section className="  bg-[#413026]" id="about_usAnchor">
        <div className="flex flex-col gap-2 items-center sm:items-start container mx-auto pt-4">
          <CarouselPhoto slides={slidesPhoto} options={OPTIONS}/>
          <h3 className="text-white text-5xl font-bold w-full text-center">О НАС</h3>
          <p className="text-white pb-12 text-lg text-center w-full pl-36 pr-36 max-md:pl-10 max-md:pr-10">
            Ресторан в самом сердце Владивостока подарит вам незабываемые вечера и в целом текст о том, как здесь хорошо.
            Ресторан в самом сердце Владивостока подарит вам незабываемые вечера и в целом текст о том, как здесь хорошо.
            Ресторан в самомсердце Владивостока подарит вам незабываемые вечера и в целом текст о том, как здесь хорошо
          </p>
        </div>
      </section>


      <section className="pb-6 pt-12 bg-[#2c2c2d] text-white" id="menuAnchor">
      <div className="flex flex-col gap-8 items-center">
       <h3 className=" w-full text-center text-5xl pt-8 font-semibold max-md:pt-2 ">
           ХИТЫ В НАШЕМ ЗАВЕДЕНИИ
      </h3>
       <CarouselHits slides={slidesHits} options={OPTIONSHITS}/>
      </div>
      </section>

     <section className="pt-6 pb-6 bg-[#413026] h-[65vh] text-white " id="about_usAnchor">
        <div className="flex flex-col gap-4 items-center sm:items-start container mx-auto justify-center">
          <h3 className=" w-full text-center text-5xl pt-8 font-semibold max-md:pt-2 ">
            Команда
          </h3>
          <Image src={teamImage} height={400} alt="команда ресторана Зун Ян" className="mx-auto"/>
        </div>
      </section>

      <section className="flex flex-col gap-8 row-start-2 items-center sm:items-start h-[85vh] bg-[#2c2c2d] text-white" id="contactsAnchor">

      <div className="flex gap-6 container mx-auto max-md:flex-col max-md:text-center">
      <div className="text-9xl w-[60%] max-md:w-[100%]">
        я карта
      </div>
      <div className="flex gap-2 flex-col">
      <h3 className="w-full text-start text-5xl pt-8 font-semibold max-md:text-center">
        Контакты
      </h3>
      <p className="flex gap-2 text-lg max-md:justify-center">
      <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.00008 0.585007C4.58908 0.585007 1.00008 4.17401 1.00008 8.58001C0.971081 15.025 8.69608 20.369 9.00008 20.585C9.00008 20.585 17.0291 15.025 17.0001 8.58501C17.0001 4.17401 13.4111 0.585007 9.00008 0.585007ZM9.00008 12.585C6.79008 12.585 5.00008 10.795 5.00008 8.58501C5.00008 6.37501 6.79008 4.58501 9.00008 4.58501C11.2101 4.58501 13.0001 6.37501 13.0001 8.58501C13.0001 10.795 11.2101 12.585 9.00008 12.585Z" fill="#D21F29"></path>
      </svg>
        Адрес ресторана: 
      </p>
      <p className="pl-6">г. Владивосток, Улица Арсеньева, 9/13</p>
      <p className="flex gap-2 text-lg items-center max-md:justify-center">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_383_41259)">
                                <path d="M15.1212 14.7635L13.3701 11.73C13.0208 11.1278 12.2279 10.9308 11.6026 11.2919L10.0746 12.1739C10.0097 12.1116 9.94263 12.0466 9.87223 11.9779C9.22417 11.3523 8.3374 10.4952 7.5352 9.10458C6.73038 7.71079 6.4314 6.51253 6.21247 5.63764C6.18946 5.545 6.16753 5.45576 6.1451 5.37057L7.17036 4.77965L7.67471 4.48805C8.3009 4.12641 8.52588 3.34123 8.17804 2.73791L6.427 -0.295763C6.07899 -0.898409 5.28572 -1.09551 4.65953 -0.733869L3.80365 -0.236454L3.81717 -0.213227C3.51382 0.0146555 3.23576 0.296729 2.99905 0.61783C2.77796 0.924609 2.60996 1.22887 2.48557 1.54554C1.46804 4.07953 2.02341 6.7934 4.40075 10.9111C7.68706 16.6027 11.3955 17.233 11.556 17.2582C11.9068 17.3087 12.2543 17.3147 12.6198 17.2749C13.0127 17.2312 13.3957 17.1317 13.7444 16.9833L13.7556 17.0004L14.6179 16.5146C15.243 16.1528 15.4686 15.3675 15.1212 14.7635Z" fill="#D21F29"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_383_41259">
                                    <rect width="17.8533" height="17.83" fill="white" transform="translate(0 0.0850067)"></rect>
                                </clipPath>
                            </defs>
                        </svg>
        Для связи: 
      </p>
      <Link href={`tel:+79341004777`}><p className="pl-6">+7 (934) 100-47-77</p></Link>
      <Link href={`mailto:Dizel24042001@mail.ru`}>
        <p className="pl-6">Dizel24042001@mail.ru</p>
      </Link>


      <p  className="flex gap-2 text-lg items-center max-md:justify-center">
      <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M11 22.085C4.925 22.085 0 17.16 0 11.085C0 5.00999 4.925 0.0849915 11 0.0849915C17.075 0.0849915 22 5.00999 22 11.085C22 17.16 17.075 22.085 11 22.085ZM12 4.58499H10V11.499L14 15.499L15.414 14.085L12 10.671V4.58499Z" fill="#D21F29"></path>
       </svg>

        Время работы:   
      </p>
      
      <p className="pl-6">Вс - Пн:  10:00 - 22:00</p>
      <p className="pl-6">Пт - Сб:  10:00 - 24:00</p>

      </div>
      </div>
      
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

             /**
     *       <section className="pt-6 pb-6 bg-[#413026] max-md:hidden max-lg:hidden" id="about_usAnchor">
        <div className="flex flex-col gap-4 items-center sm:items-start container mx-auto">
        </div>
      </section>
     */