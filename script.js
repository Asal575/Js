var write = prompt ("Напишите что нибудь:").trim();
if (write === write.toUpperCase()) {
    console.log(write.toLowerCase());
}
else if (write === write.toLowerCase()) {
    console.log(write.toUpperCase());
}
else {
    console.log();
}