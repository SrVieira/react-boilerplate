import Head from 'next/head'

// Context
import { useAppContext } from '../../context/AppContext'

const Layout: React.FC = () => {
  const { title, description } = useAppContext()

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}

export default Layout
