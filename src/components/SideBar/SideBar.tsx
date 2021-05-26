// Context
import { useAppContext } from '../../context/AppContext'

// Enums
import { Variants } from '../../enums/variants.enum'

// Material UI
// import { Drawer } from '@material-ui/core'

// Styles
import { Container } from './styles'

const SideBar: React.FC = () => {
  const { drawerOpened } = useAppContext()

  return (
    <Container variant={Variants.PERMANENT} open={drawerOpened}>
      teste <div>teste</div>
    </Container>
  )
}

export default SideBar
