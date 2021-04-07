
const imgData = [
{
  title : "Fresh spinach",
  type: "Vegetables",
  Price : "2.00 RS",
  image : "images/9.png"
},
{
  title : "Fresh apple red (1 kg)",
  type: "Fruit",
  Price : "6.00 RS",
  image : "images/11.png"
},
{
  title : "Butter croissants (50 gm)",
  type: "Bakery",
  Price : "2.00 RS",
  image : "images/38.png"
},
{
  title : "Masala bread (500 gm)",
  type: "Bread",
  Price : "2.00 RS",
  image : "images/41.png"
},
{
  title : "Mixed fruit juice",
  type: "Juice",
  Price : "3.00 RS",
  image : "images/13.png"
},
{
  title : "Catch fish finger (200 gm)",
  type: "Frozen",
  Price : "8.00 RS",
  image : "images/73.png"
}
];

function productTemplate(product) {
  return `
    <div class="item">
    <img class="product-image" src="${product.image}">
    <h2 class="product-name">${product.title} <span class="type">(${product.type})</span></h2>
    <p><strong>Price:</strong> ${(product.Price)}</p>
    </div>
  `;
}

document.getElementById("app").innerHTML = `
  <h1 class="app-title">Products</h1>
  ${imgData.map(productTemplate).join("")}
`;
