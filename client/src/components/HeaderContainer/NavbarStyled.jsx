import styled from "styled-components"
import Colors from "../../styleAssets/Colors"

const Container = styled.div`
  height: 100%;
`

const Wrapper = styled.div`
  height: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Left = styled.div`
  flex: 1;
  justify-content: flex-start;
  margin-left: 3.8rem;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 3.8rem;
`

const Logo = styled.span`
  img {
    height: 1.5rem;
  }
  a {
    color: ${Colors.white};
  }
`

const StyledBtn = styled.button`
  background-color: inherit;
  margin-right: 1.5rem;
  border: none;
  cursor: pointer;
  color: ${Colors.white};
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1.2px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  svg {
    color: ${Colors.white};
  }
`
const StyledNotification = styled.div`
  background-color: ${Colors.danger};
  letter-spacing: normal;
  font-size: 0.8rem;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  z-index: 99;
  position: absolute;
  margin-top: 0;
  color: ${Colors.white};
  margin-left: 15px;
`

export { Container, Wrapper, Left, Right, Logo, StyledBtn, StyledNotification }
