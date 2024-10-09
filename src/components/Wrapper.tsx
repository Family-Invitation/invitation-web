import React from "react";
import Navbar from "./landing-page/Navbar";
import Footer from "./landing-page/Footer";

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
