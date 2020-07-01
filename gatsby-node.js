/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, getNode, actions }) => {
    let parentNode = getNode(node.parent)
    if (node.internal.type === "MarkdownRemark") {
        if (parentNode.sourceInstanceName === "episodes") {
            let slug = createFilePath({ node, getNode })
            slug = slug.replace(/\//g, "")
            actions.createNodeField({ node, name: "slug", value: slug })
        }
    }
}

exports.createPages = async ({ graphql, actions }) => {

    const { data } = await getPageData(graphql)

    data.podcastEpisode.edges.forEach(({ node }) => {
        const { slug } = node.fields;
        actions.createPage({
            path: `/episode/${slug}`,
            component: path.resolve("./src/templates/episode-template.js"),
            context: { slug: slug },
        })
    })
}

async function getPageData(graphql) {
    return await graphql(`
    {
      podcastEpisode: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
}

// exports.onCreatePage = async ({ page, actions }) => {
//     const { createPage } = actions

//     if (page.path.match(/^\/episode/)) {
//         createPage({
//             path: "/episode/",
//             matchPath: "/episode/*",
//             component: path.resolve(`src/pages/episode.js`),
//         })
//     }
// }