# cerebase cloud (⛅)

Mini service for handling citizen based actions from a cloudflare worker

## Core Tooling

- [next](https://hono.dev/): Fast, lightweight, built on Web Standards. Support for any JavaScript runtime.
- [tailwind](https://www.prisma.io/): Type-safe database client, and ORM with MongoDB support.
- [radix](https://developers.cloudflare.com/d1/get-started/): MongoDB Atlas is an integrated suite of data services centered MongoDB NoSQL
- [changesets](https://pnpm.io/using-changesets): A tool to manage versioning and changelogs. 
- [auth0](https://developers.cloudflare.com/d1/get-started/): MongoDB Atlas is an integrated suite of data services centered MongoDB NoSQL

## Running the service

```bash
# install bun runtime (Linux & macOS)
curl -fsSL https://bun.sh/install | bash
```

```bash
# starts the service with development settigns
bun install
bun run dev
```

```bash
# run the service via docker (easy)
docker compose up
```

## Design Guide:

* primary: blue-700
* primary-bg: blue-100/70
* secondary: neutral-600 
* secondary-bg: neutral-200/70



## Guides

* [dnd-kit todo](https://codesandbox.io/s/react-drag-drop-todo-rwn8d3?file=/src/components/BoardSectionList.tsx:2637-2667)


