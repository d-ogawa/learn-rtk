import React from "react";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { selectTasks } from "./taskSlice";

export const TaskList = () => {
  const tasks = useSelector(selectTasks);
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};
