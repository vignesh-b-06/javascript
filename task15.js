function sayhello(name, call) {
    console.log("Hello " + name);
    call(); 
}

function sayBye() {
    console.log("Goodbye");
}

sayhello("Vignesh", sayBye);