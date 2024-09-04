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

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que vc vai fazer....</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList taskList={taskList} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
