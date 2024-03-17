import React from 'react';

interface props {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<props> = ({ children }) => {
  return (
    <main>
      <div className="md:hidden">
        <img
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <img
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <img
              src="/logo.svg"
              alt="Cerebase"
              className="mr-2"
              width={24}
              height={24}
            />
            cerebase
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                Streamline Your Workflow: Combining Cloud Storage with Smart
                Retrieval for Effortless Productivity.
              </p>
              <footer className="hidden text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">{children}</div>
      </div>
    </main>
  );
};
