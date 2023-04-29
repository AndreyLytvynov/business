import styled from "styled-components";

export const CopyrightStyled = styled.p`
  margin-top: 12px;

  color: ${(props) => props.theme.colors.textWhite};
  font-size: 16px;
  line-height: 1.37;

  @media screen and ${(props) => props.theme.media.tablet} {
    font-size: 18px;
    line-height: 1.38;
  }
`;
