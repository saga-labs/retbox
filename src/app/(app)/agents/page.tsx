"use client";

import React from "react";

// components
import { AgentCardDense } from "@/components/common/agent-card";

// icons
import { ArrowRightIcon } from "@heroicons/react/24/solid";

// types & interfaces
import { Agent } from "@/types/agent";

// mock data
import agents from "@/mock/agents.json";

export default function Agents() {
  return (
    <>
      <section className="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Discover Autonomous LLM Agents
            </h2>

            <p className="hidden text-gray-100 sm:mt-4 sm:block">
              Find the perfect autonomous LLM agent tailored to your needs.
              Enter your requirements below and explore the options.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>

                <input
                  type="text"
                  placeholder="Enter your requirements"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium"> Search </span>
                <ArrowRightIcon className="size-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 py-8">
        {agents.map((agent: Agent, index: number) => (
          <div className="relative grayscale" key={index}>
            <span className="absolute right-0 top-0 whitespace-nowrap rounded-bl-sm rounded-tr-md bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
              waiting
            </span>

            <AgentCardDense agent={agent} key={index} />
          </div>
        ))}
      </section>
    </>
  );
}
