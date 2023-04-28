import React from "react";
import { CasesStyled, TextStyled, SectionTitleStyled } from "./Cases.styled";
import Gallery from "../Galery/Gallery";
import { imagesCases } from "../../helpers/images";

const Cases = () => {
  return (
    <CasesStyled id="cases">
      <TextStyled>This is what we do</TextStyled>
      <SectionTitleStyled>Business Cases</SectionTitleStyled>
      <TextStyled>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </TextStyled>
      <Gallery images={imagesCases} slider={true} />
    </CasesStyled>
  );
};

export default Cases;
