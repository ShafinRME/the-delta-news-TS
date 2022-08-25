import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Share/Header/Header";
import Footer from "../components/Share/Footer/Footer";
import { MessengerChat } from "react-messenger-chat-plugin";


const MainLayout = () => {
  return (
    <>
      <header className="container mx-auto">
        <Header />
      </header>
      <main className="container mx-auto">
        <Outlet />
        <MessengerChat
          pageId="102918359220095"
          language="sv_SE"
          themeColor={"#F6621E"}
          bottomSpacing={300}
          loggedInGreeting="loggedInGreeting"
          loggedOutGreeting="loggedOutGreeting"
          greetingDialogDisplay={"show"}
          debugMode={true}
          onMessengerShow={() => {
            console.log("onMessengerShow");
          }}
          onMessengerHide={() => {
            console.log("onMessengerHide");
          }}
          onMessengerDialogShow={() => {
            console.log("onMessengerDialogShow");
          }}
          onMessengerDialogHide={() => {
            console.log("onMessengerDialogHide");
          }}
          onMessengerMounted={() => {
            console.log("onMessengerMounted");
          }}
          onMessengerLoad={() => {
            console.log("onMessengerLoad");
          }}
        />,
      </main>

      <footer className="container mx-auto">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
