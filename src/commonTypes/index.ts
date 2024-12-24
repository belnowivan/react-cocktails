export interface Cocktail {
    idDrink: string;

    strDrink: string;
    strCategory?: string;
    strAlcoholic?: string;
    strGlass?: string;

    strInstructions: string;

    strDrinkThumb: string;

    [key: string]: string;
}

export enum CocktailsGroupNameEnum {
    margarita = 'margarita',
    mojito = 'mojito',
    a1 = 'a1',
    kir = 'kir',
}
