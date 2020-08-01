import React from "react";
import Header from "./Header";
import { Nav } from "./Nav";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Logo from "./Logo";
import Booking from "./sections/Booking";
import About from "./sections/About";
import Pictures from "./sections/Pictures";

export default function App() {
  return (
    <Router>
      {/* <Logo /> */}
      <Nav />
      <Header />
      <Switch>
        <Route path="/home">
          <Booking />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/gallery">
          <Pictures />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/" component={window.scrollTo(0, 0)}>
          <About />
          <Booking />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
