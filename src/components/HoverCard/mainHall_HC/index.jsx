import React from "react";
import { Box, Text, Card, VStack, ListItem, List } from "@chakra-ui/react";
import "./style.css";
import HoverListItem from "./MenuListHover";
const HoverCard = ({
  title,
  children,
  width,
  hoverColor,
  bgColor,
  borderLeft,
  hoverBg,
  hoverTop,
  hoverWidth,
  hoverLeft,
  hoverHeight,
  menuHoverTop,
  menuHoverLeft,
  menuHoverWidth,
  height,
  menuItems = [],
}) => {
  const style = {
    width: width,
    height: height,
    hoverColor: hoverColor,
    bgColor: bgColor,
  };
  return (
    <Box
      // position="relative"
      style={style}
      bg="#fafafa"
      borderRadius="15px"
      overflow="hidden"
      boxShadow="0 8px 10px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      // borderLeft="10px solid #b3ffb3 !important"
      borderLeft={borderLeft}
      _hover={{
        "& .hoverOverlay": {
          opacity: 1,
        },
        "& .hoverMenu": {
          opacity: 1,

          zIndex: "2 !important",
          transform: "translateY(0)",
        },
        "& .info_1": {
          color: "#f2f2f2 !important",
        },
        "& .info_2": {
          color: "#f2f2f2 !important",
          fontWeight: "900",
        },
      }}
    >
      <Box
        position="absolute"
        // top="20px"
        // left="23px"
        // width="81%"
        // height="72%"
        // bg="#b3ffb3"
        top={hoverTop}
        left={hoverLeft}
        width={hoverWidth}
        height={hoverHeight}
        bg={hoverBg}
        borderRadius="15px"
        opacity="0"
        transition="opacity 0.1s"
        className="hoverOverlay"
      />

      <VStack className="cont_info">
        <Text className="info_1"> {title} </Text>
        <Text className="info_2"> {children}</Text>
      </VStack>
      {/* Menu List Hover */}
      {/* -------------------------------- */}

      <Box
        position="absolute"
        // top="60px"
        // left="150px"
        // width="100%"
        top={menuHoverTop}
        left={menuHoverLeft}
        width={menuHoverWidth}
        bg="white"
        minWidth="250px"
        maxWidth="280px"
        boxShadow="0 8px 10px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        opacity="0"
        zIndex="-1"
        transform="translateY(20px)"
        transition="opacity 0.3s, transform 0.3s"
        className="hoverMenu"
      >
        <List spacing={2}>
          {menuItems.map((item, index) => (
            <HoverListItem key={index} icon={item.icon} too={item.to}>
              {item.name}
            </HoverListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default HoverCard;
