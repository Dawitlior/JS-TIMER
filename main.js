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










var textCounter;
function printSomeOfTheText(){

}