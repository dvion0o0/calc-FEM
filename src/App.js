import React, { useState } from "react";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { theme1, theme2, theme3 } from "./Themes/theme";
import { useEffect } from "react";

console.log(typeof JSON.parse(localStorage.getItem("themeCalc")));

const LocalStorage = () => {
  if (localStorage.getItem("themeCalc")) {
    return JSON.parse(localStorage.getItem("themeCalc"));
  }
  return 0;
};

function App() {
  const [index, setIndex] = useState(LocalStorage());
  const [value, setValue] = useState("");

  const toggle = () => {
    setIndex((old) => {
      if (old === 2) {
        return 0;
      } else {
        return old + 1;
      }
    });
  };

  const keyClick = (e) => {
    setValue(value.concat(e.target.name));
  };

  const reset = () => {
    setValue("");
  };

  const Delete = () => {
    setValue(value.slice(0, -1));
  };

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue("Error");
    }
  };

  useEffect(() => {
    localStorage.setItem("themeCalc", index);
  }, [index]);

  return (
    <ThemeProvider theme={index === 0 ? theme1 : index === 1 ? theme2 : theme3}>
      <Header
        toggle={toggle}
        index={index}
        value={value}
        keyClick={keyClick}
        reset={reset}
        Delete={Delete}
        calculate={calculate}
      />
    </ThemeProvider>
  );
}

export default App;
