// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.money = 0;
// }
// const igor = new User(2, 'Igor', 'Samagaqlskyi', 'dwsadw@gmail.com', '+3765767');
// const ira = new User(1, 'ira', 'joids', 'lalal@gmail.com', '+3763432467');
// const vasya = new User(4, 'ira', 'joids', 'lalal@gmail.com', '+3763432467');
// const davyd = new User(5, 'ira', 'joids', 'lalal@gmail.com', '+3763432467');
// const nazar = new User(7, 'ira', 'joids', 'lalal@gmail.com', '+3763432467');
// const orest = new User(8, 'ira', 'joids', 'lalal@gmail.com', '+3763432467');
// const Kolya = new User(3, 'ira', 'joids', 'lalal@gmail.com', '+3763432467');
//
// let arrUser = [igor, ira, vasya, davyd, nazar, orest, Kolya]
// console.log(igor);

// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню
// arrUser.filter(user =>{
//     if(user.id % 2 ===0){
//         console.log(user)
//     }
// })
//  arrUser.sort((a,b)=>{
//     return a.id - b.id;
// })
// console.log(arrUser);
//  arrUser.sort((a,b)=>{
//     return b.id - a.id;
// })
// console.log(arrUser);


// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname, email, phone, order, product = []) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//         this.product = product;
//     }
//
//     showProduct() {
//
//         for (const pdt of this.product) {
//             console.log(pdt);
//         }
//     }
// }
// const nadya = new Client(1, 'Nadya', 'petrova', 'jjsdsscc@gmail.com', '+234234333', 10, ['Shewrolet', 'Mazda', 'Honda', 'Toyota']);
// const galya = new Client(2, 'Galya', 'ijbi', 'jkjpkjp@gmail.com', '+234234333', 8, ['Shewrolet', 'Mazda', 'Honda', 'Toyota']);
// const olya = new Client(3, 'Olya', 'kkkk', 'jkkkkkc@gmail.com', '+234234333', 14, ['Shewrolet', 'Mazda', 'Honda', 'Toyota']);
// const tanya = new Client(4, 'Tanya', 'ssss', 'jjsl;llll@gmail.com', '+234234333', 2, ['Shewrolet', 'Mazda', 'Honda', 'Toyota']);
// const Maryan = new Client(5, 'Maryan', 'cccc', 'llllle@gmail.com', '+234234333', 5, ['Shewrolet', 'Mazda', 'Honda', 'Toyota']);
// const taras = new Client(6, 'Taras', 'lllw', 'qwwqwq@gmail.com', '+234234333', 3, ['Shewrolet', 'Mazda', 'Honda', 'Toyota']);
// const Maks = new Client(7, 'Maks', 'pppe', 'saasas@gmail.com', '+234234333', 9, ['Shewrolet', 'Mazda', 'Honda', 'Toyota']);
// const igjr = new Client(8, 'Igor', 'llsl', 'asdsdsd@gmail.com', '+234234333', 7, ['Shewrolet', 'Mazda', 'Honda', 'Toyota']);
// const ivan = new Client(9, 'Ivan', 'wqoo', 'sdsdsds@gmail.com', '+234234333', 13, ['Shewrolet', 'Mazda', 'Honda', 'Toyota']);
// let arrClients = [nadya, galya,olya, tanya, Maryan, taras, Maks, igjr, ivan]
// nadya.showProduct();

// 6. Взяти масив з завдання 2.
// Відсортувати його по кількості товарів в полі order. по спаданню
// arrClients.sort((a,b)=> b.order - a.order )
// console.log(arrClients);


//
// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// function NewCar(driver = [], model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
//     this.driver = driver;
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearOfManufacture = yearOfManufacture;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     this.info = function () {
//         console.log(`Модель ${this.model}, Виробник ${this.manufacturer}, Рік виготовлення ${this.yearOfManufacture},
//        Максимальна швидкість ${this.maxSpeed}, об'єм двигуна ${this.engineCapacity}`)
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//
//         this.maxSpeed += newSpeed;
//         console.log(`Нова максимальна швидкість ${this.maxSpeed}`)
//     }
//
//     this.changeYear = function (newValue) {
//         this.yearOfManufacture = newValue;
//         console.log(`Новий рік виготовлення ${this.yearOfManufacture}`)
//     }
//
//     this.addDriver = function(newDrive){
//         this.driver.push(newDrive);
//     }
// }
// let driver1 = {
//     name: 'Ivan',
//     year: 23,
//     money: 200000
// }
//
// let driver2 = {
//     name: 'Vasya',
//     year: 29,
//     money: 300000
// }
// let driver3 = {
//     name: 'Davyd',
//     year: 27,
//     money: 400000
// }
//
// const tomash = new NewCar([{name: 'Tanya', year: 29, money: 340000}],
//     'Toyota rav 4', 'Japan', 2012, 215, 2.6)
//
// tomash.drive();
// tomash.info();
// tomash.increaseMaxSpeed(22);
// tomash.increaseMaxSpeed(24);
// tomash.changeYear(2001);
// tomash.changeYear(2020);
// tomash.addDriver(driver1);
// tomash.addDriver(driver2);
// tomash.addDriver(driver3);
// console.log(tomash);


// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class Car {
//     constructor(driver, model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
//         this.driver = driver;
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.yearOfManufacture = yearOfManufacture;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//
//     info() {
//         console.log(`Модель ${this.model}, Виробник ${this.manufacturer}, Рік виготовлення ${this.yearOfManufacture},
//        Максимальна швидкість ${this.maxSpeed}, об'єм двигуна ${this.engineCapacity}`)
//     }
//
//     increaseMaxSpeed(newSpeed) {
//
//         this.maxSpeed += newSpeed;
//         console.log(`Нова максимальна швидкість ${this.maxSpeed}`)
//     }
//
//     changeYear(newValue) {
//         this.yearOfManufacture = newValue;
//         console.log(`Новий рік виготовлення ${this.yearOfManufacture}`)
//     }
//
//     addDriver(newDrive) {
//         this.driver = newDrive;
//     }
// }
// let driver1 = {
//     name: 'Ivan',
//     year: 23,
//     money: 200000
// }
// let driver2 = {
//     name: 'Vasya',
//     year: 29,
//     money: 300000
// }
// let driver3 = {
//     name: 'Davyd',
//     year: 27,
//     money: 400000
// }
// const ilya = new Car('ilya', 'Toyota rav 4', 'Japan', 2012, 215, 2.6)
//
// ilya.drive();
// ilya.info();
// ilya.increaseMaxSpeed(22);
// ilya.increaseMaxSpeed(24);
// ilya.changeYear(2001);
// ilya.changeYear(2020);
// ilya.addDriver(driver1);
// ilya.addDriver(driver2);
// ilya.addDriver(driver3);
// console.log(ilya);





// ------------------------------------------------------------------------
// let driver = [{name: 'Dima', age: 13}, {model: 'Camry'}]
//
// let arrO = function (arrObj) {
//     let emptyArr = [];
//     for (let i = 0; i < arrObj.length; i++) {
//         for (let arrElement in arrObj[i]) {
//             emptyArr.push(arrElement.valueOf());
//         }
//     }
//
// return emptyArr;
// }
//
// console.log(arrO(driver));



