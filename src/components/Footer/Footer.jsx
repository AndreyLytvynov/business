import { Box } from "../../theme/Box";
import SocialLinks from "../SocialLinks/SocialLinks";

import { CopyrightStyled } from "./Footer.styled";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg={"#333333"}
      display={"flex"}
      flexDirection={"column"}
      alignItems="center"
      justifyContent="space-between"
      p={"20px 0"}
    >
      <SocialLinks isFooter />
      <CopyrightStyled>Copyright © 2021 - FinanceLedger</CopyrightStyled>
    </Box>
  );
};

export default Footer;
