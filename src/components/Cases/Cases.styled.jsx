import styled from "styled-components";

export const CasesStyled = styled.section`
  padding: 56px 20px 40px;

  text-align: center;

  @media screen and ${(props) => props.theme.media.tablet} {
    padding: 48px 32px 40px;
  }
  @media screen and ${(props) => props.theme.media.desktop} {
    padding: 80px 28px;
  }
`;

export const SectionTitleStyled = styled.h2`
  margin-bottom: 24px;

  font-size: 32px;
  line-height: 1.38;
  font-weight: 400;

  @media screen and ${(props) => props.theme.media.tablet} {
    font-size: 40px;
    line-height: 1.2;
  }
`;

export const TextStyled = styled.p`
  margin-bottom: 16px;

  font-size: 16px;
  line-height: 1.37;

  @media screen and ${(props) => props.theme.media.tablet} {
    font-size: 18px;
    line-height: 1.38;
  }
  :not(:first-child) {
    margin-bottom: 31px;

    @media screen and ${(props) => props.theme.media.tablet} {
      margin-bottom: 30px;
    }
    @media screen and ${(props) => props.theme.media.desktop} {
      margin-bottom: 36px;
    }
  }
`;
