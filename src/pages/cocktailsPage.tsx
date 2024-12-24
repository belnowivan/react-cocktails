import { Navigate, useParams } from 'react-router-dom';
import { CocktailsGroupNameEnum } from '@commonTypes/index';
import { Container } from '@components/container';
import { Layout } from '@components/layout';
import { CocktailDetails } from '@module/cocktailsDetails/cocktailsDetails';
import { Menu } from '@module/menu/menu';

export const CocktailsPage = () => {
    const { group } = useParams();

    if (group in CocktailsGroupNameEnum) {
        return (
            <Container>
                <Layout
                    menu={<Menu currentItem={group} />}
                    content={<CocktailDetails group={group as CocktailsGroupNameEnum} />}
                />
            </Container>
        );
    }

    return <Navigate to={'/404'} />;
};
