import React from 'react';

// local components
import { Pane } from './components/pane';
import { Card } from './components/card';
import useTaskList from './context/use-tasks';

const Kanban: React.FC = () => {
  const tasks = useTaskList((state) => state.tasks);
  const inProgress = useTaskList((state) => state.inProgress);
  const done = useTaskList((state) => state.done);

  return (
    <div className="mt-4 grid grid-cols-4 space-x-2 overflow-auto grow">
      <Pane title="Backlog" amount={tasks.length}>
        {tasks.map((task, index) => (
          <Card key={index} task={task} index={index} />
        ))}
      </Pane>

      <Pane title="In progress" amount={inProgress.length}>
        {inProgress.map((task, index) => (
          <Card key={index} task={task} index={index} />
        ))}
      </Pane>

      <Pane title="Done" amount={done.length}>
        {done.map((task, index) => (
          <Card key={index} task={task} index={index} />
        ))}
      </Pane>

      <Pane title="Blocking" amount={tasks.length}>
        {tasks.map((task, index) => (
          <Card key={index} task={task} index={index} />
        ))}
      </Pane>
    </div>
  );
};

export default Kanban;
