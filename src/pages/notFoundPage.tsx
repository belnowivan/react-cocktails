import { Link } from 'react-router-dom';
import { Container } from '@components/container';

export const NotFoundPage = () => {
    return (
        <Container>
            <div>
                <div>404</div>
                <div>Страница не найдена</div>
                <Link to='/'>Вернуться на главную</Link>
            </div>
        </Container>
    );
};
