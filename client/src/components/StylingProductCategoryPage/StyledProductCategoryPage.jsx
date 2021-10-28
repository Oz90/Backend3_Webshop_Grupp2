import styled from "styled-components"

const StyledCard = styled.div`
  overflow: hidden;
`
const StyledImgDiv = styled.div`
  overflow: hidden;
`

const StyledThumbnail = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.09);
  }
`

const StyledProductTitle = styled.h2`
  text-align: center;

  margin: 1rem 0 0.5rem 0;
`

const StyledTitleAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 0.7rem;
`

export {
  StyledCard,
  StyledImgDiv,
  StyledThumbnail,
  StyledProductTitle,
  StyledTitleAndPrice,
}
