import { createContext, useState } from 'react'



const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  return (
    <AppContext.Provider value={[user, setUser]}>{children}
    </AppContext.Provider>
  )
}

export const AppContext = createContext();

export default UserProvider