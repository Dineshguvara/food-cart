import React from "react";
import {
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  ButtonGroup,
  Stack,
  Divider,
  HStack,
  Heading,
} from "@chakra-ui/react";
import "./style.css";
const Appetizer=({heading, subHeading, price, quantity, image})=> {
  return (
    <>
      <CardBody className="card_body">
        <Box display="flex" justifyContent="center" alignItems="center" p={4}>
          <Image
            boxSize="130px"
            src={image}
            alt="food image"
            objectFit="cover"
            className="image"
          />
        </Box>
        <Heading className="heading">{heading}</Heading>
        <Text className="sub_head">{subHeading} </Text>
        <HStack className="footer">
          <Text className="quantity"> {quantity} </Text>
          <Text className="price"> {price} </Text>
        </HStack>
      </CardBody>
    </>
  );
}

export default Appetizer;
