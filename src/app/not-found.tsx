import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-white pt-32">
      <div className="container-x py-24">
        <h1 className="text-4xl font-semibold sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-muted">The page you requested does not exist or has moved.</p>
        <Button href="/" className="mt-8">Return Home</Button>
      </div>
    </section>
  );
}
