// Components
import { Content } from '../Content'
import { Seo } from '../Seo'
import { SideBar } from '../SideBar'

// Interfaces
import { ILayout } from '../../interfaces/layout.interface'

// Material UI
import AppBar from '@material-ui/core/AppBar'

// Styles
import { Container, GlobalStyles } from './styles'

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Seo />
        <AppBar position="absolute">appbar</AppBar>
        <SideBar />
        <Content>{children}</Content>
      </Container>
    </>
  )
}

export default Layout
