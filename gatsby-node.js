const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

/** @type {import('gatsby').GatsbyNode} */
module.exports = {
  createPages: async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    // Define a template for blog post
    const postTemplate = path.resolve(`./src/templates/post.tsx`)
    const pageTemplate = path.resolve(`./src/templates/page.tsx`)
    const categoryTemplate = path.resolve(`./src/templates/category.tsx`)
    const tagTemplate = path.resolve(`./src/templates/tag.tsx`)

    // Get all markdown blog posts sorted by date
    const result = await graphql(
      `
        {
          allMdx(
            sort: { fields: [frontmatter___date], order: ASC }
            limit: 1000
          ) {
            nodes {
              id
              fields {
                slug
              }
              frontmatter {
                categories
                tags
                template
              }
            }
          }
        }
      `
    )

    if (result.errors) {
      reporter.panicOnBuild(
        `There was an error loading your blog posts`,
        result.errors
      )
      return
    }

    const posts = result.data.allMdx.nodes

    const categories = new Set()
    const tags = new Set()

    posts.forEach(post => {
      if (post.frontmatter.categories) {
        post.frontmatter.categories.forEach(category => {
          categories.add(category)
        })
      }

      if (post.frontmatter.tags) {
        post.frontmatter.tags.forEach(tag => {
          tags.add(tag)
        })
      }

      createPage({
        path: post.fields.slug,
        component:
          post.frontmatter.template === "page" ? pageTemplate : postTemplate,
        context: {
          id: post.id,
        },
      })
    })

    categories.forEach(category => {
      createPage({
        path: `/categories/${category}/`,
        component: categoryTemplate,
        context: {
          category,
        },
      })
    })

    tags.forEach(tag => {
      createPage({
        path: `/tags/${tag}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })
  },
  onCreateNode: ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === "Mdx") {
      createNodeField({
        node,
        name: "slug",
        value: createFilePath({ node, getNode }),
      })
    }
  },
  onCreateBabelConfig: ({ actions }) => {
    actions.setBabelPreset({
      name: "babel-preset-gatsby",
      options: {
        reactRuntime: "automatic",
      },
    })
  },
}
