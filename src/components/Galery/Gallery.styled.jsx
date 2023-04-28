import styled from "styled-components";

export const GalleryWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and ${(props) => props.theme.media.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: ${(props) =>
      props.images.length === 3 ? "1fr" : "repeat(2, 1fr)"};
    gap: 20px;
  }
`;
export const BackdropImage = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ImageBoxStyled = styled.div`
  position: relative;
  /* height: 176px; */

  @media screen and ${(props) => props.theme.media.tablet} {
    /* height: 148px; */
  }
  @media screen and ${(props) => props.theme.media.desktop} {
    /* height: 282px; */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :hover {
    transform: ;
    transform: ${(props) => (!props.slider ? "scale(1.03)" : "")};
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    & > div {
      cursor: pointer;
      opacity: 1;
    }
  }
`;

export const PrevButtonStyled = styled.button`
  position: absolute;
  height: 100%;
  width: 160px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;

  @media screen and ${(props) => props.theme.media.tablet} {
    left: -80px;
    width: 380px;
  }
  @media screen and ${(props) => props.theme.media.desktop} {
    left: -100px;
    width: 550px;
  }

  :hover {
    img {
      display: block;
      opacity: 1;
    }
  }

  img {
    width: 60px;
    opacity: 0;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const NextButtonStyled = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 160px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;

  @media screen and ${(props) => props.theme.media.tablet} {
    right: -80px;
    width: 380px;
  }
  @media screen and ${(props) => props.theme.media.desktop} {
    right: -100px;
    width: 550px;
  }
  :hover {
    img {
      opacity: 1;
    }
  }

  img {
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    width: 60px;
  }
`;

export const NameStyled = styled.h3`
  font-size: 20px;
  line-height: 1.35;
  @media screen and ${(props) => props.theme.media.tablet} {
    font-size: 32px;
    line-height: 1;
  }
`;
export const TextStyled = styled.p`
  margin-top: 8px;
  font-size: 16px;
  line-height: 1.37;
  @media screen and ${(props) => props.theme.media.tablet} {
    font-size: 18px;
    line-height: 1.38;
  }
`;
export const CloseBtnStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  background: none;
  border: none;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  opacity: 0.5;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;
