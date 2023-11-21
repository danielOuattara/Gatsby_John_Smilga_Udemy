// import React from "react";
// // import Highlight, { defaultProps } from "prism-react-renderer";
// // import theme from "prism-react-renderer/themes/vsDark";
// import styled from "styled-components";

// export default function PrismWrapper(props) {
//   const className = props.children.props.className;
//   const language = className.split("-")[1];

//   return (
// <Highlight
//   {...defaultProps}
//   code={props.children.props.children.trim()}
//   language={language}
//   theme={theme}
// >
//   {({ className, style, tokens, getLineProps, getTokenProps }) => {
//     return (
//       <Container>
//         <Pre className={className} style={style}>
//           <div className="code-tab">{language}</div>
//           {tokens.map((line, i) => (
//             <div {...getLineProps({ line, key: i })}>
//               {line.map((token, key) => (
//                 <span {...getTokenProps({ token, key })} />
//               ))}
//             </div>
//           ))}
//         </Pre>
//       </Container>
//     );
//   }}
// </Highlight>
// <p>Coming soon</p>
// );
// }

import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import styled from "styled-components";

export default function Example(props) {
  const codeBlock = props.children.props.children.trim();
  const language = props.children.props.className
    .replace(/language-/, "")
    .trim();
  return (
    <Highlight theme={themes.oneDark} code={codeBlock} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Container>
          <Pre className={className} style={style}>
            <div className="code-tab">{language} </div>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {/* <span>{i + 1}</span> */}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </Pre>
        </Container>
      )}
    </Highlight>
  );
}

// Styling Only
const Pre = styled.pre`
  background: #1e1e1e;
  padding: 1rem 1.5rem;
  border-radius: var(--radius);
  margin: 3rem 0;
  font-size: 0.9rem;
  font-family: "Courier New", Courier, monospace;
  overflow-x: scroll;
  .token-line {
    line-height: 1.5;
  }
  .code-tab {
    position: absolute;
    top: 1px;
    right: 5%;
    color: rgb(156, 220, 254);
    font-size: 1rem;
    font-weight: 700;
    transform: translateY(-100%);
    text-transform: uppercase;
    padding: 0.05rem 0.85rem 0;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    background: #1e1e1e;
  }
`;
const Container = styled.article`
  position: relative;
`;
