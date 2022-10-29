

let productDetail = document.querySelector('#product-page');



let productItem = [{
  id: "TerracotaPot",
  breadcrumb: "Home/Plant Pot",
  brandName: "Retrogold plant pot",
  price: 40,
  option1: "Terracota",
  option2: "Green",
  option3: "Black",
  desc: "Done in slightly sheer crinkled chiffon (don’t worry, there’s a slip included), this dress toes the line between sexy and elegant. The twisted neck ties in the back, bracelet-length sleeves gather gracefully at the cuffs, and the optional belt can cinched or left off to highlight the elegant dropped waist."

}]

  

//to save selections in the cartIcon we retrieve the Data in local storage
let cart = JSON.parse(localStorage.getItem("Data")) || []

let productDetailPage = () => {

   (productDetail.innerHTML = productItem.map((x)=>{
    let {id, price, breadcrumb, brandName, option1, option2, option3, desc} = x
    return `
    <div class = "sproduct-display">
    <img src = "Product images/PL003(3).png" width = "100%" alt = "terracota plant pot" id = "product-img"/> 
    <div class = "small-img-group">
    <div class = "small-img-col">
    <img src = "Product images/DSC_0951.png" width = "100%" alt = "green plant pot" class = "small-product-img"/>
    </div>
    <div class = "small-img-col">
    <img src = "Product images/DSC_0959.png" width = "100%" alt = "green plant pot" class = "small-product-img"/>
    </div>
    <div class = "small-img-col">
    <img src = "Product images/DSC_0960.png" width = "100%" alt = "green plant pot" class = "small-product-img"/>
    </div>
    </div>
    </div>
    
    
    
    <div class = "single-product-details">
    <h6>${breadcrumb}</h6>
    <h4>${brandName}</h4>
    <h2>$ ${price}</h2>
    <label for = "colors">Choose Color</label>
    <select class = "colorSelect" name = "colors" id = "pot-colors">
    <option value = "green">${option1}</option>
    <option value = "terracota">${option2}</option>
    <option value = "black">${option3}</option>
    </select>
    <span>Quantity</span>
    <div class="quantity">
    <i onclick = "decrement(${id})" class="bi bi-dash dash"></i>
    <span class= "amount" id = "${id}">1</span>
    <i onclick = "increment(${id})" class="fa-regular plant-plus fa-plus plus"></i>
    </div>
    
    <button onclick = "submit(${id})" class = "btn">Add to Cart</button>
    
    <div class = "product-deets">
    <h4>Product Details</h4>
    <p class = "product-info">
    ${desc}
    </p>
    </div>
    </div>
    `
  }))
}

productDetailPage();


//Controls - Increment, decrement and Submit functions. 
const dash = document.querySelector('.dash');
const plus = document.querySelector('.plus');
let amount = document.querySelector('.amount')
const btn = document.querySelector('.btn');


//Increase function
function increment(id) {
  let selectedItem = id;
  amount.innerHTML++

  
}

//Decrease function
function decrement(id) {
  let selectedItem = id;
  if(amount.innerHTML > 0) {
    amount.innerHTML-- ;
  }
}

//Submit function
function submit(id) {
  let selectedItem = id;
  

  //to confirm if item is already in basket
  let search = cart.find((x)=> x.id === selectedItem.id);

  //if item is not in basket, add first item, if already there increase by 1. 
  if( search === undefined) {
    cart.push({
      id: selectedItem.id,
      item: Number(amount.innerHTML),
      
      
    });
  } else {
    search.item += Number(amount.innerHTML);
  
    
  }
  
  
  
  localStorage.setItem('Data', JSON.stringify(cart))
  cartUpdate();
}





function cartUpdate() {
  let cartIcon= document.querySelector('#cartAmount');
  //to add items to the cartIcon 
  cartIcon.innerHTML = cart.map((x)=> x.item).reduce((x,y)=> x+y, 0);;

}





////////////////////////////////////////////////////////////////////////////




