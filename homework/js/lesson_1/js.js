// завдання 1 =====================================================================
// - присвоить каждому из следующих значений свою переменную:

// завдання 2 =====================================================================
// - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
// hello = 'world';
// owu = 'onet';
// com = 'down';
// ua = 'up';
// one = 90;
// ten = 50;
// number = -299;
// num = 193;
// float = 18.14;
// num2 = 160;
// boll = false;
// boll2 = true;
//
// console.log(hello);
// console.log(owu);
// console.log(com);
// console.log(ua);
// console.log(one);
// console.log(ten);
// console.log(number);
// console.log(num);
// console.log(float);
// console.log(num2);
// console.log(boll);
// console.log(boll2);
// document.write(hello);
// document.write(owu);
// document.write(com);
// document.write(ua);
// document.write(one);
// document.write(ten);
// document.write(number);
// document.write(num);
// document.write(float);
// document.write(num2);
// document.write(boll);
// document.write(boll2);
// alert(hello);
// alert(owu);
// alert(com);
// alert(ua);
// alert(one);
// alert(ten);
// alert(number);
// alert(num);
// alert(float);
// alert(num2);
// alert(boll);
// alert(boll2);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let name = prompt("Введіть своє ім'я");
// let lastName = prompt("Введіть своє прізвище");
// let age = prompt("Введіть свій вік");
//
// console.log( ` "Вітаю ${name} ${lastName} . Тобі ${age}  років"`);

// - Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
// const person = name + ' ' + lastName + ' ' + age;
// const person_2 = `${name}  ${lastName}  ${age}`;
//
// console.log(person);
// console.log(person_2);

// За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
// let namberOne = parseInt(prompt("Введіть число №1"));
// let namberTwo = +prompt("Введіть число №2");
// let namberThree = +prompt("Введіть число №3");
//
// console.log(namberOne);
// console.log(namberTwo);
// console.log(namberThree);

// За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.

// let namber1 = parseInt(prompt("Введіть число №1"));
// let namber2 = parseInt(prompt("Введіть число №2"));
// let namber3 = parseInt(prompt("Введіть число №3"));
// let namber4 = parseInt(prompt("Введіть число №4"));
//
// let sum = namber1 + namber2 + namber3 + namber4;
// console.log(sum);


// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
// Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
// let namberFloat1 = parseFloat(prompt("Введіть число №1"));
// let namberFloat2 = parseFloat(prompt("Введіть число №2"));
// let namberFloat3 = parseFloat(prompt("Введіть число №3"));
//
// let result = namberFloat1 + namberFloat2 + namberFloat3 ;
// console.log(result);


// За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS").
// Просумувати їх між собою. Результат вивести в консоль.
// let namberFloatOne = Math.round(parseFloat(prompt("Введіть число №1")));
// let namberFloatTwo = Math.round(parseFloat(prompt("Введіть число №2")));
// let namberFloatThree = Math.round(parseFloat(prompt("Введіть число №3")));
//
// let floatToFloat = namberFloatOne + namberFloatTwo + namberFloatThree ;
// console.log(floatToFloat);


// - За допомогою prompt() отримати 2 цілих числа.
// Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//     За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//     Example. Число 1 = 5. Число 2 = 2. Результат = 25

// const number_one_pow = +prompt('you_number_1');
// const number_two_pow = +prompt('you_number_2');
// const result_pow = Math.pow(number_one_pow,number_two_pow)
// const result_pow_2 = number_one_pow ** number_two_pow;
// console.log(result_pow)
// console.log(result_pow_2)


// За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх
// (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);



//
// - Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразаї не використовувати однакові оператори!!!
// 5 < 6 -> true
// 5 > 6 -> false
// 5 === 6 -> false
// 5 == 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 > 10 -> false
// 10 < 10 -> false
// 10 != 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true




// Додатково:
//     - Подивіться на наступні вирази і спробуйте вгадати яким буде вивід в консоль. Перевірте себе.
console.log(132 > 100 && 45 < 12 ); //false
console.log(34 > 33 && 23 < 90 );  //true
console.log(99 > 100 && 45 > 12 );   //false
console.log(132 > 100 || 45 < 12 ); //true
console.log(111 > 11 || 45 < 111 );  //true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); //true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );  //true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); //false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));  //true
console.log(!!'-1'); //true
console.log(!!-1); //true
console.log(!!'0'); //true
console.log(!!'null'); //true
console.log(!!'undefined'); //true
console.log(!!(3/'owu'));  //false
console.log((111 > 11 || 45 < 111) ||  !!'0');  //true
console.log((!!111 === !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); //false

