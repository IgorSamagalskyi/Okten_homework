// //як проходить мій день(розпорядок дня)
//
// //Підйом 8:00, йду чистити зуби
//
// function brushOurTeeth(toothpaste) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if (toothpaste) {
//                 console.log('Я почистив зуби')
//                 resolve('Я почистив зуби');
//             }else{
//                 reject('пасти нема, сиджу дома')
//             }
//         },4000)
//     })
// }
//
// let money = 450;
// //сідаю в таксі і їду на роботу // тут використовую функцію колбек
// function goWork(pay, cb){
//     return new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//       if(pay >= 100){
//           cb()
//           pay -= 100;
//           resolve(pay)
//       }else{
//           reject('Нема грошей, сиджу дома')
//       }
//         },2000)
//     })
// }
//
// // іду на обід!
// function  dinner(remainingMoney){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(remainingMoney >= 200){
//                 remainingMoney -= 200;
//                 resolve(remainingMoney, 'Я поїв і готовий продовжувати працювати')
//             }else {
//                 reject( 'Нема грощей, роботи не буде, їду додому')
//             }
//         },1000)
//     })
// }
//
// //їду додому після роботи, по дорозі купляю пасту  // тут використовую функцію колбек
//
// function goingHome(remainingMoney, cb){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//
//             if (remainingMoney >= 100){
//                 cb()
//                 remainingMoney -= 100;
//                 resolve(remainingMoney)
//             }else{
//                 reject('Іду додому пішки')
//             }
//         }, 3000)
//     })
// }
//
// brushOurTeeth(true).then(result=>{
//     // console.log(result);
//     return goWork(money, ()=>{
//         console.log(' біб-біб, я приїхав')
//     });
// }).then(moneyAfterTravel=>{
//     console.log(moneyAfterTravel , 'решта після поїздки на роботу')
//     return dinner(moneyAfterTravel);
// }).then(moneyAfterDinner=>{
//     console.log(moneyAfterDinner, 'решта після їжі')
//     return goingHome(moneyAfterDinner, ()=>{
//         console.log('bib-bib, Ми приїхали')
//     });
// }).then(imHomeWithMoney=>{
//     console.log(imHomeWithMoney, 'Гроші які я приніс додому')
//     return imHomeWithMoney;
// }).catch(err => {
//     console.log('***********************');
//     console.log(err);
//     console.log('***********************');
// })

// ================================async_await===================================

//як проходить мій день(розпорядок дня)

//Підйом 8:00, йду чистити зуби

function brushOurTeeth(toothpaste) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (toothpaste) {
                resolve('Я почистив зуби');
            }else{
                reject('пасти нема, сиджу дома')
            }
        },4000)
    })
}

let money = 350;
//сідаю в таксі і їду на роботу
function goWork(pay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(pay >= 100){
                pay -= 100;
                resolve(pay)
            }else{
                reject('Нема грошей, сиджу дома')
            }
        },2000)
    })
}

// іду на обід!
function  dinner(remainingMoney){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(remainingMoney >= 200){
                remainingMoney -= 200;
                resolve(remainingMoney, 'Я поїв і готовий продовжувати працювати')
            }else {
                reject( 'Нема грощей, роботи не буде, їду додому')
            }
        },1000)
    })
}

//їду додому після роботи, по дорозі купляю пасту

function goingHome(remainingMoney){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (remainingMoney >= 100){
                remainingMoney -= 100;
                resolve(remainingMoney)
            }else{
                reject('Іду додому пішки')
            }
        }, 1000)
    })
}




async function myDay(){
   try{
       let resultAfterDay = await brushOurTeeth(true)
       console.log(resultAfterDay)
       let moneyAfterTravel = await goWork(money)
       console.log(moneyAfterTravel, 'гроші після поїздки на роботу')
       let moneyAfterDinner = await dinner(moneyAfterTravel)
       console.log(moneyAfterDinner, 'гроші після обіду')
       let imHomeWithMoney = await goingHome(moneyAfterDinner)
       console.log(imHomeWithMoney, 'гроші які залишилися в кінці дня')
       return imHomeWithMoney;
   }catch(err){
        console.log(err)
    }
}
myDay();