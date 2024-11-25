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
import slide12 from "../public/carouselPh/slide12.jpg"
import slide13 from "../public/carouselPh/slide13.jpg"

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
    sourse: slide12,
    altText: "бар"
  },
  {
    id: 5,
    sourse: slide13,
    altText: "светомузыка"
  },
  {
    id: 6,
    sourse: slide4,
    altText: "живая музыка и танцпол - все для идеального вечера"
  },
  {
    id: 7,
    sourse: slide5,
    altText: "фотография внутри ресторана"
  },
  {
    id: 8,
    sourse: slide6,
    altText: "повара приготовят настоящие шедевры китайской кухни"
  },
  {
    id: 9,
    sourse: slide7,
    altText: "фотография террасы"
  },
  {
    id: 10,
    sourse: slide8,
    altText: "аутентичное меню с большими порциями, свежие морепродукты и пельмешки"
  },
  {
    id: 11,
    sourse: slide9,
    altText: "место для проведений банкетов и мероприятий"
  },
  {
    id: 12,
    sourse: slide10,
    altText: "уютная терраса, открытая в любое время года"
  },
  {
    id: 13,
    sourse: slide11,
    altText: "Аквариум с живыми крабами"
  },
]

//slidersHits
import sliderHit1 from "../public/carouselHits/hit1.jpg"
import sliderHit2 from "../public/carouselHits/hit2.jpg"
import sliderHit3 from "../public/carouselHits/hit3.jpg"
import sliderHit4 from "../public/carouselHits/hit4.jpg"
import Link from "next/link";

const slidesHits = [
  {
    id: 1,
    sourse: sliderHit1,
    altText: " Морепродукты на чугуне ",
    text: " Морепродукты на чугуне ",
    price: 1200
  },
  {
    id: 2,
    sourse: sliderHit2,
    altText: "Го Боа Жоу из свинины",
    text: "Го Боа Жоу из свинины",
    price: 680
  },
  {
    id: 3,
    sourse: sliderHit3,
    altText: "Шашлык свиной на шпажке",
    text: "Шашлык свиной на шпажке",
    price: 680
  },
  {
    id: 4,
    sourse: sliderHit4,
    altText: "Жареная Баранина с луком 400г",
    text: "Жареная Баранина с луком",
    price: 980
  },
]

//slidersMain
const sliderMain = [
  {
    id: 1,
    source: '/carouselMain/newYeargor.mp4',
    sourceMobile: '/carouselMain/newYearVert.mp4',
    altText: "Отметь новый год в атмосфере китайской сказки вместе с Zun Yan",
    text: "НОВОГОДНИЕ КОРПОРАТИВЫ",
    text2: "В АТМОСФЕРЕ",
    text3: "КИТАЙСКОЙ СКАЗКИ",
  },
  {
    id: 2,
    source: '/carouselMain/liveMusicGor.mp4',
    sourceMobile: '/carouselMain/liveMusicVert.mp4',
    altText: "Диджеи и живая музыка каждую пятницу и субботу",
    text: "ДИДЖЕИ И ЖИВАЯ МУЗЫКА",
    text2: "КАЖДУЮ ПЯТНИЦУ",
    text3: "И СУББОТУ",
  },
]

import teamImage from "../public/team.jpeg"

import tgSvg from "../public/icons8-телеграм.svg"
import vkSvg from "../public/icons8-вконтакте.svg"
import Map from "./components/map/map";

//СТРЕЛКА
//КАРТА
//ТЕКСТ?

export
  default function Home(
) {

  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true, duration: 10 } 
  const OPTIONSHITS: EmblaOptionsType = { slidesToScroll: 1, dragFree: true, loop: true }

  return (
    <div className="font-baskerville">
       
      <section className=" bg-center bg-no-repeat bg-cover">
      
        <div className=" bg-[url('../public/back.jpg')] bg-center bg-no-repeat bg-cover font-evolventa">
        <CarouselMain  slides={sliderMain} options={OPTIONS}/>
        </div>
      </section>

      <section className="bg-[#413026]" id="about_usAnchor">
        <div className="flex flex-col gap-2 items-center sm:items-start container mx-auto pt-4">
          <CarouselPhoto slides={slidesPhoto} options={OPTIONS}/>
          <h4 className="text-white text-5xl font-bold w-full text-center">О НАС</h4>
          <p className="text-white pb-8 text-xl max-md:text-center w-full pl-36 pr-36 max-md:pl-6 max-md:pr-6">
          Ресторан Zun Yan — уголок настоящего Китая в центре Владивостока,
           рядом с многофункциональным комплексом «Аквамарин».
            Мы создаём уникальную атмосферу восточного гостеприимства,
             предлагая просторные залы для торжеств, уютные кабинки для уединения и живую музыку для особых вечеров.
              Каждый элемент — от изысканного интерьера до приветливого сервиса — создан, чтобы подарить вам незабываемые впечатления.
          </p>
        {/**
         *           <p className="text-white pb-6 text-xl max-md:text-center w-full pl-36 pr-36 max-md:pl-10 max-md:pr-10">
            Просторные залы и уютные индивидуальные кабинки для уединения.
            Возможность отметить корпоративы, свадьбы и другие важные события с ведущими, диджеями и живой музыкой.
            Широкий выбор напитков: от ароматного чая и кофе до лимонадов и алкогольных коктейлей.
          </p>

          <p className="text-white pb-6 text-xl max-md:text-center w-full pl-36 pr-36 max-md:pl-10 max-md:pr-10">
            Разнообразное меню, включающее бизнес-ланчи для будней и изысканные блюда для особых случаев.
            Zun Yan — это место для тех, кто ценит высокий уровень сервиса, аутентичность и изысканную кухню. 
            Мы предлагаем не просто ужин, а настоящее гастрономическое путешествие в Китай.
          </p>
      


          <p className="text-white pb-12 text-xl text-center w-full pl-36 pr-36 max-md:pl-10 max-md:pr-10">
          Приходите и убедитесь сами!
          </p>
             */}
        </div>
      </section>


      <section className="pb-6 pt-12 bg-[#2c2c2d] text-white" id="menuAnchor">
      <div className="flex flex-col gap-8 items-center">
       <h4 className=" w-full text-center text-5xl pt-8 font-semibold max-md:pt-2 ">
           ХИТЫ В НАШЕМ ЗАВЕДЕНИИ
      </h4>
       <CarouselHits slides={slidesHits} options={OPTIONSHITS}/>
       <p className="text-white pb-12 text-xl md:text-center w-full pl-36 pr-36 max-md:pl-10 max-md:pr-10">
         {/**
          Мы гордимся большими традиционными китайскими блюдами,
          приготовленными поварами из Китая по лучшим рецептам национальной кухни.
          Особая гордость ресторана — аквариум, из которого гости могут выбрать краба или другие морепродукты для своего стола.
            */}
         Наши повара из Китая готовят традиционные блюда по лучшим рецептам национальной кухни.
          Особая гордость — аквариум с морепродуктами, из которого гости могут выбрать краба или мидии для своего стола.
           Zun Yan — это гастрономическое путешествие, где каждый вкус раскрывает культуру и богатство Китая.
       </p>
      </div>
      </section>

     <section className="pt-6 pb-6 bg-[#413026] h-full text-white " id="about_usAnchor">
        <div className="flex flex-col gap-4 items-center sm:items-start container mx-auto justify-center">
          <h4 className=" w-full text-center text-5xl pt-8 pb-6 font-semibold max-md:pt-2 ">
            Команда
          </h4>
          <Image src={teamImage} height={600} alt="команда ресторана Зун Ян" className="mx-auto"/>

        <p className="text-white pb-12 text-xl text-center w-full pl-36 pr-36 max-md:pl-10 max-md:pr-10">
           {/**
          Наша команда — это не просто люди, работающие вместе.
          Это семья, которая разделяет одну страсть — создавать неповторимую атмосферу китайской кухни для каждого гостя.
          Мы тщательно отбираем ингредиенты, варим бульоны по древним рецептам и создаем блюда, наполненные теплом и заботой.
          Наши повара, бармены и официанты — это мастера своего дела, которые с любовью и вниманием относятся к каждому моменту,
          когда вы находитесь у нас. Мы стремимся, чтобы каждый визит в наш ресторан был не просто приемом пищи, а настоящим путешествием в Китай,
          с которым вы не захотите расставаться.
     */}

          Наша команда — это люди, которые искренне любят своё дело и хотят сделать каждый ваш визит особенным.
           Наши повара готовят с душой, превращая традиционные рецепты в настоящие кулинарные шедевры.
            Официанты встречают вас с улыбкой и заботятся, чтобы вы чувствовали себя как дома.
             Бармены с теплом создают напитки, которые дополняют ваше настроение.
              Мы здесь, чтобы окружить вас вниманием, радушием и вкусами, которые останутся с вами надолго.
        </p>
        </div>
      </section>

      <section
        className="
          flex
          flex-col
          gap-8
          row-start-2
          items-center
          sm:items-start
          pb-12
          md:pt-6

          max-md:pl-0
          bg-[#2c2c2d]
          text-white
        "
        id="contactsAnchor"
      >
      <div className="flex gap-6  max-md:flex-col max-md:text-center">
      {/**
       * <div className="text-9xl w-[60%] max-md:w-[100%]">
        <iframe 
          src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=123387217373"
          width="900"
          height="800"
          frameBorder="0"
        >
        </iframe>
      </div>
       */}
       <div className="text-9xl ">
        <Map />
      {
      /**
       *       <a
        className="dg-widget-link"
        href="http://2gis.ru/vladivostok/firm/70000001084274180/center/131.87597751617434,43.11251294606876/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">
        Посмотреть на карте Владивостока
      </a>
      <div className="dg-widget-link">
        <a href="http://2gis.ru/vladivostok/firm/70000001084274180/photos/70000001084274180/center/131.87597751617434,43.11251294606876/zoom/17?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=photos">
        Фотографии компании</a>
      </div>
      <div className="dg-widget-link">
        <a href="http://2gis.ru/vladivostok/center/131.875981,43.11194/zoom/16/routeTab/rsType/bus/to/131.875981,43.11194╎Zun Yan, китайский ресторан?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">
        Найти проезд до Zun Yan, китайский ресторан
        </a>
      </div>
      <script charSet="utf-8" src="https://widgets.2gis.com/js/DGWidgetLoader.js">
      </script>
      <script charSet="utf-8">new DGWidgetLoader({"width":640,"height":600,"borderColor":"#a3a3a3","pos":{"lat":43.11251294606876,"lon":131.87597751617434,"zoom":16},"opt":{"city":"vladivostok"},"org":[{"id":"70000001084274180"}]});
        </script>
      <noscript style="color:#c00;font-size:16px;font-weight:bold;">
        Виджет карты использует JavaScript. Включите его в настройках вашего браузера.
      </noscript>
       */
       }
       </div>

      <div className="flex gap-2 flex-col">
      <h3 className="w-full text-start text-5xl pt-4 font-semibold max-md:text-center">
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

      <Link href={`https://t.me/zunyanvl`} className="flex items-center pl-4 max-md:justify-center">
      <Image src={tgSvg} alt="телеграмм" width={30}/>
        <p className="text-lg">
          телеграм
        </p>
      </Link>

      <Link href={`https://vk.com/zunyan`} className="flex items-center pl-4 max-md:justify-center">
      <Image src={vkSvg} alt="телеграмм" width={30}/>
        <p className="text-lg">
        вконтакте
        </p>
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

/*
ТЗ по сайту:

ГОТОВО
4. Поправить расположение краба в телефонной версии сайта.
 Конкретнее сдвинуть его немного в сторону, как я высылал на дизайне.
ГОТОВО
5. ВАЖНО! Раздел "Команда" написать этот текст: Наша команда — это не просто люди, работающие вместе.
 Это семья, которая разделяет одну страсть — создавать неповторимую атмосферу китайской кухни для каждого гостя.
  Мы тщательно отбираем ингредиенты, варим бульоны по древним рецептам и создаем блюда, наполненные теплом и заботой.
   Наши повара, бармены и официанты — это мастера своего дела, которые с любовью и вниманием относятся к каждому моменту,
    когда вы находитесь у нас. Мы стремимся, чтобы каждый визит в наш ресторан был не просто приемом пищи, а настоящим путешествием в Китай,
     с которым вы не захотите расставаться.
ГОТОВО
6. Добавить блюдо которое я высылал на белом фоне в меню "Жареная Баранина с луком 400г, 980 рублей" 
ГОТОВО
8. Заменить фото команды и краба.
 Добавить в раздел о нас фото бара и интерьера со светомузыкой.
ГОТОВО
3. Добавить кликабельные соцсети на сайт. Желательно кликабельные контакты вообще выше карты сделать.
Именно про бронирование столов, не про ИНН и ОГРН.
ГОТОВО
2. В телефонной версии сайта в правый нижний угол добавить кнопку "Забронировать через звонок"
 в цвет сайта или не в цвет, главное чтобы смотрелось гармонично.
 


1. Вшить 2ГИС. СРОЧНО МАСТ ХЭВ.

 7. В разделе о нас слишком много текста? Его сократить? 
Просто ты принял решение перенести текст в команду.
 Также важно наличие абзацев, чтобы было проще читать текст.
*/