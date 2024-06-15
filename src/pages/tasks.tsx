import React from 'react';
import useSWR from 'swr';

// common components
import Layout from '@/components/layout';
import { AgentTaskCard } from '@/components/common/citizen';

// kanban feature
import Kanban from '@/features/kanban';
// import { Pane } from '@/features/kanban/components/pane';
// import { Card } from '@/features/kanban/components/card';

// icons
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

// mock
import agents from '../mock/agents.json';
import { Agent } from '@/types/agent';

const fetcher = () =>
  fetch('http://localhost:8787/agents').then((res) => res.json());

export default function TasksPage() {
  const [showMore, setShowMore] = React.useState(false);
  const { data, error, isLoading } = useSWR('', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);
  return (
    <Layout>
      <div className="xxl:space-x-8 flex flex-col justify-between p-4 2xl:flex-row-reverse">
        {/** Task Workers */}
        <section className="flex w-full flex-col overflow-auto 2xl:w-1/5">
          {/** Title */}
          <div className="flex">
            <h1 className="text-2xl font-bold mr-2">Team</h1>

            {showMore ? (
              <button onClick={() => setShowMore(!showMore)}><ChevronDownIcon className='size-4'/></button>
            ) : (
              <button onClick={() => setShowMore(!showMore)}><ChevronUpIcon className='size-4'/></button>
            )}
          </div>

          {/** List */}
          {showMore ? (
            <section className="mt-4 grid grid-cols-4 gap-2 2xl:grid-cols-1">
              {agents.slice(0, 4).map((agent: Agent, index: number) => (
                <AgentTaskCard agent={agent} key={index} />
              ))}
            </section>
          ) : (
            <section className="mt-4 grid grid-cols-4 gap-2 2xl:grid-cols-1">
              {agents.slice(0, 8).map((agent: Agent, index: number) => (
                <AgentTaskCard agent={agent} key={index} />
              ))}
            </section>
          )}
        </section>

        {/** Taks List */}
        <section className="mt-4 2xl:mt-0 2xl:w-4/5">
          <div className="flex h-screen flex-col overflow-auto">
            <h1 className="text-2xl font-bold">Project Tasks</h1>
            <Kanban />
          </div>
        </section>
      </div>
    </Layout>
  );
}
