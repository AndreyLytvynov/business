import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../helpers/validationForm";

import Button from "../Button/Button";
import { Box } from "../../theme/Box";

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
  };

  return (
    <ContactsStyled id="contact">
      <ImageWrapperStyled>
        <picture>
          <source
            srcSet="/images/home/contact.webp 1x, /images/home/contact@2x.webp 2x"
            type="image/webp"
          />
          <source
            srcSet="/images/home/contact.jpg 1x, /images/home/contact@2x.jpg 2x"
            type="image/jpeg"
          />
          <img
            src="/images/home/contact.jpg"
            alt="man drink coffee"
            width="400"
            loading="lazy"
          />
        </picture>
      </ImageWrapperStyled>
      <WrapperStyled>
        <FormStyled name="contact" method="POST" data-netlify="true">
          <SectionTitleStyled>Request Callback</SectionTitleStyled>
          <input type="hidden" name="form-name" value="contact" />
          <Box as={"label"} position={"relative"} aria-label="name">
            <InputStyled
              name="name"
              type="text"
              placeholder="Enter your name"
              {...register("text")}
              onBlur={onFocusChange}
            />
            <ErrorMessage>
              {errors?.text && (
                <img src={"/images/form/worning.svg"} alt="worning" />
              )}
              {errors?.text?.message}
            </ErrorMessage>
          </Box>
          <Box as={"label"} position={"relative"} aria-label="email">
            <InputStyled
              type="email"
              name="email"
              placeholder="Enter email*"
              {...register("email")}
              onBlur={onFocusChange}
            />
            <ErrorMessage>
              {errors?.email && (
                <img src={"/images/form/worning.svg"} alt="worning" />
              )}
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
