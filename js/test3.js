const url =  "http://erlende.infinityfreeapp.com/wp-json/wc/store/?key=ck_569404aa773484ddbaedf63690f87460178b0c12"; //ck_569404aa773484ddbaedf63690f87460178b0c12
const productContainer = document.querySelector(".products");
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

function createHtml(products){
    products.forEach(function(product){
        console.log(product);
        productContainer.innerHTML += 
        `<div class= "jacket">
            <h2 class = "jacket-title">${product.name}</h2>
            <a id="click1" href="test2.html?id=${product.id}"> <img src="${product.images[0].src}" alt="${product.name}" class= "image1"></a>
                <h3> ${product.short_description}</h3>
                <p> normal price: ${product.prices.regular_price} ${product.prices.currency_symbol}</p>
                <p> now on sale! : ${product.prices.sale_price} ${product.prices.currency_symbol}</p>
                <button class="product-button" data-product="${product.id}">Add to cart</button>
        </div>`;
    })
}
