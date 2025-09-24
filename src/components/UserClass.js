import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    //class state variables
    this.state = {
      count: 0,
    };

    console.log(this.props.name + "child constructor")
  }

  componentDidMount(){
    console.log(this.props.name + "child Component did mount")
  }

  render() {
    const { name } = this.props;
    console.log(this.props.name + "child render")
    return (
      <>
        <div>
          <h2>Count: {this.state.count}</h2>
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            Increment
          </button>
          <h2>This is my {name} Component using ReactJS</h2>
        </div>
      </>
    );
  }
}

export default UserClass;
