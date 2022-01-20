import "./Preview.css";
import ReactMarkdown from "react-markdown";

const Preview = (props) => {
    return (
        <div className="preview">
            <h2 className="preview-title">Markdown Output</h2>
            <div className="preview-box">
                <ReactMarkdown>{props.markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Preview;
