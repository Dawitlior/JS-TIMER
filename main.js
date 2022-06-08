// 1.	צרו פונקציה שמדפיסה "timer" למסך כל 4 שניות.
// var theIndex;
// function startThePrint() {
//   document.getElementById("myP").innerHTML += "Timer";
// }
// function mainFunction() {
//   theIndex = setInterval(startThePrint, 3000);
// }
// function stopThePrint() {
//   clearInterval(theIndex);
// }




// 2.	צרו פונקציה שמדפיסה counter למסך כל 6 שניות.
// var counterIndex;
// function printCounter() {
//   some_p.innerHTML += "counter";
// }
// function MainPrintCounter() {
//   counterIndex = setInterval(printCounter, 6000);
// }
// function stopThePrintCounter() {
//   clearInterval(counterIndex);
// }




// 3.	צרו תוכנית שמדפיסה למסך "i love timers" בתדירות של 5 שניות, עם כפתור שמבטל את ההדפסה.
// var textCounter;
// function printSomeOfTheText() {
//   textCounter = setInterval(() => {
//     anotherP.innerHTML += "i love timers";
//   }, 1000);
// }
// function stopThePrints() {
//   clearInterval(textCounter);
// }





// 5.	צרו תוכנית המקבלת מהמשתמש מספר דקות, ומציגה במסך טיימר יורד, הוסיפו כפתור שעוצר את השעון, הוסיפו כפתור שמתחיל את השעון. *אתגר - שלבו את הכפתורים לכפתור אחד.

// var tempCounter;
// function someMainFunction() {
//   var saveValue = id_num.value;
//   tempCounter = my_h1.innerHTML = saveValue;
// }

// var counter = tempCounter;
// function someSecFunction() {
//   setInterval(() => {
//     my_h1.innerHTML = tempCounter--;
//   }, 1000);
// }
// someSecFunction();

// function startAndStopFunction() {
//   if (tempCounter == null) {
//     someSecFunction();
//     btn_start.innerText = "STOP";
//     btn_start.style.color = "red";
//   } else {
//     btn_start.innerText = "START";
//     btn_start.style.color = "blue";
//   }
// }

// function stop() {
//   clearInterval(tempCounter);
// }






// 6.	צרו תוכנית של שעון מעורר, המשתמש מכניס שעה, התוכנית מציגה למשתמש את הזמן שנותר עד השעה, בזמן אמת. הוסיפו כפתור שעוצר את השעון, הוסיפו כפתור שמתחיל את השעון. *אתגר - שלבו את הכפתורים לכפתור אחד.

// var intervalId;
// var time = 0;
// function printTime() {
//   var dateObject = new Date();

//   var secondFromDate = dateObject.getSeconds(); //5
//   var secondFromInput = parseInt(time_input.value.substr(6)); //47

//   var minutesFromInput = parseInt(time_input.value.substr(3, 2));
//   var minutesFromDate = dateObject.getMinutes();

//   var hoursFromInput = parseInt(time_input.value.substr(0, 2));
//   var hoursFromDate = dateObject.getHours();
//   intervalId = setInterval(() => {
//     time_element.innerHTML =
//       hoursFromDate + ":" + (minutesFromDate) + ":" + (secondFromInput-secondFromDate);
    
//     if (secondFromDate == 60) {
//       secondFromDate = 0;
//       minutesFromDate++;
//       if (minutesFromDate == 60) {
//         minutesFromDate = 0;
//         hoursFromDate++;
//         if (hoursFromDate == 24) {
//           hoursFromDate = 0;
//         }
//       }
//     }
//     if (
//       dateObject.getTime ==
//       dateObject.setHours(hoursFromInput, minutesFromInput, secondFromInput)
//     ) {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// }

var distance = 0;
var intervalId;
function playFunc(){
   intervalId = setInterval(()=>{
        box.style.width = distance++ + "px";
    },100)    
}
function pauseFunc(){
clearInterval(intervalId);
}










