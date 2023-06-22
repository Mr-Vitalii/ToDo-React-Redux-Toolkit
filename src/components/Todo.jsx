import React from "react";
import "./Todo.scss";
import sprite from "../assets/icons/sprite.svg";
import { useState, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";
import { Portal } from "./Portal/Portal";

import { TasksList } from "./TaskList/TasksList";
import { CustomIcon } from "../common/CustomIcon";
import { TaskDialogsWindow } from "./TaskDialogsWindow/TaskDialogsWindow";
import { CurrentTime } from "./СurrentTime/СurrentTime";
import { FilterPanel } from "./FilterPanel/FilterPanel";
import Quote from "./Quote/Quote";

import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../redux/selectors";
import { deleteAllCompleted } from "../redux/tasksSlice";


const Todo = () => {


  const tasks = useSelector(getTasks);

  const dispatch = useDispatch();

  console.log(tasks);
  // const [tasks, setTasks] = useState(() => {
  //   const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  //   return savedTasks !== null ? savedTasks : [];
  // });


  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [quotes, setQuotes] = useState(
    "Life is what happens to you while you're busy making other plans"
  );

  const { isDark, setIsDark } = useTheme();
  const themeToggleIcon = isDark ? "#icon-sun" : "#icon-moon";
  const activeTasks = tasks.filter((task) => !task.completed).length;

  const changeQuote = (quote) => {
    setQuotes(quote);
  };

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  //   setFilteredTasks(tasks);
  // }, [tasks]);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const clearCompleted = () => {
    dispatch(deleteAllCompleted());
  };


  return (
    <div className="wrapper">
      <div className="todo">
        <div className="todo__header">
          <h2 className="todo__title">ToDo </h2>
          <div className="todo__quotes-container">
            <Quote changeQuote={changeQuote} quotes={quotes} />
          </div>
          <button
            className="todo__theme-toggle"
            onClick={() => setIsDark(!isDark)}
          >
            <CustomIcon
              iconType={`${sprite}${themeToggleIcon}`}
              size={"40px"}
              color={"white"}
            />
          </button>
        </div>
        <div className="todo__body">
          <div className="todo__add-task-block">
            <button className="todo__button" onClick={handleOpenDialog}>
              <CustomIcon
                iconType={`${sprite}#icon-plus`}
                size={"20px"}
                color={"white"}
                margin={"0 10 0 0"}
              />
              <span>Add Task</span>
            </button>
            <CurrentTime />
            <div style={{ display: "inline-block" }}>
              <span style={{ marginRight: "10px", fontWeight: "bold" }}>
                {activeTasks === 0 ? "" : activeTasks}
              </span>
              <span style={{ fontWeight: "bold" }}>
                {activeTasks === 0
                  ? "relax and enjoy life"
                  : "not completed tasks"}{" "}
              </span>
            </div>
          </div>
          {tasks.length !== 0 ? (
            <TasksList
              title={"Your Tasks"}
            />
          ) : (
            <h3>No new task</h3>
          )}
          {isDialogOpen && (
            <Portal>
              <TaskDialogsWindow
                onClose={handleCloseDialog}
              />
            </Portal>
          )}
        </div>
        <div className="todo__bottom">
         <FilterPanel/>
          <button className="todo__bottom-button" onClick={clearCompleted}>
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export { Todo };
