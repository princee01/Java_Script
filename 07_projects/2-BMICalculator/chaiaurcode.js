const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results");
    
    if (height === ' ' || height <= 0 || isNaN(height)) {
        console.log("enter valid height");
    }
    if (weight === ' ' || weight <= 0 || isNaN(weight)) {
        console.log("enter valid weight");
    }
    else {
        const BMI = (weight / ((height * weight) / 10000)).toFixed(2);
        result.innerHTML = `${BMI}`;
    }
    
    
})











































































// const form = document.querySelector("form")
// //this usecase will give empty value
// //const height=parseInt(document.querySelector("#height").value)

// form.addEventListener('submit', function (e) {
//     e.preventDefault()

//     const height=parseInt(document.querySelector("#height").value)
//     const weight = parseInt(document.querySelector("#weight").value)
//     const results = document.querySelector("#results")
    
//     if (height===' '||height<0 ||isNaN(height)) { 
//         results.innerHTML = "please give a valid height"
//     }
//     else if (weight===' '||weight<0 ||isNaN(weight)) { 
//         results.innerHTML = "please give a valid weight"
//     }
//     else {
//         const BMI=(weight / ((height * weight) / 10000)).toFixed(2);
//         //show the result
//         results.innerHTML = `${BMI}`;
//         if (BMI < 18.6) {
//             results.innerHTML = `${BMI} your are under weight`;
//         }
//         else {
//             results.innerHTML = ` ${BMI} perfect weight`;
//         }
//     }

    
// })