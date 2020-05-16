import React from 'react'
import Head from 'next/head'

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
      {children}

      <style jsx>{`
        div {
          padding: 1rem;
          margin: 0 auto;
          max-width: 42rem;
          min-height: 100vh;
        }  
      `}</style>
    </div>
  )
}

export default Layout