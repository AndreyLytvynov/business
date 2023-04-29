import styled, { css } from "styled-components";

export const CommonButtonStyle = styled.button`
  border-radius: 5px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  color: ${(props) => props.theme.colors.textWhite};
  border: 1px solid ${(props) => props.theme.colors.textWhite};
  background-color: inherit;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    cursor: pointer;
  }
`;

const HeroButtonStyles = css`
  background-color: ${(props) => props.theme.colors.accent};
  border: none;
  margin: 24px auto;
  :hover {
    background-color: ${(props) => props.theme.colors.secondaryAccent};
  }
`;

const BlogButtonStyles = css`
  :hover {
    color: ${(props) => props.theme.colors.blue};
    border: 1px solid ${(props) => props.theme.colors.blue};
    background-color: ${(props) => props.theme.colors.backgroundWhite};
  }
`;

const WeOfferButtonStyles = css`
  :hover {
    color: ${(props) => props.theme.colors.accent};
    border: 1px solid ${(props) => props.theme.colors.accent};
    background-color: ${(props) => props.theme.colors.backgroundWhite};
  }
`;

const ContactButtonStyles = css`
  background-color: ${(props) => props.theme.colors.accent};
  border: none;
  margin-top: 10px;
  :hover {
    background-color: ${(props) => props.theme.colors.secondaryAccent};
  }
`;

export const ButtonStyled = styled(CommonButtonStyle)`
  ${(props) =>
    props.variant === "hero" &&
    css`
      ${HeroButtonStyles};
    `}
  ${(props) =>
    props.variant === "weOffer" &&
    css`
      ${WeOfferButtonStyles};
    `}
  ${(props) =>
    props.variant === "blog" &&
    css`
      ${BlogButtonStyles};
    `}
  ${(props) =>
    props.variant === "contact" &&
    css`
      ${ContactButtonStyles};
    `}
`;
