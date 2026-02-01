import React, { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import DeleteIcon from '@mui/icons-material/Delete';
const MyTasks = () => {
  const { taskList, setTaskList } = useContext(AppContext);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then(res => res.json())
      .then(data => setTaskList(data));
  }, []);
  
  return (
    <div className="text-center flex flex-col w-[60vw] justify-center mx-auto">
      <p className="font-bold text-2xl p-2">My Tasks</p>

      <table className="border-collapse border border-black">
        <thead>
          <tr >
            <th className="border border-black p-2">Title</th>
            <th className="border border-black p-2">Status</th>
            <th className="border border-black p-2">Remove Task</th>
          </tr>
        </thead>

        <tbody>
  {taskList.map(task => (
    <tr key={task._id}>
      <td className="border p-2">{task.name}</td>

      <td className="border p-2">{task.status}</td>

      <td className="border p-2">
        <DeleteIcon
          className="cursor-pointer"
          onClick={async () => {
            await fetch(`http://localhost:3000/tasks/${task._id}`, {
              method: "DELETE"
            });
            setTaskList(taskList.filter(t => t._id !== task._id));
          }}
        />
      </td>
    </tr>
  ))}
</tbody>


      </table>
    </div>
  );
};

export default MyTasks;
