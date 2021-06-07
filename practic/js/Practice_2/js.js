// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//


//
//
// ============

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
//
// let arr = ['a', 'b', 'c'];
// let arr2 = ['1', 2, 3];
// for (let i = 0; i < arr2.length; i++) {
//    arr.push(arr2[i]);
// }
//
// console.log(arr);


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arrNumbers = [1, 2, 3];
//
// arrNumbers.reverse();
//
// console.log(arrNumbers);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arrNum = [1, 2, 3];
// let arrNum2 = [4, 5, 6];
// for (let i = 0; i < arrNum2.length; i++) {
//     arrNum.push(arrNum2[i]);
// }
//
// console.log(arrNum);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arrNum = [1, 2, 3];
// let arrNum2 = [4, 5, 6];
// arrNum2.reverse()
// for (let i = 0; i < arrNum2.length; i++) {
//     arrNum.unshift(arrNum2[i]);
// }
// console.log(arrNum);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let arr = ['js', 'css', 'jq'];
// let arr2;
//
// arr2 = arr.shift();
// console.log(arr2);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let arr3 = ['js', 'css', 'jq'];
// let arr4;
// arr4 = arr3.pop();
// console.log(arr4);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].

// let arrNumbers = [1, 2, 3, 4, 5];
// arrNumbers.splice( 0,3)
// console.log(arrNumbers);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let arrNumbers = [1, 2, 3, 4, 5];
// arrNumbers.splice( 2, 5)
// console.log(arrNumbers);

// let arrNumbers2 = [1, 2, 3, 4, 5];
// let newArr;
// newArr = arrNumbers2.splice( 0,2)
// console.log(newArr);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arrString = [1, 2, 3, 4, 5];
// arrString.splice(3,0, 'a', 'b', 'c');
// console.log(arrString);


// --------------------------------------------------------------------------------------------
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arrNumbers = [1, 2, 3, 4, 5];
// let string = ['a', 'b', 'c', 'e'];
// let arrMix2 = [];
//
// for (let i = 0; i < arrNumbers.length; i++) {
//     if (arrNumbers[i] === arrNumbers[1] || arrNumbers[i] === arrNumbers[2] || arrNumbers[i] === arrNumbers[6] || arrNumbers[i] === arrNumbers[8]) {
//         for (let j = 0; j < string.length; j++) {
//             if(arrNumbers[i] === string[j] ) {
//                 arrMix2.push(string[j]);
//             }
//         }
//     }
//     arrMix2.push(arrNumbers[i])
// }
// console.log(arrMix2);
// --------------------------------------------------------------------------------------------

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
//
// let arrNumbers = [23451, 2342, 3333, 44444, 22, 43, 55, 66, 77, 88];
//
// for (let i = 0; i < arrNumbers.length; i++) {
//     if(arrNumbers[i] % 2 === 0){
//         console.log(arrNumbers[i]);
//     }
// }
//
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arrNumbers = [23451, 2342, 3333, 44444, 22, 43, 55, 66, 77, 88];
// let emptyArr = [];
//
// for (const arrNumber of arrNumbers) {
//     emptyArr.push(arrNumber)
// }
// console.log(emptyArr);

// ==========================================================2======================================




// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.



// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arrNumbers = [2,17,13,6,22,31,45,66,100,-18, 21, 25, 33,65,53, 34];

// let i = 0;
// while(arrNumbers.length > i){
//     console.log(arrNumbers[i])
//     i++
// }
//
// for (let j = 0; j < arrNumbers.length; j++) {
//     console.log(arrNumbers[j]);
// }

//  let i = 0;
//  while(arrNumbers.length > i){
//
//      if(i % 2) {
//          console.log(arrNumbers[i])
//      }
//     i++
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//
// for (let i = 0; i < arrNumbers.length; i++) {
//      if(i % 2) {
//          console.log(arrNumbers[i])
//      }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let arrNumbers = [2,17,13,6,22,31,45,66,100,-18, 21, 25, 33,65,53, 34];
//
// for (let i = 3; i < arrNumbers.length; i++) {
//      if(arrNumbers[i] % 3 === 0) {
//          arrNumbers[i] = 'okten';
//      }
// }
//
// console.log(arrNumbers);
// console.log(arr);




