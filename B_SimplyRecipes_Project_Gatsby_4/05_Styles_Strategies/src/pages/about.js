import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "./../styles-modules/About.module.css";

const about = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h2>This is The About Page</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illum
          cupiditate iusto suscipit laudantium. Consectetur ullam eius accusamus
          rem nam ut. Ipsum illo modi veniam sint libero ipsam rerum voluptatem.
        </p>
      </div>
      <Link to="/">Go back Home </Link>
    </Layout>
  );
};

export default about;
