const Mainbalance = document.querySelector("h1");
console.log(Mainbalance);
const ul = document.querySelector(".list");
const textinput = document.querySelector("#textInput");
console.log(textinput);
const numberinput = document.querySelector("#numInput");
console.log(numberinput);
const income = document.querySelector(".plus");
const rent = document.querySelector(".minus");
const form = document.querySelector("form");

form.addEventListener("submit", additem);

function additem(e){
    e.preventDefault()
    if (textinput.value !== "" && numberinput.value !=="") {
        const li = document.createElement("li");
    li.innerText = textinput.value +numberinput.value;
    
 Mainbalance.innerText = Number(Mainbalance.innerText) + Number(numberinput.value);
 if (numberinput.value >0) {

  li.style.backgroundColor ="green"
  li.style.color ="white"
    income.innerText = Number(income.innerText) + Number(numberinput.value)
 }
 else{
    li.style.backgroundColor ="red";
  li.style.color ="white" ;
  rent.innerText = Number(rent.innerText) + Number(numberinput.value)
 }    

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "X"
    li.appendChild(deletebtn);
    ul.appendChild(li);
    deletebtn.addEventListener("click", (e)=>{
        e.target.parentElement.remove()
        Mainbalance.innerText = Number(Mainbalance.innerText) - Number(numberinput.value);
        
    })
}
    
};