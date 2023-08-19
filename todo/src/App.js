import { useState } from "react";
import "./App.css";
import { Task } from "./Task";

function App() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const HandleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const todo = {
      id: task.length === 0 ? 1 : task[task.length - 1].id + 1,
      taskName: newTask,
      complete: false,
    };
    setTask([...task, todo]);
  };

  const delTask = (e) => {
    setTask(
      task.filter((taskName) => {
        return e !== taskName.id;
      })
    );
  };

  const compTask = (e) => {
    setTask(
      task.map((todo) => {
        if (todo.id === e) {
          console.log("Got inside the if")
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={HandleChange} />
        <button onClick={addTask}>Submit</button>
      </div>
      <div className="list">
        {task.map((t) => {
          return (
            <Task
              deleteTask={delTask}
              taskName={t.taskName}
              id={t.id}
              completed={t.complete}
              completeTask={compTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
