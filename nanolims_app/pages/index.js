// index.js
import Link from 'next/link'

function Home() {

  return (
    <div >
      <h1>The Home</h1>
      <ul>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home;