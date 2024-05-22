import React from "react";
import {
  Grid,
  GridItem,
  Box,
  Card,
  CardBody,
  Text,
  VStack,
} from "@chakra-ui/react";
import "./style.css";

import HoverCard from "../../components/HoverCard/mainHall_HC/index";
import BoxDesign from "./BoxDesign";
import { FiLock, FiPlusCircle, FiCalendar } from "react-icons/fi";

const boxDesign = [
  { top: "5%", bg: "#d6e4ff" },
  { top: "23%", bg: "#3366ff" },
  { top: "43%", bg: "#d6e4ff" },
  { top: "63%", bg: "#3366ff" },
  { top: "80%", bg: "#d6e4ff" },
];

function MainHall() {
  return (
    <Box>
      <Grid
        h="1200px"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={8}
      >
        {/* Grid - 1 */}
        {/* ----------------------- */}
        <GridItem className="gr_head">
          <Card className="gr_card">
            <BoxDesign
              top="-12%"
              left="20%"
              width="22%"
              height="97%"
              bg="#d6e4ff"
            />
            <BoxDesign
              top="-12%"
              left="60%"
              width="22%"
              height="97%"
              bg="#d6e4ff"
            />

            <CardBody position="relative">
              <HoverCard
                title="01"
                width="180px"
                height="100px"
                borderLeft="10px solid #b3ffb3 !important"
                hoverTop="20px"
                hoverWidth="81%"
                hoverLeft="23px"
                hoverHeight="72%"
                hoverBg="#b3ffb3"
                menuHoverTop="60px"
                menuHoverLeft="150px"
                menuHoverWidth="100%"
                menuItems={[
                  {
                    name: "Occupied",
                    to: "/",
                    icon: FiLock,
                  },
                  {
                    name: "New Item",
                    to: "/new_item",
                    icon: FiPlusCircle,
                  },
                  {
                    name: "Reserved",
                    to: "/",
                    icon: FiCalendar,
                  },
                ]}
              >
                vacant
              </HoverCard>
            </CardBody>
          </Card>
        </GridItem>
        {/* Grid - 2 */}
        {/* ----------------------- */}
        <GridItem colSpan={3} />
        {/* Grid - 3 */}
        {/* ----------------------- */}
        <GridItem className="gr_head">
          <Card className="gr_card">
            <BoxDesign
              top="-12%"
              left="20%"
              width="22%"
              height="97%"
              bg="#d6e4ff"
            />
            <BoxDesign
              top="-12%"
              left="60%"
              width="22%"
              height="97%"
              bg="#d6e4ff"
            />

            <CardBody position="relative">
              <HoverCard
                title="02"
                width="180px"
                height="100px"
                borderLeft="10px solid #b3ffb3 !important"
                hoverTop="20px"
                hoverWidth="81%"
                hoverLeft="23px"
                hoverHeight="72%"
                hoverBg="#b3ffb3"
                menuHoverTop="60px"
                menuHoverLeft="150px"
                menuHoverWidth="100%"
                menuItems={[
                  {
                    name: "Occupied",
                    to: "/",
                    icon: FiLock,
                  },
                  {
                    name: "New Item",
                    to: "/new_item",
                    icon: FiPlusCircle,
                  },
                  {
                    name: "Reserved",
                    to: "/",
                    icon: FiCalendar,
                  },
                ]}
              >
                vacant
              </HoverCard>
            </CardBody>
          </Card>
        </GridItem>
        {/* Grid - 4 */}
        {/* ----------------------- */}
        <GridItem className="gr_head">
          <Card className="gr_card">
            <BoxDesign
              top="20%"
              left="1%"
              width="100%"
              height="30%"
              bg="#3366ff"
            />

            <CardBody position="relative">
              <HoverCard
                title="05"
                width="100px"
                height="100px"
                borderLeft="10px solid #3366ff !important"
                hoverTop="20px"
                hoverWidth="73%"
                hoverLeft="23px"
                hoverHeight="79%"
                hoverBg="#3366ff"
                menuHoverTop="100px"
                menuHoverLeft="100px"
                menuItems={[
                  {
                    name: "Occupied",
                    to: "/",
                    icon: FiLock,
                  },
                  {
                    name: "New Item",
                    to: "/new_item",
                    icon: FiPlusCircle,
                  },
                  {
                    name: "Reserved",
                    to: "/",
                    icon: FiCalendar,
                  },
                ]}
              >
                Occupied
              </HoverCard>
            </CardBody>
          </Card>
        </GridItem>
        {/* Grid - 5 */}
        {/* ----------------------- */}
        <GridItem rowSpan={3} colSpan={2} className="gr_head">
          <Card className="gr_card">
            {boxDesign.map((item, index) => (
              <BoxDesign
                key={index}
                top={item.top}
                left="-9px"
                width="20%"
                height="08%"
                bg={item.bg}
              />
            ))}

            <CardBody position="relative">
              <HoverCard
                title="Bar"
                width="200px"
                height="600px"
                borderLeft="10px solid #b3ffb3 !important"
                hoverTop="20px"
                hoverWidth="82%"
                hoverLeft="23px"
                hoverHeight="94%"
                hoverBg="#b3ffb3"
                menuHoverTop="60px"
                menuHoverLeft="150px"
                menuHoverWidth="100%"
                menuItems={[
                  {
                    name: "Occupied",
                    to: "/",
                    icon: FiLock,
                  },
                  {
                    name: "New Item",
                    to: "/new_item",
                    icon: FiPlusCircle,
                  },
                  {
                    name: "Reserved",
                    to: "/",
                    icon: FiCalendar,
                  },
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        {/* Grid - 6 */}
        {/* ----------------------- */}
        <GridItem className="gr_head">
          <Card className="gr_card">
            <BoxDesign
              top="-12%"
              left="20%"
              width="22%"
              height="97%"
              bg="#d6e4ff"
            />
            <BoxDesign
              top="-12%"
              left="60%"
              width="22%"
              height="97%"
              bg="#d6e4ff"
            />

            <CardBody position="relative">
              <HoverCard
                title="03"
                width="180px"
                height="100px"
                borderLeft="10px solid #b3ffb3 !important"
                hoverTop="20px"
                hoverWidth="81%"
                hoverLeft="23px"
                hoverHeight="72%"
                hoverBg="#b3ffb3"
                menuHoverTop="60px"
                menuHoverLeft="150px"
                menuHoverWidth="100%"
                menuItems={[
                  {
                    name: "Occupied",
                    to: "/",
                    icon: FiLock,
                  },
                  {
                    name: "New Item",
                    to: "/new_item",
                    icon: FiPlusCircle,
                  },
                  {
                    name: "Reserved",
                    to: "/",
                    icon: FiCalendar,
                  },
                ]}
              >
                vacant
              </HoverCard>
            </CardBody>
          </Card>
        </GridItem>
        {/* Grid - 7*/}
        {/* ----------------------- */}
        <GridItem className="gr_head">
          <Card className="gr_card">
            <BoxDesign
              top="20%"
              left="1%"
              width="100%"
              height="30%"
              bg="#ffff1a"
            />

            <CardBody position="relative">
              <HoverCard
                title="06"
                width="100px"
                height="100px"
                borderLeft="10px solid #ffff1a !important"
                hoverTop="20px"
                hoverWidth="73%"
                hoverLeft="23px"
                hoverHeight="79%"
                hoverBg="#ffff1a"
                menuHoverTop="100px"
                menuHoverLeft="100px"
                menuItems={[
                  {
                    name: "Occupied",
                    to: "/",
                    icon: FiLock,
                  },
                  {
                    name: "New Item",
                    to: "/new_item",
                    icon: FiPlusCircle,
                  },
                  {
                    name: "Reserved",
                    to: "/",
                    icon: FiCalendar,
                  },
                ]}
              >
                Reserved
              </HoverCard>
            </CardBody>
          </Card>
        </GridItem>
        {/* Grid - 8 */}
        {/* ----------------------- */}
        <GridItem className="gr_head">
          <Card className="gr_card">
            <BoxDesign
              top="-12%"
              left="20%"
              width="22%"
              height="97%"
              bg="#ffff1a"
            />
            <BoxDesign
              top="-12%"
              left="60%"
              width="22%"
              height="97%"
              bg="#d6e4ff"
            />

            <CardBody position="relative">
              <HoverCard
                title="04"
                width="180px"
                height="100px"
                borderLeft="10px solid #ffff1a !important"
                hoverTop="20px"
                hoverWidth="81%"
                hoverLeft="23px"
                hoverHeight="72%"
                hoverBg="#ffff1a"
                menuHoverTop="60px"
                menuHoverLeft="150px"
                menuHoverWidth="100%"
                menuItems={[
                  {
                    name: "Occupied",
                    to: "/",
                    icon: FiLock,
                  },
                  {
                    name: "New Item",
                    to: "/new_item",
                    icon: FiPlusCircle,
                  },
                  {
                    name: "Reserved",
                    to: "/",
                    icon: FiCalendar,
                  },
                ]}
              >
                Reserved
              </HoverCard>
            </CardBody>
          </Card>
        </GridItem>
        {/* Grid - 9 */}
        {/* ----------------------- */}
        <GridItem className="gr_head">
          <Card className="gr_card">
            <BoxDesign
              top="20%"
              left="1%"
              width="100%"
              height="30%"
              bg="#d6e4ff"
            />

            <CardBody position="relative">
              <HoverCard
                title="07"
                width="100px"
                height="100px"
                borderLeft="10px solid #b3ffb3 !important"
                hoverTop="20px"
                hoverWidth="73%"
                hoverLeft="23px"
                hoverHeight="79%"
                hoverBg="#ffff1a"
                menuHoverTop="100px"
                menuHoverLeft="100px"
                menuItems={[
                  {
                    name: "Occupied",
                    to: "/",
                    icon: FiLock,
                  },
                  {
                    name: "New Item",
                    to: "/new_item",
                    icon: FiPlusCircle,
                  },
                  {
                    name: "Reserved",
                    to: "/",
                    icon: FiCalendar,
                  },
                ]}
              >
                Vacant
              </HoverCard>
            </CardBody>
          </Card>
        </GridItem>
        {/* Grid - 10 */}
        {/* ----------------------- */}
        <GridItem className="gr_head">
          <Card className="gr_card">
            <BoxDesign
              top="25%"
              left="1%"
              width="100%"
              height="30%"
              bg="#d6e4ff"
            />

            <CardBody position="relative">
              <HoverCard
                title="08"
                width="110px"
                height="150px"
                borderLeft="10px solid #b3ffb3 !important"
                hoverTop="20px"
                hoverWidth="73%"
                hoverLeft="23px"
                hoverHeight="79%"
                hoverBg="#b3ffb3"
                menuHoverTop="100px"
                menuHoverLeft="100px"
                menuItems={[
                  {
                    name: "Occupied",
                    to: "/",
                    icon: FiLock,
                  },
                  {
                    name: "New Item",
                    to: "/new_item",
                    icon: FiPlusCircle,
                  },
                  {
                    name: "Reserved",
                    to: "/",
                    icon: FiCalendar,
                  },
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        {/* Grid - 11 */}
        {/* ----------------------- */}
        <GridItem className="gr_head">
          <Card className="gr_card">
            <BoxDesign
              top="25%"
              left="1%"
              width="100%"
              height="30%"
              bg="#3366ff"
            />

            <CardBody position="relative">
              <HoverCard
                title="09"
                width="110px"
                height="150px"
                borderLeft="10px solid #3366ff !important"
                hoverTop="20px"
                hoverWidth="73%"
                hoverLeft="23px"
                hoverHeight="79%"
                hoverBg="#3366ff"
                menuHoverTop="100px"
                menuHoverLeft="100px"
                menuItems={[
                  {
                    name: "Occupied",
                    to: "/",
                    icon: FiLock,
                  },
                  {
                    name: "New Item",
                    to: "/new_item",
                    icon: FiPlusCircle,
                  },
                  {
                    name: "Reserved",
                    to: "/",
                    icon: FiCalendar,
                  },
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        {/* Grid - 12 */}
        {/* ----------------------- */}
        <GridItem className="gr_head">
          <Card className="gr_card">
            <BoxDesign
              top="25%"
              left="1%"
              width="100%"
              height="30%"
              bg="#d6e4ff"
            />

            <CardBody position="relative">
              <HoverCard
                title="10"
                width="110px"
                height="150px"
                borderLeft="10px solid #b3ffb3 !important"
                hoverTop="20px"
                hoverWidth="73%"
                hoverLeft="23px"
                hoverHeight="79%"
                hoverBg="#b3ffb3"
                menuHoverTop="100px"
                menuHoverLeft="100px"
                menuItems={[
                  {
                    name: "Occupied",
                    to: "/",
                    icon: FiLock,
                  },
                  {
                    name: "New Item",
                    to: "/new_item",
                    icon: FiPlusCircle,
                  },
                  {
                    name: "Reserved",
                    to: "/",
                    icon: FiCalendar,
                  },
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        {/* Grid - 13 */}
        {/* ----------------------- */}
        <GridItem className="gr_head">
          <Card className="gr_card">
            <BoxDesign
              top="25%"
              left="1%"
              width="100%"
              height="30%"
              bg="#d6e4ff"
            />

            <CardBody position="relative">
              <HoverCard
                title="12"
                width="110px"
                height="150px"
                borderLeft="10px solid #b3ffb3 !important"
                hoverTop="20px"
                hoverWidth="73%"
                hoverLeft="23px"
                hoverHeight="79%"
                hoverBg="#b3ffb3"
                menuHoverTop="100px"
                menuHoverLeft="100px"
                menuItems={[
                  {
                    name: "Occupied",
                    to: "/",
                    icon: FiLock,
                  },
                  {
                    name: "New Item",
                    to: "/new_item",
                    icon: FiPlusCircle,
                  },
                  {
                    name: "Reserved",
                    to: "/",
                    icon: FiCalendar,
                  },
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default MainHall;
