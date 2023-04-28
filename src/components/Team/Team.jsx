import React from "react";
import { TeamStyled, TextStyled, SectionTitleStyled } from "./Team.styled";
import Gallery from "../Galery/Gallery";
import { imagesTeam } from "../../helpers/images";

const Team = () => {
  return (
    <TeamStyled id="team">
      <TextStyled>Who we are</TextStyled>
      <SectionTitleStyled>Our Professional Team</SectionTitleStyled>
      <TextStyled>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </TextStyled>
      <Gallery images={imagesTeam} slider={false} />
    </TeamStyled>
  );
};

export default Team;
