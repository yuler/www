const Footer = () => (
  <footer>
    <a href="https://github.com/yuler/www">[Source Code]</a>
    <style jsx>{`
      footer {
        font-size: .8rem;
      }
      a {
        color: #999;
        text-decoration: none;
      }
      @media (min-width: 500px) {
        footer {
          max-width: 42rem;
          margin: auto;
          padding: 20px 0;
        }
      }
    `}</style>
  </footer>
)

export default Footer