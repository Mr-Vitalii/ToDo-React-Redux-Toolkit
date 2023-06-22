import "../../assets/styles/CommonSettings.scss";
import "../TaskDialogsWindow/TaskDialogsWindow.scss";
import "../TaskDialogsWindow/TaskDialogsWindowDark.scss";
import sprite from "../../assets/icons/sprite.svg";
import { useTheme } from "../../hooks/useTheme";

import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksSlice";


const TaskDialogsWindow = ({ onClose }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { isDark } = useTheme();
  const darkTheme = isDark ? "" : "dark";

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    dispatch(addTask(event.text));
    reset();
    handleClose();
  };

  const handleClose = () => {
    onClose();
  }

  return (
    <>
      <div className="task-modal-background" onClick={onClose}></div>
      <div className={`task-modal ${darkTheme}`}>
        <button className="task-modal__close-button" onClick={onClose}>
          <svg className="task-modal__close-icon" width="22px" height="22px">
            <use xlinkHref={`${sprite}#icon-close-black`} />
          </svg>
        </button>
        <h2 className="task-modal__title">What's up today?</h2>
        <p className="task-modal__text">
          To add a task, fill in the field and click the "Add new task"
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="task-modal__input"
            type="text"
            name="text"
            placeholder="Create a new task..."
            {...register("text", { required: true })}
          />
          {errors.text && (
            <p className="task-modal__error">Fill in the field, please</p>
          )}
          <div className="task-modal__button-container">
            <button className="task-modal__button" onClick={handleClose}>
              Cancel
            </button>
            <button
              type="submit"
              className="task-modal__button"
            >
              Add new task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export { TaskDialogsWindow };
