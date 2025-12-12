//
/** Ambil data yang lama kalau ada di localStorage
 *  Jika ada data yang baru, maka "setItem" / save di localStorage
 */

import { useEffect, useState } from "react";

const useLocalStorage = (key, initialState) => {
  // key agar dinamis dipakai semua
  // initialState bisa function juga, karna dia didalam fungsi
  // parse itu balikan ke nilai awalnya apapun jenisnya, sama kayak stringify
  const [value, setValue] = useState(() => {
    const old = window.localStorage.getItem(key);
    if (!old) {
      if (typeof initialState === "function") return initialState();
      return initialState;
    }
    return JSON.parse(old);
  });
  //
  useEffect(() => {
    const newData = JSON.stringify(value);
    localStorage.setItem(key, newData);
  }, [value, key]);
  //

  const removeValue = () => {
    localStorage.removeItem(key);
  };
  //   return [value, setValue, removeValue];
  //
  return { value, setValue, removeValue };
};

export default useLocalStorage;
