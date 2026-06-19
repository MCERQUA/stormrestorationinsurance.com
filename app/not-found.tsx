import Link from "next/link";
import { CloudOff } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-storm-mist px-5 pt-24">
      <div className="text-center">
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-storm-navy text-white">
          <CloudOff className="h-10 w-10" />
        </span>
        <h1 className="mt-6 font-heading text-5xl font-extrabold text-storm-navy">
          404
        </h1>
        <p className="mt-3 text-lg text-storm-slate">
          The storm blew this page away. Let&apos;s get you back to safety.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" variant="primary" size="lg">
            Back Home
          </Button>
          <Button href="/quote" variant="outline" size="lg">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
