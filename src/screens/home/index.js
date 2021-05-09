import React, { Component } from "react";
import HomeComponent from "./home";
import { withNavBars } from "../../HOCs";

class Home extends Component {
  render() {
    return <HomeComponent />;
  }
}

export default withNavBars(Home);
