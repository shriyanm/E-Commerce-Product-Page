var addItemId = 0;
function addToCart(item){
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('price');
    selectedItem.setAttribute('id',addItemId);
    
    var cartItems = document.getElementsByClassName('row');
    cartItems.append(selectedItem);


}