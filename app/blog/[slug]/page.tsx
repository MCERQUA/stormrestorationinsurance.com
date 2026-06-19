import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { getAllPostSlugs, getPostMeta } from "@/lib/blog";
import CTABand from "@/components/sections/CTABand";
import { SITE } from "@/lib/utils";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const meta = getPostMeta(slug);
    return {
      title: meta.title,
      description: meta.description,
      alternates: { canonical: `/blog/${slug}` },
      openGraph: {
        type: "article",
        title: meta.title,
        description: meta.description,
        images: ["/images/og-default.png"],
      },
    };
  } catch {
    return { title: "Article Not Found" };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getAllPostSlugs().includes(slug)) notFound();

  const meta = getPostMeta(slug);
  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    author: { "@type": "Person", name: meta.author },
    publisher: { "@type": "Organization", name: SITE.brand },
    image: `${SITE.url}/images/og-default.png`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article>
        <header className="relative overflow-hidden bg-storm-navy pt-32 pb-16 text-white lg:pt-40">
          <div className="absolute inset-0 dot-pattern-light opacity-50" />
          <div className="container-x relative max-w-3xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-storm-amber-light hover:text-white">
              <ArrowLeft className="h-4 w-4" /> All Articles
            </Link>
            <h1 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-balance sm:text-4xl">
              {meta.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-sm font-medium text-blue-100/80">
              <span className="flex items-center gap-1.5"><User className="h-4 w-4 text-storm-amber-light" />{meta.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-storm-amber-light" />{meta.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-storm-amber-light" />{meta.readingTime}</span>
            </div>
          </div>
        </header>

        <div className="bg-white py-16">
          <div className="container-x max-w-3xl">
            <div className="prose-storm">
              <Post />
            </div>
            <div className="mt-12 rounded-2xl border border-storm-cloud bg-storm-mist p-7 text-center">
              <p className="font-heading text-lg font-bold text-storm-navy">
                Need coverage for your storm restoration business?
              </p>
              <p className="mt-2 text-sm text-storm-slate">
                Get a 15-minute quote from a team that specializes in the trade.
              </p>
              <Link href="/quote" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-storm-amber px-6 py-3 text-sm font-bold text-white transition hover:bg-storm-amber-dark">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </article>
      <CTABand />
    </>
  );
}
