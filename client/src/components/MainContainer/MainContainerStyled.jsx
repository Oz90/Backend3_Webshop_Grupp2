import styled from 'styled-components';

const MainContainerStyled = styled.div`
    display: grid;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 6rem 1fr 3rem; 
`;

export { MainContainerStyled }; 
