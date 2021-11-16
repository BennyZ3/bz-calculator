const Numbers = (props) => {
  return (
    <div className="numpad">
      <button className="buttons" value="7" onClick={props.numberPress}>
        7
      </button>
      <button className="buttons" value="8" onClick={props.numberPress}>
        8
      </button>
      <button className="buttons" value="9" onClick={props.numberPress}>
        9
      </button>
      <button className="buttons" value="4" onClick={props.numberPress}>
        4
      </button>
      <button className="buttons" value="5" onClick={props.numberPress}>
        5
      </button>
      <button className="buttons" value="6" onClick={props.numberPress}>
        6
      </button>
      <button className="buttons" value="1" onClick={props.numberPress}>
        1
      </button>
      <button className="buttons" value="2" onClick={props.numberPress}>
        2
      </button>
      <button className="buttons" value="3" onClick={props.numberPress}>
        3
      </button>
      <button className="buttons" value="0" onClick={props.numberPress}>
        0
      </button>
      <button className="buttons" value="." onClick={props.numberPress}>
        .
      </button>
      <button className="buttons word" onClick={props.memory}>
        mem
      </button>
    </div>
  );
};

export default Numbers;
