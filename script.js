let number1 = prompt("Ведите первое слагаемое");
let signals = prompt("Ведите операцию: + - * /");
let number2 = prompt("Ведите второе слагаемое"); 
number1 = Number(number1);
number2 = Number(number2);
let result;
if ( signals === "+") {
    result = number1 + number2;
}
else if ( signals === "-") {
    result = number1 - number2;
}
else if ( signals === "*") {
    result = number1 * number2;
}
else if ( signals === "-") {
    result = number1 / number2;
}
alert ( "СУММА: " + result );


