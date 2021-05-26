// Context
import { useAppContext } from '../../context/AppContext'

// Material UI
import { Drawer } from '@material-ui/core'

const SideBar: React.FC = () => {
  const { drawerOpened } = useAppContext()

  return (
    <Drawer variant="permanent" open={drawerOpened}>
      teste <div>teste</div>
    </Drawer>
  )
}

export default SideBar
