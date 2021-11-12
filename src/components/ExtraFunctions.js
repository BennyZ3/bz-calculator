const ExtraFunctions = (props) => {
  return (
    <div className="extraFunctions">
      <button
        className="buttons word"
        value="inv"
        onClick={props.extraFunctions}
      >
        INV
      </button>
      <button
        className="buttons word"
        value="rad"
        onClick={props.extraFunctions}
      >
        RAD
      </button>
      <button
        className="buttons word"
        value="sin"
        onClick={props.extraFunctions}
      >
        sin
      </button>
      <button
        className="buttons word"
        value="cos"
        onClick={props.extraFunctions}
      >
        cos
      </button>
      <button
        className="buttons word"
        value="tan"
        onClick={props.extraFunctions}
      >
        tan
      </button>
      <button
        className="buttons"
        value="percent"
        onClick={props.extraFunctions}
      >
        %
      </button>
      <button
        className="buttons word"
        value="ln"
        onClick={props.extraFunctions}
      >
        ln
      </button>
      <button
        className="buttons word"
        value="log"
        onClick={props.extraFunctions}
      >
        log
      </button>
      <button
        className="buttons word"
        value="sqrt"
        onClick={props.extraFunctions}
      >
        √x
      </button>
      <button
        className="buttons word"
        value="square"
        onClick={props.extraFunctions}
      >
        x²
      </button>
      <button
        className="buttons"
        value="exponent"
        onClick={props.extraFunctions}
      >
        ^
      </button>
      <button className="buttons" value="pi" onClick={props.extraFunctions}>
        π
      </button>
      <button className="buttons word" value="e" onClick={props.extraFunctions}>
        e
      </button>
      {/* <button className="buttons" value="" onClick={props.extraFunctions}>
        (
      </button>
      <button className="buttons" value="" onClick={props.extraFunctions}>
        )
      </button> */}
      <button
        className="buttons"
        value="factorial"
        onClick={props.extraFunctions}
      >
        !
      </button>
    </div>
  );
};

export default ExtraFunctions;
