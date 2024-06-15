import React from 'react';

// components
import Layout from '@/components/layout';
import { AgentCardDense } from '@/components/common/agent-card';
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
          <div className="relative grayscale">
            <span className="absolute right-0 top-0 whitespace-nowrap rounded-bl-sm rounded-tr-md bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
              waiting
            </span>

            <AgentCardDense agent={agent} key={index} />
          </div>
        ))}
      </section>
    </Layout>
  );
}
