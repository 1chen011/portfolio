
import { portfolio } from "@/data/portfolio";

type Project = (typeof portfolio.projects)[number];

function PlanoraPreview() {
  return (
    <div
      aria-label="Abstract illustration representing Planora's task management and focus features"
      role="img"
      className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[#E8F2FB] px-8 py-12 sm:min-h-[340px]"
    >
      <div className="absolute -left-12 top-12 h-44 w-44 rounded-full bg-[#B5D6F6]/60 blur-2xl" />
      <div className="absolute -right-10 bottom-5 h-48 w-48 rounded-full bg-[#C7E0F9]/80 blur-2xl" />

      <div className="relative w-full max-w-[390px] rotate-[-3deg] rounded-xl border border-[#BDD4E8] bg-white shadow-[0_22px_60px_rgba(35,74,117,0.14)] transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-y-2">
        <div className="flex h-9 items-center gap-1.5 border-b border-[#E4EDF5] px-4">
          <span className="h-2 w-2 rounded-full bg-[#E5A7A7]" />
          <span className="h-2 w-2 rounded-full bg-[#E9CE91]" />
          <span className="h-2 w-2 rounded-full bg-[#A6D0B7]" />
          <span className="ml-auto text-[10px] font-medium text-navy/40">
            Planora
          </span>
        </div>

        <div className="grid grid-cols-[68px_1fr] gap-4 p-5 sm:grid-cols-[90px_1fr]">
          <div className="space-y-4 border-r border-[#E5EDF5] pr-3">
            <div className="h-3 w-10 rounded bg-[#327DD7]/70" />
            <div className="h-2 w-full rounded bg-[#E1EAF3]" />
            <div className="h-2 w-4/5 rounded bg-[#E1EAF3]" />
            <div className="h-2 w-3/4 rounded bg-[#E1EAF3]" />
          </div>

          <div className="space-y-4">
            <div>
              <div className="mb-2 h-3 w-1/2 rounded bg-[#25476C]" />
              <div className="h-2 w-3/4 rounded bg-[#D9E5F0]" />
            </div>

            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-[#E5EDF5] p-3"
              >
                <span className="h-4 w-4 shrink-0 rounded border-2 border-[#82B4E7]" />
                <div className="flex-1 space-y-2">
                  <div className="h-2 w-3/4 rounded bg-[#B8CDE0]" />
                  <div className="h-1.5 w-1/2 rounded bg-[#E3EBF3]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#327DD7] text-3xl text-white shadow-xl sm:right-12">
        ◷
      </div>
    </div>
  );
}

function WalletPreview() {
  return (
    <div
      aria-label="Abstract illustration representing Wallet iOS expense tracking"
      role="img"
      className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[#E7EEF8] px-8 py-10 sm:min-h-[340px]"
    >
      <div className="absolute left-8 top-12 h-36 w-36 rounded-full bg-[#C1D9F5]/80" />
      <div className="absolute bottom-6 right-8 h-44 w-44 rounded-full bg-[#B8D5F4]/60 blur-xl" />

      <div className="relative w-40 rotate-[6deg] rounded-[2rem] border-[6px] border-[#24476B] bg-[#24476B] p-1 shadow-[0_25px_60px_rgba(35,74,117,0.2)] transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-y-2 sm:w-44">
        <div className="aspect-[9/18] overflow-hidden rounded-[1.4rem] bg-white p-4">
          <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-[#24476B]" />

          <div className="text-[9px] text-[#7A91A8]">
            Overview
          </div>
          <div className="mt-2 text-2xl font-semibold text-[#24476B]">
            Wallet
          </div>

          <div className="mt-5 flex h-20 items-end justify-between gap-2">
            {[35, 65, 45, 85, 55].map((height, index) => (
              <div
                key={index}
                style={{ height: `${height}%` }}
                className="flex-1 rounded-t bg-[#79ADE4]"
              />
            ))}
          </div>

          <div className="mt-5 space-y-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-lg bg-[#E1ECF9]" />
                <div className="flex-1 space-y-1">
                  <div className="h-1.5 w-3/4 rounded bg-[#B9CDE1]" />
                  <div className="h-1.5 w-1/2 rounded bg-[#E1EAF3]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-[14%] top-[24%] rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg">
        <span className="text-xs font-semibold text-[#327DD7]">
          SwiftUI
        </span>
      </div>

      <div className="absolute bottom-[18%] right-[12%] rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg">
        <span className="text-xs font-semibold text-[#327DD7]">
          SwiftData
        </span>
      </div>
    </div>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  if (project.id === "wallet") {
    return <WalletPreview />;
  }

  return <PlanoraPreview />;
}

function ProjectShowcase({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reverse = index % 2 === 1;

  return (
    <article className="group border-b border-pale-blue py-12 last:border-b-0 md:py-16">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className={reverse ? "md:order-2" : ""}>
          <ProjectPreview project={project} />
        </div>

        <div className={reverse ? "md:order-1" : ""}>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs tracking-widest text-[#327DD7]">
              {project.number} / {project.category.toUpperCase()}
            </span>

            <span className="rounded-full bg-[#EDF3F9] px-3 py-1 text-xs text-navy/65">
              {project.status}
            </span>
          </div>

          <h3 className="text-4xl font-semibold tracking-tight text-navy md:text-5xl">
            {project.name}
          </h3>

          <p className="mt-3 text-lg font-medium text-navy/85">
            {project.tagline}
          </p>

          <p className="mt-5 max-w-lg leading-8 text-navy/65">
            {project.description}
          </p>

          <div className="mt-7">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-navy/45">
              Key Features
            </p>

            <ul className="space-y-3">
              {project.highlights.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-6 text-navy/75"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#327DD7]"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-[#EDF3F9] px-3 py-1.5 text-xs text-[#426282]"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border-b border-[#327DD7] pb-1 font-medium text-[#2468BA] transition-colors hover:text-navy"
          >
            View Source on GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-8 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#327DD7]">
              01 / Selected Projects
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-navy md:text-5xl">
              Projects I&apos;ve built.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-navy/65">
              Personal projects where I explore product ideas,
              engineering decisions, and user experience
              across web and mobile platforms.
            </p>
          </div>

          <a
            href="https://github.com/1chen011"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit border-b border-[#327DD7] pb-1 text-sm font-medium text-[#2468BA]"
          >
            More on GitHub ↗
          </a>
        </div>

        <div className="mt-8">
          {portfolio.projects.map((project, index) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
