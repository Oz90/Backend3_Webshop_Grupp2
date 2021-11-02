import styled from 'styled-components';
import Colors from '../../styleAssets/Colors.js';

const HeaderOne = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: 1.2px;
    color: ${Colors.primary};
    margin: 2rem 0;
    
`;
const HeaderThree = styled.h3`
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 1.2px;
    color: ${Colors.primary};
    margin: 1rem 0;
    
`;
const HeaderTwo = styled.h3`
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: ${Colors.primary};
    margin: 1rem 0;
    
`;
const P = styled.p`
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1.05px;
    color: ${Colors.darkGrey};
    
`;
const PriceP = styled.p`
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 1.05px;
    color: ${Colors.darkGrey};
    margin-top: .5rem; 
`;

const ProductP = styled.p`
    font-size: 1.1rem;
    font-weight: 400;
    color: ${Colors.primary};
    margin-top: .5rem; 
`;


export {
    HeaderOne,
    HeaderThree,
    HeaderTwo,
    P,
    PriceP,
    ProductP
};
