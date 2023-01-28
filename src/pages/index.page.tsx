import React from 'react'
import '../base.css'
import '../index.css'
import {BASE_URL} from '../static'

export const documentProps = {
  title: 'manasas p.js gallery',
  description: 'まなさすのp5.js作品展示場。',
  img: `${BASE_URL}/top.png`,
  url: BASE_URL,
}

export const Page: React.FC = () => {
  return (
    <div className="App">
      <ul className='wrapper'>
        <li>
          <a href="/ripple">
            <div>
              <img src={`${BASE_URL}/ripple.png`}/>
              波紋
            </div>
          </a>
        </li>
        <li>
          <a href="/makimono">
            <div>
              <img src={`${BASE_URL}/makimono.png`}/>
              巻物の群れ
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}
