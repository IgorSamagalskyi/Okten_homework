// 1) створити функцію яка приймає масив та виводить його
//
// const arrString = ['Ihor', 'Galya', 'World', 'Nadya', 'Olya', 'Ira',
//     'Hello', 'Sonya', 'Ivan', 'Kolya', 'Den'];
//
// let arrPrintItem1 = function (arr){
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
//
// function arrPrintItem(arr){
//     arr.reverse()
//         for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// arrPrintItem1(arrString);
// console.log('--------------------------------')
// arrPrintItem(arrString);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// let randomaizer = function (){
//     let randomNumbers = [];
//     for (let i = 0; i < 100; i++) {
//         randomNumbers.push(Math.round(Math.random() * 100))
//     }
//     return randomNumbers;
// }()
//
// function arrPrintItem(arr){
//     // arr.reverse()
//         for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// arrPrintItem(randomaizer);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let threeNumbers = [6,99,78]
// let minNum = function (arr){
//     let num = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (num < arr[i]){
//         continue;
//         }
//         num = arr[i];
//     }
//     return num;
// }
// console.log(minNum(threeNumbers));

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let threeNumbers = [6,99,78]
// let maxNum = function (arr){
//     let num = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (num > arr[i]){
//         continue;
//         }
//         num = arr[i];
//     }
//     return num;
// }
// console.log(maxNum(threeNumbers));

// 5) створити функцію яка повертає найбільше число з масиву
// let num = [23, 23, 234, 5345, 454, 234, 34234, 234235, 423423,44363456, 33453,5643634,6345345,]
// let maxNumber = function (arr){
//     return Math.max(...arr);
// }
// 6) створити функцію яка повертає найменьше число з масиву
// let minNumber = function (arr){
//     return Math.min(...arr);
// }
// console.log(maxNumber(num));
// console.log(minNumber(num));

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// let num = [223423423, 22343, 234, 5345, 454, 234, 34234, 234235, 423423,44363456, 33453,5643634,6345345,]
//
// let additionNumbers = function (arrNum){
//     let acc = arrNum[0];
//     for (let i = 1; i < arrNum.length; i++) {
//         acc += arrNum[i];
//     }
//     return acc;
// }
// console.log(additionNumbers(num));

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let num = [223423423, 22343, 234, 5345, 454, 234, 34234, 234235, 423423,44363456, 33453,5643634,6345345,]
// let arithmeticMean = function (arrNum){
//     let acc = arrNum[0];
//     for (let i = 1; i < arrNum.length; i++) {
//         acc += arrNum[i];
//     }
//     acc /= 2;
//     return Math.round(acc);
// }
// console.log(arithmeticMean(num));

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let arrObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let objKey = function (arr){
//     let emptyArr = [];
//     for (let i = 0; i < arr.length; i++) {
//          emptyArr.push(Object.keys(arr[i]));
//     }
//     return emptyArr.flat(2);
// }
// console.log(objKey(arrObj));

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let arrObj2 = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let objKey = function (arr){
//     let emptyArr = [];
//     for (let i = 0; i < arr.length; i++) {
//          emptyArr.push(Object.values(arr[i]));
//     }
//     return emptyArr.flat(2);
// }
// console.log(objKey(arrObj2));

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// let arrNum1 = [1, 2, 3, 4];
// let arrNum2 = [2, 3, 4, 5];
//
//
// let concatNumInArrays = function (arr1, arr2) {
//     let emptyArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         emptyArr.push(arr1[i] + arr2[i]);
//     }
//     return emptyArr;
// }
// console.log(concatNumInArrays(arrNum1, arrNum2));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'