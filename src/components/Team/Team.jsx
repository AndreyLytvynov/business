import React, { useEffect, useState } from "react";
import { TeamStyled, TextStyled, SectionTitleStyled } from "./Team.styled";
import Gallery from "../Galery/Gallery";

const Team = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("manifest.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.imagesTeam);
      });
  }, []);
  return (
    <TeamStyled id="team">
      <TextStyled>Who we are</TextStyled>
      <SectionTitleStyled>Our Professional Team</SectionTitleStyled>
      <TextStyled>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </TextStyled>
      <Gallery images={data} slider={false} />
    </TeamStyled>
  );
};

export default Team;
