
export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-8 bg-navy px-6 py-24 text-snow md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 font-mono text-xs uppercase tracking-widest text-sky">
          04 / Contact
        </p>

        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Let's build something meaningful.
        </h2>

        <p className="mt-6 max-w-xl leading-8 text-white/65">
          Interested in connecting or discussing an opportunity?
          Feel free to explore my work and reach out.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://github.com/1chen011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center rounded-md bg-sky px-6 font-medium text-navy transition-colors hover:bg-white"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
