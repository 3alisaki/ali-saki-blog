/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SeoProps {
  description?: string
  lang?: string
  meta?: Record<string, string>[]
  title?: string
}

export default function Seo({
  description = "",
  lang = "fa",
  meta = [],
  title,
}: SeoProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const siteTitle = site.siteMetadata.title

  const defaultMeta: Record<string, string>[] = [
    {
      name: "description",
      content: metaDescription,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: metaDescription,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: metaDescription,
    },
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || siteTitle}
      titleTemplate={title ? `%s | ${siteTitle}` : undefined}
      meta={defaultMeta.concat(meta)}
    />
  )
}
