import { useState } from "react";

const Calculate = () => {
  let [count, setCount] = useState(0);
  //
  const incrementNumber = () => {
    setCount(() => {
      if (count >= 10) {
        setCount(() => {
          // const img = <img src="" alt="" />;
          return (count = 10);
        });
      }
      return count + 1;
    });
  };
  //
  const decrementNumber = () => {
    setCount(() => {
      if (count <= 0) {
        setCount(() => {
          return (count = 0);
        });
      }
      return count - 1;
    });
  };

  return (
    <div className="flex justify-center items-center flex-col gap-5 h-[80vh] w-full">
      <button
        onClick={incrementNumber}
        className="bg-red-400 px-6 mx-2 rounded-full text-5xl cursor-pointer"
      >
        +
      </button>
      <div
        className="text-5xl
      "
      >
        Calculate : {count}
      </div>
      <button
        onClick={decrementNumber}
        className="bg-amber-500 px-6 mx-2 rounded-full text-5xl cursor-pointer"
      >
        -
      </button>
    </div>
  );
};

export default Calculate;
