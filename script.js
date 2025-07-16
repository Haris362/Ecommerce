// Header
const header = document.createElement("header");
document.body.appendChild(header)
header.classList.add("header")

// Logo Div
const logoDiv = document.createElement("div");
logoDiv.classList.add("logoDiv")
header.appendChild(logoDiv)
// Logo
const logo = document.createElement("img");
logo.src = "./assets/images/logo.png"
logoDiv.appendChild(logo)
logo.id = ("logo")
// Company name
const companyName = document.createElement("span");
logoDiv.appendChild(companyName)
companyName.classList.add("companyName")
companyName.textContent = "Ecommerce"

// Navbar
const navBar = document.createElement("nav");
header.appendChild(navBar)
navBar.classList.add("navBar")

const cartMenu_Div = document.createElement("div")
header.appendChild(cartMenu_Div);
cartMenu_Div.classList.add("cartMenu_div")
// Menu icon
const menu = document.createElement("i")
cartMenu_Div.appendChild(menu)
menu.id = "menu";
menu.className = "fa-solid fa-bars";

menu.addEventListener("click", function () {
    console.log("menu clicked");

    navBar.classList.toggle("close")
})
// Nav items
const navItems = [
    { navLink: "Home", href: "#home" },
    { navLink: "About", href: "#about" },
    { navLink: "Services", href: "#services" },
    { navLink: "Settings", href: "#settings" }
]

for (let i = 0; i < navItems.length; i++) {
    const navLink = document.createElement("a");
    navBar.appendChild(navLink)
    navLink.classList.add("navLinks")
    navLink.href = navItems[i].href;

    const navElementstext = document.createElement("span");
    navLink.appendChild(navElementstext)
    navElementstext.textContent = navItems[i].navLink;
    navElementstext.classList.add("navLinksText")

}

// Added Items in array
const itemsIncart_array = []
// Cart in navbar
const cartDiv = document.createElement("div");
cartMenu_Div.appendChild(cartDiv)
cartDiv.classList.add("cartDiv")
//Cart Icon
const cartIcon = document.createElement("i");
cartDiv.appendChild(cartIcon)
cartIcon.className = 'fa-solid fa-cart-shopping'
// Cart notification
let cartNotification = document.createElement("span");
cartDiv.appendChild(cartNotification)
cartNotification.classList.add("cartNotification")
cartNotification.toString()

// Items add in cart
let items_Cart = document.createElement("div");
cartDiv.appendChild(items_Cart)
items_Cart.classList.add("items_Cart")

// Empty cart Message
const itemsEmpty_Message = document.createElement("h3");
items_Cart.appendChild(itemsEmpty_Message);
itemsEmpty_Message.textContent = "No items found"
itemsEmpty_Message.classList.add("itemsEmpty_Message")

if (itemsIncart_array.length == 0) {
    itemsEmpty_Message.style.display = `none`

}
else {
    itemsEmpty_Message.style.display = `inline`

}

const itemsInCart_toogle = () => {
    items_Cart.classList.toggle("items_toogle")
}
cartIcon.onclick = itemsInCart_toogle;
// Products Container
const container = document.createElement("div");
container.classList.add("mainContainer")
document.body.appendChild(container)

const items = [
  // Shirts
  { id: "1", img: "./assets/images/shirt1.png", productName: "Shirt", description: "Pack of 3 multicolor T-shirts. Ideal for summer wear. Soft, breathable fabric. Best for 20+ age group. Great value combo pack.", categories: "20+ Age", rating: "5/5", price: "$5.5" },
  { id: "2", img: "./assets/images/shirt2.png", productName: "Shirt", description: "Plain blue adult T-shirt. Minimalist and trendy look. Comfortable all-day wear. Good for casual outings. Made with durable material.", categories: "Adults", rating: "2/5", price: "$6.99" },
  { id: "3", img: "./assets/images/shirt3.png", productName: "Shirt", description: "Black T-shirt for 17+ age group. High-quality soft cotton. Plain design, easy to match. Ideal for casual and gym use. Lightweight and comfortable.", categories: "17+ Age", rating: "3.5/5", price: "$3.89" },
  { id: "4", img: "./assets/images/shirt4.png", productName: "Shirt", description: "Colorful printed shirt for kids. Premium print and stitching. Soft and stretchable fabric. Comfortable for daily use. Loved by active kids.", categories: "Kids", rating: "4.5/5", price: "$10.99" },

  // Pants
  { id: "5", img: "./assets/images/pant1.png", productName: "Trouser", description: "Stylish trouser for boys. Multiple spacious pockets. Durable and modern look. Perfect for casual wear. Easy to move and flexible.", categories: "Male", rating: "3.3/5", price: "$4.69" },
  { id: "6", img: "./assets/images/pant2.png", productName: "Pant", description: "Classic blue jeans pants. Comfortable for all genders. 4-pocket design, straight fit. Stretchable and stylish. Ideal for daily wear.", categories: "Male & Female", rating: "4.3/5", price: "$8.99" },
  { id: "7", img: "./assets/images/pant3.png", productName: "Trouser", description: "Slim-fit black trouser for boys. Smooth fabric with soft lining. 2 pockets for essentials. Suitable for outings and home. Breathable and modern fit.", categories: "Males", rating: "4/5", price: "$2.00" },
  { id: "8", img: "./assets/images/pant4.png", productName: "Pant", description: "Sky blue dress pant for men. Made with premium quality. Soft texture and elegant look. Ideal for formal wear. Comfortable for long hours.", categories: "Females", rating: "2.34/5", price: "$1.59" },

  // Shoes
  { id: "9", img: "./assets/images/shoes1.png", productName: "Shoes", description: "Nike shoes in black-red color. Durable rubber sole. Breathable material for comfort. Great for sports and walking. Stylish for casual use.", categories: "Males", rating: "3.7/5", price: "$18.99" },
  { id: "10", img: "./assets/images/shoes2.png", productName: "Sneakers", description: "Comfortable sneakers for all. Soft padding inside. Trendy design with grip sole. Unisex everyday shoes. Lightweight and modern.", categories: "Males & Females", rating: "4.7/5", price: "$9.19" },
  { id: "11", img: "./assets/images/shoes3.png", productName: "Joggers", description: "High-performance joggers. Perfect for running and hiking. Supportive ankle design. Strong grip with soft cushioning. Ideal for active use.", categories: "Males", rating: "5/5", price: "$4.99" },
  { id: "12", img: "./assets/images/shoes4.png", productName: "Joggers", description: "Multi-use joggers for adults. Great for hiking and daily walks. Cushioned sole with breathable fabric. Lightweight and durable. Good for all seasons.", categories: "Adults", rating: "1.7/5", price: "$7.69" }
];

const maxDesc = 60;
for (let i = 0; i < items.length; i++) {

    const current = items[i];
    // Items div
    const itemsDiv = document.createElement("div");
    itemsDiv.classList.add("itemsDiv")
    container.appendChild(itemsDiv)
    itemsDiv.addEventListener("click",function(){
        const products = {
            name:current.productName,
            id:current.id,
            img:current.img,
            description:current.description,
            id:current.id,
            price:current.price,
            rating:current.rating
        }
        const params = new URLSearchParams(products).toString();
        console.log(params);
        const url = `productsDetail.html?${params}`
        console.log(url);
        window.location.href = url;
    })

    // Products Img
    const productImg = document.createElement("img");
    productImg.classList.add("productImg")
    itemsDiv.appendChild(productImg)
    productImg.src = current.img;

    // Items Description
    const productDescription = document.createElement("span");
    productDescription.classList.add("productDescription")
    itemsDiv.appendChild(productDescription)
    if (current.description.length > 30) {
        let shortDescription = current.description.slice(0,50) + `...`
        productDescription.textContent = shortDescription
    }
    // ItemName
    const ItemName = document.createElement("h4");
    ItemName.classList.add("itemName")
    itemsDiv.appendChild(ItemName)
    ItemName.textContent = "Product name:" + current.productName;
    
    //Categories
    const categories = document.createElement("span");
    categories.classList.add("categories")
    itemsDiv.appendChild(categories)
    categories.textContent = "For:" + current.categories
    
    // Price
    const price = document.createElement("strong");
    price.classList.add("price")
    itemsDiv.appendChild(price)
    price.textContent = "Price:" + current.price;
    
    // rating
    const rating = document.createElement("small");
    rating.classList.add("rating")
    itemsDiv.appendChild(rating)
    rating.textContent = "Rating:" + current.rating
    
    //Add to cart button
    const cart_Button = document.createElement("button");
    itemsDiv.appendChild(cart_Button)
    cart_Button.classList.add("cart_Button")
    cart_Button.textContent = "Add to cart"
    cart_Button.setAttribute("data-id", items[i]["id"])
    
    }
const itemsDiv = document.querySelector(".itemsDiv")
const existingItem = (itemsId) => items.find(x => x.id == itemsId)

document.querySelectorAll(".cart_Button").forEach(buttons => {
    buttons.addEventListener("click", function () {
        const productId = this.dataset.id;
        console.log(productId);


        itemsIncart_array.push(existingItem(productId))
        console.log(itemsIncart_array);

        buttons.textContent = "Remove from cart"
        buttons.style.backgroundColor = "red"
        // Items
        const itemsInCart = document.createElement("div");
        itemsInCart.classList.add("itemsInCart")
        items_Cart.appendChild(itemsInCart);
        // Product Img div
        const productImageDiv = document.createElement("div");
        itemsInCart.appendChild(productImageDiv)
        productImageDiv.classList.add("productImageDiv")
        // Product Img 
        const productImage = document.createElement("img");
        productImage.src = existingItem(productId).img
        productImageDiv.appendChild(productImage)
        productImage.classList.add("productImg_Cart")
        // Product Description        
        const productDescription = document.createElement("span");
        productDescription.textContent = existingItem(productId).description
        itemsInCart.appendChild(productDescription)
        productDescription.classList.add("itemsInCart_Description")

        if (itemsIncart_array.length > 9) {
            cartNotification.textContent = `9+`;
        } else if (itemsIncart_array.length > 0) {
            cartNotification.style.display = `flex`
            cartNotification.textContent = itemsIncart_array.length;
        }
        const deleteIcon = document.createElement("i");
        itemsInCart.appendChild(deleteIcon);
        deleteIcon.className = "fa-solid fa-trash"
        deleteIcon.id = "deleteIcon"

    })
})

