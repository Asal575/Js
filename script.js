let text = prompt("Напиши текст").trim().toLowerCase();
let notes = {};
for ( let i = 0; i < text.length; i++ ) {
    let a = text[i];
    if (notes[a]) {
        notes[a]++;
    }
    else {
        notes[a] = 1;
    }
}
console.log(notes);
