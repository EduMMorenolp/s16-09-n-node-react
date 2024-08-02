import { NavLink } from "react-router-dom";

import Task from "./Task";
import Task1 from "./Task1";
import Task2 from "./Task2";

import "./tasks.css";

import { useTheme } from "@/context/themecontext";

const Tasks = () => {
  const { theme } = useTheme();

  const getFilterStyle = () => {
    return theme.text === "#e8e8e8" ? "invert(0)" : "invert(1)";
  };

  return (
    <div
    data-aos="fade-up"
      className='tasks-tasks'
      style={{ color: theme.titulos, backgroundColor: theme.background }}
    >
      <span
        className='tasks-title Heading1'
        style={{ color: theme.titulos, backgroundColor: theme.background }}
      >
        <span>Tareas</span>
      </span>
      <div className='tasks-tasks-list'>
        <Task></Task>
        <Task1></Task1>
        <Task2></Task2>
      </div>
      <NavLink to={"/dashboard/tasks-list"}>
        <img
          alt='plus-icon'
          src='/assets/plus-icon.svg'
          className='tasks-plus-icon'
          style={{ filter: getFilterStyle() }}
        />
      </NavLink>
    </div>
  );
};

export default Tasks;
