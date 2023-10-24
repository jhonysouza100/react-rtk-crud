import { useSelector } from "react-redux";

function TaskList() {
  const tasks = useSelector((state) => state.tasks)
  console.log(tasks);
  // console.log("taskForm");
  return (
    <div>
      <h2>Tasks List</h2>
      <section>
        {tasks.map(el => (
          <div key={el.id}>
          <h3>{el.title}</h3>
          <p>{el.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default TaskList;