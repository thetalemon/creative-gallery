import React, { Suspense } from 'react'
import '../../App.css'

export const documentProps = {
  title: '波紋 - manasas p.js gallery',
  description: '雨の日の地面って良いよね。',
  img: 'https://creative-gallery-ten.vercel.app/ripple.png',
  url: 'https://creative-gallery-ten.vercel.app/ripple',
}

const createRipple = (serverSide: boolean) =>
  serverSide && React.lazy(() => import('./ripple'))

export function Page() {
  const Ripple = createRipple(typeof window !== `undefined`)

  return (
    <Suspense fallback={<div>Loading...</div>}>{Ripple && <Ripple />}</Suspense>
  )
}
