import React from 'react';

// data
// import mockData from '@/features/chat/mock/chat.json';

// context
// import useViewStore from '@/contexts/use-view';
// import { View } from '@/contexts/use-view';

// common components
import Layout from '@/components/layout';
import { Citizen } from '@/components/common/citizen';

// kanban feature
import Kanban from '@/features/kanban';

export default function TasksPage() {
  return (
    <Layout>
        {/** Task Workers */}
        <section className='flex flex-row px-10'>
            <Citizen/>
            <Citizen/>
            <Citizen/>
            <Citizen/>
        </section>


        <Kanban/>
    </Layout>
  );
}
