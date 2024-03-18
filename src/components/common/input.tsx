import SayHello from '@cerebase/lang';
// import type DemoType from '@cerebase/lang';

const user = {
  firstname: 'John Doe',
  lastname: 'Doe',
};

export const Input: React.FC = () => {
  const hello = SayHello();
  console.log(user, hello);

  return (
    <input
      type="text"
      className='border-input placeholder:text-muted-foreground
      focus-visible:ring-ring disabled:opacity-50"
      flex h-9 w-full rounded-md border border-neutral-800 bg-transparent px-3 py-1
      text-sm shadow-sm transition-colors file:border-0 file:bg-transparent
      file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1
      disabled:cursor-not-allowed'
    />
  );
};
