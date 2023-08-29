// import { graphql } from "gatsby";
// import React from "react";

// export default function TestingPageQuery(props) {
//   console.log("props = ", props);

//   const {
//     site: {
//       siteMetadata: { title },
//     },
//   } = props.data;

//   return <h2>Testing Page siteMetadata: {title}</h2>;
// }

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

//------------------------------------------------------------

import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Gallery from "../components/examples/Gallery";

export const query = graphql`
  query SiteData {
    # site {
    #   info: siteMetadata {
    #     title
    #     description
    #     inspiredBy
    #     author {
    #       name
    #       place
    #     }
    #     simpleData
    #     complexData {
    #       id
    #       email
    #       first_name
    #       gender
    #       last_name
    #       ip_address
    #     }
    #   }
    # }
    site {
      info: siteMetadata {
        title
        description
        inspiredBy
        author {
          name
          place
        }
        simpleData
        complexData {
          id
          email
          first_name
          gender
          last_name
          ip_address
        }
      }
    }
  }
`;

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

export default function TestingPageQuery(props) {
  // page query
  // console.log("props = ", props);
  // const title_1 = props.data.site.info.title;

  // static query
  const data = useStaticQuery(query);
  const title_2 = data.site.info.title;

  return (
    <Layout>
      <main className="page">
        <Gallery />
        <hr />
        {/* <h3>Testing Page Query: {title_1}</h3> */}
        <h3>Testing Static Query: {title_2} hello</h3>
      </main>
    </Layout>
  );
}
