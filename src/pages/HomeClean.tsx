import { useMemo } from 'react';

const services = [
  {
    title: 'Home Cleaning',
    description: 'Recurring or deep home cleaning with eco-friendly products.',
    price: 'From $89',
  },
  {
    title: 'Office Cleaning',
    description: 'Reliable commercial cleaning for a polished, productive workspace.',
    price: 'Custom quote',
  },
  {
    title: 'Deep Cleaning',
    description: 'Detailed reset for kitchens, bathrooms, and hard-to-reach areas.',
    price: 'From $199',
  },
];

const stats = [
  { value: '15,000+', label: 'Happy Clients' },
  { value: '12+', label: 'Years Experience' },
  { value: '50+', label: 'Expert Cleaners' },
  { value: '99.9%', label: 'Satisfaction' },
];

const faqs = [
  {
    question: 'Do you bring supplies?',
    answer: 'Yes — we bring all eco-friendly cleaning supplies and equipment.',
  },
  {
    question: 'Can I book one-time service?',
    answer: 'Absolutely. One-time, weekly, biweekly, and monthly plans are available.',
  },
  {
    question: 'Do you clean offices after hours?',
    answer: 'Yes, we offer flexible scheduling, including evenings and weekends.',
  },
];

export default function HomeClean() {
  const highlights = useMemo(() => ['Eco-certified', 'Insured & bonded', 'Fast booking'], []);

  return (
    <main className="home-page pt-24 bg-transparent">
      <section className="home-section relative mx-auto max-w-container-max overflow-hidden px-margin-mobile py-20 md:px-margin-desktop lg:py-28">
        <div className="absolute inset-0 -z-10 hero-image-overlay" />
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Premium eco-friendly cleaning
            </span>
            <h1 className="max-w-xl text-5xl font-bold leading-tight text-primary md:text-6xl">
              Spotless spaces, sustainable soul.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-on-surface-variant">
              We deliver a premium cleaning experience for homes and offices with safe products,
              trusted professionals, and beautifully polished results.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-lg bg-primary px-6 py-4 font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5"
              >
                Book Now
              </a>
              <a
                href="#faq"
                className="rounded-lg border border-secondary-container px-6 py-4 font-semibold text-secondary transition-colors hover:bg-secondary-fixed"
              >
                Learn More
              </a>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              {highlights.map((item) => (
                <span key={item} className="rounded-full bg-white/70 px-4 py-2 text-sm text-on-surface-variant shadow-sm backdrop-blur">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="home-hero-panel overflow-hidden rounded-3xl border border-outline-variant/20 shadow-2xl">
              <div className="grid gap-4 p-5 sm:grid-cols-2">
                <div className="home-soft-card rounded-2xl p-5">
                  <div className="mb-4 h-56 rounded-2xl bg-linear-to-br from-primary/15 to-tertiary-fixed/40" />
                  <p className="text-sm font-semibold text-secondary">Home refresh</p>
                  <p className="mt-2 text-sm text-on-surface-variant">A cleaner, brighter, calmer home.</p>
                </div>
                <div className="home-accent-card rounded-2xl p-5 text-white">
                  <div className="mb-4 h-56 rounded-2xl bg-white/10" />
                  <p className="text-sm font-semibold text-white/90">Trust & care</p>
                  <p className="mt-2 text-sm text-white/80">Background-checked professionals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-band border-y border-outline-variant/20 py-16">
        <div className="mx-auto grid max-w-container-max grid-cols-2 gap-6 px-margin-mobile text-center md:grid-cols-4 md:px-margin-desktop">
          {stats.map((stat) => (
            <div key={stat.label} className="home-stat-card rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-secondary">{stat.value}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-on-surface-variant">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="home-section mx-auto max-w-container-max px-margin-mobile py-20 md:px-margin-desktop">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Services made to fit your space</h2>
          <p className="mt-4 text-lg text-on-surface-variant">
            Choose a one-time clean or schedule recurring visits for effortless upkeep.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="home-service-card flex flex-col rounded-3xl border border-outline-variant/20 p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">{service.price}</span>
              </div>
              <p className="flex-1 text-on-surface-variant">{service.description}</p>
              <a href="#contact" className="mt-6 font-semibold text-secondary">
                Request booking →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section home-band py-20">
        <div className="mx-auto grid max-w-container-max gap-8 px-margin-mobile md:px-margin-desktop lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Why customers choose us</h2>
            <p className="text-lg text-on-surface-variant">
              We focus on detail, consistency, and a premium finish that feels fresh every time.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="home-value-card rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-primary">Eco-friendly products</p>
              <p className="mt-2 text-sm text-on-surface-variant">Safe for families, pets, and the planet.</p>
            </div>
            <div className="home-value-card rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-primary">Trusted professionals</p>
              <p className="mt-2 text-sm text-on-surface-variant">Vetted cleaners with reliable service standards.</p>
            </div>
            <div className="home-value-card rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-primary">Flexible scheduling</p>
              <p className="mt-2 text-sm text-on-surface-variant">Book mornings, evenings, or weekends.</p>
            </div>
            <div className="home-value-card rounded-2xl p-6 shadow-sm">
              <p className="font-semibold text-primary">Custom plans</p>
              <p className="mt-2 text-sm text-on-surface-variant">Tailored cleaning based on your needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="home-section mx-auto max-w-container-max px-margin-mobile py-20 md:px-margin-desktop">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-primary md:text-4xl">Frequently asked questions</h2>
            <p className="mt-4 text-lg text-on-surface-variant">
              Quick answers to the most common booking questions.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="home-faq-item group rounded-2xl border border-outline-variant/20 p-5 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-primary">{faq.question}</summary>
                <p className="mt-3 text-on-surface-variant">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="home-section px-margin-mobile pb-24 md:px-margin-desktop">
        <div className="home-cta-panel mx-auto max-w-container-max rounded-3xl px-8 py-10 text-white shadow-2xl md:px-12 md:py-14">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl">Ready for a brighter space?</h2>
            <p className="text-white/85">
              Book your cleaning in a few clicks and let our team handle the rest.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/contact" className="rounded-lg bg-white px-6 py-4 font-semibold text-primary">
              Contact Us
            </a>
            <a href="/services" className="rounded-lg border border-white/30 px-6 py-4 font-semibold text-white">
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
