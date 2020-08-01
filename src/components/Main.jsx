import React from "react";
import About from "./sections/About";
// import Tours from "./sections/Tours";
// import Stories from "./sections/Stories";
import { Switch, Route } from "react-router-dom";
// import Features from "./sections/Features";
import Booking from "./sections/Booking";
import Pictures from "./sections/Pictures";
// import Popup from "./Popup";

export default function Main() {
  return (
    <main>
      <Route path="/" exact component={About} />
      <Route path="/" exact component={Pictures} />
      <Route path="/" exact component={Booking} />

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Pictures} />
        {/* <Route path="/features" component={Features} />
        <Route path="/tours" component={Tours} />
        <Route path="/stories" component={Stories} /> */}
        <Route path="/booking" component={Booking} />
        <Route path="/" component={window.scrollTo(0, 0)} />
      </Switch>
    </main>
  );
}
