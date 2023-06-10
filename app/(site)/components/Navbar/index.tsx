import Link from 'next/link'
import { FiGithub, FiTwitter } from 'react-icons/fi'

interface NavLink {
  content: React.ReactNode
  href: string
  title: string
  target?: HTMLAnchorElement['target']
  className?: string
}

const links: NavLink[] = [
  {
    content: 'Blog',
    href: '/blogs',
    title: 'Blog',
    className: 'text-base',
  },
  {
    content: <FiTwitter />,
    href: 'https://twitter.com/wzono1',
    title: 'twitter/wzono1',
    target: '_blank',
  },
  {
    content: <FiGithub />,
    href: 'https://github.com/wzono',
    title: 'github/wzono',
    target: '_blank',
  },
]

const Navbar = () => {
  return (
    <div className="text-lg opacity-40 flex gap-5 items-center font-sans">
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          title={link.title}
          target={link.target}
          className={link.className}
        >
          {link.content}
        </Link>),
      )}
    </div>
  )
}

export default Navbar
