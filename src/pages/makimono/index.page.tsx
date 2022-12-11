import React, { Suspense } from 'react'
import '../../App.css'

export const documentProps = {
  title: '巻物の群れ - manasas p.js gallery',
  description: '抹茶ロールケーキに憧れる巻物の群れ',
  img: 'https://creative-gallery-ten.vercel.app/makimono.png',
  url: 'https://creative-gallery-ten.vercel.app/makimono',
}

const createP5Component = (serverSide: boolean) =>
  serverSide && React.lazy(() => import('./p5'))

export function Page() {
  const P5 = createP5Component(typeof window !== `undefined`)

  return <Suspense fallback={<div>Loading...</div>}>{P5 && <P5 />}</Suspense>
}
