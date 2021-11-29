interface PostsQueryData {
  allMdx: {
    nodes: {
      excerpt: string
      fields: {
        slug: string
      }
      frontmatter: {
        title?: string
        description?: string
        featuredImage?: any
      }
    }[]
  }
}

interface PostQueryData {
  mdx: {
    id: string
    excerpt: string
    body: string
    timeToRead: number
    fields: {
      slug: string
    }
    frontmatter: {
      title?: string
      date?: string
      description?: string
      featuredImage?: any
      categories?: string[]
      tags?: string[]
    }
  }
}

interface PageQueryData {
  mdx: {
    id: string
    excerpt: string
    body: string
    timeToRead: number
    fields: {
      slug: string
    }
    frontmatter: {
      title?: string
      date?: string
      description?: string
    }
  }
}
