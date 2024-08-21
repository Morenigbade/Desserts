const foodMenu = document.getElementById('main-content');
const emptyCart = document.getElementById('empty-cart');
const addItem = document.getElementById('second-content');
const addButton = document.getElementsByClassName('cart');
fetch('./data.json', {
  method: 'Get',
  headers: {
    accept: 'application/json'
  },

})

  .then((response) => response.json())
  .then((foods) => {
    let content = '';

    for (let i = 0; i < foods.length; i++) {
      content += `

        <div class="items">
        <img src="${foods[i].image.desktop}" alt="">
        <div class="waffle">
        <button class="cart">
          <img src="bx-cart-download.svg" alt="">
          <span id="add">Add to Cart</span></p>
        </button>
          <p>${foods[i].category}</p>
          <h4>${foods[i].name}</h4>
          <h5><span id="waffle">$ ${Number(foods[i].price).toFixed(3).slice(0 , -1)}</span></h5>
        </div>
        

      </div>
      `

    }
    foodMenu.innerHTML = content;
     
  })


// function addItem(){
//   let addItem = `
//        <div class="cart-item">
//           <h3><span id="waffle">Your cart(7)</span></h3>
//           <div class="flex-classic-remove-icon">
//             <div class="Classic">
//               <h4>Classic Tiramisu</h4>
//               <p><span id="waffle">1x</span> @ $.5.50 $5.50</p>
//             </div>
//             <div class="remove-icon"><img src="assets/images/icon-remove-item.svg"></div>
//           </div>
//           <hr>

//           <div class="flex-classic-remove-icon">
//             <div class="Classic">
//               <h4>Vanilla Bean Crème Brulee</h4>
//               <p><span id="waffle">4x</span> @ $7.00 $28.00</p>
//             </div>
//             <div class="remove-icon"><img src="assets/images/icon-remove-item.svg"  style="margin-left: 85px;
//     margin-top: 10px; width: 18%;"></div>
//           </div>

//           <div class="flex-classic-remove-icon">
//             <div class="Classic">
//           <h4>Vanilla Panna Cotta</h4>
//           <p><span id="waffle">2x</span> @ $6.50 $13.00</p>
//             </div>
//             <div class="remove-icon"><img src="assets/images/icon-remove-item.svg"></div>
//           </div>
            
//           <hr>
//           <div class="order">
//             <p>Order Total</p>
//             <h4 class="total">$46.50</h4>
//           </div>
//           <p class="carbon">This is a carbon-neutral delivery</p>
//         </div>

//         <div id="confirm-order"><button>Confirm Order</button></div>
//       </div>

// `
// }
// addCart.addEventListener("click", addItem);