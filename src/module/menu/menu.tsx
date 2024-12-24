import { useNavigate } from 'react-router-dom';
import { CocktailsGroupNameEnum } from '@commonTypes/index';
import { MenuItem, MenuWrapper } from './styles';

export const Menu = ({ currentItem }: { currentItem: string }) => {
    const navigate = useNavigate();

    return (
        <MenuWrapper>
            {Object.keys(CocktailsGroupNameEnum).map((item) => (
                <MenuItem
                    key={item}
                    isSelected={item === currentItem}
                    onClick={() => {
                        navigate('/' + item);
                    }}>
                    {item}
                </MenuItem>
            ))}
        </MenuWrapper>
    );
};
