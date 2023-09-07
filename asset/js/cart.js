//Danh mục mã giảm giá
const salecode = [
  {
    code: "A11",
    discount: -10000
  },
  {
    code: "B22",
    discount: -20000
  },
  {
    code: "C33",
    discount: -30000
  },
  {
    code: "D44",
    discount: -40000
  }];


//Biến tạm lưu trữ giỏ hàng
const cart = []

var SALE = 0; //giảm giá
var SHIPPING = 0; //phí ship

var checkToBuy = []; //đánh dấu ID sản phẩm chọn mua hàng
var total_product = 0; //tổng sản phẩm mua hàng

var total = 0; //tổng tiền (gồm phí ship + sale)
var subtotal = 0; //tổng tiền sản phẩm

var check_null = true; 
//In danh sách sản phẩm trong giỏ hàng  
function render() {
  cart.length = 0;
  for (let i = 0; i < localStorage.length; i++) {

    var key = localStorage.key(i);
    if (key.includes('cart')) {
      let temp = localStorage.getItem(localStorage.key(i));
      obj = JSON.parse(temp);
      
      cart.push({
        quantity: obj.quantity,
        id: obj.id,
        name: obj.name,
        price: obj.price,
        brand: obj.brand,
        newPrice: obj.newPrice,
        image: obj.image
      })
      check_null = false;
    }
    
  }
  const html = cart.map(item => `<div class="row row-cols-auto d-flex div-items" style="background: white;">
            <div class="form-check col-md-auto col-1" >
              <input class="form-check-input checkbox align-middle" name="cart-buy" type="checkbox" name="check-buy" value="${item.id}" id="${item.id}" onchange="calSubTotal(${item.id})">
              <label class="form-check-label" for="${item.id}">
              </label>
            </div>
    
      <div class = "col-md-2 col-3">
          <img class="image" src="${item.image}" alt="">
      </div>
      <div class="row col-md-8 col-6">
      <div class="name col-md-5 col-12" style="font-weight: 700;">${item.name}
      <div  class = "color">XÁM</div>
      </div>
      
      <div class = "col-md-3 col-12">
      <!-- Button tăng giảm số lượng -->
      <div class="btn-in-de">
          <div class="value-button" id="decrease" onclick="decreaseValue(${item.id})" value="Decrease Value">-</div>
          <input type="number" class="number" id="number${item.id}" value="${item.quantity}" min="1" class="quantity" />
          <div class="value-button" id="increase" onclick="increaseValue(${item.id})"  value="Increase Value">+</div>
      </div>
  </div>

  
  <div class="newPrice  col-md-4 col-12 " style="color: rgb(38, 38, 198); font-weight: 700;"><span > ${(item.newPrice * item.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} </span><span style="text-decoration: underline; " class=""> đ</span> </div>
      </div>
      <div class = "col-md-1 col-2 ">
          <svg class="xoa" onclick="remove(${item.id})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"/></svg>
       </div> 
  </div>`).join('')

  if (!check_null) {
    var x = document.getElementById("empty");
    var y = document.getElementById("tbl-pro product-items");
    var z = document.getElementById("right-div");
    var t = document.getElementById("mini-number");
    y.style.display = "block";
    z.style.display = "block";
    x.style.display = "none";
    t.style.display = "block";
  } else {
    var x = document.getElementById("empty");
    var y = document.getElementById("tbl-pro product-items");
    var z = document.getElementById("right-div");
    var t = document.getElementById("mini-number");
    y.style.display = "none";
    x.style.display = "block";
    z.style.display = "none";
    t.style.display = "none";
  }

  document.getElementById("tbl-pro product-items").innerHTML = html;
  console.log(checkToBuy)
  for (let i = 0; i < cart.length; i++) {
    for (let j = 0; j < checkToBuy.length; j++)
      if (checkToBuy[j] === cart[i].id) {
        document.getElementById(cart[i].id).checked = true;
      }
  }
  sum_quantity();
}

render();

var check_out = 0; //0 nếu chưa thanh toán, 1 nếu chọn thanh toán
var remove_flag = 0; // 0 nếu uncheck (checkbox) , 1 nếu xóa tất cả sản phẩm, 2 nếu tăng/giảm số lượng sp

//xoá 1 sản phẩm khỏi giỏ hàng theo ID
function remove(id) {
  var index = 0;
  remove_flag = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      index = i;
      break;
    }
  }
  if (!check_out) {
    var answer = window.confirm("Xác nhận xóa sản phẩm " + cart[index].name + " khỏi giỏ hàng?");
    if (answer) {

      for (let i = 0; i < checkToBuy.length; i++) {
        if (checkToBuy[i] === id) {
          checkToBuy.splice(i, 1);
          // console.log(checkToBuy);
          break;
        }
      }
    }

    alert("Xóa thành công!");
  }

  cart.splice(index, 1);
  localStorage.removeItem('cart_' + id);

  render();
  remove_flag = 1;
  calSubTotal(id);
  remove_flag = 0;

}

//tăng số lượng sản phẩm theo ID (Khi nhấn dấu +)
function increaseValue(id) {
  var id_t = 'number' + id;

  var value = parseInt(document.getElementById(id_t).value, 10);

  value++;
  document.getElementById(id_t).value = value;

  var index = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      index = i;
      break;
    }
  }
  cart[index].quantity = value;
  localStorage.setItem(  'cart_' + id  , JSON.stringify(cart[index]));
  // 
  render();
  remove_flag = 2;
  total_product++;
  calSubTotal(id);
  remove_flag = 0;

}
//giảm số lượng sản phẩm theo ID (Khi nhấn dấu -)
function decreaseValue(id) {
  var id_t = 'number' + id;
  var value = parseInt(document.getElementById(id_t).value, 10);
  if (value === 1) {
    remove(id);
  } else {
    value--;
    document.getElementById(id_t).value = value;

    var index = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        index = i;
        break;
      }

    }

    cart[index].quantity = value;
    localStorage.setItem(  'cart_' + id  , JSON.stringify(cart[index]));

    render();
    remove_flag = 2;
    total_product--;
    calSubTotal(id);
    remove_flag = 0;
  }
}

//Đếm số lượng sản phẩm trong giỏ hàng (hiển thị trên icon và h1)
function sum_quantity() {
  let sum = 0;
  for (let i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    if (key.includes('cart')) {
      let temp = localStorage.getItem(localStorage.key(i));
      obj = JSON.parse(temp);
      sum += obj.quantity;
    }

  console.log(sum)
  if (sum !== 0)
    document.getElementById("mini-number").innerHTML = sum;
  
  document.getElementById("count-cart").innerHTML = sum;
}
}

sum_quantity();

//Thêm 1 sản phẩm mới vào giỏ hàng theo ID = ind
function add(ind) {
  let flag = true;
  for (let i = 0; i < cart.length; i++) {
    if (ind === cart[i].id) {
      flag = false;
      cart[i].quantity++;
      localStorage.setItem( 'cart_' + ind  , JSON.stringify(cart[i]));
      break;
    }
  }

  console.log(ind)
  if (flag) {
    cart.push({
      quantity: 1,    
      id: ind,
      name: products[ind - 1].name,
      price: products[ind - 1].price.replaceAll('.', ''),
      brand: products[ind - 1].brand,
      newPrice: products[ind - 1].newPrice.replaceAll('.', ''),
      image: products[ind - 1].image,

    })

    localStorage.setItem(  'cart_' + cart[cart.length - 1].id  , JSON.stringify(cart[cart.length - 1]));
  }

  render();
}

//Thêm 1 sản phẩm mới vào giỏ hàng (random sản phẩm)
// function add() {
//   let ind = Math.floor(Math.random() * (28 - 1 + 1)) + 1;

//   let flag = true;



//   for (let i = 0; i < cart.length; i++) {

//     if (ind === cart[i].id) {
//       flag = false;
//       cart[i].quantity++;
//       localStorage.setItem(ind, JSON.stringify(cart[i]));
//       break;

//     }
//   }

//   if (flag) {

//     cart.push({
//       quantity: 1,
//       id: ind,
//       name: products[ind - 1].name,
//       price: products[ind - 1].price.replaceAll('.', ''),
//       brand: products[ind - 1].brand,
//       newPrice: products[ind - 1].newPrice.replaceAll('.', ''),
//       image: products[ind - 1].image,

//     })

//     localStorage.setItem(cart[cart.length - 1].id, JSON.stringify(cart[cart.length - 1]));
//   }

//   render();
// }

//Bắt sự kiện khi nhấn button "Áp dụng" mã giảm giá
//Check mã giảm giá hợp lệ hay không


$('#button-gg').on('click', function checksale() {
  var inputVal = $('#nhapgg').val();
  flag = 0;
  for (let i = 0; i < salecode.length; i++) {
    if (inputVal === '') {
      SALE = 0;
      flag = 1;
    }
    if (salecode[i].code === inputVal) {
      SALE = salecode[i].discount;
      document.getElementById("sale").innerHTML = salecode[i].discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' ' + '<span style="text-decoration: underline; ">đ</span>';
      document.getElementById("total").innerHTML = (total + salecode[i].discount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' ' + '<span style="text-decoration: underline; ">đ</span>';
      flag = 1;
      alert('Áp dụng mã thành công!');
      break;
    }
  }
  if (!flag) {
    SALE = 0;
    alert('Mã giảm giá không hợp lệ!');
    document.getElementById("sale").innerHTML = 0 + ' ' + '<span style="text-decoration: underline; ">đ</span>';
    document.getElementById("total").innerHTML = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' ' + '<span style="text-decoration: underline; ">đ</span>';
  }

})

//Xóa tất cả sản phẩm trong giỏ hàng
function delAll() {
  var answer = window.confirm("Xác nhận xóa hết sản phẩm trong giỏ hàng?");
  if (answer) {
    for (let i = 0; i<localStorage.length; i++) {
      if (localStorage.key(i).includes('cart_')) {
        localStorage.removeItem(localStorage.key(i));
        i = -1;
      }
    }
    check_null = true;
    total = 0;
    subtotal = 0;
    SHIPPING = 0;
    $('#nhapgg').val('');
    checkToBuy = [];
    render();
    calSubTotal();
    
  }
}

//Tính lại Tổng tiền khi check - uncheck checkbox (id sản phẩm gán với ô checkbox = this_id)
function calSubTotal(this_id) {
  total_product = 0;
  console.log(this_id);
  let check = 0;

  //checkToBuy !== null + this_id đã có trong checkToBuy + remove_flag === 0 (do nút checkbox) => xóa khỏi mảng
  if (checkToBuy.length) {
    for (let i = 0; i < checkToBuy.length; i++) {
      if (this_id === checkToBuy[i] && remove_flag === 0) {
        check = 1;

        checkToBuy.splice(i, 1);
        break;
      }
    }
  }

  // Chưa check + remove_flag === 0 (do nút checkbox) => push vào checkToBuy
  if (!check && remove_flag === 0)
    checkToBuy.push(this_id);

  subtotal = 0;
  SHIPPING = 0;
  SALE = 0;

  for (let i = 0; i < cart.length; i++) {
    for (let j = 0; j < checkToBuy.length; j++) {

      if (checkToBuy[j] === cart[i].id) {
        total_product += cart[i].quantity;
        subtotal += cart[i].newPrice * cart[i].quantity;
        SHIPPING = 30000;
      }
    }
  }
  total = subtotal + SHIPPING + SALE;

  if (!$('input:checked').length) {
    SHIPPING = 0;
    subtotal = 0;
    SALE = 0;
    total = subtotal + SHIPPING + SALE;
    total_product = 0;
  }

  document.getElementById("sub-total").innerHTML = subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' ' + '<span style="text-decoration: underline; ">đ</span>';
  document.getElementById("total").innerHTML = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' ' + '<span style="text-decoration: underline; ">đ</span>';
  document.getElementById("shipping").innerHTML = SHIPPING.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' ' + '<span style="text-decoration: underline; ">đ</span>';
  document.getElementById("sale").innerHTML = SALE.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' ' + '<span style="text-decoration: underline; ">đ</span>';
  document.getElementById("total_product").innerHTML = '(' + total_product + ')';
}

//Xác nhận thanh toán khi nhấn Đặt hàng
function confirmbuy() {
  check_out = 1;

  var answer = window.confirm("Xác nhận mua " + total_product + " sản phẩm?");
  if (answer) {
    alert("Đặt hàng thành công!");
    for (let i = 0; i <= checkToBuy.length; i++) {
      remove(checkToBuy[i]);
    }
  }
  check_out = 0;
}
