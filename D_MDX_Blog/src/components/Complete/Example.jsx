import React from "react";
import { Highlight, themes } from "prism-react-renderer";

export default function Example(props) {
  const codeBlock = props.children.props.children.trim();
  const language = props.children.props.className
    .replace(/language-/, "")
    .trim();
  return (
    <Highlight theme={themes.oneDark} code={codeBlock} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {/* <span>{i + 1}</span> */}
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
