import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { createUseStyles } from "react-jss"
import moment from "moment"
import "moment/locale/fa"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Seo from "../components/seo"

const useStyles = createUseStyles(
  {
    title: {
      margin: "1rem 0",
    },
    content: {
      lineHeight: "2",
    },
    "@media (min-width: 620px)": {
      header: {
        marginBottom: "2rem",
      },
      content: {
        fontSize: "1.125rem",
      },
    },
  },
  { name: "SinglePage" }
)

export default function PageTemplate(pageProps: PageProps<PageQueryData>) {
  const classes = useStyles()

  const { data } = pageProps

  const page = data.mdx
  const title = page.frontmatter.title || page.fields.slug

  return (
    <Layout pageProps={pageProps}>
      <Seo
        title={page.frontmatter.title}
        description={page.frontmatter.description || page.excerpt}
      />
      <article>
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.content}>
          <MDXRenderer>{page.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PageBySlug($id: String!) {
    mdx(id: { eq: $id }) {
      id
      excerpt(truncate: true, pruneLength: 160)
      body
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date
        description
      }
    }
  }
`
