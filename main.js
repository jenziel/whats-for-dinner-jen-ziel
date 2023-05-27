var sideButton = document.querySelector("#Side")
var mainDishButton = document.querySelector("#MainDish")
var dessertButton = document.querySelector("#Dessert")
var letsCookButton = document.querySelector("#lets-cook-button")
var output = document.querySelector("#specificDish")
var potPage = document.querySelector("#potLogo")
var messagePage = document.querySelector(".letsCookResponse") 
var youShouldMake = document.querySelector("#youShouldMake")

//event listeners here:
window.addEventListener("load", showPot)
letsCookButton.addEventListener("click", function(){
    outputMessage();
    generateRandomDish();
    showNewOutput();
})

var recipeBook = {
    sides: ["Fresh Summer Rolls", "Pickles", "Toast", "Tater Tots", "Cucumber Salad", "Breakfast Potatoes", "Rice",
            "Crispy Tofu", "Roasted Root Vegetables", "Roasted Mushrooms", "Hush Puppies", "Slaw"],
    mainDishes: ["Falafel Sandwich", "Bahn Mi", "Chicken Fried Rice", "Butternut Squash Soup","Ramen",
                 "Spicy Chicken Sandwich", "Empanadas", "Pepperoni Pizza", "Chicken Soup", "Pesto Pasta", "Thai Yellow Curry",
                "Hamburger", "Pollo a la Brasa", "Shrimp Tempura Sushi", "Meatballs"],
    desserts:  ["Rice Pudding", "Bread Pudding", "Churros", "Flan", "Creme Brulee", "Funfetti Cake", "Brownies", "Pumpkin Pie",
                "Macaroons", "Blueberry Cobbler", "Apple Pie", "Baklava", "Banana Bread", "Sugar Cookies"],
}

function randomMenuItem(menuSection){
        var result = Math.floor(Math.random() * menuSection.length);
         return menuSection[result]; 
    }
function outputMessage(){
    youShouldMake.innerText = "You should make:"
}
function generateRandomDish(){
    if (sideButton.checked == true){
        output.innerText = randomMenuItem(recipeBook.sides)
    } else if (mainDishButton.checked == true){
        output.innerText = randomMenuItem(recipeBook.mainDishes)
    } else if (dessertButton.checked == true) {
       output.innerText = randomMenuItem(recipeBook.desserts)
    } 
}
function showPot(){
    potPage.classList.remove("hidden")
    messagePage.classList.add("hidden")
}
function showNewOutput(){
    potPage.classList.add("hidden")
    messagePage.classList.remove("hidden")
}












// var sides = ["Fresh Summer Rolls", "Pickles", "Toast", "Tater Tots", "Cucumber Salad", "Breakfast Potatoes", "Rice",
//  "Crispy Tofu", "Roasted Root Vegetables", "Roasted Mushrooms", "Hush Puppies", "Slaw"]

// var mainDishes = ["Falafel Sandwich", "Bahn Mi", "Chicken Fried Rice", "Butternut Squash Soup",
//  "Ramen", "Spicy Chicken Sandwich", "Empanadas", "Pepperoni Pizza", "Chicken Soup", "Pesto Pasta", "Thai Yellow Curry",
//   "Hamburger", "Pollo a la Brasa", "Shrimp Tempura Sushi", "Meatballs"]

// var desserts = ["Rice Pudding", "Bread Pudding", "Churros", "Flan", "Creme Brulee", "Funfetti Cake", "Brownies", "Pumpkin Pie",
//  "Macaroons", "Blueberry Cobbler", "Apple Pie", "Baklava", "Banana Bread", "Sugar Cookies"]
















