import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./pages/layout/index";
import MainHall from "./pages/mainHall/index";
import NewItem from "./pages/newItem/index";
import { NavbarProvider } from "./components/navBar/Context";
function App() {
  return (
    <ChakraProvider>
      <NavbarProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainHall />} />
            <Route path="/main_hall" element={<MainHall />} />
            <Route path="/new_item" element={<NewItem />} />
          </Route>
        </Routes>
      </NavbarProvider>
    </ChakraProvider>
  );
}
export default App;
