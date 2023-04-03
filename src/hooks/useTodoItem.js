import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/todoSlice";
import toast from "react-hot-toast";

function useTodoItem(todo) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({ ...todo, status: checked ? "incomplete" : "complete" })
    );
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo Deleted Successfully");
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };
  return {
    handleUpdate,
    handleDelete,
    updateModalOpen,
    setUpdateModalOpen,
    checked,
    handleCheck,
  };
}

export default useTodoItem;
