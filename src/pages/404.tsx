import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function NotFoundPage(pageProps: PageProps) {
  return (
    <Layout pageProps={pageProps}>
      <Seo title="صفحه یافت نشد" />
      <h1>صفحه مورد نظر شما یافت نشد</h1>
      <p>
        صفحه ای که دنبال آن هستید یافت نشد. ممکن است آدرس صفحه تغییر کرده و یا
        از بین رفته باشد.
      </p>
    </Layout>
  )
}
