import React from "react";
import { Box, Center } from "@chakra-ui/react";
import "./index.css";

const Header = () => {
  return (
    <Center h={200} my='10' borderTop={1}>
      <div className="sign">
        <span className="fast-flicker">A</span>k<span className="flicker">A</span>I
      </div>
    </Center>
  );
};
export default Header;
