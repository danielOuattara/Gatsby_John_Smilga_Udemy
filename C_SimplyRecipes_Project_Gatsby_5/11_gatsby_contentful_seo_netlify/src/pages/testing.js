import React from "react";
import Layout from "../components/Layout";
import Gallery from "../components/examples/Gallery";

export default function TestingPageQuery(props) {
  // console.log("props ===> ", props);
  // const {
  //   site: {
  //     siteMetadata: { title },
  //   },
  // } = props.data;

  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
      {/* <h2>Testing Page siteMetadata: {title}</h2> */}
    </Layout>
  );
}

// export const query = graphql`
//   query SiteDataPageQuery {
//     site {
//       siteMetadata {
//         title
//         description
//         inspiredBy
//         author {
//           name
//           place
//         }
//         simpleData
//         complexData {
//           id
//           email
//           first_name
//           gender
//           last_name
//           ip_address
//         }
//       }
//     }
//   }
// `;
