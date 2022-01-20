import "./Editor.css";

const Editor = (props) => {
    return (
        <div className="editor">
            <h1 className="title">Markdown Input</h1>
            <textarea
                className="input"
                name="text"
                rows="10"
                value={props.text}
                onChange={(e) => props.setText(e.target.value)}
            ></textarea>
        </div>
    );
};

export default Editor;
