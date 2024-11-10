import { createContext, useState } from "react";

interface IModContext {
    modal: boolean
    open: () => void
    close: () => void
}

export const ModContext = createContext<IModContext>({
    modal: false,
    open: () => {},
    close: () => {}
})

export const ModState = ({children}: {children: React.ReactNode}) => {
    const [modal, setModal] = useState(false)
    const open = () => setModal(true)
    const close = () => setModal(false)
    
    return (
       <ModContext.Provider value={{modal, open, close}}>
        {children}
       </ModContext.Provider> 
    )
}