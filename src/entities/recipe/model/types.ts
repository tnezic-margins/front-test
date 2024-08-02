export type Difficulty = "Easy" | "Medium";

export const Tags = new Map([
  ["Pizza", "Pizza"],
  ["Italian", "Italian"],
  ["Vegetarian", "Vegetarian"],
  ["Stir-fry", "Stir-fry"],
  ["Asian", "Asian"],
  ["Cookies", "Cookies"],
  ["Dessert", "Dessert"],
  ["Baking", "Baking"],
  ["Pasta", "Pasta"],
  ["Chicken", "Chicken"],
  ["Salsa", "Salsa"],
  ["Salad", "Salad"],
  ["Quinoa", "Quinoa"],
  ["Bruschetta", "Bruschetta"],
  ["Beef", "Beef"],
  ["Caprese", "Caprese"],
  ["Shrimp", "Shrimp"],
  ["Biryani", "Biryani"],
  ["Main course", "Main course"],
  ["Indian", "Indian"],
  ["Pakistani", "Pakistani"],
  ["Karahi", "Karahi"],
  ["Keema", "Keema"],
  ["Potatoes", "Potatoes"],
  ["Kebabs", "Kebabs"],
  ["Saag", "Saag"],
  ["Roti", "Roti"],
  ["Ramen", "Ramen"],
  ["Japanese", "Japanese"],
  ["Soup", "Soup"],
  ["Tagine", "Tagine"],
  ["Chickpea", "Chickpea"],
  ["Moroccan", "Moroccan"],
  ["Bibimbap", "Bibimbap"],
  ["Korean", "Korean"],
  ["Rice", "Rice"],
  ["Moussaka", "Moussaka"],
  ["Greek", "Greek"],
  ["Butter chicken", "Butter chicken"],
  ["Curry", "Curry"],
  ["Thai", "Thai"],
  ["Lassi", "Lassi"],
  ["Mango", "Mango"],
  ["Tiramisu", "Tiramisu"],
  ["Turkish", "Turkish"],
  ["Grilling", "Grilling"],
  ["Smoothie", "Smoothie"],
  ["Blueberry", "Blueberry"],
  ["Banana", "Banana"],
  ["Elote", "Elote"],
  ["Mexican", "Mexican"],
  ["Street food", "Street food"],
  ["Borscht", "Borscht"],
  ["Russian", "Russian"],
  ["Dosa", "Dosa"],
  ["Falafel", "Falafel"],
  ["Lebanese", "Lebanese"],
  ["Wrap", "Wrap"],
  ["Caipirinha", "Caipirinha"],
  ["Brazilian", "Brazilian"],
  ["Cocktail", "Cocktail"],
  ["Patatas bravas", "Patatas bravas"],
  ["Spanish", "Spanish"],
  ["Spring rolls", "Spring rolls"],
  ["Vietnamese", "Vietnamese"],
  ["Quinoa salad", "Quinoa salad"],
  ["Mediterranean", "Mediterranean"],
  ["Matcha ice cream", "Matcha ice cream"],
  ["Brigadeiros", "Brigadeiros"],
  ["Enchiladas", "Enchiladas"],
  ["Shrimp curry", "Shrimp curry"],
  ["Spanakopita", "Spanakopita"],
  ["Couscous salad", "Couscous salad"],
  ["Mojito", "Mojito"],
  ["Cuban", "Cuban"],
  ["Teriyaki chicken", "Teriyaki chicken"],
  ["Mango salsa", "Mango salsa"],
  ["Shrimp stir-fry", "Shrimp stir-fry"],
  ["Quick", "Quick"],
  ["Margherita pizza", "Margherita pizza"],
  ["Pesto pasta", "Pesto pasta"],
  ["Chicken skewers", "Chicken skewers"],
  ["Hawaiian", "Hawaiian"],
  ["Sushi rolls", "Sushi rolls"],
  ["Chickpea salad", "Chickpea salad"],
  ["Pineapple", "Pineapple"],
  ["Coconut", "Coconut"],
]);

export type RecipeType = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: Difficulty;
  cuisine: string; // should be some kind of enum
  caloriesPerServing: number;
  // tags: string[];
  tags: Tag[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

export type RecipeResponse = {
  recipes: RecipeType[];
  total: number;
  skip: number;
  limit: number;
};

export type Tag = {
  id: number;
  value: string;
  isActive: boolean;
};
