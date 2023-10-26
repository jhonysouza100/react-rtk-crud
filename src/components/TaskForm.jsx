import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";
import { useNavigate, useParams } from "react-router-dom";


function TaskForm() {

  const dispatch = useDispatch();
  const navigate= useNavigate(); // para volver a la pagina principal cuando se agregue una tarea
  const {id} = useParams(); // recupera el "id" pasado por "parametro" (ruta: "/edit:id"). commentid1
  const tasks = useSelector(state => state.tasks); // trae el state

  // "useEffect" para recuperar la tarea a actualizar. commentid1
  useEffect(() => { // READ
    if(id) { // si existe un parametro id
      setTask(tasks.find(el => el.id === id)); // busca en el state un elemento con "id" igual a "id" que se paso por parametro. Actualiza la "task" actual
    }
    
  },[]);
  
  
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

    if(id) { // UPDATE
      dispatch(updateTask(task));
    } else { // create
      // console.log(task); ↓
      // dispatch(addTask("mi payload")); ↓
      dispatch(addTask({
        ...task,
        id: crypto.randomUUID(),
      }));
    }

    navigate("/"); // vuelve al inicio
  }


  return (
    <div>
      <h3>Tasks Form</h3>
      <form action="" onSubmit={handleSubmit}>

        <input type="text" name="title" placeholder="title" onChange={handleChange} value={task.title} />

        <textarea name="description" placeholder="description" onChange={handleChange} value={task.description}></textarea>

        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;