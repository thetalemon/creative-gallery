import '../../base.css'
import { BASE_URL } from '../../static'
import { ClientOnly } from '../../component/clientOnly'

export const documentProps = {
  title: '波紋 - manasas p.js gallery',
  description: '雨の日の地面って良いよね。',
  img: `${BASE_URL}/ripple.png`,
  url: `${BASE_URL}/ripple`,
}

export function Page() {
  return (
    <>
      <p>どこかをクリック</p>
      <ClientOnly load={() => import('./p5')} />
    </>
  )
}
