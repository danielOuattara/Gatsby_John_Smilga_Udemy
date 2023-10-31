import React from "react";
import styled from "styled-components";

export default function SearchButtons(props) {
  const [index, setIndex] = React.useState(0);

  const projectsType = [
    "all",
    ...new Set(props.projects.map((project) => project.data.type)),
  ];

  const filterProject = (type, index) => {
    setIndex(index);
    if (type === "all") {
      return props.setBackToAllProject();
    } else {
      const projectsToRender = props.projects.filter(
        (project) => project.data.type === type,
      );
      return props.setProjects(projectsToRender);
    }
  };

  return (
    <Wrapper>
      {projectsType.map((projectType, typeIndex) => (
        <button
          key={typeIndex}
          className={index === typeIndex ? "active" : ""}
          onClick={() => filterProject(projectType, typeIndex)}
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
