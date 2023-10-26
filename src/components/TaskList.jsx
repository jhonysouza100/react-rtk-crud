import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TaskList() {
  const tasks = useSelector((state) => state.tasks)
  // console.log(tasks);
  // console.log("taskForm");

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    // console.log("delete", id);
    dispatch(deleteTask(id));
  }

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h2>{tasks.length} Tasks</h2>
        <nav>
          <Link to="/new" className="bg-indigo-600 px-2 py-1 rounded-sm text-sm">Add Task</Link>
        </nav>
      </header>
      <h3>Tasks List</h3>

      <section className="grid grid-cols-3 gap-4">
        {tasks.map(el => (
          <div key={el.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{el.title}</h3>
              <div className="flex gap-x-2">
                <Link to={`edit/${el.id}`} className="bg-zinc-600 px-2 py-1 text-xs rounded-md">Edit</Link>
                <button className="bg-red-500 px-2 py-1 text-xs rounded-md" onClick={() => handleDelete(el.id)}>Delete</button>
              </div>
            </header>
          <p>{el.description}</p>
          </div>
        ))}
      </section>
      
    </div>
  );
}

export default TaskList;