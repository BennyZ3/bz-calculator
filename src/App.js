import react from "react";
import "./App.css";
import BaseFunctions from "./components/BaseFunctions";
import ExtraFunctions from "./components/ExtraFunctions";
import Numbers from "./components/Numbers";

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      displayValue: "0",
      previousValue: "0",
      operation: "",
      result: "0",
      inputs: [],
    };
  }

  numberPress = (event) => {
    this.state.inputs.push(event.target.textContent);
    if (this.state.displayValue === "0") {
      if (event.target.value === ".") {
        this.setState({ displayValue: "0." });
      } else {
        this.setState({ displayValue: event.target.value });
      }
    } else if (event.target.value === ".") {
      if (this.state.displayValue.includes(".")) {
        console.log("already has a decimal");
      } else {
        this.setState({
          displayValue: this.state.displayValue + ".",
        });
      }
    } else {
      this.setState({
        displayValue: this.state.displayValue + event.target.value,
      });
    }
  };

  operation = (event) => {
    const prev = this.state.previousValue;
    let current = this.state.displayValue;
    const operation = this.state.operation;
    const result = this.state.result;
    this.state.inputs.push(event.target.textContent);
    if (result === "0") {
      this.setState({
        previousValue: Number(current),
        displayValue: "0",
        operation: event.target.value,
        result: Number(current),
      });
    } else {
      switch (event.target.value) {
        case "equal":
          console.log(this.state);
          if (current === "0") {
            current = prev;
          }
          switch (operation) {
            case "add":
              this.setState({
                // previousValue: current,
                result: Number(result) + Number(current),
              });
              break;
            case "subtract":
              this.setState({
                result: Number(result) - Number(current),
              });
              break;
            case "multiply":
              this.setState({
                result: Number(result) * Number(current),
              });
              break;
            case "divide":
              this.setState({
                result: Number(result) / Number(current),
              });
              break;
            default:
          }
          break;
        case "add":
          this.setState({
            previousValue: current,
            displayValue: "0",
            operation: event.target.value,
            result: Number(result) + Number(current),
          });
          break;
        case "subtract":
          this.setState({
            previousValue: current,
            displayValue: "0",
            operation: event.target.value,
            result: Number(result) - Number(current),
          });
          break;
        case "multiply":
          this.setState({
            previousValue: current,
            displayValue: "0",
            operation: event.target.value,
            result: Number(result) * Number(current),
          });
          break;
        case "divide":
          this.setState({
            previousValue: current,
            displayValue: "0",
            operation: event.target.value,
            result: Number(result) / Number(current),
          });
          break;
        default:
      }
    }
  };

  extraFunctions = (event) => {
    const current = this.state.displayValue;
    switch (event.target.value) {
      case "inv":
        this.setState({ displayValue: 1 / Number(current) });
        break;
      case "rad":
    }
  };

  clear = () => {
    if (this.state.displayValue === "0") {
      //all clear
      this.setState({
        displayValue: "0",
        previousValue: "0",
        operation: "",
        result: "0",
      });
    } else {
      //display clear
      this.setState({ displayValue: "0" });
    }
  };

  backSpace = () => {
    if (this.state.displayValue.length === 1) {
      this.setState({ displayValue: "0" });
    } else {
      this.setState({
        displayValue: this.state.displayValue.substring(
          0,
          this.state.displayValue.length - 1
        ),
      });
    }
  };
  render() {
    return (
      <div className="App">
        <h1>BZ Calculator App</h1>
        <div className="display">
          <p className="resultDisplay">{this.state.result}</p>
          {/* <p className="inputs">{this.state.inputs.join("")}</p> */}
          <p>{this.state.displayValue}</p>
        </div>
        <ExtraFunctions extraFunctions={this.extraFunctions} />
        <div className="container">
          <Numbers numberPress={this.numberPress} />
          <BaseFunctions
            operation={this.operation}
            clear={this.clear}
            back={this.backSpace}
          />
        </div>
      </div>
    );
  }
}

export default App;
