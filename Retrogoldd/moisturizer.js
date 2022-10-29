let moistureDetail = document.querySelector('#moisture-details')


let productItem2 = [{
  id: "Moisturizer",
  breadcrumb: "Home/Moisturizer",
  brandName: "Curology Moisturizer",
  price: 60,
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}]




//to save selections in the cartIcon we retrieve the Data in local storage
let cart = JSON.parse(localStorage.getItem("Data")) || []

let moistureDetailPage = () => {

  return (moistureDetail.innerHTML = productItem2.map((y)=>{
    let {id, price, breadcrumb, brandName, desc} = y
    return `
    <div class = "sproduct-display">
    <img src = "Product images/curology-X1sIr53DhzA-unsplash.jpeg" width = "100%" alt = "terracota plant pot" id = "product-img"/> 
    <div class = "small-img-group">
    <div class = "small-img-col">
    <img src = "Product images/curology-7TlWZkpxCb0-unsplash.jpeg" width = "100%" alt = "green plant pot" class = "small-product-img"/>
    </div>
    <div class = "small-img-col">
    <img src = "Product images/curology-7TlWZkpxCb0-unsplash.jpeg" width = "100%" alt = "green plant pot" class = "small-product-img"/>
    </div>
    <div class = "small-img-col">
    <img src = "Product images/curology-7TlWZkpxCb0-unsplash.jpeg" width = "100%" alt = "green plant pot" class = "small-product-img"/>
    </div>
    </div>
    </div>
    
    
    
    <div class = "single-product-details">
    <h6>${breadcrumb}</h6>
    <h4>${brandName}</h4>
    <h2>$ ${price}</h2>
    <span>Quantity</span>
    <div class="quantity">
        <i onclick = "decrement(${id})" class="bi bi-dash dash"></i>
        <span class= "amount" id = "${id}">1</span>
        <i onclick = "increment(${id})" class="fa-regular fa-plus plus"></i>
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

moistureDetailPage();



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
  let search = cart.find((y)=> y.id === selectedItem.id);

  //if item is not in basket, add first item, if already there increase by 1. 
  if( search === undefined) {
    cart.push({
      id: selectedItem.id,
      item: Number(amount.innerHTML)
      
    });
  } else {
    search.item += Number(amount.innerHTML);
    console.log(search.item.toString());
    
  }
  
  
  
  localStorage.setItem('Data', JSON.stringify(cart))
  cartUpdate();
}


function cartUpdate() {
  let cartIcon= document.querySelector('#cartAmount');
  //to add items to the cartIcon 
  cartIcon.innerHTML = cart.map((x)=> x.item).reduce((x,y)=> x+y, 0);

}

cartUpdate();


