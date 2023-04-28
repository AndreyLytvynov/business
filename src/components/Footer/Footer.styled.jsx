import styled from "styled-components";

export const CopyrightStyled = styled.p`
  font-size: 16px;
  line-height: 1.37;
  color: ${(props) => props.theme.colors.textWhite};
  margin-top: 12px;
  @media screen and ${(props) => props.theme.media.tablet} {
    font-size: 18px;
    line-height: 1.38;
  }
`;
