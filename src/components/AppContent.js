import React, { Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/modules/app.module.scss";
import Loading from "./Loading";
import useFilteredList from "../hooks/useFilteredList";
import { delayForDemo } from "../utils/delayForDemo";
const TodoItem = lazy(() => delayForDemo(import("./TodoItem.js")));

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function AppContent() {
  const { filteredTodoList } = useFilteredList();

  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length > 0 ? (
          <Suspense fallback={<Loading />}>
            {filteredTodoList.map((todo) => (
              <motion.div key={todo.id} variants={child}>
                <TodoItem key={todo.id} todo={todo} />
              </motion.div>
            ))}
          </Suspense>
        ) : (
          <motion.p variants={child} className={styles.emptyText}>
            No Todos
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default AppContent;
