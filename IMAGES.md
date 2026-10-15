# Изображения сайта

Имена чувствительны к регистру. Все пути относительно папки сайта.

| Файл | Размер, px | Где используется |
|---|---|---|
| `assets/astra-lemania-official-v2.png` | 2048 × 349 | Логотип в шапке всех 8 страниц. src в HTML, размер .brand-logo в style.css. |
| `assets/astra-emblem-official.png` | 1839 × 1777 | Фоновый знак Contact. contact.html и en-contact.html; положение и fade: .contact-star в style.css. |
| `assets/terrasse-leman-original.png` | 1774 × 887 | Главная иллюстрация. index.html и en-index.html; .hero-art / .hero-panorama в style.css. |
| `assets/villa-sketch-transparent.png` | 1536 × 1024 | Фоновый чертёж страницы о компании. URL в style.css, селектор .company-section::before. |
| `assets/mihail-randell-clean-edge.png` | 1086 × 1448 | Текущий портрет без белой каймы. a-propos.html и en-a-propos.html; .founder-portrait в style.css. |

## Как заменить

1. Самый простой способ: замените файл в assets новым файлом с ТОЧНО таким же именем и форматом. HTML и CSS менять не потребуется.
2. Для другого имени измените src в обеих языковых страницах; для фонового чертежа — url в style.css.
3. Для другого размера обновите width и height в HTML на реальные размеры изображения. Отображаемый размер задаётся CSS.
4. Для портрета и логотипов используйте PNG с настоящей прозрачностью. Белый фон в JPG не исчезнет автоматически.
5. Если браузер показывает старую картинку, обновите страницу с очисткой кеша либо используйте новое имя файла и обновите ссылки.

## Предыдущие файлы

Следующие изображения сохранены для полноты исходников. Они не являются текущими изображениями страниц; некоторые встречаются в старых CSS-правилах для уже отсутствующих блоков:

- `assets/mihail-randell-navy-cutout.png`
- `assets/villa-sketch.png`
- `assets/mihail-randell-portrait.png`
- `assets/mihail-randell-cutout.png`
- `assets/architecture.jpg`
- `assets/mihail-randell-muted.png`
- `assets/astra-lemania-official.png`
- `assets/leman-panorama.png`
