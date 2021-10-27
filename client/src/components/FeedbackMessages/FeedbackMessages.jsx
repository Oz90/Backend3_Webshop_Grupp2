import styled, { keyframes } from 'styled-components';
import Colors from '../../styleAssets/Colors.js';

const breatheAnimation = keyframes`
    0% {opacity:0;}
    100% {opacity:1;}
`

const Message = styled.div`
    background-color: ${props => props.type};
    color: ${Colors.white};
    transition: all .2s ease-in-out;
    margin: 1rem 0;
    padding: 2rem;
    animation-name: ${breatheAnimation};
    animation-duration: 2s;
`;

export {
    Message,  
};
