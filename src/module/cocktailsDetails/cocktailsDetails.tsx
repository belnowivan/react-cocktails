import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { CocktailsGroupNameEnum } from '@commonTypes/index';
import { cocktailStore } from '@store/cocktailsStore';
import { Details, Image, Info, IngredientsList, Instructions, Spinner, SpinnerWrapper, Title, Wrapper } from './styles';
import { extractIngredientsAndMeasures } from './utils';

export const CocktailDetails = observer(({ group }: { group: CocktailsGroupNameEnum }) => {
    useEffect(() => {
        cocktailStore.changeCurrentGroup(group);
    }, [group]);

    if (cocktailStore.loading) {
        return (
            <SpinnerWrapper>
                <Spinner />
            </SpinnerWrapper>
        );
    }

    if (cocktailStore.error) {
        return <Wrapper>Что то пошло не так, попробуйте перезагрузить или зайдите позже</Wrapper>;
    }

    return (
        <div>
            {cocktailStore.cocktails[group].map((cocktail) => {
                const ingredients = extractIngredientsAndMeasures(cocktail);
                return (
                    <Wrapper key={cocktail.idDrink}>
                        <Details>
                            <Title>{cocktail.strDrink}</Title>
                            <Info>
                                <span>Category:</span> {cocktail.strCategory}
                            </Info>
                            <Info>
                                <span>Type:</span> {cocktail.strAlcoholic}
                            </Info>
                            <Info>
                                <span>Glass:</span> {cocktail.strGlass}
                            </Info>
                            <Instructions>
                                <p>
                                    <span>Instructions:</span>
                                </p>
                                <p>{cocktail.strInstructions}</p>
                            </Instructions>
                            <div>
                                <span>Ingredients:</span>
                                <IngredientsList>
                                    {ingredients.map(({ measure, ingredient }) => (
                                        <li key={`${measure}_${ingredient}`}>
                                            {measure && <span>{measure}:</span>} {ingredient}
                                        </li>
                                    ))}
                                </IngredientsList>
                            </div>
                        </Details>
                        <picture>
                            <source media='(max-width: 1024px)' srcSet={`${cocktail.strDrinkThumb}/preview`} />
                            <Image loading='lazy' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                        </picture>
                    </Wrapper>
                );
            })}
        </div>
    );
});
