const AllShopCustom = document.querySelector(".custom-shop-container");
const cartItems = document.querySelector(".cart-items");

AllShopCustom.addEventListener('click', function(event){
    event.preventDefault();
    const currentEl = event.target;
    // console.log(currentEl,'currentEl');

 if(currentEl.classList.contains("shop-item-button")){
    const ShopItemsGoods = currentEl.closest(".shop-item");
    const ShopItemName = ShopItemsGoods.querySelector(".shop-item-title");
    const ShopItemImg = ShopItemsGoods.querySelector(".shop-item-image");
    const ShopItemsRs = ShopItemsGoods.querySelector(".shop-item-price");
    
   // console.log({currentEl,ShopItemsGoods,ShopItemName,ShopItemImg,ShopItemsRs});

    // aaj ka kaam

  const CartItmRow = document.querySelectorAll(".cart-items .cart-row");
   
  let alreadyexist = false ;

  if(CartItmRow?.length > 0){
    CartItmRow?.forEach(function (singleCartRow){
    const cartAlready = singleCartRow.querySelector(".cart-item-title");
    if(ShopItemName?.innerText == cartAlready?.innerText ){
      alreadyexist = true ;
    }
    });
    if(alreadyexist){
      alert("This Is already exist in our cart.")
      return ; 
    }
  }

  // bss yahan tak

    const DivWorkCreate = document.createElement("div");
    DivWorkCreate.className = "cart-row";
    DivWorkCreate.style.transition_duration = "3s";
    DivWorkCreate.innerHTML =  `<div class="cart-item cart-column">
    <img
      class="cart-item-image"
      src="${ShopItemImg?.src}"
      width="100"
      height="100"
    />
    <span class="cart-item-title">${ShopItemName?.innerText}</span>
  </div>
  <span class="cart-column">
    $ <span class="cart-price-item-item">${ShopItemsRs?.innerText}</span>
  </span>
  <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1" />
    <button class="btn btn-danger btn-remove" type="button">
      REMOVE
    </button>
  </div>`;

  cartItems.append(DivWorkCreate);
    console.log(DivWorkCreate,"DivWorkCreate");
    updateCartTotal();
 }
});

setTimeout(updateCartTotal,3000)

function  updateCartTotal(){
  const AllVariableDiv = document.querySelectorAll(".cart-items .cart-row");
  const TotalPriceCart = document.querySelector(".cart-total-price");

  console.log(AllVariableDiv,"AllVariableDiv"); 
  let total = 0;
  if(AllVariableDiv?.length > 0){

    AllVariableDiv.forEach(function (singleCartRow){
      console.log(singleCartRow,"singleCartRow");

  const VariablePrice = singleCartRow.querySelector(".cart-price-item-item")?.innerText;
  console.log(VariablePrice,"VariablePrice");

  const VariableQuantity = singleCartRow.querySelector(".cart-quantity-input");
  console.log(VariableQuantity,"VariableQuantity");
 
  total += VariablePrice * VariableQuantity?.value;
  console.log(total)
  VariableQuantity.addEventListener('change' , function(e){
    const currentE = e.target;
    if(currentE.value <= 0){
      currentE.value ="1";
      console.log(currentE,"currentE");

    }
    updateCartTotal();
  });
  });

  TotalPriceCart.innerText = `$ ${total.toFixed(2)}`
  }else{
  TotalPriceCart.innerText = `$ 00`
  }
}

  cartItems.addEventListener("click", function (event) {
    event.preventDefault();
    const currentElement = event.target;
  
    if (
      currentElement?.classList?.contains("btn-remove") &&
      confirm("Are you sure ?")
    ) {
      currentElement.parentElement.parentElement.remove();
      updateCartTotal();
    }
  });

  const SelectPurchase = document.querySelector(".btn-purchase");
  SelectPurchase.addEventListener('click',function(event){
    event.preventDefault();
 if(confirm("Are U Sure?")){
  cartItems.innerHTML="";  
  console.log(SelectPurchase,"SelectPurchase");
 }
  updateCartTotal();
   
  });


// ye mera tariqa

// const SelectPurchase = document.querySelector(".btn-purchase");
// SelectPurchase.addEventListener('click',function(event){
//   event.preventDefault();
// const targeter = event.target;
// if( confirm("Are U Sure?")){
//   cartItems.remove(targeter)  
//   console.log(targeter,"targeter");
  
// }

// });
// updateCartTotal();

// cartItems.addEventListener('click', function(Event){
// Event.preventDefault();
// const targetKiller = Event.target;
// if(targetKiller.classList.contains("btn-remove")){
//   const closeBtn = targetKiller.closest(".cart-row");
//   const imgka = closeBtn.querySelector(".cart-item-image");
//   const titleka = closeBtn.querySelector(".cart-item-title");
//   const Quantityka = closeBtn.querySelector(".cart-quantity-input");

//   cartItems.removeChild(closeBtn);

//   updateCartTotal();

// }
// console.log(targetKiller,"targetKiller");
// });