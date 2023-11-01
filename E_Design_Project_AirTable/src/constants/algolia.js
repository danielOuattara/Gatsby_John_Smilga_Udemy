/* 

FROM DOCS
************

// gatsby-config.js
const myQuery = `
  query {
    pages: allSitePage {
      nodes {
        # querying id is required
        id
        component
        path
        componentChunkName
        jsonName
        internal {
          # querying internal.contentDigest is required
          contentDigest
          type
          owner
        }
      }
    }
  }
`;

const queries = [
  {
    query: myQuery,
    queryVariables: {}, // optional. Allows you to use graphql query variables in the query
    transformer: ({ data }) => data.pages.nodes, // optional
    indexName: 'index name to target', // overrides main index name, optional
    settings: {
      // optional, any index settings
      // Note: by supplying settings, you will overwrite all existing settings on the index
    },
    mergeSettings: false, // optional, defaults to false. See notes on mergeSettings below
  },
];

END OF DOCS
************
*/

const airtableProjectsQuery = `
  query {
    projects: allAirtable(filter: {table: {eq: "projects"}}) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        internal {
            contentDigest
            owner
            type
        }
      }
    }
  }
`;

function pageToAlgoliaRecords(item) {
  return {
    objectID: item.id,
    name: item.data.name,
    type: item.data.type,
    date: item.data.date,
    image: { ...item.data.image.localFiles[0].childImageSharp.gastbyImageData },
  };
}

const queries = [
  {
    query: airtableProjectsQuery,
    transformer: ({ data }) => data.projects.nodes.map(pageToAlgoliaRecords),
  },
];

module.exports = queries;
