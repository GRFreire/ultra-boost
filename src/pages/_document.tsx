import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
            rel="stylesheet"
          />

          <meta name="author" content="GRFreire" />
          <meta
            name="description"
            content="This website is a fictional tennis landing page. The objective of the project was to know and test web development concepts such as SEO, responsiveness and accessibility for mobile devices."
          />
          <meta name="keywords" content="SHOE, SNEAKERS, ULTRA, BOOST" />

          {/* <link rel="icon" href="" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
