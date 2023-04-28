import styled from "styled-components";

export const WeOfferStyled = styled.section`
  @media screen and ${(props) => props.theme.media.tablet} {
    display: flex;
  }
`;

export const WrapperStyled = styled.div`
  padding: 79px 20px;
  background: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.textWhite};
  text-align: start;
  @media screen and ${(props) => props.theme.media.tablet} {
    width: 50%;
    padding: 62px 32px;
  }
  @media screen and ${(props) => props.theme.media.desktop} {
    width: 50%;
    padding: 80px 20px;
  }
`;

export const ImageWrapperStyled = styled.div`
  height: 220px;
  @media screen and ${(props) => props.theme.media.tablet} {
    width: 50%;
    height: 589px;
  }
  @media screen and ${(props) => props.theme.media.desktop} {
    height: 460px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const SectionTitleStyled = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 1.38;
  @media screen and ${(props) => props.theme.media.tablet} {
    font-size: 40px;
    line-height: 1.2;
  }
`;

export const TextStyled = styled.p`
  font-size: 16px;
  line-height: 1.37;
  margin-bottom: 16px;

  @media screen and ${(props) => props.theme.media.tablet} {
    font-size: 18px;
    line-height: 1.38;
  }
`;
