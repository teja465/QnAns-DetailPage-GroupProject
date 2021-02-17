import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/snippets/javascript";

import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/snippets/c_cpp";
import "ace-builds/src-noconflict/snippets/csharp";
import "ace-builds/src-noconflict/snippets/typescript";

import "ace-builds/src-noconflict/ext-language_tools";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-django";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/mode-csharp";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import LanguageDropdown from "./codepen/LanguageDropdown";

import * as ace from "ace-builds/src-noconflict/ace";
ace.config.set("basePath", "/assets/ui/");
ace.config.set("modePath", "");
ace.config.set("themePath", "");

export default function CodePen({ code, setcode, language, theme }) {
  function onChange(newValue) {
    setcode(newValue);
  }
  return (
    <>
      <h3 style={{ fontFamily: "monospace" }}>Type your code here</h3>
      <div style={{ margin: "1%" }}>
        <AceEditor
          mode={language}
          theme={theme}
          onChange={onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
          width="90%"
          wrapEnabled={true}
          defaultValue={
            language == "python"
              ? "#your code goes here"
              : "//your code goes here"
          }
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            fontSize: 15,
          }}
        />
      </div>
    </>
  );
}
