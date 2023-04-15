var cart = [];

function addToCart(item, price){
	var itemObj = {name: item, price:price};
	cart.push(itemObj);
	updateCart();
}

function updateCart(){
	var cartDiv = document.getElementById("cart");
	cartDiv.innerHTML = '<h1><center>Shopping Cart</center></h1><hr><br>';
	var total = 0;
	for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    cartDiv.innerHTML +=
      '<div><span class="nama-produk">' +
      item.name +
      '</span><span class="harga-produk">Rp. ' +
      item.price.toLocaleString() +
      "</span><br></div>";
    total += item.price;
  }
	cartDiv.innerHTML += '<div class="total"><br><hr>Total : Rp. '+total.toLocaleString()+"</div>";
}

function resetCart(){
    cart = [];
    updateCart();
}
function scrollToCart() {
        var cartDiv = document.getElementById("cart");
        window.scrollTo(0, cartDiv.offsetTop);
    }
