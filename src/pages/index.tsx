import '../App.css'
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet-async"

function Home() {
  return (
    <>
      <Helmet
      title='manasas p.js gallery'
      meta={[
        { property: 'og:image', content: '/top.png' },
        { property: 'og:description', content: 'まなさすのp5.js作品展示場。' }
      ]}
      />
      <div className="App">
        <ul>
          <li><Link to="/ripple">波紋</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Home
