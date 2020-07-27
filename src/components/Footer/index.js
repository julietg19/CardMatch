import React, { Component } from "react";
import Color from "./Color";

export default class index extends Component {

//     //let color = "pink"

//     this.state = {
//       color: "red",
//     };

//     function colorChange() {
//       this.setState((state) => ({ color: "green" }));
//     }

//     return (
//       <footer>
//         <Color color={this.state.color}></Color>

//         <button type="button" className="btn" onClick={this.colorChange()}>
//           Change Color
//         </button>
//       </footer>
//     );


constructor(props) {
super(props);
this.state = {
      color: "pink",
    };
  }
  colorChange = () => {
    this.setState(state => ({ color: "green" }));
  };
  render() {
    return (
      <div>
        <Color color={this.state.color} />
        <button onClick={this.colorChange} type="button">
          Show New Color
        </button>
      </div>
    );
  }
}

