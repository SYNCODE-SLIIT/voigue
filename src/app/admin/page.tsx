import { requireAdmin } from "@/lib/auth";
import { connectToDatabase } from "@/lib/mongodb";
import Job from "@/models/Job";
import Application from "@/models/Application";
import BlogPost from "@/models/BlogPost";
import ContactSubmission from "@/models/ContactSubmission";

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ login?: string }> }) {
  const params = await searchParams;
  const authed = await requireAdmin();

  if (!authed) {
    return (
      <section className="bg-white pt-32">
        <div className="container-x max-w-md py-16">
          <h1 className="text-4xl font-semibold">Admin Login</h1>
          <form action="/api/auth/login" method="post" className="mt-8 grid gap-4 rounded-md border border-line bg-paper p-5">
            <label className="grid gap-2 text-sm font-medium">
              Email
              <input name="email" type="email" className="focus-ring rounded-md border border-line px-4 py-3" required />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Password
              <input name="password" type="password" className="focus-ring rounded-md border border-line px-4 py-3" required />
            </label>
            <button className="focus-ring rounded-md bg-brand-navy px-5 py-3 font-semibold text-white">Sign In</button>
            {params.login === "failed" ? <p className="text-sm text-red-700">Invalid credentials or admin environment is not configured.</p> : null}
          </form>
        </div>
      </section>
    );
  }

  let counts = { jobs: 0, applications: 0, posts: 0, contacts: 0 };
  try {
    await connectToDatabase();
    const [jobs, applications, posts, contacts] = await Promise.all([
      Job.countDocuments(),
      Application.countDocuments(),
      BlogPost.countDocuments(),
      ContactSubmission.countDocuments()
    ]);
    counts = { jobs, applications, posts, contacts };
  } catch {
    counts = { jobs: 0, applications: 0, posts: 0, contacts: 0 };
  }

  return (
    <section className="bg-paper pt-32">
      <div className="container-x py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">Admin</p>
            <h1 className="mt-3 text-4xl font-semibold">Dashboard</h1>
          </div>
          <form action="/api/auth/logout" method="post">
            <button className="focus-ring rounded-md border border-line bg-white px-4 py-2 font-semibold">Sign Out</button>
          </form>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {Object.entries(counts).map(([label, value]) => (
            <div key={label} className="rounded-md border border-line bg-white p-6">
              <p className="text-3xl font-semibold text-brand-navy">{value}</p>
              <p className="mt-2 capitalize text-muted">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-md border border-line bg-white p-6">
          <h2 className="text-2xl font-semibold">CMS Management</h2>
          <p className="mt-3 leading-7 text-muted">
            REST endpoints and MongoDB models are prepared for jobs, applications, services, industries, insights, testimonials, FAQs and contacts. Build full CRUD screens on this protected shell as the next implementation phase.
          </p>
        </div>
      </div>
    </section>
  );
}
