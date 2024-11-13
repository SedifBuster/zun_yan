import Link from "next/link";


export
  function Footer(

) {

  return <footer
    className="
      flex
      justify-center
      gap-6
      pl-2
      pr-2
      pb-10
      pt-2
      max-md:flex-col
      max-md:items-center
      max-md:text-center
      bg-white
      text-black
    "
  >
    <div className="flex flex-col">
      <p className="font-semibold">© zun yan 2024 г.</p>
      <p>Все права защищены</p>
      <Link href={`/docs/policy.pdf`} target="_blank">
        <p className="underline">Политика конфиденциальности</p>
      </Link>
    </div>

    <div className="flex flex-col">
      <Link href={`https://2gis.ru/vladivostok/firm/70000001084274180/tab/prices?m=131.875981%2C43.11194%2F16`} target="_blank">
        <p className="underline font-semibold">Каталог блюд</p>
      </Link>
    </div>

    <div className="flex flex-col">
      <p className="font-semibold">Разделы сайта</p>
        <Link href={"#about_usAnchor"}><p className="underline">о нас</p></Link>
        <Link href={"#menuAnchor"}><p className="underline">меню</p></Link>
        <Link href={"#contactsAnchor"}><p className="underline">контакты</p></Link>
    </div>

    <div className="flex flex-col">
      <p className="font-semibold">Юр. информация</p>
      <p className="md:max-w-56">
        ООО  ПЯТНИЦА , Юр. адрес: г. Владивосток, проспект Океанский, д. 110а
      </p>
      <p>ОГРН: 1242500019662</p>
      <p>ИНН: 2536346043</p>
    </div>

    <div className="flex flex-col">
      <p className="font-semibold">Контакты</p>
      <Link href={`tel:+79341004777`}>
        <p className="underline">+7 (934) 100-47-77</p>
      </Link>
      <Link href={`mailto:Dizel24042001@mail.ru`}>
        <p className="underline">Dizel24042001@mail.ru</p>
      </Link>
    </div>
    </footer>
  }