/* global Product, Cart */

'use strict';



// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
  var optionEl = document.createElement('option');          // Create a <option> element
  optionEl.textContent = Product.allProducts[i].name;       // Add content to the lists
  selectElement.appendChild(optionEl);                      // Append <option> to <select> with id="items"
  }

}


// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  console.log(event);

  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
 new Cart (event.target["1"].value, event.target["2"].value);
  console.log(event.target["1"].value, event.target["2"].value);
};
  // TODO: suss out the item picked from the select list
  function ClearCartFastAlt(optionEl){
  };
  // TODO: get the quantity
  // TODO: using those, create a new Cart item instance


// TODO: Save the contents of the cart to Local Storage
function saveCartToLocalStorage() {

}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
