import Button from "../Button/Button";
import { Box } from "../../theme/Box";

import { HeroStyled, MainTitleStyled, TextHeroStyled } from "./Hero.styled";

const Hero = () => {
  return (
    <HeroStyled id="hero">
      <MainTitleStyled>The Sky Is The Limit</MainTitleStyled>
      <TextHeroStyled>
        We provide world class financial assistance
      </TextHeroStyled>
      <Button variant={"hero"}>
        <Box mr={"8px"}>
          <img src={"/images/arrow-btn.svg"} alt="arrow button" />
        </Box>
        <span>Read More</span>
      </Button>
    </HeroStyled>
  );
};

export default Hero;
