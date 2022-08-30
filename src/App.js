import React, {useRef, useState} from "react";
import './styles/App.css'
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import MyModal from "./components/Ui/MyModal/MyModal";
import MyButton from "./components/Ui/button/MyButton";
function App() {
    const  [tasks, setTasks] = useState([
        {id: 1, title: 'Javascript', body: 'Javascript - язык программирования'}
    ])

    const [modal, setModal] = useState(false)

    const createTask = (newPost) => {
        setTasks([...tasks, newPost])
        setModal(false)
    }

    const removeTask = (task) => {
        setTasks(tasks.filter(p => p.id !== task.id))
    }

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>Создать задачу</MyButton>
            <MyModal visiable={modal} setVisiable={setModal}>
                <TaskForm create={createTask}/>
            </MyModal>
            {tasks.length
                ? <TaskList remove={removeTask} tasks={tasks} title={'Задачи'}/>
                : <h2 className="no-tasks">Задачи не найдены!</h2>
            }
        </div>
    );
}

export default App;
