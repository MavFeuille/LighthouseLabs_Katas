const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let allIngredients = [...bakeryA, ...bakeryB];
  // console.log("bothBakeries: ", bothBakeries);
  let finalRecipe = "";

  recipes.forEach((recipe) => {
    for (let i = 0; i < recipe.ingredients.length ; i++) {
      let firstIngredient = recipe.ingredients[i];
      let secondIngredient = recipe.ingredients[i + 1];

      if (allIngredients.includes(firstIngredient) && allIngredients.includes(secondIngredient)) {
        finalRecipe = recipe.name;
      }
    }
  })
  return finalRecipe;
}

// First scenario
// let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
// let bakeryB = ['milk', 'butter', 'cream cheese'];
// let recipes = [
//     {
//         name: 'Coconut Sponge Cake',
//         ingredients: ['coconut', 'cake base']
//     },
//     {
//         name: 'Persian Cheesecake',
//         ingredients: ['saffron', 'cream cheese']
//     },
//     {
//         name: 'Custard Surprise',
//         ingredients: ['custard', 'ground beef']
//     }
// ];

// console.log(chooseRecipe(bakeryA, bakeryB, recipes));


// Second scenario
let bakeryA = ['potatoes', 'bay leaf', 'raisins'];
let bakeryB = ['red bean', 'dijon mustard', 'apples'];
let recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
