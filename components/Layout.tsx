import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

type IProps = {
  title?: string
  className?: string
}

const Layout: React.FC<IProps> = ({ className, children }) => {
  return (
    <div className={className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />
      <main>
        {children}
      </main>
      <Footer />

      <style jsx>{`
        main {
          min-height: calc(100vh - 200px);
          flex: 1;
        }
        @media (min-width: 500px) {
          main {
            max-width: 42rem;
            margin: auto;
            padding: 20px 0;
          }
        }
      `}</style>
    </div>
  )
}

export default Layout