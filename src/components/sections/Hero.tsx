"use client";

import { useEffect, useRef, useState } from "react";
import { portfolio } from "@/data/portfolio";

function HeroArtwork() {
  const stage = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => {
      };
    motion.addEventListener("change", onChange);
    return () => motion.removeEventListener("change", onChange);
  }, []);

  function move(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = stage.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition({
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5,
    });
  }

  return (
    <div
      ref={stage}
      onPointerMove={move}
      onPointerLeave={() => setPosition({ x: 0, y: 0 })}
      className="hero-art relative isolate mx-auto aspect-square w-full max-w-[480px] touch-pan-y"
      aria-hidden="true"
    >
      <div className="absolute inset-[7%] rounded-full border border-[#B8D5F2]/75" />
      <div className="absolute inset-[17%] rounded-full border border-dashed border-[#A8CBEF]/80" />
      <div className="absolute inset-[30%] rounded-full bg-[#DDEDFD] blur-3xl" />
      <div
        className="hero-parallax absolute inset-[12%] flex items-center justify-center"
        style={{ transform: `translate3d(${position.x * 18}px, ${position.y * 18}px, 0)` }}
      >
        <div className="hero-ring h-[72%] w-[72%] rounded-full border-[clamp(20px,5vw,42px)] border-[#7EAFE9] shadow-[18px_24px_42px_rgba(43,96,165,.18),inset_10px_10px_20px_rgba(255,255,255,.75)]" />
      </div>
      <div
        className="hero-parallax absolute inset-0 flex items-center justify-center"
        style={{ transform: `translate3d(${position.x * -34}px, ${position.y * -28}px, 0)` }}
      >
        <div className="hero-orb relative left-[19%] top-[-14%] h-[27%] w-[27%] rounded-full bg-[radial-gradient(circle_at_30%_25%,#fff_0%,#B5D9FF_28%,#6CA5E8_58%,#285FAF_100%)] shadow-[14px_22px_36px_rgba(33,80,147,.25)]" />
      </div>
      <div
        className="hero-parallax absolute inset-0"
        style={{ transform: `translate3d(${position.x * 35}px, ${position.y * 25}px, 0)` }}
      >
        <span className="absolute left-[12%] top-[19%] text-5xl text-[#3578C7] sm:text-6xl">✳</span>
        <span className="absolute bottom-[19%] right-[9%] h-5 w-5 rotate-45 rounded-[4px] bg-[#4F8CD4]" />
      </div>
      <span className="absolute bottom-[8%] left-[9%] font-mono text-[10px] tracking-[.16em] text-[#6B8BAA]">DESIGN × ENGINEERING</span>
      <span className="absolute right-[7%] top-[12%] rounded-full border border-[#B9D2ED] bg-white/80 px-3 py-2 font-mono text-[10px] text-[#3D6FA8] shadow-sm">WEB / MOBILE</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero-background relative isolate overflow-hidden text-navy">
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#E0EFFD] blur-3xl" />
      <div className="relative mx-auto grid min-h-[min(780px,88svh)] w-full max-w-6xl items-center gap-10 px-6 pb-16 pt-16 md:grid-cols-[1.05fr_.95fr] md:px-10 md:pb-20 md:pt-24">
        <div className="hero-enter relative z-10">
          <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D1E3F4] bg-white/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[.13em] text-[#3D75B5] sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#4A9E8E]" />
            {portfolio.role}
          </p>
          <h1 className="max-w-[650px] text-[clamp(3.4rem,7vw,6rem)] font-semibold leading-[1.02] tracking-[-.065em]">
            Hi, I&apos;m Yichen<span className="text-[#327DD7]">.</span>
            <span className="mt-3 block text-[clamp(2.5rem,5vw,4.8rem)] leading-[1.09] text-[#327DD7]">I build things that work.</span>
          </h1>
          <p className="mt-7 max-w-[500px] text-base leading-8 text-[#5B7289] md:text-lg">{portfolio.introduction}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#327DD7] px-6 font-medium text-white shadow-[0_8px_24px_rgba(50,125,215,.18)] transition-[transform,background] duration-200 hover:-translate-y-1 hover:bg-[#2269BE]">Explore my work <span aria-hidden="true">↗</span></a>
            <a href="#contact" className="inline-flex min-h-12 items-center rounded-lg border border-[#C7D9EB] bg-white/70 px-6 font-medium text-[#294B6E] transition-colors hover:border-[#327DD7] hover:bg-white">Get in touch</a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#D6E5F3] pt-5 font-mono text-[10px] uppercase tracking-[.14em] text-[#7690A9]">
            <span>Frontend engineering</span><span aria-hidden="true">✳</span><span>Web &amp; mobile</span><span aria-hidden="true">✳</span><span>Product thinking</span>
          </div>
        </div>
        <div className="hero-enter-delayed relative"><HeroArtwork /></div>
      </div>
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 pb-8 font-mono text-[10px] uppercase tracking-[.17em] text-[#7894B0] md:px-10">
        <span>Selected work / 2026</span><a href="#work" className="transition-colors hover:text-[#327DD7]">Scroll to explore ↓</a>
      </div>
    </section>
  );
}
