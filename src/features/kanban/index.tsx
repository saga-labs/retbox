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
    <div className="flex flex-col overflow-auto">
      <div className="mt-4">
        <h1 className="text-2xl font-bold">Task Board</h1>
      </div>
      <div className="mt-4 flex flex-grow space-x-2 overflow-auto">
        <Pane title="Backlog">
          {tasks.map((task, index) => (
            <Card key={index} task={task} index={index} />
          ))}
        </Pane>

        <Pane title="In progress">
          {inProgress.map((task, index) => (
            <Card key={index} task={task} index={index} />
          ))}
        </Pane>

        <Pane title="Done">
          {done.map((task, index) => (
            <Card key={index} task={task} index={index} />
          ))}
        </Pane>

        <Pane title="Blocking">
          {tasks.map((task, index) => (
            <Card key={index} task={task} index={index} />
          ))}
        </Pane>
      </div>
    </div>
  );
};

export default Kanban;
