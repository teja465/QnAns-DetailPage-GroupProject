import { lightGreen } from "@material-ui/core/colors";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import CodePen from "./CodePen";
import LanguageDropdown from "./codepen/LanguageDropdown";
import ThemeDropdown from "./codepen/ThemeDropdown";

function App() {
  const [language, setlanguage] = useState("python");
  const [code, setcode] = useState("//your code goes here..");
  const [theme, setTheme] = useState("monokai");
  return (
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: "lightgray",
          marginBottom: "30px",
          height: "60px",
        }}
      >
        <LanguageDropdown language={language} setlanguage={setlanguage} />
        <ThemeDropdown theme={theme} settheme={setTheme}></ThemeDropdown>
      </div>

      <CodePen
        theme={theme}
        code={code}
        setcode={setcode}
        language={language}
      />
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
