const btnShopNow = document.querySelector("#btn-shop-now");

btnShopNow.addEventListener("click",openLoginPage);

function openLoginPage(e){
    e.preventDefault();
    window.open("/product/product.html");
}