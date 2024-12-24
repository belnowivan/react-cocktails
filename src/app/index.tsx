import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CocktailsPage } from '@pages/cocktailsPage';
import { NotFoundPage } from '@pages/notFoundPage';
import { CocktailsGroupNameEnum } from '@commonTypes/index';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to={`/${CocktailsGroupNameEnum.margarita}`} replace />} />
                <Route path='/:group' element={<CocktailsPage />} />
                <Route path='/404' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
};
