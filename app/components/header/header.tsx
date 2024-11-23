import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png"

const number = '+79341004777'
//const telegramm = 'https://t.me/+79341004777'
//const viber = 'https://viber.click/79341004777'
//const watsapp ='https://wa.me/79341004777'

//Добавить китайские хуйни
//иконки для соц сетей
//под мобилы
//lipkiy

export
  function Header() {
    return <header id="homeAnchor" className="sticky top-0 z-50 h-0 w-full  font-roboto">
      <div  className="h-[10vh] flex justify-between items-center  container mx-auto text-white">
      <div className="flex gap-6">
      <nav className="flex items-end">
        <Link href={"#homeAnchor"} className="flex items-center">
        <Image src={logo} alt='logo image' width={50}/>
        <h3 className="text-3xl w-[50%]">ZUN YAN</h3></Link>
      </nav>
      </div>
      <nav className="flex gap-6 items-start max-md:hidden">
        <Link href={"#homeAnchor"}><p className="text-xl">главная</p></Link>
        <Link href={"#about_usAnchor"}><p className="text-xl">о нас</p></Link>
        <Link href={"#menuAnchor"}><p className="text-xl">меню</p></Link>
        <Link href={"#contactsAnchor"}><p className="text-xl">контакты</p></Link>
      <Link href={`tel:${number}`}><p className="text-xl">+7 (934) 100-47-77</p></Link>
      </nav>
      </div>
      <div className="flex items-center md:hidden bg-gray-800/60 p-4  gap-1 text-white justify-end absolute right-1 top-[89vh] rounded-full">

      <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g clipPath="url(#clip0_383_41259)">
          <path d="M15.1212 14.7635L13.3701 11.73C13.0208 11.1278 12.2279 10.9308 11.6026 11.2919L10.0746 12.1739C10.0097 12.1116 9.94263 12.0466 9.87223 11.9779C9.22417 11.3523 8.3374 10.4952 7.5352 9.10458C6.73038 7.71079 6.4314 6.51253 6.21247 5.63764C6.18946 5.545 6.16753 5.45576 6.1451 5.37057L7.17036 4.77965L7.67471 4.48805C8.3009 4.12641 8.52588 3.34123 8.17804 2.73791L6.427 -0.295763C6.07899 -0.898409 5.28572 -1.09551 4.65953 -0.733869L3.80365 -0.236454L3.81717 -0.213227C3.51382 0.0146555 3.23576 0.296729 2.99905 0.61783C2.77796 0.924609 2.60996 1.22887 2.48557 1.54554C1.46804 4.07953 2.02341 6.7934 4.40075 10.9111C7.68706 16.6027 11.3955 17.233 11.556 17.2582C11.9068 17.3087 12.2543 17.3147 12.6198 17.2749C13.0127 17.2312 13.3957 17.1317 13.7444 16.9833L13.7556 17.0004L14.6179 16.5146C15.243 16.1528 15.4686 15.3675 15.1212 14.7635Z" fill="#D21F29"></path>
         </g>
         <defs>
           <clipPath id="clip0_383_41259">
              <rect width="17.8533" height="17.83" fill="white" transform="translate(0 0.0850067)"></rect>
           </clipPath>
         </defs>
      </svg>
      <Link href={`tel:${number}`} ><p className="text-lg">Забронировать</p></Link>
      </div>
    </header>
}

/**
 *       <Link href={telegramm}><p className="text-xl">telegramm</p></Link>
      <Link href={viber}><p className="text-xl">viber</p></Link>
      <Link href={watsapp}><p className="text-xl">watsapp</p></Link>
 */