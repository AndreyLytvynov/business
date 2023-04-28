import styled from "styled-components";
import {
  color,
  space,
  position,
  layout,
  flexbox,
  grid,
  background,
  border,
  shadow,
  typography,
} from "styled-system";

export const Box = styled("div")(
  {
    boxSizing: "border-box",
  },
  color,
  space,
  layout,
  flexbox,
  background,
  border,
  shadow,
  position,
  typography,
  grid
);
