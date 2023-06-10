import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex place-items-center gap-2 lg:pointer-events-auto"
      rel="noopener noreferrer"
    >
      <Image
        src="/vercel.svg"
        alt="wzono"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </Link>
  )
}

export default Logo
