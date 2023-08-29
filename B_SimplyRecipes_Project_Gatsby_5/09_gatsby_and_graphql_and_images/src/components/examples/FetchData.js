// import * as React from "react";
// import { useStaticQuery, graphql } from "gatsby";

/* Testing useStaticQuery() 
-----------------------------*/

// export default function FetchData() {
//   const data = useStaticQuery(graphql`
//     query SiteData {
//       site {
//         siteMetadata {
//           title
//           description
//           inspiredBy
//           author {
//             name
//             place
//           }
//           simpleData
//           complexData {
//             id
//             email
//             first_name
//             gender
//             last_name
//             ip_address
//           }
//         }
//       }
//     }
//   `);
//   // return <pre>{JSON.stringify(data, null, 2)}</pre>;

//   console.log("data ==> ", data);

//   return (
//     <div>
//       <h2>{data.site.siteMetadata.author.name}</h2>
//       <div>
//         {data.site.siteMetadata.complexData.map((person) => (
//           <p key={person.id}>
//             {person.first_name} : {person.email}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }

//--------------------------------------------------------------

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

/* Testing useStaticQuery() 
-----------------------------*/

const graphqlQuery = graphql`
  query SiteData {
    site {
      # using 'info' as alias for siteMetadata
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

export default function FetchData() {
  // site is the alias declared above
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(graphqlQuery);

  return (
    <>
      <h2>Title: {title}</h2>
    </>
  );
}
