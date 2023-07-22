
    // Array to store cart items 
    let cartItems = [];

    // Function to add product to the cart
    function addToCart(productName, price) {
        const item = { productName, price };
        cartItems.push(item);
        updateCartSummary();
    }

    // Function to update the cart summary
    function updateCartSummary() {
        const cartDiv = document.getElementById("cart");
        cartDiv.innerHTML = ""; // Clear existing content

        if (cartItems.length === 0) {
            cartDiv.innerHTML = "<p>No items in the cart.</p>";
            return;
        }

        const cartList = document.createElement("ul");
        let totalPrice = 0;

        cartItems.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
            cartList.appendChild(listItem);

            totalPrice += item.price;
        });

        cartDiv.appendChild(cartList);

        const totalParagraph = document.createElement("p");
        totalParagraph.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
        cartDiv.appendChild(totalParagraph);
    }
