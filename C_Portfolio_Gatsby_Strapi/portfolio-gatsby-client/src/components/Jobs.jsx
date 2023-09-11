import React from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

export const query = graphql`
  query {
    allStrapiJob(sort: { createdAt: DESC }) {
      nodes {
        id
        position
        company
        date
        description {
          id
          name
        }
      }
    }
  }
`;

export default function Jobs() {
  const data = useStaticQuery(query);
  const jobs = data.allStrapiJob.nodes;

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container"></div>
        <article className="job-info">
          <h3>{jobs[0].position}</h3>
          <h4>{jobs[0].company}</h4>
          <p className="job-date">{jobs[0].date}</p>
          {jobs[0].description.map((item) => (
            <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  );
}
