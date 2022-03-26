import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
    const router = useRouter();
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <button onClick={ () => router.push('/about') }>
          <a>About Us</a>
        </button>
      </li>
      <li>
        <Link 
            href={{
                pathname: `/blog/[id]`,
                query: { id: 1 }
            }}
        >
          <a>Blog Post</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home