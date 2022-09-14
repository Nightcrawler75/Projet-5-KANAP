async function displayProduct() {
    const reponse = await fetch("http://localhost:3000/api/products");
    const products = await reponse.json();
    console.log(products);
    for (product of products) {
        const productLink = document.createElement("a");
        productLink.href = "./product.html?id=" + product._id;

        const productContainer = document.createElement("article");

        const productImg = document.createElement("img");
        productImg.src = product.imageUrl;
        productImg.alt = product.altTxt;
        const productName= document.createElement("h3");
        productName.innerText = product.name;
        productName.className = "productName";
        const productDescription = document.createElement("p");
        productName.className = "productDescription";
        productDescription.innerText = product.description;
        productContainer.appendChild(productImg);
        productContainer.appendChild(productName);
        productContainer.appendChild(productDescription);
        productLink.appendChild(productContainer);
        const sectionProduct = document.querySelector("#items");
        sectionProduct.appendChild(productLink);
    }
}
displayProduct();