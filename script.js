document.addEventListener("DOMContentLoaded", function() {
  // Sample data for demonstration
  const recipes = [
    { title: "Spaghetti Carbonara", image: "spaghetti_carbonara.jpg" },
    { title: "Chocolate Cake", image: "chocolate_cake.jpg" },
    { title: "Caesar Salad", image: "caesar_salad.jpg" },
    // Add more recipes as needed
  ];

  const gridContainer = document.getElementById("grid-container");

  // Insert recipes into the grid
  recipes.forEach(recipe => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    
    const image = document.createElement("img");
    image.src = "images/" + recipe.image;
    image.alt = recipe.title;
    
    const title = document.createElement("h2");
    title.textContent = recipe.title;
    
    gridItem.appendChild(image);
    gridItem.appendChild(title);
    
    gridContainer.appendChild(gridItem);
  });
});
