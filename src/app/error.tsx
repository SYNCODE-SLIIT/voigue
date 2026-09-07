"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="bg-white pt-32">
      <div className="container-x py-24">
        <h1 className="text-4xl font-semibold sm:text-5xl">Something went wrong</h1>
        <p className="mt-4 text-muted">Please retry or contact Voigue directly.</p>
        <button
          type="button"
          className="focus-ring mt-8 rounded-md bg-brand-navy px-5 py-3 text-sm font-semibold text-white"
          onClick={reset}
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
