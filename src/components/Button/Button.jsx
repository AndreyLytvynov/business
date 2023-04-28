import React from "react";
import { ButtonStyled } from "./Button.styled";

const Button = ({ children, variant }) => {
  return <ButtonStyled variant={variant}>{children}</ButtonStyled>;
};

export default Button;
