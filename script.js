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

menu.addEventListener("click",function(){
    console.log("menu clicked");
    
    navBar.classList.toggle("close")
})
// Nav items
const navItems =  [
    {navLink:"Home",href:"#home"},
    {navLink:"About",href:"#about"},
    {navLink:"Services",href:"#services"},
    {navLink:"Settings",href:"#settings"}
]

for (let i=0; i<navItems.length; i++){
    const navLink = document.createElement("a");
    navBar.appendChild(navLink)
    navLink.classList.add("navLinks")
    navLink.href =  navItems[i].href;

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
cartIcon.className  = 'fa-solid fa-cart-shopping'
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

if (itemsIncart_array.length == 0){
    itemsEmpty_Message.style.display = `none`
    
}
else{
    itemsEmpty_Message.style.display = `inline`
    
}

const itemsInCart_toogle = ()=>{
    items_Cart.classList.toggle("items_toogle")
}
cartIcon.onclick = itemsInCart_toogle;
// Products Container
const container = document.createElement("div");
container.classList.add("mainContainer")
document.body.appendChild(container)

const items = [
    // Shirts
    {id:"1",img:"./assets/images/shirt1.png",productName:"Shirt",description:"Pack of 3 T shirt of Multi-colors for Summer.",categories:"20+ Age",rating:"5/5",price:"$5.5"},
    {id:"2",img:"./assets/images/shirt2.png",productName:"Shirt",description:"Blue stylish plane T shirt for adults people.",categories:"Adults",rating:"2/5",price:"$6.99"},
    {id:"3",img:"./assets/images/shirt3.png",productName:"Shirt",description:"Black color plane T shirt for 17+ people with excellent quality..",categories:"17+ Age",rating:"3.5/5",price:"$3.89"},
    {id:"4",img:"./assets/images/shirt4.png",productName:"Shirt",description:"Multi color T shirt for Kids with best quality print.",categories:"Kids",rating:"4.5/5",price:"$10.99"},
    // Pants
    {id:"5",img:"./assets/images/pant1.png",productName:"Trouser",description:"Trouser for boys with 4to5 pockets with high quality.",categories:"Male",rating:"3.3/5",price:"$4.69"},
    {id:"6",img:"./assets/images/pant2.png",productName:"Pant",description:"Jeans pants for mens with 4 pockets having blue color.",categories:"Male & Female",rating:"4.3/5",price:"$8.99"},
    {id:"7",img:"./assets/images/pant3.png",productName:"Trouser",description:"Stylish black colour for boys with 2 pockets.",categories:"Males",rating:"4/5",price:"$2.00"},
    {id:"8",img:"./assets/images/pant4.png",productName:"Pant",description:"Sky blue color dress pant for mens.With stylish beats.",categories:"Females",rating:"2.34/5",price:"$1.59"},
    // Shoes
    {id:"9",img:"./assets/images/shoes1.png",productName:"Shoes",description:"Nike shoes with black and red colour contrast.Best quality shoes for boys",categories:"Males",rating:"3.7/5",price:"$18.99"},
    {id:"10",img:"./assets/images/shoes2.png",productName:"Sneakers",description:"Comfortable and soft sneakers for male and female.",categories:"Males & Females",rating:"4.7/5",price:"$9.19"},
    {id:"11",img:"./assets/images/shoes3.png",productName:"Joggers",description:"Joggers with best quality better for hiking and for walk.",categories:"Males",rating:"5/5",price:"$4.99"},
    {id:"12",img:"./assets/images/shoes4.png",productName:"Joggers",description:"Best quality shoes for adults for picnic,hiking,walk for normal use.",categories:"Adults",rating:"1.7/5",price:"$7.69"},
]

for (let i=0; i<items.length; i++){
    
    const current = items[i];
    // Items div
    const itemsDiv = document.createElement("div");
    itemsDiv.classList.add("itemsDiv")
    container.appendChild(itemsDiv)
    
    // Products Img
    const productImg = document.createElement("img");
    productImg.classList.add("productImg")
    itemsDiv.appendChild(productImg)
    productImg.src = current.img;
    
    // Items Description
    const  productDescription = document.createElement("span");
    productDescription.classList.add("productDescription")
    itemsDiv.appendChild(productDescription)
    //Slicing the line
    const productText = current.description.length>30 
    ? current.description.slice(0,40) + "...": console.log("hello");
    
    productDescription.textContent = productText;
    
    
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
    cart_Button.textContent  = "Add to cart"
    cart_Button.setAttribute("data-id",items[i]["id"])
    
}
const existingItem = (itemsId) => items.find(x=>x.id == itemsId)

document.querySelectorAll(".cart_Button").forEach(buttons=>{
        buttons.addEventListener("click",function(){
        const productId = this.dataset.id;
        console.log(productId);
        
        
        itemsIncart_array.push(existingItem(productId))
        console.log(itemsIncart_array);
        
        
        const itemsInCart = document.createElement("div");
        itemsInCart.classList.add("itemsInCart")
        items_Cart.appendChild(itemsInCart);
        
        const productImageDiv = document.createElement("div");
        itemsInCart.appendChild(productImageDiv)
        productImageDiv.classList.add("productImageDiv")
        
        const productImage = document.createElement("img");
        productImage.src = existingItem(productId).img    
        productImageDiv.appendChild(productImage)
        productImage.classList.add("productImg_Cart")
        
        if (itemsIncart_array.length >0){
            cartNotification.style.display = `flex`
            cartNotification.textContent = itemsIncart_array.length
        }
        else if(itemsIncart_array.length > 9){
            cartNotification.style.display = `flex`
            cartNotification.textContent = "9+"
            
        }
    })
})

