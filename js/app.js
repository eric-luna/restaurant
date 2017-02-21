/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var foodButton = document.getElementById('food');
var drinksButton = document.getElementById('drinks');
var dessertsButton = document.getElementById('desserts');
var foodMenu = document.getElementById('food-menu');
var drinksMenu = document.getElementById('drink-menu');
var dessertsMenu = document.getElementById('dessert-menu');

foodButton.addEventListener('click', function(){
	foodButton.classList.add("selected");
	drinksButton.classList.remove("selected");
	dessertsButton.classList.remove("selected");
	foodMenu.classList.add("show");
	foodMenu.classList.remove("hide");
	drinksMenu.classList.remove("show");
	drinksMenu.classList.add("hide");
	dessertsMenu.classList.remove("show");
	dessertsMenu.classList.add("hide");
})

drinksButton.addEventListener('click', function(){
	drinksButton.classList.add("selected");
	foodButton.classList.remove("selected");
	dessertsButton.classList.remove("selected");
	drinksMenu.classList.add("show", "selected");
	drinksMenu.classList.remove("hide");
	foodMenu.classList.remove("show");
	foodMenu.classList.add("hide");
	dessertsMenu.classList.remove("show");
	dessertsMenu.classList.add("hide");
})

dessertsButton.addEventListener('click', function(){
	dessertsButton.classList.add("selected");
	foodButton.classList.remove("selected");
	drinksButton.classList.remove("selected");
	dessertsMenu.classList.add("show","selected");
	dessertsMenu.classList.remove("hide");
	foodMenu.classList.remove("show", "selected");
	foodMenu.classList.add("hide");
	drinksMenu.classList.remove("show", "selected");
	drinksMenu.classList.add("hide");
})