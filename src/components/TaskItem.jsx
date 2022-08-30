import React from 'react';
import MyButton from "./Ui/button/MyButton";
import '../styles/TaskItem.css'
const TaskItem = (props) => {
    return (
        <div>
            <div className="task">
                <div className="task__content">
                    <h3 className="task__title">{props.number}. {props.task.title}</h3>
                    <p className="task__text">{props.task.body}</p>
                </div>
                <div className="task__btns">
                    <MyButton onClick={() => props.remove(props.task)} className="task__delete-btn">Завершить</MyButton>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;