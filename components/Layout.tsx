import React from 'react'
import Head from 'next/head'

type IProps = {
  title?: string
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}

      <style jsx>{`
        main {
          margin: 0 auto;
          max-width: 42rem;
        }  
      `}</style>
    </main>
  )
}

export default Layout