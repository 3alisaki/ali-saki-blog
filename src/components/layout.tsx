import { PropsWithChildren, useEffect, useState } from "react"
import { PageProps } from "gatsby"
import { Helmet } from "react-helmet"
import { createUseStyles } from "react-jss"

import Header from "./header"
import Footer from "./footer"

interface LayoutProps {
  pageProps: PageProps
}

const useStyles = createUseStyles(
  {
    container: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    content: {
      flex: 1,
      maxWidth: "50rem",
      width: "100%",
      boxSizing: "border-box",
      padding: "0 1.5rem",
      margin: "1.5rem auto",
    },
    "@media (min-width: 620px)": {
      content: {
        padding: "0 2rem",
        margin: "2.5rem auto",
      },
    },
  },
  { name: "Layout" }
)

declare var __PATH_PREFIX__: string

export default function Layout({
  children,
  pageProps,
}: PropsWithChildren<LayoutProps>) {
  const classes = useStyles()

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = pageProps?.location.pathname === rootPath

  return (
    <div className={classes.container}>
      <Helmet>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#ffffff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#131313"
        />
      </Helmet>
      <Header isRootPath={isRootPath} />
      <main className={classes.content}>{children}</main>
      <Footer />
    </div>
  )
}
