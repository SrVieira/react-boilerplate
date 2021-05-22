import { createContext, useContext } from 'react'

// Interfaces
import { IContext } from '../interfaces/context.interface'

export const AppContext = createContext({})
export const useAppContext = (): any => useContext(AppContext)

const AppProvider = ({ children, title, description }: IContext) => {
  const values = {
    title,
    description,
  }

  return <AppContext.Provider value={{ ...values }}>{children}</AppContext.Provider>
}

export default AppProvider
