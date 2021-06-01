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










//
// let x = 'Hello';
// let name = 'Користувач';
// let age = 'Введіть  ваш  вік';
// console.log(name);
// console.log(x);
// console.log(age);

// alert(name);
// alert(age);
// аlert(x);


// завдання 3 =====================================================================
// - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
// const string_1 = 'Hello'
// const string_2 = 'World'
// const string_3 =  'Oc10'
// const num_1 = 1231;
// const num_2 = 42324;
// const num_3  = 4235234 ;
//
//
// console.log(string_1);
// console.log(string_2);
// console.log(string_3);
// console.log(num_1);
// console.log(num_2);
// console.log(num_3);
// document.write(string_1);
// document.write(string_2);
// document.write(string_3);
// document.write(num_1);
// document.write(num_2);
// document.write(num_3);
// alert(string_1);
// alert(string_2);
// alert(string_3);
// alert(num_1);
// alert(num_2);
// alert(num_3);


// завдання 4 =====================================================================
// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write
// const name = prompt( 'name');
// const last_name = prompt( 'last name');
// const surname = prompt( 'surname');
// console.log(name);
// console.log(last_name);
// console.log(surname);
// document.write(name);
// document.write(last_name);
// document.write(surname);
// alert(name);
// alert(last_name);
// alert(surname);


// завдання 5 =====================================================================
// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
// const person = name + ' ' + last_name + ' ' + surname;
// const person_2 = `${name} ${last_name} ${surname}`;
//
// console.log(person);
// document.write(person);
// console.log(person_2);
// document.write(person_2);
// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
// const name_mom = prompt( 'name_mom');
// const last_name_mom = prompt( 'last name_mom');
// const surname_mom = prompt( 'surname_mom');
// const mom = name_mom + ' ' + last_name_mom + ' ' + surname_mom;
// const mom_2 = `${name_mom} ${last_name_mom} ${surname_mom}`;
// console.log(mom);
// document.write(mom);
// console.log(mom_2);
// document.write(mom_2);


// завдання 6 =====================================================================
// - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

// const number_1 = +prompt('number_1');
// const number_2 = +prompt('number_2');
// const number_3 = +prompt('number_3');
//
// console.log(number_1);
// console.log(number_2);
// console.log(number_3);


// завдання 7 =====================================================================
// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// const number_one = parseInt(prompt('you_number_1'));
// const number_two = parseInt(prompt('you_number_2'));
// const number_three = parseInt(prompt('you_number_3'));
// const number_four = parseInt(prompt('you_number_4'));
//
// console.log(number_one);
// console.log(number_two);
// console.log(number_three);
// console.log(number_four);


// завдання 8 =====================================================================
// - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// const float_number_one = parseFloat(prompt('you_float_number_1'));
// const float_number_two = parseFloat(prompt('you_float_number_2'));
// const float_number_three = parseFloat(prompt('you_float_number_3'));
//
// let result = float_number_one + float_number_two + float_number_three;
//
// console.log(result);


// завдання 9 =====================================================================
// - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера
// const float_number_one = parseFloat(prompt('you_float_number_1'));
// const float_number_two = parseFloat(prompt('you_float_number_2'));
// const float_number_three = parseFloat(prompt('you_float_number_3'));
//
// let result_float_round = Math.round(float_number_one) + Math.round(float_number_two) + Math.round(float_number_three);
// console.log(result_float_round);


// завдання 10 =====================================================================
// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число -
// это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
// const number_one_pow = +prompt('you_number_1');
// const number_two_pow = +prompt('you_number_2');
//
// const result_pow = Math.pow(number_one_pow,number_two_pow )
// const result_pow_2 = number_one_pow ** number_two_pow;
// console.log(result_pow)
// console.log(result_pow_2)


// завдання 11 =====================================================================
// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;
// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined
//
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));


// завдання 12 =====================================================================
// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
// 5 < 6 -> true
// 5 > 6 -> false
// 5 >= 6 -> false
// 5 > 6 -> false
// 10 === 10 -> true
// 10 == 10 -> true
// 10 > 10 -> false
// 10 < 10 -> false
// 10 > 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

// завдання 13 =====================================================================
//     В одинаковых выражениях в задании не использовать два одинаковых оператора.
//     Каждое выражение вложить в свою переменную
// let ooo = 5 < 6 ;
// let mmm = 5 > 6;
// let lll = 5 >= 6;
// let kkk = 5 === 6;
// let ggg = 10 === 10;
// let fff = 10 == 10;
// let eee = 10 > 10;
// let ddd = 10 < 10;
// let ccc = 10 != 10;
// let bbb = 123 === '123';
// let aaa = 123 == '123';
//
// console.log(aaa);
// console.log(bbb);
// console.log(ccc);
// console.log(ddd);
// console.log(eee);
// console.log(fff);
// console.log(ggg);
// console.log(kkk);
// console.log(lll);
// console.log(mmm);
// console.log(ooo);


// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
