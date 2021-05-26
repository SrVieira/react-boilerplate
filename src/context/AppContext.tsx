import { createContext, useContext, useState, useCallback } from 'react'

// Interfaces
import { IContext } from '../interfaces/context.interface'

export const AppContext = createContext({})
export const useAppContext = (): any => useContext(AppContext)

const AppProvider = ({ children, title, description }: IContext): any => {
  const [drawerOpened, setDrawerOpened] = useState(true)

  const handleToggleDrawer = useCallback(() => {
    setDrawerOpened(!drawerOpened)
  }, [drawerOpened])

  const values = {
    title,
    description,
    drawerOpened,
    handleToggleDrawer,
  }

  return <AppContext.Provider value={{ ...values }}>{children}</AppContext.Provider>
}

export default AppProvider
