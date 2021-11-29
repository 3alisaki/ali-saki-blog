import { graphql, Link, useStaticQuery } from "gatsby"
import { useState } from "react"
import { createUseStyles } from "react-jss"

import LogoSrc from "../images/gatsby-icon.png"

const useStyles = createUseStyles(
  {
    container: {
      display: "flex",
      flexDirection: "row",
      height: "55px",
      position: "fixed",
      top: 0,
      right: 0,
      left: 0,
      zIndex: 10,
      boxShadow: "1px 2px 18px rgba(0, 0, 0, 0.1)",
      "@media (prefers-color-scheme: light)": {
        backgroundColor: "#ffffff",
      },
      "@media (prefers-color-scheme: dark)": {
        backgroundColor: "#131313",
      },
    },
    spacer: {
      height: "55px",
    },
    root: {
      flex: 1,
      maxWidth: "50rem",
      width: "100%",
      boxSizing: "border-box",
      padding: "0 1.5rem",
      margin: "0 auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    siteInfo: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
      alignItems: "center",
      fontSize: "1.25rem",
      a: {
        textDecoration: "none",
      },
      "@media (prefers-color-scheme: light)": {
        color: "#333",
        a: {
          "&:hover": {
            color: "#000",
          },
        },
      },
      "@media (prefers-color-scheme: dark)": {
        color: "#c1c6d0",
        a: {
          "&:hover": {
            color: "#eee",
          },
        },
      },
    },
    "@media (min-width: 620px)": {
      container: {
        height: "60px",
      },
      spacer: {
        height: "60px",
      },
      root: {
        padding: "0 2rem",
      },
    },
  },
  { name: "Header" }
)

interface HeaderProps {
  isRootPath: boolean
}

declare var __PATH_PREFIX__: string

export default function Header({ isRootPath }: HeaderProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const classes = useStyles()

  const title = site.siteMetadata?.title

  const siteInfo = (
    <>
      <img alt={title} width={30} height={30} src={LogoSrc} />
      <span>{title}</span>
    </>
  )

  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <header className={classes.container}>
        <div className={classes.root}>
          {isRootPath ? (
            <div className={classes.siteInfo}>{siteInfo}</div>
          ) : (
            <Link className={classes.siteInfo} to="/">
              {siteInfo}
            </Link>
          )}
        </div>
      </header>
      <div className={classes.spacer} />
    </>
  )
}
