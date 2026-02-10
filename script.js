let name = prompt ("Ведите свое имя");
if ( name === null ) {
    alert ("Пожалуйста ведите свое имя!");
}
else if (name.trim() === "") {
    alert ("Пожалуйста ведите свое имя!");
}
else if (name.trim().length < 3) {
    alert ("Ваше имя слишком короткое пожалуйста напишите свое полное имя!");
}
else {
    console.log(`Здравствуйте ${name}!`);
}
let why = prompt ("Почему вы хотите поступить именно в этот университет?")
console.log(why.replace(/universtitet/g, "alicode"));