let label = document.querySelector("#label")
let shoppingCart = document.querySelector("#shopping-cart");


let cart = JSON.parse(localStorage.getItem("Data")) || [];




function cartUpdate() {
  let cartIcon= document.querySelector('#cartAmount');
  //to add items to the cartIcon 
  cartIcon.innerHTML = cart.map((x)=> x.item).reduce((x,y)=> x+y, 0);

}
cartUpdate();




let generateCartPage = () => {

   if (cart.length !== 0) {
     return (shoppingCart.innerHTML = cart.map((x) => {
        let { id, item} = x;
        let search = shopDataItem.find((b) => b.id === id) || [];
       return `
          <div class = "cart-details">
            <div class = "cart-item">
              <img width = "200" src = "${search.img}" alt = " " id= "img-box${id}"/>
           

              <div class = "cart-info"
                <p>Brand Item: ${search.item}</p>
                <p>Brand: ${search.name}</p>
                <p>Price: $${search.price}</p>
              </div>

            </div>
      
            <div class = "input" id= ${id}qty>   
              <label for = "${id}">Qty:
              <input  id = ${id} class = "inputField" type = "number" value = "${item}">
            </div>
           
            
         

            <div class = "quantityPrice" id = ${id}Amt> $${item * search.price}</div>
 
            <p id = ${id} class = "removeItem">Remove Item</p>
         </div>
       `
     })
     .join(" "));


  } else {
     shoppingCart.innerHTML = ``;
     label.innerHTML = 
     `
     <h2 class = "emptyCartTitle">Cart is Empty</h2>
     <a href="index.html">
      <button class = "HomeBtn">Back to Home</button>
     </a>
     `

  }

  
  function removeItem() {
    console.log("hi")
  }

  removeItem();



  

   
}

generateCartPage();



// let cost = shopDataItem.map((t)=>t.price)
// console.log(cost);

let inputField = document.querySelectorAll(".inputField")
console.log(inputField.length);




let quantityPrice = document.querySelectorAll(".quantityPrice");
console.log(quantityPrice);
let newAmount = quantityPrice[0].textContent;

console.log(newAmount);

let ItemCost = shopDataItem.map((p)=>p.price)
console.log(ItemCost);

  

for (let i = 0; i < inputField.length; i++) {
  inputField[i].addEventListener("keydown", function(e){
    if(e.key === "Enter"){
      quantityPrice[i].innerHTML =  (Number(inputField[i].value) * ItemCost[i]);
      console.log(quantityPrice.value);


     
    }  
  })   
}

let ItemId = cart.map((p)=>p.id)

let removeItem = document.querySelectorAll(".removeItem")


for(let i = 0; i < removeItem.length; i++){
  removeItem[i].addEventListener("click", function(){
    cart = cart.filter((x)=>x.id !== ItemId[i]);
    
    localStorage.setItem('Data', JSON.stringify(cart))
    generateCartPage();

    
    
  })
}






