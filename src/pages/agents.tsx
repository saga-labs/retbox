import React from 'react';

// components
import Layout from '@/components/layout';
import { AgentCard } from '@/components/common/citizen';
import { AgentHero } from '@/components/common/hero';

import agents from '../mock/agents.json';
import { Agent } from '@/types/agent';

export default function Agents(): React.ReactNode {
  return (
    <Layout>
      <AgentHero />

      <section className="grid grid-cols-4 gap-4 py-8 px-8">
        {agents.map((agent: Agent, index: number) => (
          <AgentCard agent={agent} key={index} />
        ))}
      </section>
    </Layout>
  );
}
