"use client"

import { useEffect } from "react";
import { YMInitializer } from "react-yandex-metrika"
import ym from "react-yandex-metrika";

export
 default function YandexMetrikaContainer(

) {
  const YM_COUNTER_ID = 99145697

  const hit = (url: string) => {
    ym("hit", url)
  }

  useEffect(() => {
    hit(window.location.pathname + window.location.search);
  }, [])

  return <YMInitializer
    accounts={[YM_COUNTER_ID]}
    options={{
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce:true,
      webvisor:true,
      defer: true,
    }}
    version="2"
  />

}

/*
На этом бы можно было остановиться, но при переходе между страницами Next.js не рендерит весь Root Layout,
 поэтому событие будет вызвано только 1 раз.
Что бы исправить ситуацию, нам нужно подписаться на событие перехода между страницами.
https://alexeybaranov.dev/posts/nextjs-yandex-metrika/

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]function(){(m[i].a=m[i].a[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(99145697, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/99145697" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->*/