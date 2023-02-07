import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <h1>This is The About Page</h1>
      <Link to="/">Go back Home </Link>
    </Layout>
  );
};

export default About;
