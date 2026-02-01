import { createContext, useState } from "react";

export  const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [user, setUser] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)
    const [taskTitle, setTaskTitle] = useState("")
    const [taskList, setTaskList] = useState([])
    const value = {
        user, setUser , showSidebar, setShowSidebar, taskTitle, setTaskTitle, taskList, setTaskList
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider