import arrowNext from "../images/gallery/next.png";
import arrowPrev from "../images/gallery/prev.png";

import {
  PrevButtonStyled,
  NextButtonStyled,
} from "../components/Galery/Gallery.styled";

export const customArrowPrev = (onClickHandler, hasPrev, label) => (
  <PrevButtonStyled onClick={onClickHandler} disabled={!hasPrev}>
    <img src={arrowPrev} alt="Previous" width={60} />
  </PrevButtonStyled>
);

export const customArrowNext = (onClickHandler, hasNext, label) => (
  <NextButtonStyled onClick={onClickHandler} disabled={!hasNext}>
    <img src={arrowNext} alt="Next" width={60} />
  </NextButtonStyled>
);
