import React from 'react'
import { PageContextProvider } from './usePageContext'
import { Layout } from './Layout'
import type { PageContext } from './types'
import './PageShell.css'

export { PageShell }

function PageShell({
  children,
  pageContext,
}: {
  children: React.ReactNode
  pageContext: PageContext
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          {children}
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  )
}