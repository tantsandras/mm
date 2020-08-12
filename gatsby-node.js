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


    const postsPerPage = 4;
    const numPages = Math.ceil(data.podcastEpisode.edges.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
        actions.createPage({
            path: i === 0 ? `/episodes/` : `/episodes/${i + 1}`,
            component: path.resolve('./src/templates/episodes-list-template.js'),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1
            },
        });
    });
}




async function getPageData(graphql) {
    return await graphql(`
    {
      podcastEpisode: allMarkdownRemark(
        sort: { fields: [frontmatter___serial], order: DESC }
        limit: 1000
      ) {
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



