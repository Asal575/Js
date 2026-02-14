let a = prompt ("Введите текст:");
let c = prompt ("ВВедите букву (который вы сами пожелаете):")
let d = 0;
for ( let b = 0; b < a.length; b++) {
    if (a[b] === c) {
        d++;
    }
}
console.log("В тексте буква " + c + " было встречано " + d + " раз");
