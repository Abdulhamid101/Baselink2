import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/Navbar/NavBar";
import Footer from "../component/Footer/Footer";

export default function Layout(){
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
