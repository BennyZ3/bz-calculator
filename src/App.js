import react from "react";
import "./App.css";
import BaseFunctions from "./components/BaseFunctions";
import ExtraFunctions from "./components/ExtraFunctions";
import Numbers from "./components/Numbers";
import TipButtons from "./components/TipButtons";

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      displayValue: "0",
      previousValue: "0",
      operation: "",
      result: "0",
      inputs: [],
      mode: "radians",
      memory: "",
      tip: "0",
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
    const current = Number(this.state.displayValue);
    switch (event.target.value) {
      case "inv":
        this.setState({ displayValue: 1 / current });
        break;
      case "mem":
        this.setState({ memory: current });
        break;
      case "mode":
        if (this.state.mode === "radians") {
          this.setState({ mode: "degrees" });
        } else {
          this.setState({ mode: "radians" });
        }
        break;
      case "sin":
        if (this.state.mode === "radians") {
          this.setState({ displayValue: Math.sin(current) });
        } else {
          this.setState({
            displayValue: Math.sin((current / 180) * Math.PI).toFixed(6),
          });
        }
        break;
      case "cos":
        if (this.state.mode === "radians") {
          this.setState({ displayValue: Math.cos(current) });
        } else {
          this.setState({
            displayValue: Math.cos((current / 180) * Math.PI).toFixed(6),
          });
        }
        break;
      case "tan":
        if (this.state.mode === "radians") {
          this.setState({ displayValue: Math.tan(current) });
        } else {
          this.setState({
            displayValue: Math.tan((current / 180) * Math.PI).toFixed(6),
          });
        }
        break;
      case "percent":
        this.setState({ displayValue: current / 100 });
        break;
      case "ln":
        this.setState({ displayValue: Math.log(current) });
        break;
      case "log":
        this.setState({ displayValue: Math.log(current) / Math.log(10) });
        break;
      case "sqrt":
        this.setState({ displayValue: Math.sqrt(current) });
        break;
      case "square":
        this.setState({ displayValue: current * current });
        break;
      case "exponent":
        this.setState({ result: Math.pow(this.state.result, current) });
        break;
      case "pi":
        this.setState({ displayValue: Math.PI });
        break;
      case "e":
        this.setState({ displayValue: Math.E });
        break;
      case "sign":
        this.setState({ displayValue: current * -1 });
        break;
      default:
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

  resultButton = () => {
    this.setState({ displayValue: this.state.result });
  };

  memory = () => {
    this.setState({ displayValue: this.state.memory });
  };
  tipUpdate = (event) => {
    this.setState({ tip: event.target.value });
  };
  tipGenerator = (event) => {
    event.preventDefault();
    this.setState({
      result: this.state.displayValue * (1 + this.state.tip / 100),
    });
  };
  render() {
    return (
      <>
        <div className="App">
          <h1>BZ Calculator App</h1>
          <div className="display">
            <p className="resultDisplay">{this.state.result}</p>
            <p className="long">{this.state.mode}</p>
            {/* <p className="inputs">{this.state.inputs.join("")}</p> */}
            <p className="current">{this.state.displayValue}</p>
          </div>
          <ExtraFunctions extraFunctions={this.extraFunctions} />
          <div className="container">
            <Numbers numberPress={this.numberPress} memory={this.memory} />
            <BaseFunctions
              operation={this.operation}
              clear={this.clear}
              back={this.backSpace}
              resultButton={this.resultButton}
            />
          </div>
        </div>
        <div className="tipsbox">
          <TipButtons
            tipGenerator={this.tipGenerator}
            tip={this.state.tip}
            current={this.state.displayValue}
            tipUpdate={this.tipUpdate}
          />
        </div>
      </>
    );
  }
}

export default App;
