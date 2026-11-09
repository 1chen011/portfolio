const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="relative z-20 border-b border-[#DDE9F5] bg-[#F7FBFF]">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-4 px-6 py-5 md:px-10">
        <a href="#home" aria-label="Yichen — back to top" className="inline-flex items-center gap-2 text-lg font-semibold tracking-[-.04em] text-navy">
          <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#327DD7] font-mono text-base text-white">Y.</span>
          Yichen<span className="text-[#327DD7]">/dev</span>
        </a>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-7">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-xs font-medium text-[#526D87] transition-colors hover:text-[#327DD7] sm:text-sm">{link.label}</a>
          ))}
          <a href="https://github.com/1chen011" target="_blank" rel="noopener noreferrer" className="hidden rounded-lg border border-[#C9DAEB] px-4 py-2 text-xs font-medium text-[#285A91] transition-colors hover:border-[#327DD7] hover:bg-white sm:inline-flex">GitHub ↗</a>
        </div>
      </nav>
    </header>
  );
}
