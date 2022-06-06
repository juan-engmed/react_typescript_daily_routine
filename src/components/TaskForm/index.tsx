import React, {
  ReactElement,
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
} from "react";
import Styles from "./TaskForm.module.css";

//Interface
//Interfaces
import { ITask } from "../../interfaces/Task";
import TaskList from "../TaskList";

interface ITaskFormProps {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function TaskForm(props: ITaskFormProps): ReactElement {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTask: ITask = { id, title, difficulty };

    props.setTaskList!([...props.taskList, newTask]);

    setTitle("");
    setDifficulty(0);
    console.log(newTask);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHandler} className={Styles.form}>
      <div className={Styles.input_container}>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          name="title"
          placeholder="Título da Tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={Styles.input_container}>
        <label htmlFor="difficulty">Dificuldade</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da Tarefa"
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <input type="submit" value={props.btnText} />
    </form>
  );
}

export default TaskForm;
