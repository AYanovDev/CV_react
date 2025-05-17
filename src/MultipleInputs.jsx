function MultipleInputs(props) {
  function renderInput(item, index) {
    return (
      <input
        key={index}
        type="text"
        value={item}
        onChange={(e) =>
          props.setValue((prevValue) => {
            let newValue = prevValue.slice();
            newValue[index] = e.target.value;
            return newValue;
          })
        }
      />
    );
  }

  function submit() {
    let nonEmptyValue = props.value.filter((e) => e !== "");
    props.setValue(nonEmptyValue);
    props.submit(nonEmptyValue);
  }

  return (
    <div>
      {props.value.map(renderInput)}

      <button onClick={submit}>Submit</button>
      <button onClick={() => props.setValue((prevValue) => [...prevValue, ""])}>
        Add more
      </button>
    </div>
  );
}

export default MultipleInputs;
