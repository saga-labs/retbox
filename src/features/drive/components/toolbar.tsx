import React from 'react';

// components
import { Input } from '@/components/common/input';
import { Select } from '@/components/common/select';

// mock
const values = [
  {
    value: '1',
    text: 'Alphabetically (A-Z)',
  },
  {
    value: '2',
    text: 'Alphabetically (Z-A)',
  },
];

export const ToolBar: React.FC = () => {
  return (
    <section className="flex flex-row justify-between">
      <Input />
      <Select descriptor="sorting" values={values} />
    </section>
  );
};
