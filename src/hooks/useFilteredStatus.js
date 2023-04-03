import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../redux/todoSlice";

function useFilteredStatus() {
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };
  return { updateFilter, filterStatus };
}

export default useFilteredStatus;
