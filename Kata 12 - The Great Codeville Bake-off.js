let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

// console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// Helper function  to check if the given bakery possesses any of ingredients from that recipe
const ingredientCheck = (bakery, ingredients) => {
  for (const bakeryIngredient of bakery) {
    // console.log("ingredients in bakery: ", bakeryIngredient)
    for (let i = 0; i < recipes.length; i ++) {
      // console.log("ingredients in recipes: ", recipes[i].ingredients);
      // console.log("bakeryIngredient: ", bakeryIngredient);
      if (recipes[i].ingredients.includes(bakeryIngredient)) {
        // console.log("bakeryIngredient: ", bakeryIngredient, "recipes: ", recipes[i]);
        return recipes[i];
      }
    }
  }
}

console.log(ingredientCheck(bakeryB, recipes))