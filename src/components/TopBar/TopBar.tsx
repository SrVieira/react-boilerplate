// Context
import { useAppContext } from '../../context/AppContext'

// Material UI
import { Toolbar, AppBar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const TopBar: React.FC = () => {
  const { handleToggleDrawer } = useAppContext()

  return (
    <AppBar position="absolute">
      <Toolbar>
        <IconButton>
          <MenuIcon onClick={handleToggleDrawer} />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap>
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
