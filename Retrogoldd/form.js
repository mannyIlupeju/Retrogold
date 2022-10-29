const form = document.querySelector("#form-section");
const message = document.querySelector("#messageArea")
const firstName = document.querySelector('#f-name');
const lastName = document.querySelector('#l-name')
console.log(message);



form.addEventListener("submit", (e)=>{
  e.preventDefault();
});