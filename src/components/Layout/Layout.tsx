// Components
import { Content } from '../Content'
import { Header } from '../Header'
import { Seo } from '../Seo'
import { SideBar } from '../SideBar'

// Interfaces
import { ILayout } from '../../interfaces/layout.interface'

// Styles
import { Container, GlobalStyles } from './styles'

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Seo />
        <Header />
        <SideBar />
        <Content>{children}</Content>
      </Container>
    </>
  )
}

export default Layout
