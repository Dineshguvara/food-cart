import React from "react";
import { Box } from "@chakra-ui/react";
export const BoxDesign = ({ top, left, width, height, bg, right, bottom }) => {
  return (
    <Box
      position="absolute"
      top={top}
      left={left}
      width={width}
      height={height}
      borderRadius="100px"
      bg={bg}
      p="4"
      boxShadow="md"
      opacity="1"
      transform="translateY(20px)"
      transition="opacity 0.3s, transform 0.3s"
      className="overlet"
    />
  );
};

export default BoxDesign;
