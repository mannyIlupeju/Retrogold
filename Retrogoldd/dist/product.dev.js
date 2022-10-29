"use strict";

//To generate shopping items
var shop = document.querySelector("#shop");
var shopDataItem = [{
  number: "1",
  id: "TerracotaPot",
  img: "Product images/PL003(3).png",
  name: "Retrogold",
  item: "Terracota Plant Pot",
  price: 40,
  alt: "Retrogold plant pot"
}, {
  number: "2",
  id: "Moisturizer",
  img: "Product images/curology-X1sIr53DhzA-unsplash.jpeg",
  name: "Curology",
  item: "Moisturizer",
  price: 80,
  alt: "Moisturizer by Curology"
}, {
  number: "3",
  id: "Black plant pot",
  img: "Product images/feey-buUOOaoUOQI-unsplash.jpeg",
  name: "Retrogold",
  item: "Black plant pot",
  price: 40,
  alt: "Retrogold plant pot"
}, {
  number: "4",
  id: "Biotherm cream",
  img: "Product images/rachel-cheng-S6Ame1KXYZY-unsplash.jpeg",
  name: "Biotherm",
  item: "Body Cream",
  price: 50,
  alt: "Body cream by Rachel Cheng"
}, {
  number: "5",
  id: "Kettl",
  img: "Product images/hearted-co-94308nAliWU-unsplash.jpeg",
  name: "Kettl",
  item: "Fine Japanese Tea",
  price: 60,
  alt: "Tea"
}];

var generateShop = function generateShop() {
  return shop.innerHTML = shopDataItem.map(function (x) {
    var id = x.id,
        number = x.number,
        img = x.img,
        name = x.name,
        item = x.item,
        price = x.price,
        alt = x.alt;
    return "\n    <div class = \"col-lg-4\">\n            <div class = \"shop-display\">\n              <img src = \"".concat(img, "\" alt = \"").concat(alt, "\" class = \"product-image\" id = \"img-box").concat(number, "\"/>\n              <div class = \"product-details\">\n                <span class =\"brand-name\">").concat(name, "</span>\n                <span class =\"brand-item\">").concat(item, "</span>\n                <span class = \"price\">$ ").concat(price, "</span>\n              </div>  \n            </div>\n    </div>\n\n  ");
  }).join("");
};

generateShop();
//# sourceMappingURL=product.dev.js.map
