import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";


function TaskForm() {

  const dispatch = useDispatch();

  // "estado" del proprio componente
  const [task, setTask] = useState({
    title: "",
    description: "",
  })

  const handleChange = e => {
    // console.log(e.target.name, e.target.value); ↓
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(task); ↓
    // dispatch(addTask("mi payload")); ↓
    dispatch(addTask({
      ...task,
      id: crypto.randomUUID(),

    }));
  }

  return (
    <div>
      <h2>Tasks Form</h2>
      <form action="" onSubmit={handleSubmit}>

        <input type="text" name="title" placeholder="title" onChange={handleChange}/>

        <textarea name="description" placeholder="description" onChange={handleChange}></textarea>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;