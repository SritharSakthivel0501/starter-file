// let textInput=document.getElementById("textInput")

// let numInput=document.getElementById("numInput")

// let amount = document.querySelector("h1")
// // console.log(amount);

// let btn=document.getElementById("btn")


// let list=document.getElementById("list")


// btn.addEventListener('click',function(e){

//    e.preventDefault()

// if(textInput.value =="" || numInput.value ==""){
//    alert('please enter the Text and amount ')
// }


//  let store = textInput.value + numInput.value

//  let li = document.createElement("li");
// //  console.log(li);
//  li.style.color = "green"
//  li.appendChild(document.createTextNode(store));
// list.append(li)

// amount.innerText=Number(numInput.value )+ Number(amount.innerText)

// // amount.innerText = Number(numInput.innerText) + Number(amount.value)
// // console.log(amount.innerHTML);
// // console.log(numInput.innerText);
// // console.log(amount.value);


// let deleteButton = document.createElement("button")
// li.append(deleteButton)
// deleteButton.appendChild(document.createTextNode('x'));
// deleteButton.addEventListener("click", function(e){
//     e.target.parentElement.remove();



//     textInput.value=""
// numInput.value=""
// })

// textInput.value=""
// numInput.value=""




// })


const input1 = document.querySelector("#textInput")
console.log(input1);
const input2 = document.querySelector("#numInput")
console.log(input2);
const ul = document.querySelector("ul")
const h1 = document.querySelector("h1")
console.log(h1);
// const p = document.querySelector(".trans")
const p1 = document.querySelector(".plus")
console.log(p1);
const p2 = document.querySelector(".minus")
console.log(p2);
let f = document.querySelector("form")
f.addEventListener("submit",function(e){
    e.preventDefault()
    if(input1.value === ""){
        alert("add the input text")
        return
    }
    else if(input2.value === ""){
        alert("add the number input")
        return
    }


let div = document.createElement("div")
div.classList = "div-list"
// console.log(div);
let span = document.createElement("span")
let li = document.createElement("li")
span.innerText = input1.value
input1.value = ""
li.innerText = input2.value
ul.append(div)
div.append(span)
div.append(li)
console.log(div);

if(input2.value > 0){
    h1.innerText = Number(input2.value)+Number(h1.innerText) 
    p1.innerText = Number(input2.value)+ Number(p1.innerText) 
    div.style.color = "green"
    input2.value = ""
}
else if (input2.value < 0 ){
    h1.innerText = Number(h1.innerText) + Number(input2.value)
    p2.innerText = Number(p2.innerText) + Number(input2.value)
    div.style.color = "red"
    input2.value = ""
}
let deleteButton = document.createElement("button")
div.append(deleteButton)
deleteButton.appendChild(document.createTextNode('x'));
deleteButton.style.backgroundColor = "red"
deleteButton.addEventListener("click", function(e){
    e.target.parentElement.remove();
    h1.innerText = Number(h1.innerText)-Number(li.innerText)
    if(li.innerText >"0"){
        p1.innerText = Number(p1.innerText)-Number(li.innerText) 
    }
    else if (li.innerText < "0"){
        p2.innerText = Number(p2.innerText)-Number(li.innerText)
    }
})

}) 


