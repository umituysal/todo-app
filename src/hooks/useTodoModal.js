import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../redux/todoSlice";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";

function useTodoModal({ todo, type, modalOpen, setModalOpen }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");

  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle("");
      setStatus("incomplete");
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      toast.error("Please enter a title");
      return;
    }
    if (title && status) {
      if (type === "add") {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success("Task added successfully");
      }
      if (type === "update") {
        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({ ...todo, title, status }));
          toast.success("Task Updated successfully");
        } else {
          toast.error("No changes made");
          return;
        }
      }
      setModalOpen(false);
    }
  };
  return { handleSubmit, setStatus, status, title, setTitle };
}

export default useTodoModal;
