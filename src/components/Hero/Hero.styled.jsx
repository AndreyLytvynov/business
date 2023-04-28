import styled from "styled-components";
import bgImage from "../../images/home/showcase.jpg";
import bgImage2x from "../../images/home/showcase@2x.jpg";
import bgImageWebp from "../../images/home/showcase.webp";
import bgImageWebp2x from "../../images/home/showcase@2x.webp";

export const HeroStyled = styled.section`
  height: 533px;
  padding: 160px 40px;
  background-size: cover;
  background-position: center center;

  @supports (background-image: url(${bgImageWebp})) {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${bgImageWebp});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0.5)
        ),
        url(${bgImageWebp2x});
    }
  }

  /* background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(.jpg), url(${bgImage});
  background-size: cover;
  background-position: center center;

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${bgImage2x});
  } */

  @media screen and ${(props) => props.theme.media.tablet} {
    height: 1024px;
    padding-top: 378px;
  }

  @media screen and ${(props) => props.theme.media.desktop} {
    height: 768px;
    padding-top: 272px;
  }
`;

export const MainTitleStyled = styled.h1`
  color: ${(props) => props.theme.colors.textWhite};
  font-size: 40px;
  line-height: 1.35;
  text-align: center;
  margin-bottom: 16px;

  @media screen and ${(props) => props.theme.media.tablet} {
    font-size: 55px;
    line-height: 1.36;
  }
`;

export const TextHeroStyled = styled.h1`
  color: ${(props) => props.theme.colors.textWhite};
  text-align: center;
  font-size: 26px;
  line-height: 1.23;
  @media screen and ${(props) => props.theme.media.tablet} {
    font-size: 40px;
    line-height: 1.2;
  }
`;
