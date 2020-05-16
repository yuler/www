import { AppProps } from 'next/app'
import "modern-normalize"

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default CustomApp