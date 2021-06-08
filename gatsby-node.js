// exports.createPages = async ({ actions, graphql }) => {
//   const { data } = graphql`
//     query {
//       allMdx(sort: { fields: frontmatter___date, order: DESC }) {
//         nodes {
//           frontmatter {
//             date
//             excerpt
//             slug
//             title
//           }
//           id
//         }
//       }
//     }
//   `

//   // create paginated posts

//   const postPerPage = 3
//   const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

//   Array.from({ length: numPages }).forEach((_, i) => {
//     actions.createPages({
//       path: i === 0 ? `/` : `/${i + 1}`,
//       component: require.resolve("./src/templates/allPosts.js"),
//       context: {
//         limit: postPerPage,
//         skip: i * postPerPage,
//         numpages,
//         currentPage: i + 1,
//       },
//     })
//   })

//   // create single post
//   data.allMdx.edges.forEach(edge => {
//     const slug = edge.node.frontmatter.slug
//     const id = edge.node.id
//     actions.createPages({
//       path: slug,
//       component: require.resolve(`./src/templates/singlePost.js`),
//       context: {
//         id,
//       },
//     })
//   })
// }
