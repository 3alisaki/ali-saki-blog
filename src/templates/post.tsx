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
    header: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "2rem",
    },
    featuredImage: {
      width: "50px",
      height: "50px",
    },
    title: {
      margin: "1rem 0 0",
    },
    metaData: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    categories: {
      display: "flex",
      flexDirection: "row",
      gap: "0.5rem",
    },
    tags: {
      display: "flex",
      flexDirection: "row",
      gap: "0.5rem",
    },
    tag: {
      padding: "0.3rem 0.8rem",
      borderRadius: "4px",
      fontSize: "0.9rem",
      "@media (prefers-color-scheme: light)": {
        backgroundColor: "#f2f2f2",
        color: "#5a5a5a",
      },
      "@media (prefers-color-scheme: dark)": {
        backgroundColor: "#1a1a1a",
        color: "#b3b9c5",
      },
    },
    content: {
      lineHeight: "2",
    },
    "@media (min-width: 620px)": {
      header: {
        flexDirection: "row",
        gap: "2rem",
        marginBottom: "5rem",
      },
      featuredImage: {
        width: "150px",
        height: "150px",
      },
      content: {
        fontSize: "1.125rem",
      },
    },
  },
  { name: "SingleArticle" }
)

export default function PostTemplate(pageProps: PageProps<PostQueryData>) {
  const classes = useStyles()

  const { data } = pageProps

  const post = data.mdx
  const title = post.frontmatter.title || post.fields.slug
  const featuredImage = getImage(post.frontmatter.featuredImage)

  const categories: string[] = post.frontmatter.categories || []
  const tags: string[] = post.frontmatter.tags || []

  return (
    <Layout pageProps={pageProps}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header className={classes.header}>
          {featuredImage && (
            <GatsbyImage
              image={featuredImage}
              alt=""
              className={classes.featuredImage}
            />
          )}
          <div className={classes.metaData}>
            <h1 className={classes.title}>{title}</h1>
            {post.frontmatter.date && (
              <time>
                {moment(post.frontmatter.date).format("dddd, D MMMM YYYY")}
              </time>
            )}
            <span>
              زمان خواندن:{" "}
              {moment.duration(post.timeToRead, "minutes").humanize()}
            </span>
            {categories.length > 0 && (
              <div className={classes.categories}>
                دسته‌ها:
                {categories.map((category, index) => (
                  <Link
                    key={category}
                    to={`/categories/${encodeURI(category)}/`}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}
            {tags.length > 0 && (
              <div className={classes.tags}>
                برچسب‌ها:
                {tags.map(tag => (
                  <Link
                    key={tag}
                    to={`/tags/${encodeURI(tag)}/`}
                    className={classes.tag}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </header>
        <div className={classes.content}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostBySlug($id: String!) {
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
        featuredImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 150, height: 150)
          }
        }
        categories
        tags
      }
    }
  }
`
