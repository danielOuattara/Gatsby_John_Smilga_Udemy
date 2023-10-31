import React from "react";
import styled from "styled-components";

export default function SearchButtons(props) {
  const [index, setIndex] = React.useState(0);

  const selectType = (type, index) => {
    setIndex(index);
    return props.setSelectedType(type);
  };

  return (
    <Wrapper>
      {props.projectsType.map((projectType, typeIndex) => (
        <button
          key={typeIndex}
          className={index === typeIndex ? "active" : ""}
          onClick={() => selectType(projectType, typeIndex)}
        >
          {projectType}
        </button>
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  margin-bottom: 0;
  justify-content: center;
  flex-wrap: wrap;
  button {
    margin: 0.5rem;
    text-transform: capitalize;
    background: transparent;
    border: transparent;
    color: var(--clr-grey-6);
    letter-spacing: var(--spacing);
    font-size: 1rem;
    padding: 0.25rem;
    cursor: pointer;
    outline: none;
    transition: var(--transition);
  }
  button:hover,
  button.active {
    box-shadow: 0px 1.5px 0 var(--clr-grey-6);
  }
`;
