// import * as React from "react";
// import { useStaticQuery, graphql } from "gatsby";

// /* Testing useStaticQuery()
// ------------------------------*/
// const ComponentName = () => {
//   const data = useStaticQuery(graphql`
//     query {
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
// };

// export default ComponentName;

//-----------------------------------------------------

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function FetchData() {
  const graphqlReq = graphql`
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

  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(graphqlReq);

  return (
    <>
      <h2>Title: {title}</h2>
    </>
  );
}
