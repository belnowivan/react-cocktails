import { Cocktail } from '@commonTypes/index';

export const extractIngredientsAndMeasures = (cocktailData: Cocktail) => {
    const ingredients: Array<{ measure: string; ingredient: string }> = [];
    const maxIngredients = 15;

    for (let i = 1; i <= maxIngredients; i += 1) {
        const ingredient = cocktailData[`strIngredient${i}`];
        const measure = cocktailData[`strMeasure${i}`];

        if (ingredient) {
            ingredients.push({ measure, ingredient });
        }
    }
    return ingredients;
};
