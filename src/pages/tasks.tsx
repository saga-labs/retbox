import useSWR from 'swr';

// common components
import Layout from '@/components/layout';
import { AgentCard } from '@/components/common/citizen';

// kanban feature
import Kanban from '@/features/kanban';
// import { Pane } from '@/features/kanban/components/pane';
// import { Card } from '@/features/kanban/components/card';

// mock
import agents from '../mock/agents.json';
import { Agent } from '@/types/agent';

const fetcher = () =>
  fetch('http://localhost:8787/agents').then((res) => res.json());

export default function TasksPage() {
  const { data, error, isLoading } = useSWR('', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);
  return (
    <Layout>
      <div className="flex flex-col justify-between px-4 xl:flex-row-reverse xl:space-x-8">
        {/** Task Workers */}
        <section className="flex flex-col overflow-auto xl:w-1/5">
          {/** Title */}
          <h1 className="mt-4 text-2xl font-bold">Team</h1>

          {/** List */}
          <section className="mt-4 grid grid-cols-4 gap-2 xl:grid-cols-1">
            {agents.slice(0,5).map((agent: Agent, index: number) => (
              <AgentCard agent={agent} key={index} />
            ))}
          </section>
        </section>

        {/** Taks List */}
        <section className="ml-8 xl:w-4/5">
          <div className="flex h-screen flex-col overflow-auto">
            <h1 className="mt-4 text-2xl font-bold">Project Tasks</h1>
            <Kanban />
          </div>
        </section>
      </div>
    </Layout>
  );
}
