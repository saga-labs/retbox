import React from "react";
import Link from "next/link";
import useSWR from "swr";

// Components
import { NavSecondaryDropList } from "./NavSecondaryDropList";

// Icons
import { SignalSlashIcon, SignalIcon } from "@heroicons/react/24/solid";
import { CubeIcon, CubeTransparentIcon } from "@heroicons/react/24/solid";

// Interfaces
import { Container } from "../../interfaces/container";
import { Strategy } from "../../interfaces/strategy";
import { Service } from "../../interfaces/service";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Block Component for Containers section
export const NavSecondaryContainers = () => {

  // Fetch Services
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_CONTAINERS}/v1/containers`,
    fetcher
  );

  return (
    <NavSecondaryDropList meta="My Containers">
      {/** Data loading */}
      {isLoading && (
        <div className="flex flex-col space-y-2 divide-y">
          {[...Array(4)].map((key: React.Key) => (
            <div
              key={key}
              className="mx-8 h-6 animate-pulse rounded bg-gray-300"
            ></div>
          ))}
        </div>
      )}

      {/** Loaded: Containers Available */}
      {!isLoading &&
        data.map((container: Container, key: React.Key) => {
          return (
            <Link
              className="flex h-8 items-center pl-8 pr-3 text-sm hover:bg-gray-300"
              href="/"
              key={key}
            >
              {container.is_active ? (
                <SignalIcon className="h-4 w-4" />
              ) : (
                <SignalSlashIcon className="h-4 w-4" />
              )}
              <span className="ml-2 font-mono leading-none">
                {container.alias}
              </span>
            </Link>
          );
        })}

      {/** Loaded: Container resolved as error */}
      {!isLoading && error && <>Error Loading</>}
    </NavSecondaryDropList>
  );
};

// Block Component for Strategies section
export const NavSecondaryStrategies = () => {
  // Fetch Services
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_STRATEGIES}/v1/strategies`,
    fetcher
  );

  return (
    <NavSecondaryDropList meta="My Strategies">
      {/** Data loading */}
      {isLoading && (
        <div className="flex flex-col space-y-2 divide-y">
          {[...Array(4)].map((key: React.Key) => (
            <div
              key={key}
              className="mx-8 h-6 animate-pulse rounded bg-gray-300"
            ></div>
          ))}
        </div>
      )}

      {/** Loaded: Strategies Available */}
      {!isLoading &&
        data.map((strategy: Strategy, key: React.Key) => {
          return (
            <Link
              className="flex h-8 items-center pl-8 pr-3 text-sm hover:bg-gray-300"
              href="/services"
              key={key}
            >
              {strategy.public ? (
                <CubeIcon className="h-4 w-4" />
              ) : (
                <CubeTransparentIcon className="h-4 w-4" />
              )}

              <span className="ml-2 font-mono lowercase leading-none">
                {strategy.meta.title.replace(/\s+/g, "-")}
              </span>
            </Link>
          );
        })}

      {/** Loaded: Services resolved as error */}
      {!isLoading && error && <>Error Loading</>}
    </NavSecondaryDropList>
  );
};

// Block Component for Services section
export const NavSecondaryServices = () => {
  // Fetch Services
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVICES}/v1/services`,
    fetcher
  );

  return (
    <NavSecondaryDropList meta="My Services">
      {/** Data loading */}
      {isLoading && (
        <div className="flex flex-col space-y-2 divide-y">
          {[...Array(4)].map((key: React.Key) => (
            <div
              key={key}
              className="mx-8 h-6 animate-pulse rounded bg-gray-300"
            ></div>
          ))}
        </div>
      )}

      {/** Loaded: Services Available */}
      {!isLoading &&
        data.map((service: Service, key: React.Key) => {
          return (
            <Link
              className="flex h-8 items-center pl-8 pr-3 text-sm hover:bg-gray-300"
              href="/services"
              key={key}
            >
              {service.public ? (
                <CubeIcon className="h-4 w-4" />
              ) : (
                <CubeTransparentIcon className="h-4 w-4" />
              )}

              <span className="ml-2 font-mono lowercase leading-none">
                {service.meta.title.replace(/\s+/g, "-")}
              </span>
            </Link>
          );
        })}

      {/** Loaded: Services resolved as error */}
      {!isLoading && error && <>Error Loading</>}
    </NavSecondaryDropList>
  );
};
