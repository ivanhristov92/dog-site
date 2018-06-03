import Link from 'next/link'


export default () =>(
  <div>
    <div>
    <Link prefetch href="/">
      <a>home</a>
    </Link>
    </div>
    <div>

    <Link prefetch href="/new-ad">
      <a>new ad</a>
    </Link>
    </div>
    <div>

    <Link prefetch href="/ads">
      <a>ads</a>
    </Link>
    </div>
  </div>
)
