import React from "react";
import { Link } from "gatsby";
import { Title, SearchButtons } from "./index";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Projects(props) {
  const [projects, setProjects] = React.useState(props.projects);
  const [selectedType, setSelectedType] = React.useState("all");

  const projectsType = [
    "all",
    ...new Set(props.projects.map((project) => project.data.type)),
  ];

  React.useEffect(() => {
    if (selectedType === "all") {
      return setProjects(props.projects);
    } else {
      const projectsToRender = props.projects.filter(
        (project) => project.data.type === selectedType,
      );
      return setProjects(projectsToRender);
    }
  }, [selectedType]);

  return (
    <Wrapper className="section">
      <Title title={props.title} />
      {/* <SearchButtons /> */}
      {props.page && (
        <SearchButtons
          projectsType={projectsType}
          setSelectedType={setSelectedType}
        />
      )}
      <div className="section-center">
        {projects.map((project) => (
          <article key={project.id}>
            <div className="container">
              <GatsbyImage
                image={getImage(
                  project.data.image.localFiles[0].childImageSharp,
                )}
                alt={project.data.name}
                className="img"
              />
              <div className="info">
                <p>- {project.data.type} -</p>
                <h3>{project.data.name}</h3>
              </div>
            </div>
          </article>
        ))}
      </div>
      {!props.page && (
        <Link to="/projects" className="btn">
          all projects
        </Link>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .section-center {
    margin-top: 4rem;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .img {
      height: 100%;
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article {
      box-shadow: var(--light-shadow);
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article:hover {
      box-shadow: var(--dark-shadow);
    }
    .container {
      height: 15rem;
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);
      background: var(--clr-primary-7);
      &:hover .img {
        opacity: 0.2;
      }
      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 0;
        transition: var(--transition);
        color: var(--clr-white);
        text-align: center;
        p {
          margin-bottom: 0.5rem;
          color: var(--clr-white);
          text-transform: uppercase;
        }
      }
      &:hover .info {
        opacity: 1;
      }
    }
    @media (min-width: 768px) {
      .container {
        height: 15rem;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .container {
        height: 12.5rem;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .container {
        height: 15rem;
      }
    }
  }
  a {
    display: block;
    width: 9rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
`;
