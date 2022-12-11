import React, { Suspense } from 'react'
import '../../App.css'

export const documentProps = {
  title: '波紋 - manasas p.js gallery',
  description: '雨の日の地面って良いよね。',
  img: 'https://creative-gallery-ten.vercel.app/ripple.png',
  url: 'https://creative-gallery-ten.vercel.app/ripple',
}

const createP5Component = (serverSide: boolean) =>
  serverSide && React.lazy(() => import('./p5'))

export function Page() {
  const P5 = createP5Component(typeof window !== `undefined`)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {P5 && (
        <>
          <span>どこかをクリック</span>
          <P5 />
        </>
      )}
    </Suspense>
  )
}
