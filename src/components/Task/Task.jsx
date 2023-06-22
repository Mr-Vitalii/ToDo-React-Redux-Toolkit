import React from "react";
import sprite from "../../assets/icons/sprite.svg";
import { CustomIcon } from "../../common/CustomIcon";
import { useTheme } from "../../hooks/useTheme";
import "./Task.scss";

import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";

const Task = ({ number, task }) => {
  const { isDark } = useTheme();

  const iconColor = isDark ? `var(--accent-color)` : `var(--accent-color-dark)`;

  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <li>
      <div className="task">
        {task.completed ? (
          <CustomIcon
            iconType={`${sprite}#check-mark`}
            size={"20px"}
            color={iconColor}
          />
        ) : (
          ""
        )}

        <input
          className="task__checkbox"
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
        />
        <div className="task__text-container">
          <span className="task__number"> {number}</span>
          <p className="task__text">{task.text}</p>
        </div>
        <div className="task__button-container">
          <button
            name="doneBtn"
            className="task__button"
            onClick={handleToggle}
          >
            Done
          </button>
          <button
            name="deleteBtn"
            className="task__button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default React.memo(Task);
