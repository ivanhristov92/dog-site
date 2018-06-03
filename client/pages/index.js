import Link from 'next/link'

export default ()=>(
  <div>
    <Link prefetch href="/new-ad">
      <a>new ad</a>
    </Link>{' '}
  </div>
)
