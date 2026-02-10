let name = prompt ("Ведите свое имя").trim();
if (name === "") {
    alert ("Пожалуйста ведите свое имя!").trim();
}
else if (name.length < 3) {
    alert ("Ваше имя слишком короткое пожалуйста напишите свое полное имя!").trim();
}
else {
    console.log(`Здравствуйте ${name}!`);
}
let why = prompt ("Почему вы хотите поступить именно в этот университет?")
console.log(why.replace(/universtitet/g, "alicode"));