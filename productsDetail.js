async function productDetail(){

   try{ 
    setTimeout(async () => {
        
  // Get query parameters from the URL
  const params =  new URLSearchParams(window.location.search);
console.log(window.location);

  // Get values
  const id = params.get("id");
  const name = params.get("productName");
  const desc = params.get("description");
  const price = params.get("price");
  const rating = params.get("rating");
  const img = params.get("img");

  // Create elements to display the product details
  const container = document.createElement("div");
  container.style.padding = "20px";
  container.style.fontFamily = "Arial";
  container.style.display = "flex";
  container.style.flexDirection = "column";
  document.body.appendChild(container);

  // Product Image
  const productImage = document.createElement("img");
  productImage.src = img;
  productImage.alt = name;
  productImage.style.width = "200px";
  container.appendChild(productImage);

  // Name
  const title = document.createElement("h2");
  title.textContent = name;
  container.appendChild(title);

  // Description
  const description = document.createElement("p");
  description.textContent = `Description: ${desc}`;
  container.appendChild(description);

  // Price
  const productPrice = document.createElement("p");
  productPrice.textContent = `Price: ${price}`;
  container.appendChild(productPrice);

  // Rating
  const productRating = document.createElement("p");
  productRating.textContent = `Rating: ${rating}`;
  container.appendChild(productRating);
    },1000)
}catch(error){
    console.log("Please check the network connection");
    
}
}
productDetail()