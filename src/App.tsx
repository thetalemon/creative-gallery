import { FC, Suspense } from 'react'

import { useRoutes } from 'react-router-dom'
import routes from '~react-pages'

export const App: FC = () => {
  const Routes = () => useRoutes(routes)
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}
