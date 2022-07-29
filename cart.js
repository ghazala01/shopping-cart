const counter = document.querySelector('#counter');
const shoppingCartList = document.querySelector('#shopping-cart-list');
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
const productsList = document.querySelector('.products-list')
const totalPrice = document.querySelector('#total-price');

addToCartBtns.forEach( (btn) => {
    btn.addEventListener('click', addItem)
});

function addItem (e) {
    const product_id = e.target.parentElement.parentElement.getAttribute("data-id");
    const product_img = e.target.parentElement.previousElementSibling.src;
    const product_name = e.target.parentElement.children[0].textContent;
    const product_price = e.target.parentElement.children[1].textContent;
    addProductToCart (product_name, product_price, product_img);
}

let productsInCart = 0;
let totalAmount = 0;

const addProductToCart = (product_name , product_price , product_image) => {

    //Increment of counter in navbar
    counter.textContent = ++productsInCart;

    //Calc. total amount
    totalAmount += parseInt(product_price.replace('$','').trim());
    totalPrice.innerText = `Total Amount = ${totalAmount}$`;

    //Adding product to Cart Template
    const product = document.createElement('li');
    product.className = 'd-flex justify-content-evenly align-items-center';
    product.innerHTML = `<img src="${product_image}" class="product_image" style="width:4rem;height:4rem;" alt="">
                        <h6 class="product_name">${product_name}</h2>
                        <h6 class="product_price">${product_price}</h6>
                        <a class="btn btn-sm btn-danger">Delete</a>`;
    
    //Appending the Shopping Cart List
    shoppingCartList.append(product);

    //Removing an Item from Shopping Cart
    const removeItem = product.querySelector('a.btn');
    removeItem.addEventListener('click' , () => {
        product.remove();
        counter.textContent = --productsInCart;

        totalAmount -= parseInt(product_price.replace('$','').trim());
        totalPrice.innerText = `Total Amount = ${totalAmount}$`;
    });
} 