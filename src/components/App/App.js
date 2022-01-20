import "./App.css";
import Preview from "../Preview/Preview";
import Editor from "../Editor/Editor";
import React, { useState } from "react";

const App = () => {
    const [text, setText] = useState(placeholder);

    return (
        <div className="app">
            <Editor text={text} setText={setText} />
            <Preview markdown={text} />
        </div>
    );
};

export default App;

const placeholder = `# Check out my markdown previewer!

## This is a sub heading

This is inline code: \`<div></div>\`

This is a code block:
\`\`\`
const someCode = (admitIt, thisIsAwesome) => {
  return admitIt + thisIsAwesome;
}
\`\`\`

Here is some **bold** and _italic_ text.

Here is a [link](https://reactjs.org/) and a
> Block Quote

- This
- Is
- A
- List

![React logo](https://nimishprabhu.com/wp-content/uploads/2021/07/react-logo.png)

Thanks for checking out my markdown previewer!`;
