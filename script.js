let total = 0;

function buyProduct(target) {
  const selectedItemContainer = document.getElementById("product-price");
  const itemName = target.parentNode.childNodes[1].innerText;
  const li = document.createElement("li");
  li.innerText = itemName;
  selectedItemContainer.appendChild(li);
  const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
  total = parseInt(total) + parseInt(price);
  document.getElementById("totalPrice").innerText = price;

  if ( totalPrice>200 ){
    discount = parseInt(discount) + parseInt(price);
  }
}


function promo() {
  const couponCode =document.getElementById("coupon-code").value;
  if (couponCode ==  "SELL200"){
    const discountAmount =total * 0.2;
    const grandTotal =total -discountAmount;
    setInnerText("discount", discountAmount);
    setInnerText("grand-total", grandTotal);


  }else{
    alert("invalid copun");
  }
  
}


const popup =document.getElementById("popup");

function openPopup(){

  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("close-popup");
}