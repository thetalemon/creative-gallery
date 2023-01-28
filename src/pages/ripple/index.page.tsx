import React, { Suspense } from 'react'
import '../../base.css'
import {BASE_URL} from '../../static'

export const documentProps = {
  title: '波紋 - manasas p.js gallery',
  description: '雨の日の地面って良いよね。',
  img: `${BASE_URL}/ripple.png`,
  url: `${BASE_URL}/ripple`,
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
