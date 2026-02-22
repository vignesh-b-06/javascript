function stud(name, callback) {
    console.log("stud name:", name);
    callback();
}

function done() {
    console.log("stud name added.");
}

stud("Vignesh", done);