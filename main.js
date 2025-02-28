document.addEventListener("DOMContentLoaded", function() {
    const cartButton = document.querySelectorAll(".product button");
    const cartCounter = document.querySelector(".icons a:nth-child(2)");
    let cartCount = 0;

    cartButton.forEach(button => {
        button.addEventListener("click", function() {
            cartCount++;
            cartCounter.textContent = `🛒 Cart (${cartCount})`;
        });
    });

    // Search functionality
    const searchBox = document.querySelector(".search-box input");
    searchBox.addEventListener("input", function() {
        const searchText = searchBox.value.toLowerCase();
        const products = document.querySelectorAll(".product");
        
        products.forEach(product => {
            const productName = product.querySelector("h3").textContent.toLowerCase();
            if (productName.includes(searchText)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});
