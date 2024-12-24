import { AxiosPromise } from 'axios';
import type { Cocktail } from '@commonTypes/index';
import { BaseService } from '@services/baseService';

class CocktailService extends BaseService {
    searchCocktail = (cocktailName: string): AxiosPromise<{ drinks: Cocktail[] }> => {
        return this.ai.get('/search.php', { params: { s: cocktailName } });
    };
}

export const cocktailServiceInstance = new CocktailService();
