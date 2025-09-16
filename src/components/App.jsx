import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Main_sec from "./Main_sec";
import Main_Sec_Sec from "./Main_Sec_Sec";
import Trips from "./Trips";
import Trips_Name from "./Trips_Name";
import Offer from "./Offer";
import Destinations from "./Destinations";
import Cust_Review from "./Cust_Review";
import Articles from "./Articles";
import Subscribe from "./Subscribe";
import Speak from "./Speak";
import Footer from "./Footer";
import Copyright from "./Copyright";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Main_sec />
      <Main_Sec_Sec />
      <Trips />
      {/* <Trips_Name /> */}
      <Offer />
      <Destinations />
      <Cust_Review />
      <Articles />
      <Subscribe />
      <Speak />
      <Footer />
      <Copyright />
    </>
  );
};

export default App;
