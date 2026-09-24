import Image from 'next/image'

export function MediaPartnerSection() {
  return (
    <section className="w-full bg-bg-secondary border-y border-white/10 py-10 md:py-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 font-body">
          Official Media Partner
        </span>

        <a
          href="https://eventopia.in"
          target="_blank"
          rel="noopener"
          className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity duration-300"
        >
          <Image
            src="/partners/Eventopia-Logo-13.png"
            alt="Eventopia"
            width={160}
            height={48}
            className="h-8 w-auto object-contain"
          />
        </a>
      </div>
    </section>
  )
}
