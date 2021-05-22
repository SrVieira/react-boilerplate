// Components
import { Seo } from '../Seo'

// Interfaces
import { ILayout } from '../../interfaces/layout.interface'

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Seo />
      {children}
    </div>
  )
}

export default Layout
