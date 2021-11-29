import * as React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostsList from "../components/posts-list"

export default function TagIndex(
  pageProps: PageProps<PostsQueryData, { tag: string }>
) {
  const { data } = pageProps

  return (
    <Layout pageProps={pageProps}>
      <Seo title={`پست هایی با برچسب "${pageProps.pageContext.tag}"`} />
      <h1>پست هایی با برچسب "{pageProps.pageContext.tag}"</h1>
      <PostsList postsQuery={data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostsByTag($tag: [String]!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: $tag }, template: { ne: "page" } } }
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
