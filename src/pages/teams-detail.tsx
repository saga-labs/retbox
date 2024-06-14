import React from 'react';
import Layout from '@/components/layout';

// mock data
import project from '../mock/project.json';
import { Task } from '@/types/objective';

export default function TeamsDetail(): React.ReactNode {
  return (
    <Layout>
      <div>teams-detail</div>

      {project.tasks.map((task: Task, key: React.Key) => {
        return (
          <div key={key}>
            <p>{task.task}</p>
            <p>{task.description}</p>
          </div>
        );
      })}
    </Layout>
  );
}
