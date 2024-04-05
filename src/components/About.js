import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: { name: "Camal", location: "Baku", avatar_url: "" },
    };
    // console.log("Parent Constructor");
  }

  async componentDidMount() {
    // console.log("Parent Component Did Mount");
    // this.timer = setInterval(() => {
    //   console.log("message");
    // }, 1000);
    const data = await fetch("https://api.github.com/users/JamalVelizadeh");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
    // console.log("componentWillUnmount");
  }

  render() {
    // console.log("Parent Render");
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log(this.state.userInfo);
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={name} location={location} image={avatar_url} />
      </div>
    );
  }
}

export default About;
