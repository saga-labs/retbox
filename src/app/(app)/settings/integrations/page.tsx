import React from "react";

// components
import { IntegrationCard } from "@/components/common/integration-card";

// mock
import integrations from "@/mock/integrations.json";
import { VariableIcon } from "@heroicons/react/24/solid";

export type Integration = {
  id: number;
  name: string;
  description: string;
  icon_url: string;
};

export default function IntegrationsPage() {
  return (
    <>
      {/** Search Area */}
      <div className="py-3">
        <div className="mb-3">
          <h3 className="text-sm font-semibold">Manage integrations</h3>
          <small className="text-xs font-light text-neutral-500">
            Supercharge your project with tools you use everyday!
          </small>
        </div>

        <div className="relative">
          <label htmlFor="Search" className="sr-only">
            Search integrations
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Search for..."
            className="w-full rounded-md bg-gray-50 py-2 pl-2.5 pr-10 sm:text-sm border-neutral-200"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>
              <VariableIcon className="size-4" />
            </button>
          </span>
        </div>
      </div>

      {/** Integrations Grid */}
      <div className="grid grid-cols-3 gap-4">
        {integrations.map((int: Integration, i: React.Key) => {
          return <IntegrationCard data={int} key={i} connected />;
        })}
      </div>
    </>
  );
}
