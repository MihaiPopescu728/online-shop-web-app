window.Cart = {
    API_BASE_URL: "http://localhost:8085",

    getCart: function () {
        let customerId = 6;
        $.ajax({
            url: Cart.API_BASE_URL + "/carts/" + customerId
        }).done(function (response) {
            console.log(response);
            Cart.displayProducts(response.products);

        })

    },

    getCartHtml: function (product) {

        //default ajax method: "GET"

        return `<tr class="cart_item">
                                            <td class="product-remove">
                                                <a title="Remove this item" class="remove" href="#">×</a> 
                                            </td>

                                            <td class="product-thumbnail">
                                                <a href="single-product.html"><img alt="poster_1_up" 
                                                class="shop_thumbnail" 
                                                src="img/product-thumb-2.jpg" width="145" height="145"></a>
                                            </td>

                                            <td class="product-name">
                                                <a href="single-product.html">${product.name}</a> 
                                            </td>

                                            <td class="product-price">
                                                <span class="amount">£${product.price}</span> 
                                            </td>

                                            <td class="product-quantity">
                                                <div class="quantity buttons_added">
                                                    <input type="button" class="minus" value="-" 
                                                    wtx-context="FF8A25B3-B2C6-45AE-AFF7-AD3AB02DE74E">
                                                    <input type="number" size="4" class="input-text 
                                                    qty text" title="Qty" value="1" min="0" step="1" 
                                                    wtx-context="C260A240-2B58-4A8E-B794-4D42B50C9937">
                                                    <input type="button" class="plus" value="+" 
                                                    wtx-context="827BEEB9-67FE-4D15-90D5-94D624CDA439">
                                                </div>
                                            </td>

                                            <td class="product-subtotal">
                                                <span class="amount">£${product.price}</span> 
                                            </td>
                                        </tr>`

    },
    displayProducts: function (products) {

        var productsHtml = "";

        products.forEach(oneProduct => productsHtml += Cart.getCartHtml(oneProduct));

        $(".shop_table.cart tbody").html(productsHtml);
    },
};

    Cart.getCart();