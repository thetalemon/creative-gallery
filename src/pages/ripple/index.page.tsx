import '../../App.css'
import { Helmet } from "react-helmet-async"
import React, { Suspense } from "react"

// const { Ripple } = React.lazy(() => import('./ripple'))
const Ripple = React.lazy(() => import('./ripple'));

export const documentProps = {
  title: '波紋 - manasas p.js gallery',
  description: '雨の日の地面って良いよね。',
  img: '/ripple.png'
}

export function Page() {

  return (
    <>
      {/* <Helmet
      title='波紋 - manasas p.js gallery'
      meta={[
        { property: 'og:image', content: '/ripple.png' },
        { property: 'og:description', content: '波紋。もとい、雨の日。' }
      ]}
      /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Ripple/>
      </Suspense>
    </>
  )
}
