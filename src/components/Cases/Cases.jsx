import { useEffect, useState } from "react";

import Gallery from "../Galery/Gallery";

import { CasesStyled, TextStyled, SectionTitleStyled } from "./Cases.styled";

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
