import React from "react";

import MDEditor from "@uiw/react-md-editor";

export default function App({ value, setValue }) {
  return (
    <div className="container">
      <MDEditor value={value} onChange={setValue} />

      {/* <MDEditor.Markdown source={value} /> */}
  
    </div>
  );
}
