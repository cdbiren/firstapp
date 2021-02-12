import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Home from "./Home";
import Fixtures from "./Fixtures";
import Leagues from "./Leagues";
import Transfer from "./Transfer";
import News from "./News";
import Contact from "./Contact";
import Error from "./Error";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/fixtures" component={Fixtures}></Route>
        <Route exact path="/leagues" component={Leagues}></Route>
        <Route exact path="/transfer" component={Transfer}></Route>
        <Route exact path="/news" component={News}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route component={Error}></Route>

      s </Switch>
      <Footer />
    </>
  );
};

export default App;
