// 1.	צרו פונקציה שמדפיסה "timer" למסך כל 4 שניות.
var theIndex;
function startThePrint(){
document.getElementById("myP").innerHTML += "Timer"
};
function mainFunction(){
    theIndex = setInterval(startThePrint,3000);  
};
function stopThePrint(){
    clearInterval(theIndex);
};


// 2.	צרו פונקציה שמדפיסה counter למסך כל 6 שניות.
var counterIndex;
function printCounter(){
    some_p.innerHTML += "counter";
}
function MainPrintCounter() {
  counterIndex = setInterval(printCounter,6000);
}
function stopThePrintCounter(){
    clearInterval(counterIndex);
}




    // 3.	צרו תוכנית שמדפיסה למסך "i love timers" בתדירות של 5 שניות, עם כפתור שמבטל את ההדפסה.
    var textCounter;
    function printSomeOfTheText(){
       textCounter = setInterval(() => {
        (anotherP.innerHTML += "i love timers")}, 1000);  
    }
function stopThePrints(){
    clearInterval(textCounter);
};

// 5.	צרו תוכנית המקבלת מהמשתמש מספר דקות, ומציגה במסך טיימר יורד, הוסיפו כפתור שעוצר את השעון, הוסיפו כפתור שמתחיל את השעון. *אתגר - שלבו את הכפתורים לכפתור אחד.

var tempCounter ;
function someMainFunction(){
var saveMin = id_num.value;
tempCounter = my_h1.innerHTML = saveMin;
}

var counter = tempCounter;
function someSecFunction(){
    setInterval(()=>{
        my_h1.innerHTML = tempCounter--;
    },1000);
}
someSecFunction();





