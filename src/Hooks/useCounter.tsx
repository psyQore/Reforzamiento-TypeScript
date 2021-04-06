import { useState } from "react";

export const useCounter = ( initial: number = 0 ) => {
  const [value, setValue] = useState(initial);

  const accumulate = (number: number) => {
    setValue(value + number);
  };

  return {
    value,
    accumulate,
  };
};
