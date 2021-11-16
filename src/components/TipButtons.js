const TipButtons = (props) => {
  return (
    <div className="tips">
      <h2>Tip Calc</h2>
      <p className="long">Current: %{props.tip}</p>
      <p className="long">
        Value: {Math.round(props.current * props.tip) / 100}
      </p>
      <button className="tip" onClick={props.tipUpdate} value="10">
        Poor
      </button>
      <button className="tip" onClick={props.tipUpdate} value="12">
        Meh
      </button>
      <button className="tip" onClick={props.tipUpdate} value="15">
        Average
      </button>
      <button className="tip" onClick={props.tipUpdate} value="18">
        Good
      </button>
      <button className="tip" onClick={props.tipUpdate} value="20">
        Great
      </button>
      <button
        className="tip"
        onClick={props.tipUpdate}
        value={Math.round(Math.random() * 10000) / 100}
      >
        Random
      </button>
      <form>
        <label>
          Custom:
          <input type="number" name="custom" onChange={props.tipUpdate}></input>
        </label>
        <input type="submit" onClick={props.tipGenerator} />
      </form>
    </div>
  );
};

export default TipButtons;
