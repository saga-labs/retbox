import React from 'react';

// components
import Layout from '@/components/layout';
import { AgentCard } from '@/components/common/agent-card';
import { AgentHero } from '@/components/common/hero';

import agents from '../mock/agents.json';

// types & interfaces
import { Agent } from '@/types/agent';

export default function Agents(): React.ReactNode {
  return (
    <Layout>
      <AgentHero />

      <section className="grid grid-cols-4 gap-4 px-8 py-8">
        {agents.map((agent: Agent, index: number) => (
          <AgentCard agent={agent} key={index} />
        ))}
      </section>
    </Layout>
  );
}
