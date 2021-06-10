// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.


// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
// let elementIdContent = document.getElementById("content")
// let text = elementIdContent.innerText;
// console.log(text);
// document.write(text)

// b) отримує текст з блоку з id "rules"
// let elementIdRules = document.getElementById("rules")
// let textRules = elementIdRules.innerHTML;
// console.log(textRules);
// document.write(textRules)

// c) замініть текст параграфа з id 'content' на будь-який інший
// let elementIdContent = document.getElementById("content")
// elementIdContent.innerHTML = '<div>Hello all, how are you</div>';
// console.log(elementIdContent);

// d) замініть текст параграфа з id 'rules' на будь-який інший
// let elementIdRules = document.getElementById("rules")
// elementIdRules.innerHTML = 'Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе. Второе правило Бойцовского клуба: никогда никому не рассказывать о Бойцовском клубе.';
// console.log(elementIdRules);

// e) змініть кожному елементу колір фону на червоний
// let colorElement = document.getElementsByClassName('fc_rules');
// console.log(colorElement);
// for (const colorElementElement of colorElement) {
//     colorElementElement.style.backgroundColor = 'rgb(247,107,107)'
// }

// f) змініть кожному елементу колір тексту на синій
// let textColor = document.getElementsByClassName('fc_rules');
// for (const textColorElement of textColor) {
//     textColorElement.style.color = '#0762C0FF';
// }

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// let allClassRules = document.querySelector('.fc.bp')
// console.log(allClassRules);

// h) отримати всі елементи з класом fc_rules
// let rulesElements = document.getElementsByClassName('fc_rules');
// for (const rulesElement of rulesElements) {
//     console.log(rulesElement);
// }

// // i) поміняти колір тексту у всіх елементів fc_rules на червоний
// let rulesElements = document.getElementsByClassName('fc_rules');
// for (const rulesElement of rulesElements) {
//     rulesElement.style.backgroundColor = 'red'
// }