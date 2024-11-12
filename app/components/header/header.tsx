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
    return <header id="homeAnchor" className="sticky top-0 z-50 h-0 w-full">
      <div  className="h-[10vh] flex justify-between items-end  container mx-auto text-white">
      <div className="flex gap-6">
      <nav className="flex items-end">
        <Link href={"#homeAnchor"} className="flex items-center">
        <Image src={logo} alt='logo image' width={50}/>
        <h3 className="text-3xl w-[50%]">ZUN YAN</h3></Link>
      </nav>
      </div>
      <nav className="flex gap-6 items-center max-md:hidden">
        <Link href={"#homeAnchor"}><p className="text-xl">главная</p></Link>
        <Link href={"#about_usAnchor"}><p className="text-xl">о нас</p></Link>
        <Link href={"#menuAnchor"}><p className="text-xl">меню</p></Link>
        <Link href={"#contactsAnchor"}><p className="text-xl">контакты</p></Link>
      <Link href={`tel:${number}`}><p className="text-xl">+7 (934) 100-47-77</p></Link>
      </nav>
      </div>
    </header>
}

/**
 *       <Link href={telegramm}><p className="text-xl">telegramm</p></Link>
      <Link href={viber}><p className="text-xl">viber</p></Link>
      <Link href={watsapp}><p className="text-xl">watsapp</p></Link>
 */