function toggleBaseOptions() {
  var base = document.getElementById("base").value;
  var smoothieBase = document.getElementById("smoothie-base");
  var milkshakeBase = document.getElementById("milkshake-base");

  if (base === "smoothie") {
    smoothieBase.style.display = "block";
    milkshakeBase.style.display = "none";
    toppings.style,display = "none";
  } else if (base === "milkshake") {
    smoothieBase.style.display = "none";
    milkshakeBase.style.display = "block";
    toppings.style,display = "block";
  }
}

function calculatePrice() {
  var size = document.getElementById("size").value;
  var base = document.getElementById("base").value;
  var toppings = document.getElementById("toppings").value;
  
  var ingredients = document.querySelectorAll("#ingredients input[type='checkbox']:checked");
  var ingredientsPrice = ingredients.length * 0; // Assuming each ingredient costs $0.5
  
  var toppingsPrice = 0;
  if (toppings !== "none") {
    toppingsPrice = 0.75; 
  }
  
  var totalPrice = calculateBasePrice(size) + ingredientsPrice + toppingsPrice;
  
  // Display the calculated price on the page
  var resultElement = document.getElementById("result");
  resultElement.textContent = "Total Price: $" + totalPrice.toFixed(2);
}
function calculateBasePrice(size) {
  if (size === "small") {
    return 2.50;
  } else if (size === "medium") {
    return 3.00;
  } else if (size === "large") {
    return 3.55;
  } else if (size === "exlarge") {
    return 4.20;
  }
}

function saveOrder() {
  var size = document.getElementById("size").value;
  var base = document.getElementById("base").value;
  var smoothieBase = document.getElementById("smoothie-base-select").value;
  var milkshakeBase = document.getElementById("milkshake-base-select").value;
  var toppings = document.getElementById("toppings").value;
  var ingredients = document.querySelectorAll("#ingredients input[type='checkbox']:checked");

  var orderDetails = document.getElementById("saved-order-details");
  orderDetails.innerHTML = "";
  orderDetails.innerHTML += "<strong>Size:</strong> " + size + "<br>";
  orderDetails.innerHTML += "<strong>Base:</strong> " + (base === "smoothie" ? smoothieBase : milkshakeBase) + "<br>";

  var ingredientsList = "";
  ingredients.forEach(function (ingredient) {
    ingredientsList += ingredient.value + ", ";
  });
  ingredientsList = ingredientsList.slice(0, -2); // Remove the trailing comma and space
  orderDetails.innerHTML += "<strong>Ingredients:</strong> " + ingredientsList + "<br>";
  orderDetails.innerHTML += "<strong>Toppings:</strong> " + (toppings !== "none" ? toppings : "No Toppings") + "<br>";

  document.getElementById("saved-order").style.display = "block";
}