const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarrito = document.querySelector(".imgCarrito");
const carritoMenu = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (isDesktopMenuClosed) {
        carritoMenu.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}


menuMobile.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (isMobileMenuClosed) {
        carritoMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

menuCarrito.addEventListener('click', toggleCarritoMenu);

function toggleCarritoMenu() {
    const isCarritoMenuClosed = carritoMenu.classList.contains('inactive');

    if (isCarritoMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    carritoMenu.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Motorcycle',
    price: '3200',
    image: 'https://images.pexels.com/photos/12764125/pexels-photo-12764125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Car',
    price: '8450',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
/* 
{<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> }*/
      
      for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
      }
        
      