const chooseRecipe = function(bakeryA, bakeryB, recipes){
let firstIngredient = "";
let secondIngredient = "";

const ingredientCheck = function (bakeryA, recipes) {
  for (let i = 0; i < bakeryA.length; i++) {
    if (bakeryA[i] === recipes["ingredients"]) {
      firstIngredient = recipes["ingredients"];
    }
  }
  return firstIngredient;
}
  

  
}

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

console.log(chooseRecipe(bakeryA, bakeryB, recipes));