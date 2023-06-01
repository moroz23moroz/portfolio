import { ToDoListItem } from "./ToDoListItem/ToDoLIstItem";
import "./ToDoList.scss";
import { ToDo } from "../../models/todo-item";

export const ToDoList = (props: { todos: ToDo[] }) => {
  const checkedList = () => {
    return props.todos
    .filter((item) => !item.isDone)
    .map((item, idx) => {
      return <ToDoListItem toDoItem={item} key={idx} />;
    })
  }

  const uncheckedList = () => {
    return props.todos
    .filter((item) => item.isDone)
    .map((item, idx) => {
      return <ToDoListItem toDoItem={item} key={idx} />;
    })
  }

  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        {checkedList()}
      </ul>
      <ul className="todo-list completed">
      {uncheckedList()}
      </ul>
    </div>
  );
};
