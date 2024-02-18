const SelectSection = document.querySelector('.custom-shop-container');
const SelectCart = document.querySelector(".cart-items");
SelectSection.addEventListener('click' ,function(event){
    event.preventDefault();
    const TargetKill = event.target;
    // console.log(TargetKill,"TargetKill")
 
    if(TargetKill.classList.contains('shop-item-button')){
        const DivContain = TargetKill.closest(".shop-item");
        const DivContainTitle = DivContain.querySelector(".shop-item-title");
        const DivContainImg = DivContain.querySelector(".shop-item-image");
        const DivContainPrice = DivContain.querySelector(".shop-item-price");
        console.log({DivContain,DivContainTitle,DivContainImg,DivContainPrice});

        if(confirm("aap add krna chatay hain ?")){
            TargetKill.value;
        }else{
            return ;
        }
        const DivCreate = document.createElement("div");
        DivCreate.className = "cart-row";
        DivCreate.innerHTML = `<div class="cart-item cart-column">
        <img
          class="cart-item-image"
          src="${DivContainImg?.src}"
          width="100"
          height="100"
        />
        <span class="cart-item-title">${DivContainTitle?.innerText}</span>
      </div>
      <span class="cart-column">
        $ <span class="cart-price-item-item">${DivContainPrice?.innerText}</span>
      </span>
      <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1" />
        <button class="btn btn-danger btn-remove" type="button">
          REMOVE
        </button>
      </div>`;

      SelectCart.append(DivCreate)
       
    }
});
const collectionUl = document.querySelector(".cart-row");
collectionUl.addEventListener("click" , function(event){
  event.preventDefault();
  console.log(collectionUl,"collection ul li dekhao now !");
  if(event.target.className === "btn-danger"){
    console.warn("btn is working");
    if(confirm("seriously ?")){
      event.target.parentElement.remove();
      console.log("all working");
      }
  }
});