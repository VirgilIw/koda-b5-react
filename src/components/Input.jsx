import useInput from "../hooks/useInput";

const Input = () => {
  const {
    input: inputUser,
    handleChange: hc,
    handleReset: hr,
    isValid: iValid,
    error: err,
  } = useInput("", { required: true, minLength: 3 });

  return (
    <>
      <p>test</p>

      <input
        type="text"
        value={inputUser}
        onChange={hc}
        className="border border-black"
      />

      <button onClick={hr}>Reset</button>

      {!iValid ? <p>{err}</p> : <p>{inputUser}</p>}
    </>
  );
};

export default Input;
