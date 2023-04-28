import styled from "styled-components";

export const ContainerStyled = styled.div`
  position: relative;
  max-width: 320px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and ${(props) => props.theme.media.tablet} {
    max-width: 768px;
  }
  @media screen and ${(props) => props.theme.media.desktop} {
    max-width: 1360px;
  }
`;
