import Link from 'next/link'
import Logo from './Logo'

const LINKS = [
  { name: 'Posts', url: '/posts' },
  // @TODO move to index page
  // { name: 'Email', url: 'mailto:is.yuler@gmail.com'},
  // { name: 'GitHub', url: 'https://github.com/yuler'},
  // { name: 'Twitter', url: 'https://twitter/isyuler'},
]

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a href="/">
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          {LINKS.map(link => (
            <li key={link.name}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        nav {
          margin-left: -10px;
          padding: 0;
        }
        ul {
          padding: 0;
          display: flex;
          list-style: none;
        }
        ul li a {
          padding: 0 10px;
          height: 40px;
          line-height: 40px;
          color: black;
          text-align: center;
          text-decoration: none;
          display: inline-flex;
          transition: 150ms background-color ease;
        }
        @media (min-width: 500px) {
          header {
            max-width: 42rem;
            margin: auto;
            padding: 20px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          nav {
            padding: 10px 0 10px 5px;
          }
          a:hover {
            color: white!important;
            background-color: black;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
