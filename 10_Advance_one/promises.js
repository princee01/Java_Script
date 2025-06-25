//The Promise object - represents the eventual completion (or failure)
//of an asynchronous operation and its resulting value.

//A Promise is in one of these states:
//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.

//1.
const promiseOne = new Promise(function (resolve, reject) {
    //do an sync task
    //db calls, cryptography, newwork call
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    },1000)
});

//.then has direct connection with resolve.
promiseOne.then(function () {
    console.log("promise consumed");
})

//or 
//2.
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("async task two");
        resolve();
    },1000)
}).then(function () {
    console.log("async2 resolved")
})
//3.
const peromisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({username:"chai",email:"upadhyay946gmail.com"})
    },1000)
})

peromisethree.then(function (user) {
    console.log(user);
})

//4.
const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({username:"hitesh",password:123})
        } else {
            reject('ERROR: SOMETHING WENT WRONG')
        }

    },1000)
})
promisefour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {//termed as chaining 
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(()=>console.log("promise is either resolve or reject"))


//5.
const promisefive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: 123 })
        } else {
            reject('ERROR: js went wrong')
        }

    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response= await promisefive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();
//---------------------------------------------------------------------------------
//6.printing all data come from api

// async function getallusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
//         const data = await response.json()//bcz it take time
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
// getallusers();

//or

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
        console.log(data);
})
.catch((error)=>console.log(error))

