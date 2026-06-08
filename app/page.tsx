import Image from "next/image";
import { Header } from "./Header";

const features = [
  {
    title: "Chapter-wise question modules",
    description:
      "Targeted practice with comprehensive chapter-specific question sets",
    image: "/images/chap.png",
    alt: "Chapter-wise modules",
    width: 574,
    height: 574,
  },
  {
    title: "24/7 Assistance",
    description: "Round-the-clock support for all your academic needs",
    image: "/images/247.png",
    alt: "24/7 assistance",
    width: 568,
    height: 568,
  },
  {
    title: "Daily Online Classes",
    description: "Regular interactive sessions with expert faculty",
    image: "/images/class.png",
    alt: "Online classes",
    width: 377,
    height: 377,
  },
  {
    title: "Regular Assessment",
    description: "Biweekly tests and comprehensive performance analysis",
    image: "/images/test.png",
    alt: "Assessments",
    width: 280,
    height: 279,
  },
  {
    title: "Chapter-wise notes",
    description:
      "Detailed, curated study materials for comprehensive understanding",
    image: "/images/notes.png",
    alt: "Study notes",
    width: 240,
    height: 240,
  },
  {
    title: "Weekly Doubt Classes",
    description: "Personalized doubt-clearing sessions with expert instructors",
    image: "/images/doubt.png",
    alt: "Doubt classes",
    width: 305,
    height: 305,
  },
];

const programs = [
  {
    title: "PCMB",
    price: "3500/month",
    points: [
      "Integrated coaching for Physics, Chemistry, Mathematics, and Biology",
      "Holistic approach to competitive exams",
      "Maximum subject coverage",
    ],
  },
  {
    title: "PCM / PCB",
    price: "3000/month",
    points: [
      "Comprehensive coverage of Physics, Chemistry, Mathematics/Biology",
      "Exam-oriented preparation strategy",
      "Tailored for JEE and NEET aspirants",
    ],
  },
  {
    title: "Any 2 subjects",
    price: "2500/month",
    points: [
      "Flexible subject combination",
      "Focused and intensive coaching",
      "Customized learning path",
    ],
  },
  {
    title: "Any 1 subject",
    price: "1250/month",
    points: [
      "Targeted subject-specific preparation",
      "Intense and precise coaching",
      "Individual subject mastery",
    ],
  },
];

const contacts = [
  { label: "+91-7994787924", href: "+917994787924" },
  { label: "+91-8606808446", href: "+918606808446" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1e3d] to-[#0a1428] text-white">
      <Header />

      <main className="pt-36">
        <section
          id="hero"
          className="mx-auto max-w-6xl scroll-mt-36 px-4 py-20 text-center"
        >
          <h1 className="heading-font mb-6 text-4xl font-bold sm:text-5xl">
            Achieve Excellence with AIMERS
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90 sm:text-xl">
            Comprehensive coaching for CBSE, JEE, NEET, and competitive exams
          </p>
          <a
            href="#contact"
            className="inline-flex rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Contact Us
          </a>
        </section>

        <section
          id="features"
          className="mx-auto max-w-6xl scroll-mt-36 px-4 py-16"
        >
          <h2 className="heading-font mb-12 text-center text-3xl font-bold">
            Our Features
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card rounded-lg p-6">
                <div className="mb-4 flex h-16 items-center justify-center">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={feature.width}
                    height={feature.height}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="courses"
          className="mx-auto max-w-6xl scroll-mt-36 px-4 py-16"
        >
          <h2 className="heading-font mb-12 text-center text-3xl font-bold">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.title}
                className="program-card rounded-lg p-8"
              >
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-2xl font-bold">{program.title}</h3>
                  <p className="w-fit rounded-full bg-orange-500 px-4 py-2 text-lg font-semibold text-white">
                    &#8377;{program.price}
                  </p>
                </div>
                <ul className="mb-4 list-inside list-disc space-y-1 text-orange-300">
                  {program.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-6">
          <div className="rounded-lg bg-orange-500 p-8 text-center">
            <Image
              src="/images/offer.png"
              alt="Special offer"
              width={700}
              height={356}
              className="mx-auto mb-6 h-24 w-auto object-contain"
            />
            <p className="mb-4 text-2xl font-bold">
              Get &#8377;1000 OFF on PCMB and PCM/PCB programs
            </p>
            <p className="mb-2 animate-pulse text-4xl font-bold">
              Limited Time Offer!
            </p>
            <p className="text-3xl font-bold">Call Now To Secure Your Spot!</p>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl scroll-mt-36 px-4 py-16 text-center"
        >
          <h2 className="heading-font mb-4 text-3xl font-bold">Contact Us</h2>
          <p className="mb-4 text-xl text-white/90">
            Get in touch with our expert counselors
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            {contacts.map((contact) => (
              <a
                key={contact.href}
                href={`tel:${contact.href}`}
                className="rounded-lg border border-orange-400/40 px-5 py-3 text-orange-400 transition hover:border-orange-300 hover:text-orange-300"
              >
                {contact.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-black py-8">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <Image
            src="/images/logo.png"
            alt="AIMERS Logo"
            width={318}
            height={461}
            className="mx-auto h-20 w-auto"
          />
        </div>
      </footer>
    </div>
  );
}
