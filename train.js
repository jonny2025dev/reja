
/*
console. log ("Jack Ma maslahatlari");
const list = [
  "yahshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];
//CALBACK function
function maslahatBering(a, callback) {
   if(typeof a !== 'number') callback("insert a number", null);
   else if (a <= 20) callback(null, list [0]);
   else if (a > 20 & a <= 30) callback(null, list [1]);
   else if (a > 30 & a <= 40) callback(null, list [2]);
   else if (a > 40 & a <= 50) callback(null, list [3]);
   else if (a > 50 & a <= 60) callback(null, list [4]);
   else {
   // return list[5];
     setTimeout(function () {
       callback(null, list[5]);
   }, 1000);
  }
}



console.log(" herepassed 0");
maslahatBering(70, (err, data) => {
    if(err) console.log('ERROR:', err);
    else {
      console.log('javob:',data);
    }
});
console.log(" herepassed 1");

*/

//console("==================================");

// //then/catch
// console. log ("passed here 0");
//  maslahatBering (65)
//   .then ((data) => {
//     console. log ("javob:", data);
//     })
//     .catch((err) => {
//     console. log ("ERROR:", err);
//     });
//    console. log ("passed here 1");




   //console("==================================");

   
 /*
   console. log ("Jack Ma maslahatlari");
   const list = [
     "yahshi talaba boling", // 0-20
     "togri boshliq tanlang va koproq hato qiling", // 20-30
     "uzingizga ishlashingizni boshlang", // 30-40
     "siz kuchli bolgan narsalarni qiling", //40-50
     "yoshlarga investitsiya qiling", // 50-60
     "endi dam oling, foydasi yoq endi", // 60
   ];
   
   async function maslahatBering(a, callback) {
      if(typeof a !== 'number') throw new Error("insert a number");
      else if (a <= 20) return list[0];
      else if (a > 20 & a <= 30) return list[1];
      else if (a > 30 & a <= 40) return list[2];
      else if (a > 40 & a <= 50) return list[3];
      else if (a > 50 & a <= 60) return list[4];
      else {
  
        /*
         return list[5];
        */

       /*  
       //Promise function
         return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 5000);
         });
      }
   }


    // asyn/await
    async function run() {
      let javob = await maslahatBering(65);
      console. log (javob);
      javob = await maslahatBering(31);
      console. log(javob);
      javob = await maslahatBering(41);
      console. log (javob);
    }
    run();
  
    */
  /*
    console.log("EXECUTE");
//  ⭐️ Asynchronous: CALLBACK, ASYNC && PROMISE

// DEFINE
function qoldiqliBolish(a, b, callback) {
  if (b === 0) {
    callback("Mahraj nolga teng bololmaydi", null);
  } else {
    callback(null, a % b);
  }
}

// CALL
qoldiqliBolish(10, 7, (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Data:", data);
  }
});
*/

function countLetter(letter, word) {
  let count = 0;
  for (let char of word) {
    if (char === letter) {
      count++;
    }
  }
  return count;
}

console.log("Natija 1:", countLetter("e", "engineer"));
console.log("Natija 2:", countLetter("g", "engineer");
console.log("Natija 3:", countLetter("x", "example")); 
console.log("Natija 4:", countLetter("z", "example")); 
