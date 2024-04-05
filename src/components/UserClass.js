import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   count: 0,
    // };
    // console.log("Second(Child) Constructor");
  }
  componentDidMount() {
    // console.log("Second(Child) componentDidMount");
  }
  render() {
    const { name, location, image } = this.props;
    // console.log("Second(Child) Render");
    return (
      <div className="user-card">
        {/* <h1>Count = {count}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increase count by 1{" "}
        </button> */}
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:+994 (060) 666-90-60</h4>
        <img src={image}></img>
      </div>
    );
  }
}

export default UserClass;

/****
 *
 * ---- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE ----
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 */
