import "../ricky_vite/css/style.css";
const menu = ["Za", "noodles"];
const name = "Jot-ham";

export{menu,name};
const DOMSelectors = {
    form: document.querySelector("#form"),
    button: document.getElementById("btn"),
    input: document.querySelector(`#input`),
    input2: document.querySelector(`#input2`),
    input3: document.querySelector(`#input3`),
};
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.CardName.value);
    DOMSelectors.h2s.forEach(
     (el)=> el.textContent = (DOMSelectors.CardName.value),
    )});
DOMSelectors.button.addEventListener("click", function(){
    let input= DOMSelectors.input.value;
    let input2= DOMSelectors.input2.value;
    let input3 = DOMSelectors.input3.value;
    DOMSelectors.form.insertAdjacentHTML("beforeend",
    `<div class="column">
    <div class="card">
        <h2 class="card-header" id="column">${input}</h2>
        <img src = "${input3}" alt = "" class = "img">
        <h3 class="card-info" id="column">By: ${input2}</h3>
        <button type="click" class="remove">Remove</button>
    </div>
   
 `);
});
