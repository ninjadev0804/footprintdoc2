import { PageHero } from "@/components/page-hero";
import { blogPosts } from "@/data/site";

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" subtitle="Foot and ankle education for healthier daily movement." />
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">{post.date}</p>
              <h2 className="mt-2 font-serif text-2xl text-teal-950">{post.title}</h2>
              <p className="mt-3 text-sm text-slate-700">{post.excerpt}</p>
              <button
                type="button"
                className="mt-4 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                Read More
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
