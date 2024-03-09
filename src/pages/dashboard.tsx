import React from 'react';
import Layout from '../components/layout';

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '../components/common/resizable';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <ResizablePanelGroup
        direction="horizontal"
        className="flex h-screen flex-grow"
      >
        {/* Drive Panel */}
        <ResizablePanel minSize={25} defaultSize={67}>
          <div className="item @container flex h-full flex-col overflow-scroll px-6 pb-6">
            hello
          </div>
        </ResizablePanel>
        <ResizableHandle className='border-l' />

        {/* Chat Panel */}
        <ResizablePanel minSize={25} defaultSize={33}>
          <div className="flex h-full flex-col justify-between p-2">
            messages
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </Layout>
  );
};

export default Dashboard;
