// Components
import { Seo } from '../Seo'

// Interfaces
import { ILayout } from '../../interfaces/layout.interface'

// Styles
import { GlobalStyles } from './styles'

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <div>
        <Seo />
        {children}
      </div>
    </>
  )
}

export default Layout
