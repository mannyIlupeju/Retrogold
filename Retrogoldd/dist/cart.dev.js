"use strict";

var label = document.querySelector("#label");
var shoppingCart = document.querySelector("#shopping-cart");
var cart = JSON.parse(localStorage.getItem("Data")) || [];

function cartUpdate() {
  var cartIcon = document.querySelector('#cartAmount'); //to add items to the cartIcon 

  cartIcon.innerHTML = cart.map(function (x) {
    return x.item;
  }).reduce(function (x, y) {
    return x + y;
  }, 0);
}

cartUpdate();

var generateCartPage = function generateCartPage() {
  if (cart.length !== 0) {
    return shoppingCart.innerHTML = cart.map(function (x) {
      var id = x.id,
          item = x.item;
      var search = shopDataItem.find(function (b) {
        return b.id === id;
      }) || [];
      return "\n          <div class = \"cart-details\">\n            <div class = \"cart-item\">\n              <img width = \"200\" src = \"".concat(search.img, "\" alt = \" \" id= \"img-box").concat(id, "\"/>\n           \n\n              <div class = \"cart-info\"\n                <p>Brand Item: ").concat(search.item, "</p>\n                <p>Brand: ").concat(search.name, "</p>\n                <p>Price: $").concat(search.price, "</p>\n              </div>\n\n            </div>\n      \n            <div class = \"input\" id= ").concat(id, "qty>   \n              <label for = \"").concat(id, "\">Qty:\n              <input  id = ").concat(id, " class = \"inputField\" type = \"number\" value = \"").concat(item, "\">\n            </div>\n           \n            \n         \n\n            <div class = \"quantityPrice\" id = ").concat(id, "Amt> $").concat(item * search.price, "</div>\n \n            <p id = ").concat(id, " class = \"removeItem\">Remove Item</p>\n         </div>\n       ");
    }).join(" ");
  } else {
    shoppingCart.innerHTML = "";
    label.innerHTML = "\n     <h2 class = \"emptyCartTitle\">Cart is Empty</h2>\n     <a href=\"index.html\">\n      <button class = \"HomeBtn\">Back to Home</button>\n     </a>\n     ";
  }

  function removeItem() {
    console.log("hi");
  }

  removeItem();
};

generateCartPage(); // let cost = shopDataItem.map((t)=>t.price)
// console.log(cost);

var inputField = document.querySelectorAll(".inputField");
console.log(inputField.length);
var quantityPrice = document.querySelectorAll(".quantityPrice");
console.log(quantityPrice);
var newAmount = quantityPrice[0].textContent;
console.log(newAmount);
var ItemCost = shopDataItem.map(function (p) {
  return p.price;
});
console.log(ItemCost);

var _loop = function _loop(i) {
  inputField[i].addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      quantityPrice[i].innerHTML = Number(inputField[i].value) * ItemCost[i];
      console.log(quantityPrice.value);
    }
  });
};

for (var i = 0; i < inputField.length; i++) {
  _loop(i);
}

var ItemId = cart.map(function (p) {
  return p.id;
});
var removeItem = document.querySelectorAll(".removeItem");

var _loop2 = function _loop2(_i) {
  removeItem[_i].addEventListener("click", function () {
    cart = cart.filter(function (x) {
      return x.id !== ItemId[_i];
    });
    localStorage.setItem('Data', JSON.stringify(cart));
    generateCartPage();
  });
};

for (var _i = 0; _i < removeItem.length; _i++) {
  _loop2(_i);
}
//# sourceMappingURL=cart.dev.js.map
