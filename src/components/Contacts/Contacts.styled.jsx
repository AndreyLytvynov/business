import styled from "styled-components";

export const ContactsStyled = styled.section`
  @media screen and ${(props) => props.theme.media.tablet} {
    display: flex;
  }
`;

export const WrapperStyled = styled.div`
  padding: 51px 20px 25px;
  background: #f4f4f4;
  color: #333333;
  text-align: start;
  @media screen and ${(props) => props.theme.media.tablet} {
    width: 50%;
    padding: 30px;
  }
  @media screen and ${(props) => props.theme.media.desktop} {
    width: 50%;
    padding: 56px 20px 77px;
  }
`;

export const ImageWrapperStyled = styled.div`
  height: 220px;
  @media screen and ${(props) => props.theme.media.tablet} {
    width: 50%;
    height: 354px;
  }
  @media screen and ${(props) => props.theme.media.desktop} {
    height: 454px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const SectionTitleStyled = styled.h2`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 1.38;
  font-weight: 400;
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

export const FormStyled = styled.form``;

export const InputStyled = styled.input`
  font-size: 18px;
  line-height: 1.38;
  width: 100%;
  background: ${(props) => props.theme.colors.backgroundWhite};
  border-radius: 5px;
  border: none;
  padding: 16px 8px;
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
