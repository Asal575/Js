
var name = prompt(" name ");
var age = Number(prompt("age"));
var gender = prompt(" gender ");
if (age >= 18 && age <= 28 && gender === "man") {
    console.log("Siz armiyada xizmat qila olasiz");
}
else {
    console.log("Sizga armiyada xizmat qilish taluqli emas");
}
var been = prompt("been");
if (been === "yes") {
    console.log("Siz armiyaga xizmat qilishingiz shart emas");
}
else if (been === "no") {
    console.log("siz armiyada xizmat qilishingiz shart");
}
else {
    console.log( "Faqat 'yes' yoki 'no' yozing");
}