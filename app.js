var display1 = document.getElementById("showValue");

function addval(abc){
    display1.value += abc;
}
function cal(){
    display1.value = eval(display1.value);
}
function cl(){
    display1.value = "";
}