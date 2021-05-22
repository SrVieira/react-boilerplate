import { NextPage } from 'next'

// Components
import { Layout } from '../components/Layout'

// Context
import AppProvider from '../context/AppContext'

const seo = {
  title: 'React Boilerplate - Home',
  description: 'React boilerplate with Typescript',
}

const Home: NextPage = () => (
  <AppProvider title={seo.title} description={seo.description}>
    <Layout>Home</Layout>
  </AppProvider>
)

export default Home
