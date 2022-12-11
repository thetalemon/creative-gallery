import '../App.css'

export const documentProps = {
  title: 'manasas p.js gallery',
  description: 'まなさすのp5.js作品展示場。',
  img: 'https://creative-gallery-ten.vercel.app/top.png',
  url: 'https://creative-gallery-ten.vercel.app'
}

export function Page() {
  return (
    <>
      <div className="App">
        <ul>
          <li><a href="/ripple">波紋</a></li>
        </ul>
      </div>
    </>
  )
}

