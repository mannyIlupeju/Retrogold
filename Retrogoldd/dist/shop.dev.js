"use strict";

var productDetail = document.querySelector('#product-page');
var productItem = [{
  id: "TerracotaPot",
  breadcrumb: "Home/Plant Pot",
  brandName: "Retrogold plant pot",
  price: 40,
  option1: "Terracota",
  option2: "Green",
  option3: "Black",
  desc: "Done in slightly sheer crinkled chiffon (don’t worry, there’s a slip included), this dress toes the line between sexy and elegant. The twisted neck ties in the back, bracelet-length sleeves gather gracefully at the cuffs, and the optional belt can cinched or left off to highlight the elegant dropped waist."
}]; //to save selections in the cartIcon we retrieve the Data in local storage

var cart = JSON.parse(localStorage.getItem("Data")) || [];

var productDetailPage = function productDetailPage() {
  productDetail.innerHTML = productItem.map(function (x) {
    var id = x.id,
        price = x.price,
        breadcrumb = x.breadcrumb,
        brandName = x.brandName,
        option1 = x.option1,
        option2 = x.option2,
        option3 = x.option3,
        desc = x.desc;
    return "\n    <div class = \"sproduct-display\">\n    <img src = \"Product images/PL003(3).png\" width = \"100%\" alt = \"terracota plant pot\" id = \"product-img\"/> \n    <div class = \"small-img-group\">\n    <div class = \"small-img-col\">\n    <img src = \"Product images/DSC_0951.png\" width = \"100%\" alt = \"green plant pot\" class = \"small-product-img\"/>\n    </div>\n    <div class = \"small-img-col\">\n    <img src = \"Product images/DSC_0959.png\" width = \"100%\" alt = \"green plant pot\" class = \"small-product-img\"/>\n    </div>\n    <div class = \"small-img-col\">\n    <img src = \"Product images/DSC_0960.png\" width = \"100%\" alt = \"green plant pot\" class = \"small-product-img\"/>\n    </div>\n    </div>\n    </div>\n    \n    \n    \n    <div class = \"single-product-details\">\n    <h6>".concat(breadcrumb, "</h6>\n    <h4>").concat(brandName, "</h4>\n    <h2>$ ").concat(price, "</h2>\n    <label for = \"colors\">Choose Color</label>\n    <select class = \"colorSelect\" name = \"colors\" id = \"pot-colors\">\n    <option value = \"green\">").concat(option1, "</option>\n    <option value = \"terracota\">").concat(option2, "</option>\n    <option value = \"black\">").concat(option3, "</option>\n    </select>\n    <span>Quantity</span>\n    <div class=\"quantity\">\n    <i onclick = \"decrement(").concat(id, ")\" class=\"bi bi-dash dash\"></i>\n    <span class= \"amount\" id = \"").concat(id, "\">1</span>\n    <i onclick = \"increment(").concat(id, ")\" class=\"fa-regular plant-plus fa-plus plus\"></i>\n    </div>\n    \n    <button onclick = \"submit(").concat(id, ")\" class = \"btn\">Add to Cart</button>\n    \n    <div class = \"product-deets\">\n    <h4>Product Details</h4>\n    <p class = \"product-info\">\n    ").concat(desc, "\n    </p>\n    </div>\n    </div>\n    ");
  });
};

productDetailPage(); //Controls - Increment, decrement and Submit functions. 

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

  var search = cart.find(function (x) {
    return x.id === selectedItem.id;
  }); //if item is not in basket, add first item, if already there increase by 1. 

  if (search === undefined) {
    cart.push({
      id: selectedItem.id,
      item: Number(amount.innerHTML)
    });
  } else {
    search.item += Number(amount.innerHTML);
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
  ;
} ////////////////////////////////////////////////////////////////////////////
//# sourceMappingURL=shop.dev.js.map
