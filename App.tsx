import { Phone, Clock, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { Emblem } from "./Emblem";
import { FlipDiskMatrix } from "./flip-disk-matrix";

function IgIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

const IG = "https://www.instagram.com/hairrlabco";
const TREE = "https://linktr.ee/hairrlabco";
const TEL = "tel:37300779";

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=72`;

const services = [
  { n: "01", t: "Hair", d: "Scissor work, skin fades, and clean line-ups shaped to your head — cut to grow out well, not just to look good today.", src: "1647140655214-e4a2d914971f" },
  { n: "02", t: "Shave", d: "Hot towel, straight razor, cold finish. The classic wet shave, taken slowly — the closest, cleanest pass there is.", src: "1517832606299-7ae9b720a186" },
  { n: "03", t: "Groom", d: "Beard shaping, hairline detailing, grey blending, and the upkeep between visits that keeps the whole look sharp.", src: "1493256338651-d82f7acb2b38" },
];

const gallery = ["1635273051937-a0ddef9573b6", "1593702275687-f8b402bf1fb5", "1621645582931-d1d3e6564943", "1536520002442-39764a41e987"];

export default function App() {
  return (
    <div className="font-sans text-[#161616] bg-paper overflow-x-hidden">
      {/* TOPBAR */}
      <div className="bg-ink text-neutral-400 text-xs tracking-wider">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10 flex justify-between items-center gap-4 py-2 flex-wrap">
          <span><span className="text-white">&#9679;</span> Open today 10:00 &ndash; 22:00 <span className="hidden sm:inline">&middot; Seven days a week</span></span>
          <div className="flex gap-6">
            <a href={TEL} className="hover:text-white">Appointments 37300779</a>
            <a href={IG} target="_blank" rel="noopener" className="hidden sm:inline hover:text-white">@hairrlabco</a>
          </div>
        </div>
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10 flex items-center justify-between gap-4 py-3">
          <a href="#top" className="flex items-center gap-3 text-white" aria-label="Hair Lab Co. home">
            <Emblem className="w-9 h-9 text-white" />
            <span className="font-bold tracking-[0.2em] text-[0.95rem] uppercase">Hair Lab Co.</span>
          </a>
          <nav className="flex items-center gap-9">
            {[["Services", "#services"], ["About", "#about"], ["Gallery", "#work"], ["Visit", "#visit"]].map(([l, h]) => (
              <a key={h} href={h} className="hidden md:inline text-white/85 text-xs font-medium tracking-[0.14em] uppercase hover:text-white transition">{l}</a>
            ))}
            <a href={TEL} className="inline-flex items-center gap-2 bg-white text-ink text-xs font-semibold tracking-[0.16em] uppercase px-5 py-3 hover:bg-transparent hover:text-white border border-white transition">Book</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative min-h-[92vh] flex items-center justify-center text-center text-white overflow-hidden">
          <img src={img("1585747860715-2ba37e788b70", 1920)} alt="Hair Lab Co barber studio interior" className="absolute inset-0 w-full h-full object-cover grayscale brightness-[.7] contrast-[1.05]" />
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_40%,rgba(13,13,13,.35),rgba(13,13,13,.88))]" />
          <div className="relative z-10 px-5 flex flex-col items-center animate-reveal">
            <Emblem className="w-[clamp(120px,20vw,176px)] h-[clamp(120px,20vw,176px)] text-white mb-6" />
            <h1 className="font-sans font-bold tracking-[0.14em] uppercase leading-none text-[clamp(2.4rem,7vw,5rem)]">Hair Lab Co.</h1>
            <div className="flex gap-4 items-center justify-center mt-4 font-serif italic text-[clamp(1.2rem,3.4vw,2rem)] text-[#efeee9]">
              <span>Hair</span><i className="w-[5px] h-[5px] bg-silver rounded-full" /><span>Shave</span><i className="w-[5px] h-[5px] bg-silver rounded-full" /><span>Groom</span>
            </div>
            <div className="mt-5 text-xs tracking-[0.3em] uppercase text-silver">Est. 1979 &middot; Barbicide Certified &middot; Manama</div>
            <div className="flex gap-3 flex-wrap justify-center mt-9">
              <a href={TEL} className="inline-flex items-center gap-2 bg-white text-ink text-sm font-semibold tracking-[0.16em] uppercase px-7 py-4 border border-white hover:bg-transparent hover:text-white transition"><Phone size={15} /> Call to Book</a>
              <a href={TREE} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-white text-sm font-semibold tracking-[0.16em] uppercase px-7 py-4 border border-white/40 hover:border-white transition">Price List</a>
            </div>
          </div>
        </section>

        {/* FLIP-DISK BOARD (21st.dev component) */}
        <section className="bg-black py-20 sm:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-10 flex flex-col items-center">
            <div className="text-[0.68rem] font-mono tracking-[0.34em] uppercase text-silver mb-8">On the board today</div>
            <FlipDiskMatrix controls={false} words={["HAIR", "SHAVE", "GROOM", "1979"]} />
            <p className="mt-8 text-neutral-500 text-sm tracking-wide text-center max-w-md">
              Walk in seven days a week, 10AM to 10PM. Or call ahead to hold the chair.
            </p>
          </div>
        </section>

        {/* TRUST */}
        <div className="bg-ink border-y border-white/10">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-10 flex justify-center gap-6 sm:gap-14 flex-wrap py-5">
            {["Established 1979", "Barbicide Certified", "Open 7 Days \u00b7 10\u201310", "Walk-ins Welcome"].map((t) => (
              <span key={t} className="inline-flex items-center gap-3 text-neutral-300 text-xs font-medium tracking-[0.2em] uppercase">
                <i className="w-1 h-1 bg-silver rounded-full" />{t}
              </span>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <section id="services" className="bg-paper py-20 sm:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
            <div className="mb-14 animate-reveal">
              <div className="text-[0.68rem] font-semibold tracking-[0.34em] uppercase text-neutral-500">The Services</div>
              <h2 className="font-serif font-semibold text-[clamp(2.3rem,6vw,4.2rem)] leading-tight mt-3">Hair, shave &amp; groom.</h2>
              <p className="text-neutral-500 max-w-[52ch] mt-4">Three disciplines, each done properly &mdash; no upsell, no rush, dialed to how you actually wear it.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-[440px] md:max-w-none mx-auto">
              {services.map((s) => (
                <article key={s.n} className="bg-white border border-[#e3e1dc] overflow-hidden flex flex-col group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={img(s.src)} alt={s.t} loading="lazy" className="w-full h-full object-cover grayscale contrast-[1.03] group-hover:grayscale-0 group-hover:scale-[1.04] transition duration-500" />
                  </div>
                  <div className="p-7">
                    <div className="font-serif italic text-neutral-500">{s.n}</div>
                    <h3 className="font-serif font-semibold text-[1.85rem] leading-tight mt-1 mb-2">{s.t}</h3>
                    <p className="text-neutral-500 text-[0.95rem] mb-5">{s.d}</p>
                    <a href={TEL} className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase border-b border-ink pb-1">Book <ArrowRight size={13} /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-ink text-white py-20 sm:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-10 grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="relative animate-reveal">
              <img src={img("1503951914875-452162b0f3f1", 900)} alt="Client in the barber chair" loading="lazy" className="w-full aspect-[4/5] object-cover grayscale contrast-[1.05]" />
              <Emblem className="absolute -right-4 -bottom-4 w-24 h-24 text-white bg-ink rounded-full p-1.5" />
            </div>
            <div className="animate-reveal">
              <div className="text-[0.68rem] font-semibold tracking-[0.34em] uppercase text-silver">Since 1979</div>
              <h2 className="font-serif font-semibold text-[clamp(2.1rem,5vw,3.6rem)] leading-tight mt-3 mb-6">Four decades in the chair.</h2>
              <p className="text-neutral-400 mb-4 max-w-[52ch] text-[1.03rem]">Time in the trade teaches you that the details are the whole job. <b className="text-white font-semibold">Every cut, every shave, every finish is deliberate</b> &mdash; the result you walk out with is repeatable because the craft behind it is.</p>
              <p className="text-neutral-400 max-w-[52ch] text-[1.03rem]">The chair is spotless for a reason. We hold ourselves to a clinical standard of hygiene: <b className="text-white font-semibold">every blade, comb, and surface disinfected between clients.</b></p>
              <div className="mt-7 inline-flex gap-3 items-center border border-white/15 px-5 py-4">
                <ShieldCheck size={26} className="text-white shrink-0" />
                <div><b className="text-white font-semibold text-sm">Barbicide Certified</b><span className="block text-neutral-400 text-xs">Disinfection to hospital standard</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="work" className="bg-cream py-20 sm:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
            <div className="text-center max-w-[640px] mx-auto mb-14 animate-reveal">
              <div className="text-[0.68rem] font-semibold tracking-[0.34em] uppercase text-neutral-500">The Work</div>
              <h2 className="font-serif font-semibold text-[clamp(2.3rem,6vw,4.2rem)] leading-tight mt-3">Fresh cuts.</h2>
              <p className="text-neutral-500 mt-4">A look inside the shop. Hover to see them in full.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {gallery.map((g) => (
                <figure key={g} className="relative overflow-hidden aspect-[3/4] bg-neutral-800 group">
                  <img src={img(g, 700)} alt="Hair Lab Co" loading="lazy" className="w-full h-full object-cover grayscale contrast-[1.04] group-hover:grayscale-0 group-hover:scale-[1.05] transition duration-500" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* VISIT */}
        <section id="visit" className="bg-paper py-20 sm:py-28">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
            <div className="mb-14 animate-reveal">
              <div className="text-[0.68rem] font-semibold tracking-[0.34em] uppercase text-neutral-500">Visit Us</div>
              <h2 className="font-serif font-semibold text-[clamp(2.3rem,6vw,4.2rem)] leading-tight mt-3">Come in for a fresh cut.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <div className="animate-reveal">
                <div className="py-1">
                  <div className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-2"><Clock size={15} /> Hours</div>
                  <div className="font-serif text-[clamp(2rem,5vw,2.9rem)] font-semibold leading-none">10:00 &ndash; 22:00<small className="block font-sans text-xs tracking-[0.14em] uppercase text-neutral-500 mt-2">Open seven days a week</small></div>
                </div>
                <div className="border-t border-[#e3e1dc] mt-6 pt-6">
                  <div className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-2"><MapPin size={15} /> Find Us</div>
                  <div className="text-[1.12rem]">Manama, Bahrain &mdash; <a href={TREE} target="_blank" rel="noopener" className="border-b border-[#e3e1dc] hover:border-ink">see location</a></div>
                </div>
                <div className="border-t border-[#e3e1dc] mt-6 pt-6">
                  <div className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-2"><IgIcon size={15} /> Follow</div>
                  <div className="text-[1.12rem]"><a href={IG} target="_blank" rel="noopener" className="border-b border-[#e3e1dc] hover:border-ink">@hairrlabco</a></div>
                </div>
              </div>
              <div className="bg-ink text-white p-8 sm:p-12 flex flex-col justify-center">
                <div className="text-[0.68rem] font-semibold tracking-[0.34em] uppercase text-silver">Reserve the chair</div>
                <h3 className="font-serif font-semibold text-[clamp(1.9rem,4vw,2.7rem)] leading-tight mt-3 mb-3">Walk in, or call ahead.</h3>
                <p className="text-neutral-400 mb-6 max-w-[36ch]">We take walk-ins all day. To lock a time, call for an appointment &mdash; it's the fastest way.</p>
                <div className="flex gap-3 flex-wrap">
                  <a href={TEL} className="inline-flex items-center gap-2 bg-white text-ink text-sm font-semibold tracking-[0.16em] uppercase px-7 py-4 border border-white hover:bg-transparent hover:text-white transition"><Phone size={15} /> Call 37300779</a>
                  <a href={TREE} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-white text-sm font-semibold tracking-[0.16em] uppercase px-7 py-4 border border-white/40 hover:border-white transition">All Links</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-ink text-neutral-400 pt-16 pb-9">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
          <div className="flex justify-between gap-10 flex-wrap pb-9 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 text-white mb-4">
                <Emblem className="w-12 h-12 text-white" />
                <span className="font-bold tracking-[0.2em] uppercase text-[1.05rem]">Hair Lab Co.</span>
              </div>
              <p className="max-w-[32ch] text-sm">Precision men's grooming in Manama since 1979. Hair, shave &amp; groom.</p>
            </div>
            <div className="flex gap-12 flex-wrap">
              <div>
                <div className="text-white text-[0.66rem] tracking-[0.18em] uppercase mb-4">Studio</div>
                {[["Services", "#services"], ["About", "#about"], ["Gallery", "#work"], ["Visit", "#visit"]].map(([l, h]) => (
                  <a key={h} href={h} className="block text-sm mb-2 hover:text-white">{l}</a>
                ))}
              </div>
              <div>
                <div className="text-white text-[0.66rem] tracking-[0.18em] uppercase mb-4">Contact</div>
                <a href={TEL} className="block text-sm mb-2 hover:text-white">37300779</a>
                <a href={IG} target="_blank" rel="noopener" className="block text-sm mb-2 hover:text-white">@hairrlabco</a>
                <a href={TREE} target="_blank" rel="noopener" className="block text-sm mb-2 hover:text-white">linktr.ee/hairrlabco</a>
              </div>
              <div>
                <div className="text-white text-[0.66rem] tracking-[0.18em] uppercase mb-4">Hours</div>
                <span className="block text-sm mb-2">Mon &ndash; Sun</span>
                <span className="block text-sm mb-2">10:00 &ndash; 22:00</span>
                <span className="block text-sm mb-2">Barbicide Certified</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-4 flex-wrap pt-6 text-xs tracking-wide">
            <span>&copy; {new Date().getFullYear()} Hair Lab Co. &middot; Established 1979</span>
            <span>Made by <a href="https://hubofecom.com" target="_blank" rel="noopener" className="text-white">hubofecom</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
