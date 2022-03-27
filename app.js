const btnShopNow = document.querySelector("#btn-shop-now");

btnShopNow.addEventListener("click",openProductPage);

function openProductPage(e){
    console.log("product");
    e.preventDefault();
    window.open("/product/product.html");
}

