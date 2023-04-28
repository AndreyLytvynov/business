import React from "react";
import {
  BlogStyled,
  WrapperStyled,
  ImageWrapperStyled,
  SectionTitleStyled,
  TextStyled,
} from "./Blog.styled";
import Button from "../Button/Button";
import blog from "../../images/home/blog.jpg";
import blog2x from "../../images/home/blog@2x.jpg";
import blogWebp from "../../images/home/blog.webp";
import blogWebp2x from "../../images/home/blog@2x.webp";

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
            srcSet={`${blogWebp} 1x, ${blogWebp2x} 2x`}
            type="image/webp"
          />
          <source srcSet={`${blog} 1x, ${blog2x} 2x`} type="image/jpeg" />
          <img src={blog} alt="people" width="400" />
        </picture>
      </ImageWrapperStyled>
    </BlogStyled>
  );
};

export default Blog;
