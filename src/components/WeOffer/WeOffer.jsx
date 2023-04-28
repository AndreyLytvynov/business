import React from "react";
import {
  WeOfferStyled,
  WrapperStyled,
  ImageWrapperStyled,
  SectionTitleStyled,
  TextStyled,
} from "./WeOffer.styled";
import Button from "../Button/Button";
import people from "../../images/home/people.jpg";
import people2x from "../../images/home/people@2x.jpg";
import peopleWebp from "../../images/home/people.webp";
import peopleWebp2x from "../../images/home/people@2x.webp";

const WeOffer = () => {
  return (
    <WeOfferStyled id="we-offer">
      <ImageWrapperStyled>
        <picture>
          <source
            srcSet={`${peopleWebp} 1x, ${peopleWebp2x} 2x`}
            type="image/webp"
          />
          <source srcSet={`${people} 1x, ${people2x} 2x`} type="image/jpeg" />
          <img src={people} alt="people" width="400" />
        </picture>
      </ImageWrapperStyled>
      <WrapperStyled>
        <TextStyled>What you are looking for</TextStyled>
        <SectionTitleStyled>We provide bespoke solutions</SectionTitleStyled>
        <TextStyled mb="20px">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </TextStyled>
        <Button variant={"weOffer"}>Read More</Button>
      </WrapperStyled>
    </WeOfferStyled>
  );
};

export default WeOffer;
