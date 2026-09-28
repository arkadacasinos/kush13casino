const KZ13_TAGS: { label: string; href: string }[] = [
  { label: '#kush-casino', href: '#top' },
  { label: '#kush-casino-официальный-сайт', href: '#official' },
  { label: '#kush-casino-официальный', href: '#official' },
  { label: '#куш-казино-официальный-сайт', href: '#official' },
  { label: '#куш-казино-официальный', href: '#official' },
  { label: '#куш-казино', href: '#memo' },
  { label: '#kush-casino-зеркало', href: '#mirror' },
  { label: '#kush-casino-играть', href: '#play' },
  { label: '#куш-казино-зеркало-рабочее', href: '#mirror' },
  { label: '#куш-казино-играть', href: '#play' },
  { label: '#куш-казино-онлайн', href: '#online' },
  { label: '#куш-казино-зеркало', href: '#mirror' },
  { label: '#kush-kazino', href: '#online' },
]

export default function Page() {
  return (
    <>
      <header className="kz13-masthead">
        <a className="kz13-brand" href="#top">
          <span className="kz13-brandchip" aria-hidden="true" />
          Kush Casino
        </a>
        <nav className="kz13-mastnav" aria-label="Разделы страницы">
          <a href="#official">Сайт</a>
          <a href="#mirror">Зеркало</a>
          <a href="#play">Играть</a>
        </nav>
      </header>

      <main id="top" className="kz13-shell">
        <section className="kz13-block kz13-hero" aria-labelledby="kz13-title">
          <h1 id="kz13-title" className="kz13-h1">
            Kush Casino — куш казино онлайн: официальный сайт, вход и рабочее зеркало
          </h1>
          <p className="kz13-lead">
            Kush Casino игроки чаще находят не по рекламе, а по строке поиска: кто-то вбивает
            «куш казино», кто-то — «kush casino официальный сайт». Эта страница собирает в одном
            месте короткие и понятные ответы: куда нажимать, где держать запасной адрес и что
            проверить до первой ставки. Без воды и обещаний «золотых гор»: только то, что реально
            нужно игроку.
          </p>
          <figure className="kz13-figure">
            <img
              src="/art/kz13-hero.png"
              alt="Столы Kush Casino: золотые фишки и карты на зелёном сукне"
              width={1024}
              height={1024}
              fetchPriority="high"
            />
            <figcaption className="kz13-cap">Стол Kush Casino: ничего лишнего, только игра</figcaption>
          </figure>
        </section>

        <section id="official" className="kz13-block" aria-labelledby="kz13-h-official">
          <h2 id="kz13-h-official" className="kz13-h2">
            Kush Casino официальный сайт: прямой вход без лишних кругов
          </h2>
          <p className="kz13-para">
            <b>Kush Casino официальный сайт</b> — это основная площадка, где живут слоты, столы и
            кабинет игрока. Прямой адрес хорош тем, что не ведет через чужие переходы: открыли
            страницу, увидели знакомую шапку и спокойно вошли. Если поиск подсказывает несколько
            вариантов, выбирайте <b>куш казино официальный сайт</b> с аккуратной версткой, живыми
            кнопками и внятным разделом помощи. Kush Casino официальный ресурс не прячет правила:
            условия бонусов и лимиты читаются до регистрации, а не после.
          </p>
        </section>

        <section id="mirror" className="kz13-block" aria-labelledby="kz13-h-mirror">
          <h2 id="kz13-h-mirror" className="kz13-h2">
            Kush Casino зеркало и куш казино зеркало рабочее: запасной вход
          </h2>
          <p className="kz13-para">
            Основной адрес иногда открывается не у всех: провайдер, регион, временные работы. На
            такой случай держат <b>kush casino зеркало</b> — копию сайта на другом домене. Важное
            слово здесь «рабочее»: куш казино зеркало рабочее значит, что вход ведет в тот же
            кабинет, с тем же балансом и историей ставок. Проверяется просто: логин принимает
            привычный пароль, а в кабинете видны ваши данные. Куш казино зеркало из случайной
            ссылки так не умеет, поэтому адрес лучше держать из проверенного источника.
          </p>
          <figure className="kz13-figure">
            <img
              src="/art/kz13-mirror.png"
              alt="Зеркало Kush Casino: латунная рама и светлый вход в отражении"
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="kz13-cap">
              Зеркало — тот же кабинет игрока, только через запасную дверь
            </figcaption>
          </figure>
        </section>

        <section id="play" className="kz13-block" aria-labelledby="kz13-h-play">
          <h2 id="kz13-h-play" className="kz13-h2">
            Kush Casino играть: что крутится и раздается
          </h2>
          <p className="kz13-para">
            В запросе «<b>kush casino играть</b>» обычно стоит простое желание: открыть игру и не
            ждать. В Kush Casino играть можно с телефона и с компьютера: слоты крутятся в браузере,
            столы открываются без отдельных плагинов. Новичку разумно начать с коротких сессий и
            маленьких ставок, а демо-режим помогает прочитать характер автомата до первых денег;
            куш казино играть на реальные ставки оставляет тем, кто уже разобрался с правилами.
          </p>
        </section>

        <section id="online" className="kz13-block" aria-labelledby="kz13-h-online">
          <h2 id="kz13-h-online" className="kz13-h2">
            Куш Казино онлайн с телефона: верстка под любой экран
          </h2>
          <p className="kz13-para">
            <b>Куш казино онлайн</b> рассчитано прежде всего на мобильный трафик: меню складывается
            в одну колонку, кнопки попадают под палец, текст не разъезжается на узком экране. В
            поиске встречаются разные написания — kush kazino, куш казино онлайн, — но ведет все
            это на одну площадку. На старом iPhone SE и на свежем Pro Max страница выглядит
            одинаково собранно: ничего не наезжает, картинки дочитываются по мере прокрутки.
          </p>
        </section>

        <section id="memo" className="kz13-block" aria-labelledby="kz13-h-memo">
          <h2 id="kz13-h-memo" className="kz13-h2">
            Куш Казино: короткая памятка игроку
          </h2>
          <ul className="kz13-memo">
            <li>Вход начинайте с прямого адреса: куш казино официальный сайт экономит время и нервы.</li>
            <li>Держите под рукой куш казино зеркало рабочее — на случай, если основной домен закрыт.</li>
            <li>Правила и лимиты читайте до депозита, а не после первого проигрыша.</li>
            <li>Ставьте столько, сколько не жалко потерять: игра это развлечение, а не заработок.</li>
            <li>Если отдых перестал быть отдыхом — пауза важнее любой серии.</li>
          </ul>
        </section>

        <section className="kz13-block" aria-label="Итог">
          <p className="kz13-para">
            Kush Casino держит простую логику: понятный вход, запасной адрес и честные правила на
            виду. Куш казино не обещает легких денег и не прячет мелкий шрифт — и именно за это его
            ищут снова.
          </p>
        </section>
      </main>

      <footer className="kz13-foot">
        <div className="kz13-footin">
          <p className="kz13-tagtitle">Поиск по сайту: хештеги ключевых фраз</p>
          <ul className="kz13-tags">
            {KZ13_TAGS.map((tag) => (
              <li key={tag.label} className="kz13-tag">
                <a href={tag.href}>{tag.label}</a>
              </li>
            ))}
          </ul>
          <p className="kz13-fine">
            18+ Играйте ответственно. Материалы страницы носят информационный характер. ©{' '}
            {new Date().getFullYear()} Kush Casino.
          </p>
        </div>
      </footer>
    </>
  )
}
