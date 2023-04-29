import React, { useState } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  GalleryWrapperStyled,
  ImageBoxStyled,
  BackdropImage,
  NameStyled,
  TextStyled,
  CloseBtnStyled,
} from "./Gallery.styled";

import {
  customArrowPrev,
  customArrowNext,
} from "../../helpers/customGalleryBtn";

import closeImage from "../../images/gallery/close.png";
import Modal from "../Modal/Modal";
import SocialLinks from "../SocialLinks/SocialLinks";
import { Box } from "../../theme/Box";

const Gallery = ({ images, slider }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleGallery = (i) => {
    setShowGallery(!showGallery);
    setSelectedIndex(i);
  };

  return (
    <>
      <GalleryWrapperStyled images={images}>
        {images &&
          images
            .slice(0, 6)
            .map(({ src, src2x, webp, webp2x, alt, name, text }, i) => (
              <Box key={src}>
                <ImageBoxStyled
                  onClick={() => {
                    toggleGallery(i);
                  }}
                  slider={slider}
                >
                  <picture>
                    <source
                      srcSet={`${webp} 1x, ${webp2x} 2x`}
                      type="image/webp"
                    />
                    <source
                      srcSet={`${src} 1x, ${src2x} 2x`}
                      type="image/jpeg"
                    />
                    <img src={src} alt={alt} />
                  </picture>
                  <BackdropImage>{!slider && <SocialLinks />}</BackdropImage>
                </ImageBoxStyled>
                {!slider && (
                  <Box as={"div"} mt={"15px"}>
                    <NameStyled>{name}</NameStyled>
                    <TextStyled>{text}</TextStyled>
                  </Box>
                )}
              </Box>
            ))}
      </GalleryWrapperStyled>

      {showGallery && slider && (
        <Modal openModal={toggleGallery}>
          <Carousel
            style={{ overflow: "visible" }}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop
            renderArrowPrev={customArrowPrev}
            renderArrowNext={customArrowNext}
            selectedItem={selectedIndex}
          >
            {images.map(({ src, src2x, webp, webp2x, alt }) => (
              <div key={src}>
                <picture>
                  <source
                    srcSet={`${webp} 1x, ${webp2x} 2x`}
                    type="image/webp"
                  />
                  <source srcSet={`${src} 1x, ${src2x} 2x`} type="image/jpeg" />
                  <img src={src} alt={alt} width={400} />
                </picture>
              </div>
            ))}
          </Carousel>
          <CloseBtnStyled onClick={toggleGallery}>
            <img src={closeImage} alt="close modal" width={40} />
          </CloseBtnStyled>
        </Modal>
      )}
    </>
  );
};

export default Gallery;
