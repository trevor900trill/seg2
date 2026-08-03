import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-[#2c3031] overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-[#1a1c1d] via-transparent to-[#2c3031]"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span className="text-[#bba373] tracking-[0.2em] text-sm md:text-base uppercase font-bold mb-4 block">Kenya – Women’s Enterprise Accelerator</span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#f5f1e8] mb-6 leading-tight">Transform Business, Transform Lives</h1>
          <p className="text-[#f5f1e8]/80 text-xl md:text-2xl font-serif italic mb-10 max-w-2xl mx-auto">Luxury + Impact In 5 Days</p>
          <a href="#contact" className="inline-block mt-4 border border-[#bba373] bg-[#bba373] text-[#2c3031] hover:bg-transparent hover:text-[#bba373] transition-all px-8 py-3 tracking-widest uppercase text-sm font-semibold">
            Schedule a Briefing
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center border-b border-[#bba373]/20">
        <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium">
          A 5-day luxury immersion in Kenya’s Maasai Mara that delivers measurable impact alongside breathtaking beauty.
        </p>
        <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
          This journey combines private aviation, boutique lodge luxury, and deep collaboration with Maasai women entrepreneurs to create tangible, lasting change. We provide a seamless framework of private aviation, exclusive lodges, and co-creation workshops designed to produce clear, actionable outcomes for both guests and the women’s cooperatives we partner with.
        </p>
      </section>

      {/* Signature Moments */}
      <section className="py-24 px-6 bg-[#f5f1e8]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-[#2c3031] mb-16">Curated Signature Moments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Strategic Co-Creation", desc: "Lead intimate workshops alongside Maasai women entrepreneurs, focusing on product development, branding, and market strategy." },
              { title: "Balloon Safari & Champagne Breakfast", desc: "Gain a majestic perspective of the Mara plains from a hot-air balloon, followed by a celebratory breakfast in the bush." },
              { title: "Luxury Bush Dinner Under the Stars", desc: "Enjoy an expertly curated gourmet meal in a private, lantern-lit setting in the heart of the wilderness." },
              { title: "Vineyard-Style Sundowner Tasting", desc: "Reflect on the day’s work with a sophisticated tasting of fine wines and spirits as the African sun sets." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 border-l-4 border-[#bba373] shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-serif text-[#2c3031] mb-4">{item.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey Arc */}
      <section className="py-24 px-6 bg-[#2c3031] text-[#f5f1e8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#bba373] mb-4">The Journey Arc</h2>
            <p className="tracking-widest uppercase text-sm text-[#f5f1e8]/60 font-semibold">5 Days | Nairobi → Maasai Mara → Nairobi</p>
          </div>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#bba373]/50 before:to-transparent">
            {[
              { day: "Day 1", loc: "Nairobi: Context & Leadership Lens", desc: "Private briefing, macro insights on women’s enterprise in Kenya, curated welcome dinner." },
              { day: "Day 2", loc: "Maasai Mara: Immersion & Understanding", desc: "Fly privately to the Mara. Meet the cooperative. Understand production cycles, challenges, ambitions." },
              { day: "Day 3", loc: "Co-Creation Day (Accelerator Core)", desc: "Your team works alongside the Maasai women to design real business assets: SKU line sheets, SOPs, storefront blueprints, digital brand kits, and a 30-day go-to-market plan." },
              { day: "Day 4", loc: "Reflection & Mara Magic", desc: "Balloon safari at sunrise, champagne breakfast, vineyard-style sundowner tasting. Evening salon: lessons, commitments, next steps." },
              { day: "Day 5", loc: "Legacy Handover", desc: "Presentation of the blueprint. Certificates. Dignified media. Return to Nairobi for departures." }
            ].map((stop, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#2c3031] bg-[#bba373] text-[#2c3031] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                  {idx + 1}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg bg-[#1a1c1d] border border-[#bba373]/20 shadow-lg">
                  <span className="text-[#bba373] font-bold text-sm tracking-widest uppercase block mb-1">{stop.day}</span>
                  <h3 className="text-xl font-serif text-[#f5f1e8] mb-2">{stop.loc}</h3>
                  <p className="text-[#f5f1e8]/70 text-sm leading-relaxed">{stop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extraordinary Factors */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-center text-[#2c3031] mb-16">What Makes This Expedition Extraordinary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Enterprise-Led, Not Charity-Driven", desc: "Participants engage as founders and leaders, not beneficiaries." },
              { title: "Curated Cohorts", desc: "Small group format allows depth, trust, and meaningful exchange." },
              { title: "Practical Focus", desc: "Emphasis on skills, access, and decision-making." },
              { title: "Contextual Immersion", desc: "Business learning grounded in local market realities." },
              { title: "Respectful Engagement", desc: "Dignity-first, peer-to-peer interaction at all levels." }
            ].map((factor, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="w-12 h-12 mx-auto bg-[#bba373]/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-3 h-3 bg-[#bba373] rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif text-[#2c3031] mb-3">{factor.title}</h3>
                <p className="text-foreground/70">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Legacy */}
      <section className="bg-[#bba373] text-[#2c3031] py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">The Legacy</h2>
          <p className="text-xl mb-12 leading-relaxed font-medium">
            This journey is defined by its tangible output. Your collaboration results in a concrete 30-Day Go-To-Market Plan delivered to the women’s cooperative, including:
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <span className="border border-[#2c3031] px-6 py-3 font-semibold bg-[#f5f1e8]/20">Product SKU Packs & Pricing Strategies</span>
            <span className="border border-[#2c3031] px-6 py-3 font-semibold bg-[#f5f1e8]/20">Digital Storefront Blueprints</span>
            <span className="border border-[#2c3031] px-6 py-3 font-semibold bg-[#f5f1e8]/20">Standard Operating Procedures</span>
          </div>
          <p className="text-2xl font-serif italic text-white/90">
            "You don’t just visit; you equip, empower, and leave a working framework for sustainable growth."
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif text-[#2c3031] mb-4">Exclusive. Impactful. Tailored.</h2>
        <p className="text-lg text-foreground/80 leading-relaxed">
          This accelerator is offered exclusively for private groups or dedicated CSR cohorts, with a maximum of 12 guests per journey. Each itinerary is carefully crafted to align with your organization's specific impact goals while delivering an uncompromising luxury experience in the Maasai Mara.
        </p>
      </section>

      <ContactForm />
    </main>
  );
}
