// Скрипт меняет ТОЛЬКО стрелки на iOS / iPadOS.
// Класс is-ios скрывает текстовую стрелку и показывает SVG того же цвета.
// На Windows, Android и обычном macOS текстовая стрелка остаётся прежней.
// Переключение языка работает обычными HTML-ссылками, без JavaScript.
// iPadOS can identify itself as macOS; touch capability distinguishes it.
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
if (isIOS) document.documentElement.classList.add('is-ios');
