import * as yup from "yup";
export const schema = yup.object().shape({
  text: yup
    .string()
    .trim()
    .min(3, "Minimal text length is 3 symbols")
    .max(32, "Max text length is 32 symbols")
    .required("This is a required field"),
  email: yup
    .string()
    .trim()
    .email("Invalid email format")
    .min(6, "Minimal email length is 6 symbols")
    .max(32, "Max email length is 32 symbols")
    .required("This is a required field"),
});
