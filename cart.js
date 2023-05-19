var cart = [];

function addToCart(item, price) {
  var existingItem = cart.find(function(cartItem) {
    return cartItem.name === item;
  });

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    var itemObj = { name: item, price: price, quantity: 1 };
    cart.push(itemObj);
  }

  updateCart();
}

function updateCart() {
  var cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = '<h1><center>Shopping Cart</center></h1><hr><br>';
  var total = 0;
  var totalProducts = 0;

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    cartDiv.innerHTML +=
      '<div><span class="nama-produk">' +
      item.name +
      '</span><span class="harga-produk">Rp. ' +
      item.price.toLocaleString() +
      '</span><span class="jumlah-produk"> ' +
      item.quantity +
      'x</span><br></div>';
    total += item.price * item.quantity;
    totalProducts += item.quantity;
  }

  cartDiv.innerHTML +=
    '<br><div class="total-products">Total Produk: ' +
    totalProducts +
    "</div>";
  cartDiv.innerHTML +=
    '<div class="total"><br><hr>Total Pesanan: Rp. ' +
    total.toLocaleString() +
    "</div>";
}

function resetCart() {
  cart = [];
  updateCart();
}


function showCartModal() {
  updateCart();
  $('#cartModal').modal('show');
}

function checkout() {
  // Mengambil informasi checkout
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var shippingOption = document.getElementById("shippingOption").value;
  var paymentOption = document.getElementById("paymentOption").value;

  // Menampilkan informasi checkout
  var checkoutInfo = '<div class="checkout-info">';
  checkoutInfo += '<h5><strong>Informasi Pengiriman</strong></h5>';
  checkoutInfo += '<p>Nama Lengkap: ' +'<strong>' + fullName + '</strong>' + '</p>';
  checkoutInfo += '<p>Email:' + email + '</p>';
  checkoutInfo += '<p>Alamat: ' + address + '</p>';
  checkoutInfo += '<p>Nomor Telepon: ' + phoneNumber + '</p><hr>';
  checkoutInfo += '</div>';

  // Menampilkan informasi produk yang dibeli
  var checkoutItems = '<div class="checkout-items">';
  checkoutItems += '<h5><strong>Informasi Produk</strong></h5>';
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    checkoutItems += '<div class="checkout-item">';
    checkoutItems += '<div class="checkout-item-image">';
    // Tambahkan gambar item jika diperlukan
    // checkoutItems += '<img src="' + item.image + '" alt="' + item.name + '">';
    checkoutItems += '</div>';
    checkoutItems += '<div class="checkout-item-details">';
    checkoutItems += '<div class="checkout-item-name">' + item.name + '</div>';
    checkoutItems += '<div class="checkout-item-quantity">' + item.quantity + 'x</div>';
    checkoutItems += '<div class="checkout-item-price">Rp. ' + (item.price * item.quantity).toLocaleString() + '</div><hr>';
    checkoutItems += '</div>';
    checkoutItems += '</div>';
  }
  checkoutItems += '</div>';

  // Menampilkan total harga
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total += item.price * item.quantity;
  }
  var checkoutTotal = '<div class="checkout-total">';
  checkoutTotal += '<h5><strong>Total Pesanan</strong></h5>';
  checkoutTotal += '<p><strong>Total: Rp. ' + total.toLocaleString() +'</strong>' +'</p>';
  checkoutTotal += '<hr></div>';

  // Menampilkan pesan konfirmasi
  var confirmationMessage = '<div class="confirmation-message">';
  confirmationMessage += '<p>Apakah Anda yakin ingin membuat pesanan dengan informasi berikut?</p>';
  confirmationMessage += '<ul>';
  confirmationMessage += '<li><strong>Opsi Pengiriman:</strong> ' + shippingOption + '</li>';
  confirmationMessage += '<li><strong>Opsi Pembayaran:</strong> ' + paymentOption + '</li>';
  confirmationMessage += '</ul>';
  confirmationMessage += '</div>';

  // Menampilkan modal konfirmasi
  var confirmationModalBody = document.getElementById("confirmationModalBody");
  confirmationModalBody.innerHTML = checkoutInfo + checkoutItems + checkoutTotal + confirmationMessage;

  // Tampilkan modal konfirmasi
  $('#cartModal').modal('hide');
  $('#confirmationModal').modal('show');
}

function showThankYouPopup() {
  // Tampilkan popup "Terima Kasih"
  alert("Terima kasih atas pesanan Anda!");

  // Atur ulang keranjang
  resetCart();

  // Kosongkan informasi checkout
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phoneNumber").value = "";

  // Kosongkan informasi checkout di dalam modal
  document.getElementById("confirmationModalBody").innerHTML = "";

  // Sembunyikan modal konfirmasi
  $('#confirmationModal').modal('hide');
}


function scrollToCart() {
  var cartDiv = document.getElementById("cart");
  window.scrollTo(0, cartDiv.offsetTop);
}
