// import SayHello from '@cerebase/lang';
// import type DemoType from '@cerebase/lang';

export const Input: React.FC = () => {
  // const hello = SayHello();
  // console.log(user, hello);

  return (
    <input
      type="text"
      className='border-input placeholder:text-muted-foreground
      focus-visible:ring-ring disabled:opacity-50"
      flex h-9 w-full rounded-md border bg-transparent px-3 py-1
      text-sm shadow-sm transition-colors file:border-0 file:bg-transparent
      file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1
      disabled:cursor-not-allowed'
    />
  );
};
