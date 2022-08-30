import React from 'react';
import TaskItem from "./TaskItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const TaskList = ({tasks, title, remove}) => {
    return (
        <div>
            <h1 className="title">{title}</h1>
            <TransitionGroup>
                {tasks.map((task, index) =>
                    <CSSTransition
                        key={task.id}
                        timeout={500}
                        classNames="task"
                    >
                    <TaskItem remove={remove} number={index + 1} task={task}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default TaskList;