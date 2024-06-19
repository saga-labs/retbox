import React from 'react';

export const Breadcrumbs: React.FC = () => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-gray-600">
        <li>
          <a
            href="/projects"
            className="block font-mono text-indigo-600 transition hover:text-gray-700"
          >
            projects
          </a>
        </li>

        <li className="rtl:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </li>

        <li>
          <a
            href="/projects/01j0c82ay5pmhk09vxw61s12np"
            className="block font-mono text-blue-600 transition hover:text-gray-700"
          >
            spring-webshop-2024
          </a>
        </li>

        <li className="rtl:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </li>

        <li>
          <a
            href="/projects/01j0c82ay5pmhk09vxw61s12np/epic/01j0c82ay5pmhk09vxw61s12np"
            className="block font-mono transition hover:text-gray-700"
          >
            tasks
          </a>
        </li>
      </ol>
    </nav>
  );
};
