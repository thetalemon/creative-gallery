import '../App.css'
// import { Link } from 'react-router-dom'
// import {Helmet} from "react-helmet-async"

export const documentProps = {
  title: 'manasas p.js gallery',
  description: 'まなさすのp5.js作品展示場。',
  img: 'https://creative-gallery-ten.vercel.app/top.png',
  url: 'https://creative-gallery-ten.vercel.app'
}

export function Page() {
  return (
    <>
      {/* <Helmet
      title='manasas p.js gallery'
      meta={[
        { property: 'og:image', content: '/top.png' },
        { property: 'og:description', content: 'まなさすのp5.js作品展示場。' }
      ]}
      /> */}
      <div className="App">
        <ul>
          {/* <li><Link to="/ripple">波紋</Link></li> */}
          <li><a href="/ripple">波紋</a></li>
        </ul>
      </div>
    </>
  )
}

