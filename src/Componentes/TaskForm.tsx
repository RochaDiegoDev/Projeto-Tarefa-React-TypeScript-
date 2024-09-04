import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

//CSS
import styles from "./TaskForm.module.css";

import { ITask } from "../Interface/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [dificulty, setDificult] = useState<number>(0);

  const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = { id, title, dificulty };

    setTaskList!([...taskList, newTask]);

    setTitle("");
    setDificult(0);

    console.log(taskList);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDificult(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHandle} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title"> Titulo:</label>
        <input
          type="text"
          name="title"
          placeholder="Titulo da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>

      <div className={styles.input_container}>
        <label htmlFor="Dificulty">Dificuldade:</label>
        <input
          type="text"
          name="Dificuldade"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={dificulty}
        />
        <input type="submit" value={btnText} />
      </div>
    </form>
  );
};

export default TaskForm;
