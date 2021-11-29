import { Link } from "gatsby"
import { createUseStyles } from "react-jss"

import config from "../../config.json"

const useStyles = createUseStyles(
  {
    container: {
      display: "flex",
      flexDirection: "row",
      height: "55px",
      boxShadow: "1px 2px 18px rgba(0, 0, 0, 0.1)",
      "@media (prefers-color-scheme: light)": {
        backgroundColor: "#ffffff",
      },
      "@media (prefers-color-scheme: dark)": {
        backgroundColor: "#131313",
      },
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
    navigation: {
      display: "flex",
      flexDirection: "row",
      gap: "1rem",
    },
  },
  { name: "Footer" }
)

export default function footer() {
  const classes = useStyles()

  return (
    <footer className={classes.container}>
      <div className={classes.root}>
        <nav className={classes.navigation}>
          {config.menus.footer.map(item => {
            return <Link key={item.name} to={item.to}>{item.name}</Link>
          })}
        </nav>
      </div>
    </footer>
  )
}
