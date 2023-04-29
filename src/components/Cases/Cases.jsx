import React, { useEffect, useState } from "react";
import { CasesStyled, TextStyled, SectionTitleStyled } from "./Cases.styled";
import Gallery from "../Galery/Gallery";

const Cases = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("manifest.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.imagesCases);
      });
  }, []);

  return (
    <CasesStyled id="cases">
      <TextStyled>This is what we do</TextStyled>
      <SectionTitleStyled>Business Cases</SectionTitleStyled>
      <TextStyled>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </TextStyled>
      <Gallery images={data} slider={true} />
    </CasesStyled>
  );
};

export default Cases;
