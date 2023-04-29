import styled, { css } from "styled-components";

export const CommonButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;

  color: ${(props) => props.theme.colors.textWhite};
  background-color: inherit;
  font-size: 18px;
  border: 1px solid ${(props) => props.theme.colors.textWhite};
  border-radius: 5px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    cursor: pointer;
  }
`;

const HeroButtonStyles = css`
  margin: 24px auto;

  background-color: ${(props) => props.theme.colors.accent};
  border: none;

  :hover {
    background-color: ${(props) => props.theme.colors.secondaryAccent};
  }
`;

const BlogButtonStyles = css`
  :hover {
    color: ${(props) => props.theme.colors.blue};
    background-color: ${(props) => props.theme.colors.backgroundWhite};
    border: 1px solid ${(props) => props.theme.colors.blue};
  }
`;

const WeOfferButtonStyles = css`
  :hover {
    color: ${(props) => props.theme.colors.accent};
    background-color: ${(props) => props.theme.colors.backgroundWhite};
    border: 1px solid ${(props) => props.theme.colors.accent};
  }
`;

const ContactButtonStyles = css`
  margin-top: 10px;

  background-color: ${(props) => props.theme.colors.accent};
  border: none;

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
