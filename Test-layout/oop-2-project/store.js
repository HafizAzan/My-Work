const AllDiv = document.querySelector(".custom-shop-container");
const cartItems = document.querySelector(".cart-items");
const BtnPurchase = document.querySelector(".btn-purchase")
console.log(BtnPurchase)
AllDiv.addEventListener("click",function(e){
e.preventDefault();
const CurrentEl = e.target;
if(CurrentEl.classList.contains("shop-item-button")){
    let div1 = CurrentEl.closest(".shop-item");
    let div2Title = div1.querySelector(".shop-item-title")
    let div3Img = div1.querySelector(".shop-item-image")
    let div4Price = div1.querySelector(".shop-item-price")
    // console.log({div1,div2Title,div3Img,div4Price})

    const CreateDiv = document.createElement("div");
    CreateDiv.className = "cart-row"
    CreateDiv.innerHTML = `<div class="cart-item cart-column">
    <img
      class="cart-item-image"
      src="${div3Img?.src}"
      width="100"
      height="100"
    />
    <span class="cart-item-title">${div2Title?.innerText}</span>
  </div>
  <span class="cart-column"
    >$ <span class="cart-price-item-item">${div4Price?.innerText}</span></span
  >
  <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1" />
    <button class="btn btn-danger btn-remove" type="button">
      REMOVE
    </button>
  </div>
</div>`;

cartItems.append(CreateDiv)
}
update()
});

function update(){
    const Divs = document.querySelectorAll(".cart-items.cart-row");
    const TotalPrice = document.querySelector(".cart-total-price")
    let total = 0;
    if(Divs.length >0){
        Divs?.forEach(function(singleRow){
            const working = singleRow.querySelector(".cart-price-item-item")?.innerText;
            const working2 = singleRow.querySelector(".cart-quantity-input")?.value;
            // console.log({working,working2})

        total += working * working2;
        update()   

        });
        TotalPrice.innerText = `$ ${total.toFixed}`
    }
}


cartItems.addEventListener("click",function(event){
    event.preventDefault();
    const Targeter = event.target;
    if(Targeter.classList.contains("btn-remove") && confirm("are You Sure?")){
        Targeter.parentElement.parentElement.remove()
    }
});

BtnPurchase.addEventListener("click",function(work){
    work.preventDefault();
    if(confirm("OOPS !")){
    cartItems.innerHTML = "";
    }
      
});