import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();

    console.log("parent constructor");

    this.state = {
      userInfo: {
        name: "DummyName",
        location: "DummyLocation",
        bio: "DummyBio",
      },
    };
  }

  async componentDidMount() {
    console.log("parent Component did mount");

    //APi call
    const data = await fetch("https://api.github.com/users/sharma-ayush-20");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });

    // this.timer = setInterval(() => {
    //   console.log("Interval chal raha hai")
    // }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.userInfo.name !== prevState.userInfo.name &&
      this.state.userInfo.location !== prevState.userInfo.location
    ) {
      console.log("Hello name change ho gaya hai");
      console.log("Hello location change ho gaya hai");
    }
    console.log(
      "Component did update - this console when my components is updated in ui"
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(
      "Component will unmount - this console when my components is unmounted and display another pages in ui"
    );
  }

  render() {
    console.log("parent render");
    const { name, location, bio, avatar_url } = this.state.userInfo;
    return (
      <>
        <div>About Us.</div>
        <h1>Hello Everyone!!</h1>
        <h2>This is EatMate - A Food Ordering App.</h2>
        {/* <User /> */}
        <UserClass name={"First"} />
        {/* <UserClass name={"Second"} /> */}
        <div>
          <img
            src={avatar_url}
            style={{ width: "50px", borderRadius: "50%", border: "1px solid" }}
          />
          <h2>My name is: {name}</h2>
          <h3>Location: {location}</h3>
          <h3>{bio}</h3>
        </div>
      </>
    );
  }
}

export default About;
