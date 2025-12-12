import { useState } from "react";

const useInput = (initialState, validation) => {
  const [input, setInput] = useState(() => {
    if (typeof initialState === "function") return initialState();
    return initialState;
  });
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // VALIDASI: required
    if (validation.required) {
      if (value.trim() === "") {
        setIsValid(false);
        setError("Input tidak boleh kosong");
        return;
      }
    }

    // VALIDASI: minLength
    if (validation.minLength) {
      if (value.length < validation.minLength) {
        setIsValid(false);
        setError(`Input harus lebih dari ${validation.minLength} karakter`);
        return;
      }
    }

    // Jika valid semua
    setIsValid(true);
    setError("");
  };

  const handleReset = () => {
    setInput("");
    setIsValid(true);
    setError("");
  };

  return { input, handleChange, handleReset, isValid, error };
};

export default useInput;
