import React, { Component } from "react";
import HomeComponent from "./home";
import { withNavBars } from "../../HOCs";

/* In this Home component, "HomeComponent" has returned.
  "withNavBars" is a HOC to provide Top Navigation bar and side Navigation bar in the screen.
 */

class Home extends Component {
  render() {
    return <HomeComponent />;
  }
}

export default withNavBars(Home);
