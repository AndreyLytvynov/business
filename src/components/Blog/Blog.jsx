import Button from "../Button/Button";

import {
  BlogStyled,
  WrapperStyled,
  ImageWrapperStyled,
  SectionTitleStyled,
  TextStyled,
} from "./Blog.styled";

const Blog = () => {
  return (
    <BlogStyled id="blog">
      <WrapperStyled>
        <TextStyled>April 16 2020</TextStyled>
        <SectionTitleStyled>Blog Post One</SectionTitleStyled>
        <TextStyled mb="20px">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </TextStyled>
        <Button variant={"blog"}>Read Our Blog</Button>
      </WrapperStyled>
      <ImageWrapperStyled>
        <picture>
          <source
            srcSet="/images/home/blog.webp 1x, images/home/blog@2x.webp 2x"
            type="image/webp"
          />
          <source
            srcSet="/images/home/blog.jpg 1x, /images/home/blog@2x.jpg 2x"
            type="image/jpeg"
          />
          <img src="/images/home/blog.jpg" alt="working table" width="400" />
        </picture>
      </ImageWrapperStyled>
    </BlogStyled>
  );
};

export default Blog;
