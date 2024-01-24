import { SetStateAction, useState } from "react";
import { saveToFile } from "@r2kode/qnf-js-lib";

export function Editor() {
  const [text, setText] = useState("");

  const handleTextChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleSave = () => {
    saveToFile(text, "file.txt");
  };

  return (
    <div>
      <h2>Editor</h2>
      <div>
        <textarea
          onChange={handleTextChange}
          name="editor"
          id="editor"
          cols={30}
          rows={10}
        ></textarea>
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
