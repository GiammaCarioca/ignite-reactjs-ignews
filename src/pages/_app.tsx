import { AppProps } from 'next/app'
import { Head } from 'next/document'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
