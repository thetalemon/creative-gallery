import ReactDOMServer from 'react-dom/server'
import { renderToStream } from 'react-streaming/server'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import type { PageContextServer } from './types'

export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname', 'someAsyncProps']

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  // const pageHtml = ReactDOMServer.renderToString(
  //   <PageShell pageContext={pageContext}>
  //     <Page {...pageProps} />
  //   </PageShell>
  // )
  
  const stream = await renderToStream(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
    // We don't need react-streaming for this app. (We use it merely to showcase that VPS can handle react-streaming with a pre-rendered app. Note that using react-streaming with pre-rendering can make sense if we want to be able to use React's latest <Suspsense> techniques.)
    { disable: true }
  )

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'manasas p.js gallery'
  const desc =
    (documentProps && documentProps.description) ||
    'まなさすのp5.js作品展示場。'
  const img =
    (documentProps && documentProps.img) ||
    'https://creative-gallery-ten.vercel.app/top.png'
  const url =
    (documentProps && documentProps.url) ||
    'https://creative-gallery-ten.vercel.app'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/mylogo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thetalemon">
        <meta name="twitter:creator" content="@thetalemon">
        <meta name="twitter:description" content="${desc}" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:image" content="${img}" />
        <meta property="og:image" content="${img}" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${desc}" />
        <meta property="og:url" content="${url}">
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  }
}
