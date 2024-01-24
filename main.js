async function getproducts(){
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products =data.products;
    const result=products.map(function(product){
        return`
        <div class="product">
        <h2>${product.title}</h2>
        <img src="${product.thumbnail}">
        </div>
        `;
    }) .join("");
    document.querySelector(".products").innerHTML=result;
}
getproducts();
