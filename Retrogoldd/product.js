

//To generate shopping items

let shop = document.querySelector("#shop");

let shopDataItem = [
  {
    number: "1",
    id: "TerracotaPot",
    img: "Product images/PL003(3).png",
    name: "Retrogold",
    item: "Terracota Plant Pot",
    price: 40,
    alt: "Retrogold plant pot"

  },
  {
    number: "2",
    id: "Moisturizer",
    img: "Product images/curology-X1sIr53DhzA-unsplash.jpeg",
    name: "Curology",
    item: "Moisturizer",
    price: 80,
    alt: "Moisturizer by Curology"
  },
  {
    number: "3",
    id: "Black plant pot",
    img: "Product images/feey-buUOOaoUOQI-unsplash.jpeg",
    name: "Retrogold",
    item: "Black plant pot",
    price: 40,
    alt: "Retrogold plant pot"
  },
  {
    number: "4",
    id: "Biotherm cream",
    img: "Product images/rachel-cheng-S6Ame1KXYZY-unsplash.jpeg",
    name: "Biotherm",
    item: "Body Cream",
    price: 50,
    alt: "Body cream by Rachel Cheng"

  },
  {
    number: "5",
    id: "Kettl",
    img: "Product images/hearted-co-94308nAliWU-unsplash.jpeg",
    name: "Kettl",
    item: "Fine Japanese Tea",
    price: 60,
    alt: "Tea"
  }
]

let generateShop = () => {
  return (shop.innerHTML = shopDataItem.map((x)=>{
    let {id, number, img, name, item, price, alt} = x;
    return `
    <div class = "col-lg-4">
            <div class = "shop-display">
              <img src = "${img}" alt = "${alt}" class = "product-image" id = "img-box${number}"/>
              <div class = "product-details">
                <span class ="brand-name">${name}</span>
                <span class ="brand-item">${item}</span>
                <span class = "price">$ ${price}</span>
              </div>  
            </div>
    </div>

  `
  }).join(""));
}

generateShop();






