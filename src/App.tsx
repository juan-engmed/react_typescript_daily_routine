import React, { useState } from "react";
import Styles from "./components/App.module.css";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

//Interfaces
import { ITask } from "./interfaces/Task";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const handleDeleteTask = (id: number): void => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };
  return (
    <div className="App">
      <Header />
      <div className={Styles.main}>
        <div>
          <h2>Bem vindo, Juan</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Tarefas do Dia</h2>
          <TaskList taskList={taskList} handleDeleteTask={handleDeleteTask} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
