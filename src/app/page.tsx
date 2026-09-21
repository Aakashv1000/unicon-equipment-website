import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Unicon Equipment (India) Pvt. Ltd. | Commercial Kitchen Solutions",
  description:
    "Leading manufacturer & importer of Commercial Kitchen, Refrigeration & Bakery Equipment in India since 2002. Complete turnkey solutions for hotels, restaurants, canteens & bakeries.",
};

// ─────────────────────────────────────────────────────────────────────────────
// Icon Components
// ─────────────────────────────────────────────────────────────────────────────

function IconKitchen() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="15" rx="2" />
      <path d="M2 10h20" />
      <circle cx="8" cy="15" r="2" />
      <circle cx="16" cy="15" r="2" />
      <path d="M8 6V4M16 6V4" />
    </svg>
  );
}

function IconRefrigeration() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="m20 16-4-4 4-4" />
      <path d="m4 8 4 4-4 4" />
      <path d="m16 4-4 4-4-4" />
      <path d="m8 20 4-4 4 4" />
    </svg>
  );
}

function IconBakery() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="8" width="20" height="13" rx="2" />
      <path d="M2 13h20" />
      <path d="M8 8V6a4 4 0 0 1 8 0v2" />
      <circle cx="12" cy="17" r="1.5" />
    </svg>
  );
}

function IconExhaust() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 12 2.5 8.87" />
      <path d="m12 12 7.7 4.45" />
      <path d="M12 12V2" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconFlame() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c0 6-8 6-8 12a8 8 0 0 0 16 0c0-6-8-6-8-12z" />
      <path d="M12 12c0 3-3 3-3 6a3 3 0 0 0 6 0c0-3-3-3-3-6z" />
    </svg>
  );
}

function IconTurnkey() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg className="w-3 h-3 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.22a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6 6l1.27-.75a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "500+", label: "Projects Completed" },
  { value: "1000+", label: "Satisfied Clients" },
  { value: "PAN India", label: "Nationwide Coverage" },
];

const services = [
  {
    Icon: IconKitchen,
    title: "Commercial Kitchen Design",
    description:
      "Custom kitchen layouts optimised for efficiency and workflow. We handle consultancy, designing, and complete layout plans with technical details for every F&B establishment.",
  },
  {
    Icon: IconRefrigeration,
    title: "Refrigeration Systems",
    description:
      "High-performance commercial refrigeration including walk-in coolers, display refrigerators, blast chillers, and ice machines for every scale of operation.",
  },
  {
    Icon: IconBakery,
    title: "Bakery Equipment",
    description:
      "Professional bakery solutions including deck ovens, proofers, spiral mixers, dough dividers, and sheeters for bakeries and confectioneries.",
  },
  {
    Icon: IconExhaust,
    title: "Exhaust & Ventilation",
    description:
      "Complete design and installation of exhaust hoods, fresh air systems, and kitchen ventilation to ensure safe and comfortable cooking environments.",
  },
  {
    Icon: IconFlame,
    title: "LPG Pipeline Systems",
    description:
      "Safe, efficient LPG pipeline design and installation for commercial kitchens — ensuring maximum safety and fuel economy in large-scale operations.",
  },
  {
    Icon: IconTurnkey,
    title: "Turnkey Projects",
    description:
      "End-to-end kitchen setup from initial concept and design through procurement, manufacturing, installation, and final commissioning.",
  },
];

const categories = [
  {
    title: "Cooking Equipment",
    subtitle: "Ranges, Ovens, Grills & Fryers",
    gradient: "from-orange-600/20 to-red-950/60",
    border: "border-orange-500/20",
    accent: "#f97316",
    items: ["Commercial Ranges", "Deck Ovens", "Grills & Griddles", "Deep Fryers", "Steamers & Tilting Pans"],
  },
  {
    title: "Cold Storage",
    subtitle: "Refrigeration & Freezing Solutions",
    gradient: "from-blue-600/20 to-cyan-950/60",
    border: "border-blue-500/20",
    accent: "#3b82f6",
    items: ["Walk-in Coolers", "Display Refrigerators", "Blast Chillers", "Ice Machines", "Undercounter Fridges"],
  },
  {
    title: "Bakery & Confectionery",
    subtitle: "Professional Baking Equipment",
    gradient: "from-yellow-600/20 to-amber-950/60",
    border: "border-yellow-500/20",
    accent: "#f59e0b",
    items: ["Deck Ovens", "Spiral Mixers", "Dough Dividers", "Proofers", "Sheeters & Moulders"],
  },
  {
    title: "Kitchen Utilities",
    subtitle: "Workstations & Storage Systems",
    gradient: "from-slate-600/20 to-slate-950/60",
    border: "border-slate-500/20",
    accent: "#94a3b8",
    items: ["Work Tables & Counters", "Wall & Floor Shelving", "Exhaust Hoods", "SS Sinks", "Pot & Pan Racks"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation & Site Survey",
    description:
      "We begin with a thorough site visit and needs assessment to understand your specific requirements, space constraints, and operational goals.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "Our experts create detailed kitchen layout drawings, workflow diagrams, and full technical specifications tailored to your space and budget.",
  },
  {
    step: "03",
    title: "Manufacturing & Supply",
    description:
      "High-quality equipment manufactured in-house or sourced from trusted suppliers — every piece meets our rigorous quality standards.",
  },
  {
    step: "04",
    title: "Installation & Handover",
    description:
      "Professional installation by certified technicians, followed by testing, commissioning, staff training, and complete project handover.",
  },
];

const marqueeItems = [
  "Commercial Kitchen Design",
  "Refrigeration Systems",
  "Bakery Equipment",
  "Turnkey Projects",
  "Exhaust & Ventilation",
  "LPG Pipeline Systems",
  "25+ Years Experience",
  "1000+ Happy Clients",
  "PAN India Coverage",
  "Established 2002",
];

// ─────────────────────────────────────────────────────────────────────────────
// Sections
// ─────────────────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      style={{ background: "rgba(8,9,13,0.88)", backdropFilter: "blur(20px)" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center group-hover:bg-amber-400 transition-colors duration-200 shadow-lg shadow-amber-500/20">
            <span className="text-black font-black text-sm tracking-tight">UEC</span>
          </div>
          <div>
            <div className="text-white font-bold text-sm leading-none tracking-wide">UNICON EQUIPMENT</div>
            <div className="text-amber-500/75 text-[9px] leading-none tracking-[0.2em] uppercase mt-0.5">Company</div>
          </div>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Home",     href: "#home" },
            { label: "About",    href: "#about" },
            { label: "Products", href: "#products" },
            { label: "Services", href: "#services" },
            { label: "Contact",  href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-200 font-medium"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          id="nav-cta"
          className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30"
        >
          Get a Quote
        </a>

        {/* Mobile hamburger */}
        <button id="mobile-menu-btn" aria-label="Open menu" className="md:hidden text-gray-400 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#08090d]">
      {/* Hero image with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-kitchen.jpg"
          alt="Professional commercial kitchen by Unicon Equipment"
          fill
          priority
          className="object-cover opacity-20"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090d]/70 via-[#08090d]/40 to-[#08090d]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090d]/80 via-transparent to-[#08090d]/80" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 hero-grid opacity-50" />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-24 pb-20">
        {/* Eyebrow badge */}
        <div
          className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 rounded-full px-5 py-2 mb-10"
          style={{ animation: "fadeInUp 0.6s ease both" }}
        >
          <span className="w-2 h-2 bg-amber-500 rounded-full" style={{ animation: "pulseGlow 2s ease-in-out infinite" }} />
          <span className="text-amber-400 text-xs font-semibold tracking-[0.15em] uppercase">
            Established 2002 &nbsp;•&nbsp; India&apos;s Trusted Commercial Kitchen Experts
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.92] tracking-tight"
          style={{ animation: "fadeInUp 0.8s ease 0.1s both" }}
        >
          <span className="text-white block">We Create</span>
          <span className="gradient-text block">Commercial</span>
          <span className="text-white block">Kitchens That</span>
          <span className="text-white block">Work.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: "fadeInUp 0.8s ease 0.2s both" }}
        >
          Big or small — we design from scratch, refurbish, or simply upgrade commercial
          kitchens for hotels, restaurants, canteens, bakeries, and messes across India.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          style={{ animation: "fadeInUp 0.8s ease 0.3s both" }}
        >
          <a
            id="hero-start-project"
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/35 hover:-translate-y-0.5"
          >
            Start Your Project
            <IconArrowRight />
          </a>
          <a
            id="hero-explore-services"
            href="#services"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/15 hover:border-amber-500/45 text-white hover:text-amber-400 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:bg-amber-500/6"
          >
            Explore Our Services
          </a>
        </div>

        {/* Stats Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
          style={{ animation: "fadeInUp 0.8s ease 0.4s both" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/4 border border-white/8 rounded-2xl px-4 py-5 backdrop-blur-sm hover:border-amber-500/25 hover:bg-white/6 transition-all duration-300"
            >
              <div className="text-3xl font-black text-amber-400 mb-1">{stat.value}</div>
              <div className="text-[11px] text-gray-500 uppercase tracking-wider leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#08090d] to-transparent pointer-events-none" />
    </section>
  );
}

function MarqueeBanner() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="border-y border-amber-500/12 bg-amber-500/4 overflow-hidden py-4">
      <div className="flex marquee-track whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="inline-flex items-center gap-5 px-5 shrink-0">
            <span className="text-amber-400/65 text-[11px] font-semibold tracking-[0.18em] uppercase">{item}</span>
            <span className="text-amber-500/25 text-[8px]">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#08090d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Visual Card */}
          <div className="relative pt-5 pr-5">
            {/* Established badge — outside card so it's never clipped */}
            <div className="absolute top-0 right-0 bg-amber-500 text-black font-black text-sm px-5 py-2 rounded-full shadow-xl shadow-amber-500/30 z-10">
              Est. 2002
            </div>

            <div className="relative bg-gradient-to-br from-[#181b24] to-[#0d1017] rounded-3xl p-8 border border-white/8 overflow-hidden">
              {/* Decorative background glow */}
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4">
                <div className="bg-white/4 rounded-2xl p-5 border border-white/6">
                  <div className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Our Core Promise</div>
                  <div className="text-white font-black text-xl leading-tight">Complete Kitchen Solutions</div>
                  <div className="text-gray-500 text-sm mt-1">From consultancy to commissioning</div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { n: "25+", l: "Years" },
                    { n: "500+", l: "Projects" },
                    { n: "1000+", l: "Clients" },
                  ].map(({ n, l }) => (
                    <div key={l} className="bg-white/4 rounded-2xl p-4 border border-white/6 text-center">
                      <div className="text-2xl font-black text-amber-400">{n}</div>
                      <div className="text-gray-600 text-xs mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-amber-500/12 to-orange-500/6 rounded-2xl p-5 border border-amber-500/18">
                  <p className="text-amber-300/80 text-sm italic leading-relaxed">
                    &ldquo;Big or small, we can design from scratch, refurbish or simply upgrade.&rdquo;
                  </p>
                  <div className="text-amber-500/50 text-xs mt-2 font-semibold">— Unicon Equipment</div>
                </div>

                {/* Dot grid decoration */}
                <div className="grid grid-cols-10 gap-2 pt-1">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: i % 4 === 0
                          ? "rgba(245,158,11,0.45)"
                          : i % 7 === 0
                          ? "rgba(245,158,11,0.2)"
                          : "rgba(255,255,255,0.05)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/22 rounded-full px-4 py-2 mb-6">
              <span className="text-amber-400 text-[11px] font-bold tracking-[0.18em] uppercase">About Unicon Equipment</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              A Trusted Name in<br />
              <span className="gradient-text">Kitchen Excellence</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-5">
              Unicon Equipment (India) Pvt. Ltd., established in 2002, is a well-known and leading name
              in the manufacturing and importing of Commercial Kitchen, Refrigeration, and Bakery
              Equipment in India.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              We specialise in providing total solutions — including consultancy, designing, and layout
              plans with complete technical details for F&amp;B equipment for Commercial Kitchens, Canteens,
              Bakeries &amp; Messes — on a turnkey project basis as well as individual product basis.
              Our services also extend to designing, layout, and installation of Exhaust &amp; Fresh Air systems
              as well as LPG pipeline systems for safety and economy.
            </p>

            <div className="space-y-3">
              {[
                "Manufacturer & Importer of Premium Commercial Equipment",
                "End-to-End Turnkey Kitchen Project Solutions",
                "Consultancy, Design & Complete Layout Planning",
                "Exhaust, Fresh Air Ventilation & LPG Systems",
                "Individual Products or Full Kitchen Setups",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-amber-500/12 border border-amber-500/30 rounded-full flex items-center justify-center mt-0.5">
                    <IconCheck />
                  </div>
                  <span className="text-gray-300 text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-[#0c0e14] section-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/22 rounded-full px-4 py-2 mb-6">
            <span className="text-amber-400 text-[11px] font-bold tracking-[0.18em] uppercase">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Comprehensive commercial kitchen solutions tailored to your specific needs and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="group bg-[#111318] border border-white/6 rounded-2xl p-7 card-glow"
            >
              <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center mb-5 text-amber-400 group-hover:bg-amber-500/18 group-hover:border-amber-500/35 group-hover:shadow-lg group-hover:shadow-amber-500/10 transition-all duration-300">
                <Icon />
              </div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-400 transition-colors duration-200">
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Equipment() {
  return (
    <section id="products" className="py-28 px-6 bg-[#08090d]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/22 rounded-full px-4 py-2 mb-6">
            <span className="text-amber-400 text-[11px] font-bold tracking-[0.18em] uppercase">Equipment Categories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A comprehensive range of commercial kitchen equipment to outfit every type of food service operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map(({ title, subtitle, gradient, border, accent, items }) => (
            <div
              key={title}
              className={`group relative bg-gradient-to-br ${gradient} border ${border} rounded-3xl p-8 overflow-hidden card-glow cursor-pointer`}
            >
              {/* Corner arc decoration */}
              <div className="absolute top-0 right-0 w-36 h-36 rounded-bl-full opacity-20" style={{ background: accent }} />
              <div className="absolute -top-2 -right-2 w-20 h-20 rounded-full opacity-8" style={{ background: accent, filter: "blur(20px)" }} />

              <h3 className="text-white font-black text-2xl mb-1 relative z-10">{title}</h3>
              <p className="text-gray-500 text-sm mb-6 relative z-10">{subtitle}</p>

              <div className="space-y-2.5 relative z-10">
                {items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent, opacity: 0.7 }} />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-28 px-6 bg-[#0c0e14] section-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/22 rounded-full px-4 py-2 mb-6">
            <span className="text-amber-400 text-[11px] font-bold tracking-[0.18em] uppercase">How We Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A proven four-step process that delivers kitchens on time, on budget, every time.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map(({ step, title, description }) => (
              <div key={step} className="group relative">
                <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/25 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/18 group-hover:border-amber-500/45 group-hover:shadow-lg group-hover:shadow-amber-500/15 transition-all duration-300">
                  <span className="text-2xl font-black text-amber-400">{step}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-400 transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    { title: "25 Years of Expertise",        desc: "Decades of hands-on experience designing and installing kitchens across India." },
    { title: "End-to-End Solutions",          desc: "Single point of contact from concept to commissioning — no middlemen." },
    { title: "Quality Manufacturing",         desc: "In-house manufacturing + curated imports ensuring top-grade equipment every time." },
    { title: "On-Time Delivery",              desc: "Structured project management ensures every installation is completed on schedule." },
    { title: "After-Sales Support",           desc: "Dedicated service team for AMC, spare parts, and emergency breakdown assistance." },
    { title: "Nationwide Reach",             desc: "Serving clients across 50+ cities — from metros to tier-2 towns." },
  ];

  return (
    <section className="py-28 px-6 bg-[#08090d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/22 rounded-full px-4 py-2 mb-6">
              <span className="text-amber-400 text-[11px] font-bold tracking-[0.18em] uppercase">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              The Unicon<br />
              <span className="gradient-text">Advantage</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              For over 25 years, we&apos;ve been the preferred kitchen partner for hotels, restaurants, hospitals,
              institutions, and corporates across India. Here&apos;s what sets us apart.
            </p>

            {/* Large stat callout */}
            <div className="bg-gradient-to-br from-amber-500/12 to-orange-500/6 border border-amber-500/20 rounded-3xl p-8">
              <div className="text-6xl font-black text-amber-400 mb-2">1000+</div>
              <div className="text-white font-bold text-xl mb-2">Happy Clients Across India</div>
              <div className="text-gray-500 text-sm">From small cafeterias to large hotel chains — every client gets the same commitment to excellence.</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map(({ title, desc }) => (
              <div
                key={title}
                className="group bg-[#111318] border border-white/6 rounded-2xl p-5 card-glow"
              >
                <div className="w-8 h-8 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-amber-500/18 transition-colors duration-200">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                </div>
                <div className="text-white font-bold text-sm mb-1.5 group-hover:text-amber-400 transition-colors duration-200">{title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#0c0e14]">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-amber-500/12 via-orange-500/6 to-[#111318]/60 border border-amber-500/22 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-500/8 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/22 rounded-full px-4 py-2 mb-8">
              <span className="text-amber-400 text-[11px] font-bold tracking-[0.18em] uppercase">Get In Touch</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight">
              Ready to Build Your<br />
              <span className="gradient-text">Dream Kitchen?</span>
            </h2>

            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              From a single piece of equipment to a complete turnkey kitchen —
              we handle everything. Get a free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                id="cta-call-btn"
                href="tel:+919810253606"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/35 hover:-translate-y-0.5"
              >
                <IconPhone />
                Call Us Now
              </a>
              <a
                id="cta-email-btn"
                href="mailto:ashishv2000@gmail.com"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 border border-white/15 hover:border-amber-500/45 text-white hover:text-amber-400 font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:bg-amber-500/6"
              >
                <IconMail />
                Send an Email
              </a>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {/* Phone */}
              <div className="bg-white/4 border border-white/8 rounded-2xl p-5 text-left hover:border-amber-500/25 transition-colors duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-amber-500/12 border border-amber-500/25 rounded-lg flex items-center justify-center text-amber-400">
                    <IconPhone />
                  </div>
                  <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Phone</span>
                </div>
                <a href="tel:+919810253606" className="block text-white font-bold text-base hover:text-amber-400 transition-colors duration-200">+91 98102 53606</a>
                <a href="tel:+919810589606" className="block text-gray-500 text-sm mt-1 hover:text-amber-400 transition-colors duration-200">+91 98105 89606</a>
              </div>

              {/* Email */}
              <div className="bg-white/4 border border-white/8 rounded-2xl p-5 text-left hover:border-amber-500/25 transition-colors duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-amber-500/12 border border-amber-500/25 rounded-lg flex items-center justify-center text-amber-400">
                    <IconMail />
                  </div>
                  <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Email</span>
                </div>
                <a href="mailto:ashishv2000@gmail.com" className="block text-white font-bold text-sm hover:text-amber-400 transition-colors duration-200 break-all">ashishv2000@gmail.com</a>
                <a href="mailto:dhruvdollar@gmail.com" className="block text-gray-500 text-sm mt-1 hover:text-amber-400 transition-colors duration-200 break-all">dhruvdollar@gmail.com</a>
              </div>

              {/* Address */}
              <div className="bg-white/4 border border-white/8 rounded-2xl p-5 text-left hover:border-amber-500/25 transition-colors duration-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-amber-500/12 border border-amber-500/25 rounded-lg flex items-center justify-center text-amber-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 13-8 13S4 16 4 10a8 8 0 0 1 16 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Address</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Toy+City+MUP+II+Greater+Noida+201306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white font-bold text-sm leading-snug hover:text-amber-400 transition-colors duration-200"
                >
                  2C, Toy City, MUP II,<br />
                  Greater Noida,<br />
                  G.B. Nagar – 201306, UP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#060709] border-t border-white/5 px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <span className="text-black font-black">UE</span>
              </div>
              <div>
                <div className="text-white font-bold tracking-wide">UNICON EQUIPMENT</div>
                <div className="text-gray-600 text-xs">(India) Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mb-3">
              Leading manufacturer and importer of Commercial Kitchen, Refrigeration, and Bakery
              Equipment in India since 2002.
            </p>
            <a
              href="https://maps.google.com/?q=Toy+City+MUP+II+Greater+Noida+201306"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-gray-600 hover:text-amber-400 text-xs leading-relaxed mb-3 transition-colors duration-200 group"
            >
              <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-amber-500/50 group-hover:text-amber-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 13-8 13S4 16 4 10a8 8 0 0 1 16 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              2C, Toy City, MUP II, Greater Noida, G.B. Nagar – 201306, UP
            </a>
            <div className="text-amber-400/45 text-xs font-medium">
              Established 2002 &nbsp;•&nbsp; Trusted by 1000+ clients across India
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-5 uppercase tracking-[0.18em]">Quick Links</h4>
            <div className="space-y-2.5">
              {[
                { label: "Home",       href: "#home" },
                { label: "About Us",   href: "#about" },
                { label: "Products",   href: "#products" },
                { label: "Services",   href: "#services" },
                { label: "Contact",    href: "#contact" },
              ].map(({ label, href }) => (
                <a key={label} href={href} className="block text-gray-600 hover:text-amber-400 text-sm transition-colors duration-200">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-xs mb-5 uppercase tracking-[0.18em]">Services</h4>
            <div className="space-y-2.5">
              {[
                "Kitchen Design",
                "Refrigeration Systems",
                "Bakery Equipment",
                "Exhaust Systems",
                "LPG Pipelines",
                "Turnkey Projects",
              ].map((s) => (
                <div key={s} className="text-gray-600 text-sm">{s}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Unicon Equipment (India) Pvt. Ltd. All rights reserved.
          </div>
          <div className="text-gray-700 text-xs">www.uniconequipment.com</div>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <About />
      <Services />
      <Equipment />
      <Process />
      <WhyUs />
      <CTA />
      <Footer />
    </main>
  );
}
