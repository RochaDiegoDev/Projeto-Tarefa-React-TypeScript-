import "./App.css";

// componentes
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import TaskList from "./Componentes/TaskList";

// CSS
import styles from "./App.module.css";
import TaskForm from "./Componentes/TaskForm";

//Interface
import { ITask } from "./Interface/Task";
import { useState } from "react";
import Modal from "./Componentes/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };
  const editTask = (task: ITask): void => {
    hideShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, dificulty: number) => {
    const updateTask: ITask = { id, title, dificulty };

    const updatedItem = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask : task;
    });
    setTaskList(updatedItem);
    hideShowModal(false);
  };

  return (
    <div className="App">
      <Modal
        children={
          <TaskForm
            setTaskList={setTaskList}
            btnText="Editar Tarefa"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que vc vai fazer....</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
            task={taskToUpdate}
          />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
