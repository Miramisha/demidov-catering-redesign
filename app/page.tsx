import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';

const advantages = [
  ['01', 'Сервис, превосходящий ожидания', 'Создаём ценность в каждой детали и относимся к событию как к собственному.'],
  ['02', 'Ресторанное качество блюд', 'Прорабатываем меню с учётом концепции, вкусов и особенностей гостей.'],
  ['03', 'Эстетика в деталях', 'Собственная коллекция посуды, сервировки и декора для уникальной подачи.'],
  ['04', 'Профессиональная команда', 'Повара, кондитеры, официанты и координаторы работают как единое целое.'],
  ['05', 'Гибкость и индивидуальный подход', 'Подстраиваемся под формат, масштаб и особые пожелания каждого события.'],
  ['06', 'Пунктуальность и надёжность', 'Готовим площадку заранее, проверяем детали и отвечаем за результат.'],
];

const formats = [
  { title: 'Банкет', image: '/images/banquet.jpg', text: 'Торжественные церемонии, корпоративы и официальные приёмы.' },
  { title: 'Фуршет', image: '/images/buffet.jpg', text: 'Гастрономическое меню и безупречный сервис для событий любого масштаба.' },
  { title: 'Бизнес-завтрак', image: '/images/breakfast.jpg', text: 'Сбалансированное меню и выразительная подача для деловых встреч.' },
  { title: 'Корпоративное питание', image: '/images/corporate.jpg', text: 'Полный цикл организации питания для компаний и предприятий.' },
];

const projects = ['Корпоративный вечер в стиле à la russe', 'Кубок Доброй Воли', 'Международная Премия РБ', 'АКПО КОНФ-2025', 'Кубок Кремля по теннису'];

export default function Home() {
  return <main>
    <div className="concept-note">Неофициальная концепция редизайна для портфолио</div>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Кейтеринг Демидов — на главную"><Image src="/images/logo.png" alt="Кейтеринг Демидов" width={190} height={62} priority /></a>
      <nav className="desktop-nav" aria-label="Основная навигация"><a href="#about">О нас</a><a href="#formats">Меню</a><a href="#projects">Проекты</a><a href="#contacts">Контакты</a></nav>
      <a className="header-phone" href="tel:+79169986220">+7 (916) 998-62-20</a>
      <details className="mobile-menu"><summary aria-label="Открыть меню"><span/><span/></summary><nav><a href="#about">О нас</a><a href="#formats">Меню</a><a href="#projects">Проекты</a><a href="#contacts">Контакты</a></nav></details>
    </header>

    <section className="hero" id="top">
      <Image className="hero-image" src="/images/hero.jpg" alt="Сервировка мероприятия Кейтеринг Демидов" fill priority sizes="100vw" />
      <div className="hero-shade"/><div className="hero-orbit" aria-hidden="true"><span/></div>
      <div className="hero-content"><p className="eyebrow">Москва · Кейтеринг полного цикла</p><h1>Создаём события<br/><em>со вкусом</em></h1><p className="hero-copy">Надёжный гастрономический партнёр в организации мероприятий любого масштаба.</p><div className="hero-actions"><a className="button button-gold" href="#contacts">Обсудить мероприятие <ArrowUpRight size={18}/></a><a className="text-link" href="#formats">Смотреть форматы <ArrowDownRight size={18}/></a></div></div>
      <div className="hero-stat"><strong>7+</strong><span>лет создаём<br/>большие события</span></div>
    </section>

    <section className="intro section" id="about"><p className="section-label">01 / О компании</p><div className="intro-grid"><h2>Партнёры,<br/><span>а не клиенты</span></h2><div className="intro-copy"><p>Уже более 7 лет мы — надёжный оператор питания на крупнейших спортивных площадках Москвы. Организуем масштабные мероприятия, где важны безупречная логистика, чёткая работа команды и качество.</p><p>Собственное современное производство, складской комплекс и автопарк позволяют нам быть мобильными и оперативными. Главная гордость — команда профессионалов, для которой нет мелочей.</p></div></div></section>

    <section className="advantages section"><div className="section-heading"><div><p className="section-label">Почему выбирают нас</p><h2>Сервис начинается<br/>с внимания</h2></div></div><div className="advantage-grid">{advantages.map(([number,title,text]) => <article className="advantage-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="formats section" id="formats"><div className="section-heading inline"><div><p className="section-label">02 / Форматы</p><h2>Ваше событие.<br/><em>Наш почерк.</em></h2></div><p>От камерного завтрака до многотысячного спортивного события — сохраняем ресторанный уровень в любом масштабе.</p></div><div className="format-grid">{formats.map((format,index) => <article className="format-card" key={format.title}><Image src={format.image} alt={format.title} fill sizes="(max-width: 760px) 100vw, 50vw"/><div className="format-overlay"/><span className="format-number">0{index+1}</span><div className="format-content"><h3>{format.title}</h3><p>{format.text}</p><span className="circle-arrow"><ArrowUpRight/></span></div></article>)}</div></section>

    <section className="projects section" id="projects"><div className="project-intro"><p className="section-label">03 / Избранные проекты</p><h2>События,<br/>которые <em>помнят</em></h2><p>Каждый проект — результат работы людей, которые любят своё дело и выкладываются на все 101%.</p></div><div className="project-list">{projects.map((project,index) => <div className="project-row" key={project}><span>0{index+1}</span><h3>{project}</h3><ArrowUpRight/></div>)}</div></section>

    <section className="contact section" id="contacts"><div><p className="section-label">04 / Контакты</p><h2>Давайте создадим<br/><em>ваше событие</em></h2></div><div className="contact-details"><a href="tel:+79169986220"><Phone size={18}/>+7 (916) 998-62-20</a><a href="mailto:info@catering-demidov.ru"><Mail size={18}/>info@catering-demidov.ru</a><p><MapPin size={18}/>Москва, ул. Лужники, д. 24, стр. 24</p><span>Пн — Пт: 10:00–18:00</span></div><form className="contact-form"><label><span>Ваше имя</span><input type="text" placeholder="Как к вам обращаться"/></label><label><span>Телефон</span><input type="tel" placeholder="+7 (___) ___-__-__"/></label><button className="button button-gold" type="button">Оставить заявку <ArrowUpRight size={18}/></button><small>Демонстрационная форма. Отправка данных не подключена.</small></form></section>

    <footer><Image src="/images/logo.png" alt="Кейтеринг Демидов" width={160} height={52}/><p>Ресторанное качество кейтеринга — наш особый почерк</p><span>Концепция редизайна · 2026</span></footer>
  </main>;
}
