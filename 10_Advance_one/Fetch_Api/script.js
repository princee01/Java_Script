const url = "https://api.thecatapi.com/v1/images/search";
const getfacts = async () => {
    let response =await fetch(url);
    console.log(response.status);
    let data = await response.json();
    console.log(data[0]);
}
getfacts();

//or using promise.
// const promise = new Promise(function (Response, reject) {
    
//     setTimeout(function () {
//         let myres = fetch(url);
//         Response(myres);
//     },1000)
// })
// promise.then(function (user) {
//     console.log(user);
// })