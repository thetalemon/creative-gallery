import React, { Suspense } from 'react'
import '../../base.css'
import {BASE_URL} from '../../static'

export const documentProps = {
  title: '巻物の群れ - manasas p.js gallery',
  description: '抹茶ロールケーキに憧れる巻物の群れ',
  img: `${BASE_URL}/makimono.png`,
  url: `${BASE_URL}/makimono`,
}

const createP5Component = (serverSide: boolean) =>
  serverSide && React.lazy(() => import('./p5'))

export function Page() {
  const P5 = createP5Component(typeof window !== `undefined`)

  return <Suspense fallback={<div>Loading...</div>}>{P5 && <P5 />}</Suspense>
}
