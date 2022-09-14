var str = window.location.href;
var url = new URL(str);
var id = url.searchParams.get("id");
console.log(id);
async function displayProduct() {
    const reponse = await fetch("http://localhost:3000/api/products/" + id);
    const product = await reponse.json();
    console.log(product.name);
    const productImg = document.createElement("img");
    productImg.src = product.imageUrl;
    productImg.alt = product.altTxt;
    const itemImg = document.querySelector(".item__img");
    itemImg.appendChild(productImg);
    const title = document.querySelector("#title");
    title.innerText = product.name;
    const price = document.querySelector("#price");
    price.innerText = product.price;
    const descritption = document.querySelector("#description");
    descritption.innerText = product.description;
    for (color of product.colors){ 
        const option = document.createElement("option");
        const colorSelect = document.querySelector("#colors");
        colorSelect.appendChild(option);
        option.innerText = color;
        option.value = color;
    }    
}
displayProduct();