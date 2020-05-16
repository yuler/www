import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'

const IndexPage = () => (
  <Layout title="Yu Le">
    <Header />
    <main>
      <h2>Hi, I'm YuLe.</h2>
    </main>
    <Footer />

    <style jsx>{`
      .layout {
        display: flex;
        flex-direction: column;
      }
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
  </Layout>
)

export default IndexPage
