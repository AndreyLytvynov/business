import React, { useState, useEffect } from "react";

import {
  HeaderStyled,
  NavStyled,
  NavItemStyled,
  LinkStyled,
} from "./Header.styled";
import Logo from "../Logo/Logo";
import { Box } from "../../theme/Box";

const Header = () => {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [viewportSize, setViewportSize] = useState(window.innerWidth);
  const device = viewportSize > 768 ? 120 : 70;

  useEffect(() => {
    function handleResize() {
      setViewportSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setCurrentScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      setIsScrolling(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(true);
      }, 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const offset = element.offsetTop;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  return (
    <>
      {currentScroll >= device && (
        <HeaderStyled opacity={isScrolling ? 1 : 0.5}>
          <Logo />
          <NavStyled>
            <Box as="ul" display="flex">
              <NavItemStyled>
                <LinkStyled href="#" onClick={(e) => scrollTo(e, "hero")}>
                  Home
                </LinkStyled>
              </NavItemStyled>
              <NavItemStyled>
                <LinkStyled href="#" onClick={(e) => scrollTo(e, "we-offer")}>
                  About
                </LinkStyled>
              </NavItemStyled>
              <NavItemStyled>
                <LinkStyled href="#" onClick={(e) => scrollTo(e, "cases")}>
                  Cases
                </LinkStyled>
              </NavItemStyled>
              <NavItemStyled>
                <LinkStyled href="#" onClick={(e) => scrollTo(e, "blog")}>
                  Blog
                </LinkStyled>
              </NavItemStyled>
              <NavItemStyled>
                <LinkStyled href="#" onClick={(e) => scrollTo(e, "contact")}>
                  Contact
                </LinkStyled>
              </NavItemStyled>
            </Box>
          </NavStyled>
        </HeaderStyled>
      )}
    </>
  );
};

export default Header;
