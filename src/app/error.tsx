"use client";

export default function Error() {
  return (
    <div className="grid grow place-content-center bg-neutral-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-300">waiting</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Loading
        </p>

        <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

        <a
          href="/"
          className="mt-6 inline-block rounded bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}