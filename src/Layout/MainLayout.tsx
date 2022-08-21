import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Share/Header/Header";
import Footer from "../components/Share/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <header className="container mx-auto">
        <Header />
      </header>
      <main className="container mx-auto">
        <Outlet />
      </main>

      <footer className="container mx-auto">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
