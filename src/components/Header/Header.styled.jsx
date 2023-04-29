import styled from "styled-components";

export const HeaderStyled = styled.header`
  position: fixed;

  padding: 22px 24px;

  background-color: rgba(0, 0, 0, 0.6);
  opacity: ${(props) => props.opacity};

  @media screen and ${(props) => props.theme.media.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;

    min-width: 768px;
    padding: 23px 32px;
  }

  @media screen and ${(props) => props.theme.media.desktop} {
    min-width: 1360px;
    padding: 32px 28px;
  }

  z-index: 1;
`;

export const NavStyled = styled.nav`
  @media screen and (max-width: 768px) {
    margin-top: 16px;
  }
`;

export const NavItemStyled = styled.li`
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
  position: relative;
  padding: 10px 0;
  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 0%;
    height: 2px;
    background-color: ${(props) => props.theme.colors.accent};
    transition: width 0.3s ease-in-out;
  }
  :hover {
    width: 100%;
    cursor: pointer;
    ::after {
      width: 100%;
    }
  }
`;
