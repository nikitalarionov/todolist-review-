import React, {useState} from 'react';
import MyInput from "./Ui/input/MyInput";
import MyButton from "./Ui/button/MyButton";

const TaskForm = ({create}) => {
    const [task, setTask] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...task, id: Date.now()
        }
        create(newPost)
        setTask({title: '', body: ''})
    }

    return (
        <form className="form">
            <MyInput
                value={task.title}
                onChange={e => setTask({...task, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                value={task.body}
                onChange={e => setTask({...task, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default TaskForm;