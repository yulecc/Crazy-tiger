import React from "react";
import { Container, Center, Box, Image, Text } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/autoplay";
import "./index.css";

const ScrollText = ({text}: {text: string}) => {
  return (
    <>
      <Box fontFamily={`'Acme', sans-serif;`}>
        <div className="marquee_wrapper__15n4n">
          <span
            className="spacer_spacer__3DnTk spacer_inline__3cce0 spacer_padding__2Yv3s"
            style={{ marginTop: "0.6944vw" }}
          ></span>
          <div className="marquee_marquee__1PsyQ">
            <h4 className="marquee_text__2uzbK" data-text={text}>
              {text}
            </h4>
            <h4 className="marquee_text__2uzbK" data-text={text}>
            {text}
            </h4>
          </div>
          <span
            className="spacer_spacer__3DnTk spacer_inline__3cce0 spacer_padding__2Yv3s"
            style={{ marginTop: "0.868vw" }}
          ></span>
        </div>
      </Box>
    </>
  );
};

export default ScrollText;
