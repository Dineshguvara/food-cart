import React from "react";
import {
  Box,
  Icon,
  Text,
  Card,
  VStack,
  ListItem,
  List,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HoverListItem = ({  too, icon, children, ...rest }) => {

  return (
    <Link to={too}  >
      <ListItem
        // className="list_item"
        // textAlign="center !important"
        _hover={{ bg: "#FF1A75", color: "#ffffff" }}
        p={5}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          // _hover={{
          //   color: "pink",
          //   bg: "white",
          // }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              // _groupHover={{
              //   color: "white",
              // }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </ListItem>
    </Link>
  );
};
export default HoverListItem;
