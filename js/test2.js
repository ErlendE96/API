
const productContainer = document.querySelector(".products");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "http://localhost/dings/wordpress/wp-json/wc/store/products/" + id;

console.log(url);

async function getProducts(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHtml(getResults);
    }

    catch(error){
        console.log(error);
    }
}
    
getProducts();

function createHtml(product){
    productContainer.innerHTML = `<div class= "jacket">
    <h2 class = "jacket-title">${product.name}</h2>
    <img src="${product.images[0].src}" alt="${product.name}" class= "image1">
        <h3> ${product.short_description}</h3>
        <p> normal price: ${product.prices.regular_price} ${product.prices.currency_symbol}</p>
        <p> now on sale! : ${product.prices.sale_price} ${product.prices.currency_symbol}</p>
        <button class="product-button" data-product="${product.id}">Add to cart</button>
</div>`;
}




    
