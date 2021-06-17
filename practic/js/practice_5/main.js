
// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div
//
// 3. Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//
//
//     ДОДАТКОВО
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// let colorElement = document.querySelector('#main_header');
// console.log(colorElement);
// colorElement.style.color = '#b153f0'

// b) робить шириниу елементу ul 400px
// let widthUl = document.getElementsByTagName('ul')
// console.log(widthUl);
// for (const widthUlElement of widthUl) {
//     widthUlElement.style.backgroundColor = '#000';
//     widthUlElement.style.width = '400px'
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// let linkList = document.querySelectorAll('.linkList')
// console.log(linkList);
// for (const linkListElement of linkList) {
//     linkListElement.style.backgroundColor =  '#57e836';
//     linkListElement.style.width =  '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// let listElement2 = document.querySelector('.listElement2')
// listElement2.innerHTML = '00% гарантія успішного працевлаштування.' +
//     ' 6 занять на тиждень. Постійна підтримка менторів. Доведені результати.';

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let allTagLi = document.getElementsByTagName('li');
// for (const allTagLiElement of allTagLi) {
//     allTagLiElement.style.backgroundColor = '#ddd'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let tagA = document.getElementsByTagName( 'a' )
// for (const tagAElement of tagA) {
//     tagAElement.setAttribute( 'class', 'anchor' );
// }

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let tagA = document.getElementsByTagName( 'a' )
// for (const tagAElement of tagA) {
//    let text = tagAElement.innerText;
//    if(text === 'link3'){
//        tagAElement.style.fontSize = '40px'
//    }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let tagA = document.getElementsByTagName( 'a' )
// for (const tagAElement of tagA) {
//     tagAElement.setAttribute('class', 'element_XXX')
//     let xxx = document.querySelectorAll('.element_XXX')
//     for (const xxxElement of xxx) {
//         xxxElement.innerHTML = 'xxx';
//     }
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let subHeader = document.querySelectorAll('.sub-header');
// for (const subHeaderElement of subHeader) {
//     subHeaderElement.style.backgroundColor = prompt('Введіть свій колір');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту
// = content 2 segment . Колір отримати з prompt()
// let subHeader = document.querySelectorAll('.sub-header');
// for (const subHeaderElement of subHeader) {
//     let change = subHeaderElement.innerHTML;
//     if(change === 'content 2 segment') {
//         subHeaderElement.style.backgroundColor = prompt('Введіть свій колір');
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
// Текст отримати з prompt()
// let content1 = document.querySelector('.content_1');
// content1.innerHTML = prompt('Введіть свій текст')

// l) отримати елементи p та змінити їм padding на 20px
// let getAllTagP = document.getElementsByTagName('p');
// for (const allTagPElement of getAllTagP) {
//     allTagPElement.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
// let classText2 = document.querySelectorAll('.text2');
// for (const classText2Element of classText2) {
//     classText2Element.innerHTML = 'ГРУПА Квітень 2021'
// }


// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

const form = document.forms.myForm;
form.firstname.oninput = ()=>{
}