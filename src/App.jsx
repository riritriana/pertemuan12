import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext } from "react";
import { useState } from "react";

export const Krjcontext = createContext();

export default function App() {
  
  const [keranjang, setKeranjang] = useState([]);

  return (
    <Krjcontext.Provider value={{ keranjang, setKeranjang }}>
      <Header />
      <Outlet />
      <Footer />
    </Krjcontext.Provider>
  );

}
