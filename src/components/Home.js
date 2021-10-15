import React from "react";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Slider from "./Slider";
import Categories from "./Categories";
import Products from "./Products";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories/>
      <Products/>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;


