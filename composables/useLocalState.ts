// Изменение фона шапки
export const useTheme = () => useState('theme', () => false);

// Для фона модальных окон
export const useBgModal = () => useState('modalBg', () => false);

// Для открытия и закрытия модального окна меню категорий
export const useOpenClosedMenuCategories = () => useState('openMenuCategories', () => false);

// Для открытия и закрытия модального окна меню в мобильной версии
export const useOpenClosedMenu = () => useState('openClosedMenu', () => false);
