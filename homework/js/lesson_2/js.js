//
// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// const arrNumbers = [231231, -23321, 23232, 3232, 3423324,];
// const arrStrings = ['Hello', 'Ira', 'World', 'Nadya', 'Home',];
// const arrAllValues = ['Hello', true, false, 3232, 3324,];
//
// console.log(arrNumbers);
// console.log(arrStrings);
// console.log(arrAllValues);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
// let emptyArray = [];
//
// emptyArray[0] = 123123;
// emptyArray[1] = false;
// emptyArray[2] = 'undefined';
// emptyArray[3] = 'hello';
// emptyArray[4] = true;
// console.log(emptyArray);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// const displayTenBlocks = ['Ihor', 'Sergiy', 'Petro', 'Nadya', 'Olya', 'Ira',
//     'Mariya', 'Sonya', 'Ivan', 'Kolya', 'Den'];
//
// for (let i = 0; i < displayTenBlocks.length; i++) {
//     document.write(`<div style="background-color: #d1dfff; font-size: 25px; padding:10px;">
//     ${displayTenBlocks[i]}, ласкаво просимо в Октен.</div>`)
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// const displayTenIndex = ['Ihor', 'Sergiy', 'Petro', 'Nadya', 'Olya', 'Ira',
//     'Mariya', 'Sonya', 'Ivan', 'Kolya'];
// for (let i = 0; i < displayTenIndex.length; i++) {
//     document.write(`<div style="background-color: #d1dfff; font-size: 25px; padding:10px;">
//     № ${i} ${displayTenIndex[i]}, ласкаво просимо в Октен.</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// const displayTwentyBlocks = ['Ihor', 'Sergiy', 'Petro', 'Nadya', 'Olya', 'Ira',
//     'Mariya', 'Sonya', 'Ivan', 'Kolya', 'Ihor', 'Sergiy', 'Petro', 'Nadya', 'Olya', 'Ira',
//      'Mariya', 'Sonya', 'Ivan', 'Kolya'];
// let i = 0;
// while (displayTwentyBlocks.length > i) {
//     document.write(`<h1 style="background-color: #ffd1e0; padding:10px;">
//      ${displayTwentyBlocks[i]}, доброго ранку.</h1>`)
//     i++
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// const displayTwentyIndex = ['Ihor', 'Sergiy', 'Petro', 'Nadya', 'Olya', 'Ira',
//     'Mariya', 'Sonya', 'Ivan', 'Kolya', 'Ihor', 'Sergiy', 'Petro', 'Nadya', 'Olya', 'Ira',
//      'Mariya', 'Sonya', 'Ivan', 'Kolya'];
// let i = 0;
// while (displayTwentyIndex.length > i) {
//     document.write(`<h1 style="background-color: #ffd1e0; padding:10px;">
//     № ${i} ${displayTwentyIndex[i]}, доброго ранку.</h1>`)
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// const tenNumbers = [344, 124234, 5346, 3346, 4576, 856,
//     4234, 253, 346, 4574, 568568];
//
// for (const tenNumber of tenNumbers) {
//     console.log(tenNumber);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// const tenStrings = ['Ihor', 'Galya', 'World', 'Nadya', 'Olya', 'Ira',
//     'Hello', 'Sonya', 'Ivan', 'Kolya', 'Den'];
//
// for (let i = 0; i < tenStrings.length; i++) {
//     console.log(tenStrings[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі
// const tenValues = ['1234e124', 234234 , 'Igor', 'eqqqwe', true, false, 234234, 2345235, 'Hello', 1234];
//
// let j = 0;
// while (tenValues.length > j){
//     console.log(tenValues[j]);
//     j++
// }

// - Створити масив з 10 елементів числового,
// стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// const displayBooleans = ['1234e124', false , true, 'eqqqwe', false, 234234, true, true, 1234];
// let j = 0;
// while (displayBooleans.length > j){
//     if( typeof displayBooleans[j] === "boolean") {
//         console.log(displayBooleans[j]);
//     }
//     j++
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
// const displayNumbers = ['1234e124', 123 , true, 'eqqqwe', false, 234234, true, true, 1234];
//
// for (let i = 0; i < displayNumbers.length; i++) {
//     if(typeof displayNumbers[i] === 'number' ) {
//         console.log(displayNumbers[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// const displayString = ['1234e124', 123 , true, 'eqqqwe', false, 234234, 'jhfiajshbf', true, '1234'];
// for (let i = 0; i < displayString.length; i++) {
//     if(typeof displayString[i] === 'string' ) {
//         console.log(displayString[i]);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до
// конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
// let emptyArr = [];
//
// emptyArr[0] = 12312;
// emptyArr[1] = '12312';
// emptyArr[2] = 'Hello';
// emptyArr[3] = true;
// emptyArr[7] = false;
// emptyArr[12] = '12312';
// emptyArr[13] = -87;
// emptyArr[14] = 8888;
//
// for (let i = 0; i < emptyArr.length; i++) {
//     console.log(emptyArr[i]);
//
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     document.write(`<h1>${i}</h1>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
//     document.write(`<p>${i}</p>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
//     document.write(`<p>${i}</p>`)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i <= 100; i++) {
//     if(i % 2 === 0){
//     console.log(i);
//     document.write(`<p>${i}</p>`)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки.
// через console.log + document.write
// for (let i = 0; i <= 100; i++) {
//     if(i % 2){
//     console.log(i);
//     document.write(`<p>${i}</p>`)
//     }
// }


// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// for (let min = 0; min < 2; min++) {
//
//     for (let sec = 0; sec < 60; sec++) {
//         document.write(`<p>${min} : ${sec}</p>`)
//     }
// }
// document.write(`<p> 2 : 00</p>`)

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let h = 0; h <= 2; h++) {
//     if (h < 10) {
//         h = '0' + h;
//     }
//     for (let m = 0; m < 60; m++) {
//         if (m < 10) {
//             m = '0' + m;
//         }
//         if (h == '02' && m > 19) {
//             break
//         }
//         for (let s = 0; s < 60; s++) {
//             if (s < 10) {
//                 s = '0' + s;
//             }
//             document.write(`<p style="margin: 10px;  width: 20%;
//             text-align: center; background-color: #d2f3d2; font-size: 25px;">${h} : ${m} : ${s}</p>`)
//         }
//     }
// }
// document.write(`<p style="margin: 10px;  width: 20%;
//             text-align: center; background-color: #d2f3d2; font-size: 25px;">02 : 20 : 00</p>`)

// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.


    // let concatenation = [ 'a', 'b', 'c'];

// let concatenationElement = '';
// for (let i = 0; i < concatenation.length; i++) {
//     concatenationElement += concatenation[i];
// }
// console.log(concatenationElement);


// let conkat = '';
// for (let string of concatenation) {
//       conkat += string;
// }
// console.log(conkat)


// let j = 0;
// let concatString = '';
// while(j < concatenation.length){
//     concatString += concatenation[j]
//     j++
// }
// console.log(concatString);