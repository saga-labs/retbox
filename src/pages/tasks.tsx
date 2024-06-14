import useSWR from 'swr';

// common components
import Layout from '@/components/layout';
import { AgentCard } from '@/components/common/citizen';

// kanban feature
import Kanban from '@/features/kanban';
// import { Pane } from '@/features/kanban/components/pane';
// import { Card } from '@/features/kanban/components/card';

const fetcher = () => fetch('http://localhost:8787/agents').then((res) => res.json());

export default function TasksPage() {
  const { data, error, isLoading } = useSWR('', fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  console.log(data);
  return (
    <Layout>
      <div className="flex flex-col space-x-4 px-10 xl:flex-row-reverse justify-between">
        {/** Task Workers */}

        <section className="flex flex-col overflow-auto">
          <div className="mt-4">
            <h1 className="text-2xl font-bold">Agents</h1>
          </div>

          <section className="mt-4 grid grid-cols-4 gap-2 lg:grid-cols-1">
            <AgentCard />
            <AgentCard />
            <AgentCard />
            <AgentCard />
          </section>
        </section>

        {/** Taks List */}
        <Kanban />
      </div>
    </Layout>
  );
}
