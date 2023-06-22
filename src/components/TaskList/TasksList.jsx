import React from "react";
import "../../assets/styles/CommonSettings.scss";
import Task from "../Task/Task";

import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { getTasks, getStatusFilter } from "../../redux/selectors";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};


const TasksList = ({ title }) => {

  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <div>
      <h3>{title}</h3>
      <ul className="list-style">
        {visibleTasks.map((task, index) => (
            <Task
              number={index + 1}
              task={task}
              key={task.id}
            />
          ))}
      </ul>
    </div>
  );
};

export  {TasksList};
