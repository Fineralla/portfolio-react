// создадим элемент с прокруткой
let div = document.createElement('div');
const navList = document.querySelector('.nav-list');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

// мы должны вставить элемент в документ, иначе размеры будут равны 0
document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;
navList.style.setProperty('--scroll-width', scrollWidth + 'px');

div.remove();

alert(scrollWidth);
