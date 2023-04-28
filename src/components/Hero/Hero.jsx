import React from "react";
import { HeroStyled, MainTitleStyled, TextHeroStyled } from "./Hero.styled";
import Button from "../Button/Button";
import arrow from "../../images/arrow-btn.svg";
import { Box } from "../../theme/Box";

const Hero = () => {
  return (
    <HeroStyled id="hero">
      <MainTitleStyled>The Sky Is The Limit</MainTitleStyled>
      <TextHeroStyled>
        We provide world class financial assistance
      </TextHeroStyled>
      <Button variant={"hero"}>
        <Box mr={"8px"}>
          <img src={arrow} alt="arrow button" />
        </Box>
        <span>Read More</span>
      </Button>
    </HeroStyled>
  );
};

export default Hero;
