import { makeAutoObservable, runInAction } from 'mobx';
import { Cocktail, CocktailsGroupNameEnum } from '@commonTypes/index';
import { cocktailServiceInstance } from '@services/cocktailsService';

type StoreData = Record<CocktailsGroupNameEnum, Array<Cocktail>>;

class CocktailStore {
    cocktails: StoreData = {
        [CocktailsGroupNameEnum.margarita]: [],
        [CocktailsGroupNameEnum.mojito]: [],
        [CocktailsGroupNameEnum.a1]: [],
        [CocktailsGroupNameEnum.kir]: [],
    };
    currentGroup: string | null = null;
    loading = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async getGroupCocktails(cocktailName: CocktailsGroupNameEnum) {
        this.loading = true;
        this.error = null;

        try {
            const {
                data: { drinks },
            } = await cocktailServiceInstance.searchCocktail(cocktailName);

            runInAction(() => {
                this.cocktails[cocktailName] = drinks;
            });
        } catch (e) {
            runInAction(() => {
                this.error = e.message || 'Не удалось загрузить коктейли';
            });
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    }

    changeCurrentGroup = (newGroupName: CocktailsGroupNameEnum) => {
        this.error = null;

        if (newGroupName === this.currentGroup) {
            return;
        }

        this.currentGroup = newGroupName;

        if (this.cocktails[newGroupName].length > 0) {
            return;
        }
        this.getGroupCocktails(newGroupName);
    };
}

export const cocktailStore = new CocktailStore();
