import Button from "../Button/Button";

import {
  WeOfferStyled,
  WrapperStyled,
  ImageWrapperStyled,
  SectionTitleStyled,
  TextStyled,
} from "./WeOffer.styled";

const WeOffer = () => {
  return (
    <WeOfferStyled id="we-offer">
      <ImageWrapperStyled>
        <picture>
          <source
            srcSet="/images/home/people.webp 1x, /images/home/people@2x.webp 2x"
            type="image/webp"
          />
          <source
            srcSet="/images/home/people.jpg 1x, people2x 2x"
            type="image/jpeg"
          />
          <img
            src="/images/home/people.jpg"
            alt="people"
            width="400"
            loading="lazy"
          />
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
