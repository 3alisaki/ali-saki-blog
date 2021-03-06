import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostsList from "../components/posts-list"

export default function HomeIndex(pageProps: PageProps<PostsQueryData>) {
  const { data } = pageProps

  return (
    <Layout pageProps={pageProps}>
      <Seo title="همه پست ها" />
      <PostsList postsQuery={data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { ne: "page" } } }
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
