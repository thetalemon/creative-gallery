import React, { Suspense } from 'react'
import '../../App.css'

export const documentProps = {
  title: 'ロールケーキの群れ - manasas p.js gallery',
  description: '挫折のクリスマス',
  img: 'https://creative-gallery-ten.vercel.app/ripple.png',
  url: 'https://creative-gallery-ten.vercel.app/ripple',
}

const createP5Component = (serverSide: boolean) =>
  serverSide && React.lazy(() => import('./rollcake'))

export function Page() {
  const Rollcake = createP5Component(typeof window !== `undefined`)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {Rollcake && <Rollcake />}
    </Suspense>
  )
}
