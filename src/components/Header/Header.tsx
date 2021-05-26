// Material UI
import { Toolbar, AppBar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const Header: React.FC = () => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap>
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
