"use strict";

// Create setup() function using an event listener, so setup() is run when the page is loaded.
window.onload = function setup() {

    // Get the collection of elements for each button.
    var buttons = document.querySelectorAll(".but");

    // Use a loop to add an event handler that runs the addItem(e) function when the button is clicked.
    for (var i = 0; i < buttons.length; i ++) {
        buttons[i].addEventListener("click", addItem);
    }
};

// Create a global array to store the item ids of items in the wish list.
var wishlist = new Array();

// Create addItem(e) function, which adds items to the wish list on the page.
function addItem(e) {

    // Use the event variable (e) to get a reference to the button that was clicked.
    var buttonClicked = e.target.getAttribute("id");

    // Identify the item associated with the button that was clicked.
    var itemId = "item" + buttonClicked;

    // Get the innerHTML of the item selected.
    var orderedItem = document.querySelector("#" + itemId).innerHTML;
    
    // Add the contents of the selected item to the wish list.
    var asideContent = document.querySelector("aside").innerHTML;
    document.querySelector("aside").innerHTML = asideContent + orderedItem;

    // Do not add an item to the wish list if it already appears on the list.
    if (wishlist.includes(buttonClicked)) {
        document.querySelector("aside").innerHTML = asideContent;
    };

    // Add the selected item to the global array, to determine if a product ordered by the customer has already been ordered.
    wishlist.push(buttonClicked);
}

/* Expand the assignment: Add a date to the wishlist.
   This feature improves the completeness of my website, as it indicates the current date right above the wishlist items.
   It is important for Happy Feet customers to keep in mind the current date when they register for swim programs. 
   This feature helps ensure that they do not miss class enrollment dates. */

var now = new Date();
var nowDate = "Date: " + (now.getMonth() + 1) + "/" + now.getDate() + "/" + (now.getFullYear());
document.getElementById("showDate").innerHTML = nowDate;

