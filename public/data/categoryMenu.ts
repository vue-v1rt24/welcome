export const categoryMenu = [
  {
    title: 'Квартиры',
    image: '/images/nedvizhimost/kvartirs.jpg',
    items: [
      { title: 'Однокомнатные', link: '/kvartirs?rooms=1' },
      { title: 'Двухкомнатные', link: '/kvartirs?rooms=2' },
      { title: 'Трёх и более', link: '/kvartirs?rooms=5' },
      { title: 'Квартиры-студии', link: '/kvartirs?rooms=0' },
      { title: 'Свободная планировка', link: '/kvartirs?rooms=6' },
    ],
  },
  {
    title: 'Новостройки',
    image: '/images/nedvizhimost/novostruiki.jpg',
    items: [
      { title: 'Комфорт-класс', link: '/novostroiki?type=komfort' },
      { title: 'Бизнес-класс', link: '/novostroiki?type=biznes' },
      { title: 'Эконом-класс', link: '/novostroiki?type=econom' },
      { title: 'Премиум-класс', link: '/novostroiki?type=premium' },
    ],
  },
  {
    title: 'Дома',
    image: '/images/nedvizhimost/doma.jpg',
    items: [
      { title: 'Таунхаус', link: '/homes?type=taunhaus' },
      { title: 'Коттедж', link: '/homes?type=cottedzh' },
      { title: 'Дом', link: '/homes?type=home' },
    ],
  },
  {
    title: 'Участки',
    image: '/images/nedvizhimost/uchastki.jpg',
    items: [
      { title: 'Поселений (ИЖС)', link: '/uchastki?type=poselenii' },
      { title: 'Сельхозназначения (СНТ, ДНП)', link: '/uchastki?type=selhoz' },
    ],
  },
  {
    title: 'Коммерческие помещения',
    image: '/images/nedvizhimost/pomezheniya.jpg',
    items: [
      { title: 'Торговая площадь', link: '/pomezheniya?type=torgovayaplozhad' },
      { title: 'Офис', link: '/pomezheniya?type=ofis' },
      { title: 'Универсальное', link: '/pomezheniya?type=universalnoe' },
      { title: 'Земля коммерческая', link: '/pomezheniya?type=zelyacommercheskaya' },
      { title: 'Имущественный комплекс', link: '/pomezheniya?type=imuzhestvenniicomplex' },
    ],
  },
  {
    title: 'Гаражи',
    image: '/images/nedvizhimost/garazhi.jpg',
    items: [
      { title: 'Встроенный', link: '/grazi?type=vstrotnnii' },
      { title: 'Кирпичный', link: '/grazi?type=kirpichnii' },
      { title: 'Металлический', link: '/grazi?type=mettal' },
      { title: 'Наземный боксовый', link: '/grazi?typenazembox=' },
      { title: 'Наземный многоэтажный', link: '/grazi?type=nazemmnogoetazh' },
    ],
  },
];

//
export type TypeCategoryMenu = typeof categoryMenu;
