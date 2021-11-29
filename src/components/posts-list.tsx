import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import moment from "moment"
import "moment/locale/fa"
import { createUseStyles } from "react-jss"

const useStyles = createUseStyles(
  {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
    },
    header: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      marginBottom: "1rem",
      alignItems: "center",
    },
    title: {
      margin: "1rem 0 0.5rem",
    },
    excerpt: {
      lineHeight: "2",
    },
    "@media (min-width: 620px)": {
      excerpt: {
        fontSize: "1.125rem",
      },
    },
  },
  { name: "PostsList" }
)

interface PostsListProps {
  postsQuery: PostsQueryData
}

export default function PostsList({ postsQuery }: PostsListProps) {
  const classes = useStyles()

  const posts = postsQuery.allMdx.nodes

  return (
    <div className={classes.container}>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        const featuredImage = getImage(post.frontmatter.featuredImage)

        return (
          <article key={post.fields.slug}>
            <header className={classes.header}>
              {featuredImage && (
                <div>
                  <GatsbyImage image={featuredImage} alt={title} />
                </div>
              )}
              <h2 className={classes.title}>
                <Link to={post.fields.slug}>{title}</Link>
              </h2>
            </header>
            <section className={classes.excerpt}>
              {post.frontmatter.description || post.excerpt}
            </section>
          </article>
        )
      })}
    </div>
  )
}
