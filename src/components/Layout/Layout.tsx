// Components
import { Content } from '../Content'
import { TopBar } from '../TopBar'
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
        <TopBar />
        <SideBar />
        <Content>{children}</Content>
      </Container>
    </>
  )
}

export default Layout
