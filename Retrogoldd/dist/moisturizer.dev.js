"use strict";

var moistureDetail = document.querySelector('#moisture-details');
var productItem2 = [{
  id: "Moisturizer",
  breadcrumb: "Home/Moisturizer",
  brandName: "Curology Moisturizer",
  price: 60,
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}]; //to save selections in the cartIcon we retrieve the Data in local storage

var cart = JSON.parse(localStorage.getItem("Data")) || [];

var moistureDetailPage = function moistureDetailPage() {
  return moistureDetail.innerHTML = productItem2.map(function (y) {
    var id = y.id,
        price = y.price,
        breadcrumb = y.breadcrumb,
        brandName = y.brandName,
        desc = y.desc;
    return "\n    <div class = \"sproduct-display\">\n    <img src = \"Product images/curology-X1sIr53DhzA-unsplash.jpeg\" width = \"100%\" alt = \"terracota plant pot\" id = \"product-img\"/> \n    <div class = \"small-img-group\">\n    <div class = \"small-img-col\">\n    <img src = \"Product images/curology-7TlWZkpxCb0-unsplash.jpeg\" width = \"100%\" alt = \"green plant pot\" class = \"small-product-img\"/>\n    </div>\n    <div class = \"small-img-col\">\n    <img src = \"Product images/curology-7TlWZkpxCb0-unsplash.jpeg\" width = \"100%\" alt = \"green plant pot\" class = \"small-product-img\"/>\n    </div>\n    <div class = \"small-img-col\">\n    <img src = \"Product images/curology-7TlWZkpxCb0-unsplash.jpeg\" width = \"100%\" alt = \"green plant pot\" class = \"small-product-img\"/>\n    </div>\n    </div>\n    </div>\n    \n    \n    \n    <div class = \"single-product-details\">\n    <h6>".concat(breadcrumb, "</h6>\n    <h4>").concat(brandName, "</h4>\n    <h2>$ ").concat(price, "</h2>\n    <span>Quantity</span>\n    <div class=\"quantity\">\n        <i onclick = \"decrement(").concat(id, ")\" class=\"bi bi-dash dash\"></i>\n        <span class= \"amount\" id = \"").concat(id, "\">1</span>\n        <i onclick = \"increment(").concat(id, ")\" class=\"fa-regular fa-plus plus\"></i>\n    </div>\n    \n    <button onclick = \"submit(").concat(id, ")\" class = \"btn\">Add to Cart</button>\n    \n    <div class = \"product-deets\">\n    <h4>Product Details</h4>\n    <p class = \"product-info\">\n    ").concat(desc, "\n    </p>\n    </div>\n    </div>\n    ");
  });
};

moistureDetailPage(); //Controls - Increment, decrement and Submit functions. 

var dash = document.querySelector('.dash');
var plus = document.querySelector('.plus');
var amount = document.querySelector('.amount');
var btn = document.querySelector('.btn'); //Increase function

function increment(id) {
  var selectedItem = id;
  amount.innerHTML++;
} //Decrease function


function decrement(id) {
  var selectedItem = id;

  if (amount.innerHTML > 0) {
    amount.innerHTML--;
  }
} //Submit function


function submit(id) {
  var selectedItem = id; //to confirm if item is already in basket

  var search = cart.find(function (y) {
    return y.id === selectedItem.id;
  }); //if item is not in basket, add first item, if already there increase by 1. 

  if (search === undefined) {
    cart.push({
      id: selectedItem.id,
      item: Number(amount.innerHTML)
    });
  } else {
    search.item += Number(amount.innerHTML);
    console.log(search.item.toString());
  }

  localStorage.setItem('Data', JSON.stringify(cart));
  cartUpdate();
}

function cartUpdate() {
  var cartIcon = document.querySelector('#cartAmount'); //to add items to the cartIcon 

  cartIcon.innerHTML = cart.map(function (x) {
    return x.item;
  }).reduce(function (x, y) {
    return x + y;
  }, 0);
}

cartUpdate();
//# sourceMappingURL=moisturizer.dev.js.map
