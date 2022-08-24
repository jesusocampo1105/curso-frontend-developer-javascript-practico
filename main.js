const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".menu");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarrito = document.querySelector(".imgCarrito");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const ProductDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuMobile.addEventListener("click", toggleMobileMenu);
menuCarrito.addEventListener("click", toggleCarritoMenu);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  if (isDesktopMenuClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (isMobileMenuClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  closeProductDetailAside();
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoMenu() {
  const isCarritoMenuClosed =
    shoppingCartContainer.classList.contains("inactive");

  if (isCarritoMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");

  const isProductDetailClosed =
    ProductDetailContainer.classList.contains("inactive");

  if (isProductDetailClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  ProductDetailContainer.classList.toggle("inactive");

  const isshoppingCartContainer = shoppingCartContainer.classList.contains('inactive');

  if (isshoppingCartContainer) {
    ProductDetailContainer.classList.add('inactive');
  }
  shoppingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside() {
  ProductDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  ProductDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Bike",
  price: "120",
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Motorcycle",
  price: "3200",
  image:
    "https://images.pexels.com/photos/12764125/pexels-photo-12764125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Car",
  price: "8450",
  image:
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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

for (product of productList) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImg = document.createElement("img");
  productImg.setAttribute("src", product.image);
  productImg.addEventListener("click", openProductDetailAside);

  const productInfo = document.createElement("div");
  productInfo.classList.add("product-info");

  const productInfoDiv = document.createElement("div");

  const productPrice = document.createElement("p");
  productPrice.innerText = "$" + product.price;

  const productName = document.createElement("p");
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement("figure");
  const productImgCart = document.createElement("img");
  productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
}
