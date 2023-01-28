import '../../base.css'
import {BASE_URL} from '../../static'
import { ClientOnly } from '../../component/clientOnly'

export const documentProps = {
  title: '巻物の群れ - manasas p.js gallery',
  description: '抹茶ロールケーキに憧れる巻物の群れ',
  img: `${BASE_URL}/makimono.png`,
  url: `${BASE_URL}/makimono`,
}

export function Page() {
  return <ClientOnly load={() => import('./p5')} />
}
