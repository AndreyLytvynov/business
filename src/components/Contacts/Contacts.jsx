import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../helpers/validationForm";

import Button from "../Button/Button";
import { Box } from "../../theme/Box";

import contact from "../../images/home/contact.jpg";
import contact2x from "../../images/home/contact@2x.jpg";
import contactWebp from "../../images/home/contact.webp";
import contactWebp2x from "../../images/home/contact@2x.webp";
import worning from "../../images/form/worning.svg";

import {
  ContactsStyled,
  WrapperStyled,
  ImageWrapperStyled,
  SectionTitleStyled,
  InputStyled,
  FormStyled,
  ErrorMessage,
} from "./Contacts.styled";

const Contacts = () => {
  const {
    register,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onFocusChange = async (event) => {
    await trigger(event.target.name);
    console.log(isValid);
  };

  return (
    <ContactsStyled id="contact">
      <ImageWrapperStyled>
        <picture>
          <source
            srcSet={`${contactWebp} 1x, ${contactWebp2x} 2x`}
            type="image/webp"
          />
          <source srcSet={`${contact} 1x, ${contact2x} 2x`} type="image/jpeg" />
          <img src={contact} alt="people" width="400" />
        </picture>
      </ImageWrapperStyled>
      <WrapperStyled>
        <FormStyled name="contact" method="POST" data-netlify="true">
          <SectionTitleStyled>Request Callback</SectionTitleStyled>

          <Box as={"label"} position={"relative"}>
            <InputStyled
              name="name"
              type="text"
              placeholder="Enter your name"
              {...register("text")}
              onBlur={onFocusChange}
            />
            <ErrorMessage>
              {errors?.text && <img src={worning} alt="worning" />}
              {errors?.text?.message}
            </ErrorMessage>
          </Box>

          <Box as={"label"} position={"relative"}>
            <InputStyled
              type="email"
              name="email"
              placeholder="Enter email*"
              {...register("email")}
              onBlur={onFocusChange}
            />
            <ErrorMessage>
              {errors?.email && <img src={worning} alt="worning" />}
              {errors?.email?.message}
            </ErrorMessage>
          </Box>

          <Button variant={"contact"} type="submit" disabled={!isValid}>
            Send
          </Button>
        </FormStyled>
      </WrapperStyled>
    </ContactsStyled>
  );
};

export default Contacts;
