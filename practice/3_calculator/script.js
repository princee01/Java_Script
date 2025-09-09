const input=document.querySelector("input")
const buttons = document.querySelectorAll("button")

const arr = Array.from(buttons)


arr.forEach(button => {
    button.addEventListener("click",(e) => {
        if (e.target.innerHTML == "=") {
            input.value= eval(input.value)
             
        }
        else if (e.target.innerHTML == "AC") {
            
            input.value = "";
        }
        else if (e.target.innerHTML == "del") {
            input.value=input.value.slice(0, -1);
            
        } else {
            input.value+=e.target.innerHTML
        }
            
        
    })
    
})