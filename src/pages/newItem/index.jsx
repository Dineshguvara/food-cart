import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  TabIndicator,
  Tab,
  TabPanel,
  Grid,
  GridItem,
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
  Heading,
} from "@chakra-ui/react";
import "./style.css";
import HoverCard from "../../components/HoverCard/newItems_HC/index";
import Appetizer from "./appetizer/index";

import image from "../../";

const cardIds = [
  {
    img: `${process.env.PUBLIC_URL}/Img/food.jpg`,
    head: "Hummus",
    subHead: "spinach, tomato, pizza bread",
    price: "$ 9.85 ",
    quantity: "200g",
  },
  {
    img: `${process.env.PUBLIC_URL}/Img/fd1.jpg`,
    head: "Chicken liver plate",
    subHead: "sesvan, toast",
    price: "$ 9.89 ",
    quantity: "500g",
  },

  {
    img: `${process.env.PUBLIC_URL}/Img/fd2.png`,
    head: "Beef tatar plate",
    subHead: "garlic, toast",
    price: "$ 7.89 ",
    quantity: "250g",
  },
  {
    img: `${process.env.PUBLIC_URL}/Img/fd3.jpg`,
    head: " salaman tataR",
    subHead: "avacoda, toast",
    price: "$ 6.27 ",
    quantity: "250g",
  },
  {
    img: `${process.env.PUBLIC_URL}/Img/fd4.jpg`,
    head: " macaronie with mazorilla ",
    subHead: "guava, baked tomato",
    price: "$ 7.96 ",
    quantity: "100g",
  },
  {
    img: `${process.env.PUBLIC_URL}/Img/fd5.png`,
    head: "bruzettara with smripms  ",
    subHead: "kiwi, tomato",
    price: "$ 8.99 ",
    quantity: "300g",
  },
  {
    img: `${process.env.PUBLIC_URL}/Img/fd6.png`,
    head: "salamo with sauce ",
    subHead: "graped, onions",
    price: "$ 9.76 ",
    quantity: "460g",
  },
];

function NewItems() {
  return (
    <Tabs position="relative" variant="styled">
      <TabList className="tab_list">
        <Tab className="tab_menu">Appetizer</Tab>
        <Tab className="tab_menu">Salad</Tab>
        <Tab className="tab_menu">Soup</Tab>
        <Tab className="tab_menu">Pasta</Tab>
        <Tab className="tab_menu">Meat</Tab>
        <Tab className="tab_menu">Fish Dishes</Tab>
        <Tab className="tab_menu">Alchol Dricks</Tab>
        <Tab className="tab_menu">Shrimps</Tab>
        <Tab className="tab_menu">Marshmallow</Tab>
      </TabList>
      <TabIndicator className="btm_indicator" />
      <TabPanels>
        <TabPanel>
          <Grid
            templateRows="repeat(3, 2fr)"
            templateColumns="repeat(3, 2fr)"
            gap={10}
          >
            {cardIds.map((item, index) => (
              // <CardComponent key={id} cardId={id} />

              <GridItem className="gr_head">
                <HoverCard
                  key={index}
                  cardId={index}
                  width="100%"
                  height="100%"
                >
                  <Appetizer
                    image={item.img}
                    heading={item.head}
                    subHeading={item.subHead}
                    quantity={item.quantity}
                    price={item.price}
                  />
                </HoverCard>
              </GridItem>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel>
          <Text>Salad</Text>
        </TabPanel>
        <TabPanel>
          <Text>Soup</Text>
        </TabPanel>
        <TabPanel>
          <Text>Pasta</Text>
        </TabPanel>
        <TabPanel>
          <Text>Meat</Text>
        </TabPanel>
        <TabPanel>
          <Text>Fish Dishes</Text>
        </TabPanel>
        <TabPanel>
          <Text>Alchol Dricks</Text>
        </TabPanel>
        <TabPanel>
          <Text>Shrimps</Text>
        </TabPanel>
        <TabPanel>
          <Text>Marshmallow</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default NewItems;
