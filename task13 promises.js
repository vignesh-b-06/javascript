let loginPromise = new Promise((resolve, reject) => {

    let isLoggedIn = true;

    if (isLoggedIn) {
        resolve("Login successful!");
    } else {
        reject("Login failed!");
    }

});

loginPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });