import React from "react";
import ReactDOM from "react-dom";
import Converter from "./converter/converter.js";

class App extends React.Component {
  render() {
    return <Converter> </Converter>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
