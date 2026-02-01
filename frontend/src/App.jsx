import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import MyTasks from "./components/MyTasks";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";

const App = () =>{
  const {showSidebar, setShowSidebar} = useContext(AppContext)
    
  return(
    <div>
    <div className="cursor-pointer p-2 fixed z-50 top-4 left-4">
                <ViewSidebarOutlinedIcon
                    onClick={() => setShowSidebar(true)}
                />
            </div>

            {showSidebar  && <Sidebar />}
    <Routes>
      
      <Route path="/" element={<Home />}/>
      <Route path="/myTasks" element={<MyTasks />}/>
      
    </Routes>
    </div>
  )
}

export default App