import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import Sidebar from "./Sidebar";

const Home = () => {
    const { showSidebar, setShowSidebar } = useContext(AppContext);
    const {taskTitle, setTaskTitle} = useContext(AppContext)
    const [taskDesc, setTaskDesc] = useState("")
    const {taskList, setTaskList} = useContext(AppContext)
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const res = await fetch("http://localhost:3000/tasks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: taskTitle,
            description: taskDesc
          })
        });
      
        const data = await res.json();
      
        setTaskList([...taskList, data]); 
        setTaskTitle("");
        setTaskDesc("");
      };
      

    return (
        <div className="flex relative min-h-screen">
           
           
                    
                <div className="justify-center items-center mx-auto">
                    <header className="flex flex-col text-center">
                        <p className="font-bold text-3xl">iTaskManager</p>
                        <p className="font-semibold">
                            Having trouble while managing daily routine? Let task manager help you.
                        </p>
                    </header>

                    <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                        <div className="flex flex-col p-3">
                            Task Title :-
                            <input
                                value={taskTitle}
                                onChange={e => setTaskTitle(e.target.value)}
                                type="text"
                                placeholder="What task are you thinking about?"
                                className="border-black border rounded-md p-1"
                            />
                        </div>

                        <div className="flex flex-col">
                            Task Description :-
                            <input
                            value={taskDesc}
                            onChange={e => setTaskDesc(e.target.value)}
                                type="text"
                                placeholder="The task is about what?"
                                className="border-black border rounded-md p-1"
                            />
                        </div>

                        <button
                            type="submit"
                            
                            className="rounded-full p-4 bg-black text-white hover:bg-white hover:text-black"
                        
                        >
                            Add Task
                        </button>
                    </form>
                </div>
        
        </div>
    );
};

export default Home;
