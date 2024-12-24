import { styled } from 'styled-components';

export const MenuItem = styled.div<{ isSelected: boolean; onClick: () => void }>`
    padding: 10px 20px;
    cursor: pointer;
    background-color: ${(props) => (props.isSelected ? '#007BFF' : 'transparent')};
    color: ${(props) => (props.isSelected ? 'white' : '#000')};
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: ${(props) => (props.isSelected ? '#0056b3' : '#f1f1f1')};
        color: ${(props) => (props.isSelected ? 'white' : '#007BFF')};
    }
`;

export const MenuWrapper = styled.div`
    max-width: 200px;
`;
