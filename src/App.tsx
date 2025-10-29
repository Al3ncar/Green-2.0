import React from "react";

import Header from "./layouts/header/header";
import About from "./layouts/main/about/about";
import Statistics from "./layouts/main/about/statistics";
import Category from "./layouts/main/category/category";
import Comments from "./layouts/main/comments/comments";
import Gallery from "./layouts/main/galery/gallery";
import Signin from "./layouts/main/singin/signin";
import Footer from "./layouts/footer/footer";

export default function GreenAction() {
  return (
    <>
      <Header />
      <main>
        <Statistics />
        <About />
        <Category />
        <Comments />
        <Gallery />
        <Signin />
      </main>
      <Footer />
    </>
  );
}
