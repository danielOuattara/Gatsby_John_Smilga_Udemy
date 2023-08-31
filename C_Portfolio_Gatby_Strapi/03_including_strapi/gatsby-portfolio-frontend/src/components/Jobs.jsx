import React, { useState } from "react";
import { Title } from "./";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

export const query = graphql`
  query {
    allStrapiJob {
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
  const [jobIndex, setJobIndex] = useState(0);
  const data = useStaticQuery(query);
  const jobs = data.allStrapiJob.nodes;

  const jobToShow = jobs[jobIndex];

  return (
    <section className="section jobs">
      <Title title="experience" />

      <div className=""></div>
      <div className="jobs-center">
        <div className="btn-container"></div>
        <article className="job-info">
          <h3>{jobToShow.position}</h3>
          <h4>{jobToShow.company}</h4>
          {jobs.map((job, index) => (
            <button key={job.id} onClick={() => setJobIndex(index)}>
              {job.company}
            </button>
          ))}
          <p className="job-date">{jobToShow.date}</p>
          {jobToShow.description.map((item) => (
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
