const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        onChange={props.onChange}
        className={props.className}
        value={props.value}
        min={props.min}
        defaultValue={props.defaultValue}
        checked={props.checked}
      />
    </>
  );
};
export default Input;
