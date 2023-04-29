import styled from "styled-components";

export const LogoStyled = styled.div`
  svg {
    width: 246px;
    height: 38px;

    @media screen and ${(props) => props.theme.media.tablet} {
      width: 297px;
      height: 48px;
    }
  }
  svg:hover {
    cursor: pointer;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) brightness(130%);
    transform: scale(1.03);
  }
`;
