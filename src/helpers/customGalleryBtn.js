import {
  PrevButtonStyled,
  NextButtonStyled,
} from "../components/Galery/Gallery.styled";

export const customArrowPrev = (onClickHandler, hasPrev, label) => (
  <PrevButtonStyled onClick={onClickHandler} disabled={!hasPrev}>
    <img src={"/images/gallery/prev.png"} alt="Previous" width={60} />
  </PrevButtonStyled>
);

export const customArrowNext = (onClickHandler, hasNext, label) => (
  <NextButtonStyled onClick={onClickHandler} disabled={!hasNext}>
    <img src={"/images/gallery/next.png"} alt="Next" width={60} />
  </NextButtonStyled>
);
