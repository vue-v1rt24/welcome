export const menu = {
  // Услуги
  services: [
    { title: 'Юридические услуги', link: '/legal-services' },
    { title: 'Ипотечные услуги', link: '/mortgage-services' },
  ],

  // Об агентстве
  agency: [
    { title: 'Об агентстве', link: '/agency' },
    { title: 'Карьера', link: '/career' },
    { title: 'Наши специалисты', link: '/experts' },
    { title: 'Лучшие проекты', link: '/projects' },
    { title: 'Сертификаты и награды', link: '/certificates' },
    { title: 'Отзывы', link: '/reviews' },
  ],

  // Одиночные ссылки
  otherMenu: {
    blog: { title: 'Блог', link: '/blog' },
    contacts: { title: 'Контакты', link: '/contacts' },
  },
};

//
export type TypeMenu = typeof menu;
