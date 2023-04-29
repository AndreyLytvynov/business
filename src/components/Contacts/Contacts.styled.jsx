import styled from "styled-components";

export const ContactsStyled = styled.section`
  @media screen and ${(props) => props.theme.media.tablet} {
    display: flex;
    margin-bottom: 40px;
  }
  @media screen and ${(props) => props.theme.media.desktop} {
    display: flex;
    margin-bottom: 0;
  }
`;

export const WrapperStyled = styled.div`
  padding: 51px 20px 25px;

  background: #f4f4f4;
  color: #333333;
  text-align: start;

  @media screen and ${(props) => props.theme.media.tablet} {
    width: 400px;
    padding: 32px 32px 0 32px;
  }
  @media screen and ${(props) => props.theme.media.desktop} {
    width: 690px;
    padding: 56px 20px 77px;
  }
`;

export const ImageWrapperStyled = styled.div`
  height: 220px;

  @media screen and ${(props) => props.theme.media.tablet} {
    width: 368px;
    height: 354px;
  }
  @media screen and ${(props) => props.theme.media.desktop} {
    height: 454px;
    width: 670px;
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
`;

export const FormStyled = styled.form``;

export const InputStyled = styled.input`
  width: 100%;
  padding: 16px 8px;

  background: ${(props) => props.theme.colors.backgroundWhite};
  font-size: 18px;
  line-height: 1.38;
  border-radius: 5px;
  border: none;
  ::placeholder {
    color: #808080;
    font-size: 16px;
    line-height: 1.43px;
    @media screen and ${(props) => props.theme.media.tablet} {
      font-size: 18px;
      line-height: 2;
    }
  }

  :not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  position: absolute;
  top: 42px;
`;
