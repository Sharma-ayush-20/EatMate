import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();

    console.log("parent constructor")
  }

  componentDidMount(){
    console.log("parent Component did mount")
  }

  render() {
    console.log("parent render")
    return (
      <>
        <div>About Us.</div>
        <h1>Hello Everyone!!</h1>
        <h2>This is EatMate - A Food Ordering App.</h2>
        <User />
        <UserClass name={"class based"} />
      </>
    );
  }
}

export default About;
