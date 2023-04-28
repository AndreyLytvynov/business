import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: fixed;
  padding: 22px 24px;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: ${(props) => props.opacity};

  @media screen and ${(props) => props.theme.media.tablet} {
    display: flex;
    padding: 23px 32px;
    align-items: center;
    justify-content: space-between;
    min-width: 768px;
  }

  @media screen and ${(props) => props.theme.media.desktop} {
    padding: 32px 28px;
    min-width: 1360px;
  }

  z-index: 1;
`;

export const NavStyled = styled.nav`
  @media screen and (max-width: 768px) {
    margin-top: 16px;
  }
`;

export const NavItemStyled = styled.nav`
  color: ${(props) => props.theme.colors.textWhite};
  line-height: 1.38;
  font-size: 16px;
  @media screen and ${(props) => props.theme.media.tablet} {
    font-size: 18px;
  }

  &:not(:last-child) {
    margin-right: 12px;
    @media screen and ${(props) => props.theme.media.tablet} {
      margin-right: 20px;
    }
    @media screen and ${(props) => props.theme.media.desktop} {
      margin-right: 40px;
    }
  }
`;

export const LinkStyled = styled.a`
  padding: 10px 0;
  :hover {
    text-decoration: underline;
    text-underline-offset: 5px;
    cursor: pointer;
  }
`;
