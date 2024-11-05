import Link from "next/link";

const number = '+79341004777'
const telegramm = 'https://t.me/+79341004777'
const viber = 'https://viber.click/79341004777'
const watsapp ='https://wa.me/79341004777'

//Добавить китайские хуйни
//иконки для соц сетей
//под мобилы

export
  function Header() {
    return <header id="homeAnchor" className="h-[10vh] flex justify-between items-end">
      <div className="flex gap-6">
      <nav className="flex gap-4 items-end">
        <Link href={"#homeAnchor"}><h1 className="text-3xl ml-2">Zun Yan</h1></Link>
        <Link href={"#menuAnchor"}><p className="text-xl">меню</p></Link>
        <Link href={"#about_usAnchor"}><p className="text-xl">о нас</p></Link>
        <Link href={"#contactsAnchor"}><p className="text-xl">контакты</p></Link>
        </nav>
      </div>
      <div className="flex gap-6 mr-2 items-end">
      <Link href={telegramm}><p className="text-xl">telegramm</p></Link>
      <Link href={viber}><p className="text-xl">viber</p></Link>
      <Link href={watsapp}><p className="text-xl">watsapp</p></Link>
      <Link href={`tel:${number}`}><p className="text-xl">+7 (934) 100-47-77</p></Link>
      </div>
    </header>
  }