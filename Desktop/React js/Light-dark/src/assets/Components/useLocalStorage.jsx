import React, { useEffect, useState } from "react";

const useLocalStorage = ({ key, defaultValue }) => {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || string(defaultValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
