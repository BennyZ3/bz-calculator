const BaseFunctions = (props) => {
  return (
    <div className="baseFunctions">
      <button className="buttons" value="divide" onClick={props.operation}>
        ÷
      </button>
      <button className="buttons word" value="clear" onClick={props.clear}>
        Clear
      </button>
      <button className="buttons" value="multiply" onClick={props.operation}>
        x
      </button>
      <button className="buttons word" value="back" onClick={props.back}>
        Bkspc
      </button>
      <button className="buttons" value="subtract" onClick={props.operation}>
        -
      </button>
      <div />
      <button className="buttons" value="add" onClick={props.operation}>
        +
      </button>
      <button className="buttons" value="equal" onClick={props.operation}>
        =
      </button>
    </div>
  );
};

export default BaseFunctions;
