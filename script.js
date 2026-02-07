let number1 = prompt("Ведите первое слагаемое").trim();
let signals = prompt("Ведите операцию: + - * /").trim();
let number2 = prompt("Ведите второе слагаемое").trim(); 
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
else if ( signals === "/") {
    result = number1 / number2;
}
alert ( "СУММА: " + result );
console.log(result);



