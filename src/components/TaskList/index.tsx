import { ReactElement } from "react";
import Styles from "./TaskList.module.css";

import { ITask } from "../../interfaces/Task";

interface ITaskListProps {
  taskList: ITask[];
  handleDeleteTask(id: number): void;
}

function TaskList(props: ITaskListProps): ReactElement {
  return (
    <>
      {props.taskList.length > 0 ? (
        props.taskList.map((task, index) => (
          <div key={task.id} className={Styles.task}>
            <div className={Styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={Styles.actions}>
              <i className="bi bi-pencil"></i>
              <i
                className="bi bi-trash"
                onClick={() => props.handleDeleteTask(task.id)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não possui tarefas cadastradas</p>
      )}
    </>
  );
}

export default TaskList;
