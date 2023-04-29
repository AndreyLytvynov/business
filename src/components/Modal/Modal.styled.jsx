import styled from "styled-components";

export const StyledModal = styled.div`
  position: relative;
  max-width: 320px;

  @media screen and ${(props) => props.theme.media.tablet} {
    max-width: 600px;
  }
  @media screen and ${(props) => props.theme.media.desktop} {
    max-width: 900px;
  }
`;

export const StyledOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.7);
  z-index: 20;
  .carousel.carousel-slider {
    overflow: visible;
  }
`;
