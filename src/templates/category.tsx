import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostsList from "../components/posts-list"

export default function CategoryIndex(
  pageProps: PageProps<PostsQueryData, { category: string }>
) {
  const { data } = pageProps

  return (
    <Layout pageProps={pageProps}>
      <Seo title={`پست های دسته "${pageProps.pageContext.category}"`} />
      <h1>پست های دسته "{pageProps.pageContext.category}"</h1>
      <PostsList postsQuery={data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostsByCategory($category: [String]!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { categories: { in: $category }, template: { ne: "page" } }
      }
    ) {
      nodes {
        excerpt(truncate: true, pruneLength: 160)
        fields {
          slug
        }
        frontmatter {
          title
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 50, height: 50)
            }
          }
        }
      }
    }
  }
`
