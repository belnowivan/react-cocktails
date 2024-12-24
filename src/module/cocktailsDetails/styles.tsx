import { styled, keyframes } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;
    max-width: 1024px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Details = styled.div`
    flex: 1;
`;

export const Image = styled.img`
    max-width: 320px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 480px) {
        max-width: 120px;
    }
`;

export const Title = styled.h2`
    margin: 0 0 10px;
    color: #333;
    font-size: 36px;

    @media (max-width: 1024px) {
        font-size: 28px;
    }
`;

export const Info = styled.p`
    margin: 5px 0;
    color: #555;
    font-size: 20px;

    span {
        font-weight: bold;
    }

    @media (max-width: 1024px) {
        font-size: 16px;
    }
`;

export const Instructions = styled.div`
    margin: 20px 0;
    color: #333;
    font-size: 20px;

    p {
        margin: 10px 0;
    }
    @media (max-width: 1024px) {
        font-size: 16px;
    }
`;

export const IngredientsList = styled.ul`
    margin: 10px 0;
    padding-left: 20px;

    li {
        color: #555;
        margin-bottom: 5px;
        font-size: 20px;

        @media (max-width: 1024px) {
            font-size: 16px;
        }
    }
`;

export const SpinnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spin} 1s linear infinite;
`;
