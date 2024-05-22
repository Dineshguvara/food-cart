import React from "react";
import { Box, Text, Card, HStack } from "@chakra-ui/react";
// import "./style.css";
import "../../../pages/newItem/appetizer/style.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../../features/counter/counterSlice";
import "./style.css";
import { FaPlus, FaMinus } from "react-icons/fa";
const HoverCard = ({
  onClick_inc,
  onClick_dec,
  Count,
  title,
  cardId,

  children,
  width,
  height,
}) => {
  const count = useSelector((state) => state.counter[cardId] || 0);
  const dispatch = useDispatch();

  const style = {
    width: width,
    height: height,
  };

  return (
    <Card
      style={style}
      position="relative"
      bg="white"
      borderRadius="5px"
      overflow="hidden"
      boxShadow="0 10px 20px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
      _hover={{
        "& .hoverOverlay": {
          opacity: 1,
        },

        "& .image": {
          zIndex: -1,
        },
        "& .heading": {
          color: "white !important",
          zIndex: 1,
        },
        "& .sub_head": {
          color: "#cccccc !important",
          zIndex: 1,
        },

        "& .quantity": {
          color: "#b3b3b3 !important",
          zIndex: 1,
        },
        "& .price": {
          color: "white !important",
          zIndex: 1,
        },
      }}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="#404040"
        opacity="0"
        transition="opacity 0.1s"
        className="hoverOverlay"
      >
        <Box className="stack">
          <Box className="stack1">
            <FaMinus
              className="decrease"
              onClick={() => dispatch(decrement({ cardId }))}
            />
            <Text className="count">{count}</Text>

            <FaPlus
              className="increase"
              onClick={() => dispatch(increment({ cardId }))}
            />
          </Box>
        </Box>
      </Box>
      <Box position="relatiive">{children}</Box>
    </Card>
  );
};

export default HoverCard;
