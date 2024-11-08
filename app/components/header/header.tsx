import Link from "next/link";

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
    return <header id="homeAnchor" className="h-[10vh]">
      <div  className="h-[10vh] flex justify-between items-end  container mx-auto text-white">
      <div className="flex gap-6">
      <nav className="flex gap-4 items-end">
        <Link href={"#homeAnchor"}><h3 className="text-3xl">Zun Yan</h3></Link>
        </nav>
      </div>
      <div className="flex gap-6 items-end">
        <Link href={"#homeAnchor"}><p className="text-xl">главная</p></Link>
        <Link href={"#about_usAnchor"}><p className="text-xl">о нас</p></Link>
        <Link href={"#menuAnchor"}><p className="text-xl">меню</p></Link>
        <Link href={"#contactsAnchor"}><p className="text-xl">контакты</p></Link>
      <Link href={`tel:${number}`}><p className="text-xl">+7 (934) 100-47-77</p></Link>
      </div>
      </div>
    </header>
}

/**
 *       <Link href={telegramm}><p className="text-xl">telegramm</p></Link>
      <Link href={viber}><p className="text-xl">viber</p></Link>
      <Link href={watsapp}><p className="text-xl">watsapp</p></Link>
 */