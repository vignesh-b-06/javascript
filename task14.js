
function gm() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello");
        }, 2000);
    });
}
async function sm() {
    let result = await gm();
    console.log(result);
}

sm();