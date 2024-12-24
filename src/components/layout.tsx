import { ReactNode } from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`;

const MenuWrapper = styled.div`
    flex: 0 0 250px;
    background-color: #f8f9fa;
    border-right: 1px solid #ddd;
    padding: 20px;
    box-sizing: border-box;
    transition: width 0.3s ease;

    @media (max-width: 1024px) {
        flex: 0 0 200px;
    }

    @media (max-width: 768px) {
        flex: 0 0 150px;
    }

    @media (max-width: 480px) {
        display: none;
    }
`;

const ContentWrapper = styled.div`
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
    overflow-y: auto;
    transition: margin-left 0.3s ease;

    @media (max-width: 480px) {
        margin-left: 0;
    }
`;

export const Layout = ({ menu, content }: { menu: ReactNode; content: ReactNode }) => {
    return (
        <Wrapper>
            <MenuWrapper>{menu}</MenuWrapper>
            <ContentWrapper>{content}</ContentWrapper>
        </Wrapper>
    );
};
