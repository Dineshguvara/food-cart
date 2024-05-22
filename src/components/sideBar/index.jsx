import React, { ReactNode } from "react";
import { Link as NavLink } from "react-router-dom";
import "./style.css";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  Divider,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  Badge,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { FiStar, FiSettings, FiMenu } from "react-icons/fi";
// import NavBar from "../navBar/index";
import { useNavbar } from "../navBar/Context";
import { AddIcon, ArrowBackIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IconType } from "react-icons";
import { ReactText } from "react";

const LinkItems = [
  {
    name: <Text className="nav_list">Dashboard</Text>,
    content: {
      heading: "Dashboard",
    },
    to: "#",
  },
  {
    name: <Text className="nav_list">Menu</Text>,
    content: {
      heading: "Menu Items",
    },
    to: "#",
  },
  {
    name: (
      <Text className="nav_list active">
        Dinning Area <Badge className="badg">5 </Badge>
      </Text>
    ),
    to: "main_hall",
    content: {
      heading: "Main Hall",
      waiters: "5 Waiters",
      tables: "10 Tables",
    },
  },
  {
    name: (
      <Button className="btn_wrap">
        {" "}
        <AddIcon className="icon_s" />
        <Text className="item"> New Item</Text>{" "}
      </Button>
    ),
    to: "new_item",
    content: { heading: "New Item", tableNum: "Table 02", orderId: "#072367" },
  },
  {
    name: <Text className="nav_list">Settings</Text>,
    icon: FiSettings,
    content: {
      heading: "Settings",
    },
    to: "#",
  },
  {
    name: <Text className="nav_list">Help</Text>,
    icon: FiStar,
    content: {
      heading: "Help",
    },
    to: "#",
  },
];

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg="white">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}

      <NavBar onOpen={onOpen} />

      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      // bg={useColorModeValue("white", "gray.900")}
      bg="#f2f2f2"
      borderRight="1px"
      borderRightColor="white"
      // borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        {/* <Text className="dsn">le</Text> */}
        <Text
          className="logo"
          fontSize="40px"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Veau
        </Text>{" "}
        <br></br>
        <CloseButton display={{ base: "flex", md: "none" }} />
      </Flex>
      {/* <Text>vdnsj</Text> */}
      {LinkItems.map((link, index) => (
        <NavItem
          key={index}
          icon={link.icon}
          too={link.to}
          content={link.content}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ content, too, icon, children, ...rest }) => {
  const { setNavbarContent } = useNavbar();
  return (
    <Link
      as={NavLink}
      to={too}
      onClick={() => setNavbarContent(content)}
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
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
    </Link>
  );
};

const NavBar = ({ onOpen, ...rest }) => {
  const { navbarContent } = useNavbar();
  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        // position="fixed"
        bg={useColorModeValue("white", "gray.900")}
        // borderBottomWidth="1px"
        // borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >
        <HStack className="main_stk">
          {/* <NavLink to="/"> */}
          <ArrowBackIcon className="arr_icn" />
          {/* </NavLink> */}

          <VStack className="sub_stk">
            <HStack>
              <Text className="top_n">Dinning Areas</Text>
              {navbarContent.tableNum ? (
                <ChevronRightIcon className="arr_icon" />
              ) : (
                ""
              )}
              <Text className="table_num"> {navbarContent.tableNum}</Text>
            </HStack>
            <HStack>
              <Text className="bot_n"> {navbarContent.heading}</Text>
              <Text className="order_id"> {navbarContent.orderId}</Text>
            </HStack>
          </VStack>

          <Text className="cont ml-10"> {navbarContent.waiters} </Text>
          {navbarContent.waiters ? <Divider className="div" /> : ""}

          <Text className="cont"> {navbarContent.tables} </Text>
        </HStack>
        <IconButton
          display={{ base: "flex", md: "none" }}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />

        <Text
          display={{ base: "flex", md: "none" }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Veau
        </Text>

        <HStack spacing={{ base: "0", md: "6" }}>
          {/* <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        /> */}
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack className="br_lft">
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    {/* <Divider orientation="vertical" /> */}
                    <Text fontSize="md" className="nam">
                      Justina Clark
                    </Text>
                    <Text fontSize="xs" className="cate">
                      Waiter
                    </Text>
                  </VStack>
                  <Avatar
                    className="ava"
                    size={"md"}
                    src={
                      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    }
                  />
                </HStack>
              </MenuButton>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </>
  );
};
