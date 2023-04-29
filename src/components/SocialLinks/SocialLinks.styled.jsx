import styled from "styled-components";

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;

  width: 25px;

  :hover {
    opacity: ${(props) => (props.isFooter ? "" : "0.8")};
  }

  @media screen and ${(props) => props.theme.media.desktop} {
    width: 35px;
  }

  svg path {
    fill: ${(props) => props.theme.colors.textWhite};
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover svg path {
    fill: ${(props) => (props.isFooter ? "#28A745" : "")};
  }

  &:not(:last-child) {
    margin-right: 15px;

    @media screen and ${(props) => props.theme.media.desktop} {
      margin-right: 25px;
    }
  }
`;

export const FaceBookStyled = styled(SocialIcon)``;

export const TwitterStyled = styled(SocialIcon)``;

export const YouTubeStyled = styled(SocialIcon)``;

export const LinkedinStyled = styled(SocialIcon)``;
