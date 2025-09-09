const inputBox = document.getElementById("inputBox");
const range = document.getElementById("rangeinput")
const number = document.getElementById("number")
const specialchar = document.getElementById("specialchar")
const button=document.getElementById("button")
let vari=false;
function generatepass() {
   
    
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let ans = "";
    if (vari) {
        str += "1234567890";
    }
   
     range.addEventListener("click",(e) => {
        //console.log(e.target.value);
        for (let i = 0; i <= e.target.value; i++){
            ans += str[Math.floor(Math.random() * str.length)]
            console.log(ans);
         }
          
        
    })
      
  inputBox.value = ans;
}

button.addEventListener("click", () => {
    generatepass();
})

