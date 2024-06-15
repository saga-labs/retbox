import React from 'react';

// components
import Layout from '@/components/layout';
import ProjectBlock from '@/features/project-block';

// mock
import project from '../mock/project.json';

import { Task } from '../types/objective';

export default function Projects(): React.ReactNode {
  return (
    <Layout>
      <section className='flex flex-col space-y-8 p-8'>
        <ProjectBlock project={project} />
        <ProjectBlock project={project} />
        <ProjectBlock project={project} />
      </section>
    </Layout>
  );
}
