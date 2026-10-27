
const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="relative z-10 border-b border-white/10">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6 md:px-10"
      >
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-snow"
        >
          PORTFOLIO<span className="text-sky">.</span>
        </a>

        <div className="flex flex-wrap justify-end gap-x-5 gap-y-2 sm:gap-x-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-white/75 transition-colors hover:text-sky sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
