import { ButtonStyled } from "./Button.styled";

const Button = ({ children, variant, disabled }) => {
  return (
    <ButtonStyled variant={variant} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
