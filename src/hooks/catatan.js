import { useState } from "react";

const useInput = (initial = "") => {
  const [input, setInput] = useState(initial);
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // contoh validation
    if (value.trim() === "") {
      setIsValid(false);
      setError("Input tidak boleh kosong");
    } else {
      setIsValid(true);
      setError("");
    }
  };

  return { input, handleChange, isValid, error };
};

export default useInput;

// const value = e.target.value;

// if (validation === "required") {
//   if (value.trim() === "") {
//     setIsValid(false);
//     setError("Input tidak Boleh Kosong");
//     return;
//   }
//   if (value.length < 3) {
//     setIsValid(false);
//     setError("Input harus lebih dari 3 karakter");
//     return;
//   }
// }
