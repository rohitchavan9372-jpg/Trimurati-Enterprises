import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/count-up";
import { Icon } from "@/components/icons";
import { MediaFrame } from "@/components/media";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { clients, featuredServices, homeImages, homeStats, siteConfig } from "@/data/site";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/motion";
import BorderGlow from "@/components/border-glow";

const parseStatValue = (value) => {
  const clean = value.replace(/,/g, "");
  const match = clean.match(/^([+-]?\d+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return { number: 0, suffix: value };
  }

  return {
    number: Number(match[1]),
    suffix: match[2]
  };
};

export default function HomePage() {
  const faqs = [
    {
      question: "Which infrastructure services do you handle end-to-end?",
      answer:
        "We deliver controlled blasting, rock cutting, cracking, rockbolt support, steel fabric and wiremesh fixing, shotcrete support, plus allied material and transport operations."
    },
    {
      question: "Do you provide support for large and time-sensitive projects?",
      answer:
        "Yes. Our teams are structured for high-volume industrial projects with staged deployment, safety-led planning, and execution schedules aligned to site milestones."
    },
    {
      question: "How do you maintain safety during rock engineering activities?",
      answer:
        "We follow survey-first planning, methodical sequencing, trained field supervision, and strict on-site control checks to reduce vibration impact and protect adjacent structures."
    },
    {
      question: "Can we request both technical execution and material logistics together?",
      answer:
        "Absolutely. We regularly combine execution services with aggregate supply and transport so clients can manage progress through a single coordinated delivery partner."
    },
    {
      question: "How can we start a new project discussion?",
      answer:
        "Share your project location, scope, and timeline through our contact page. Our team will review site requirements and propose a practical execution approach."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Trimurti Enterprise Home",
    url: siteConfig.url,
    description: siteConfig.description
  };
  const clientRows = [
    clients.filter((_, index) => index % 2 === 0),
    clients.filter((_, index) => index % 2 === 1)
  ].filter((row) => row.length);

  return (
    <>
      <StructuredData data={schema} />
      <section className="section">
        <div className="container hero-grid hero-grid--home">
          <SlideIn direction="left">
            <span className="eyebrow">Trimurti Enterprise</span>
            <h1 className="display">Welcome to Our <em>Home.</em><br />Building Stronger Sites.</h1>
            <p className="lede" style={{ maxWidth: "38rem", marginTop: "1.5rem" }}>
              This is the home page of Trimurti Enterprise, where infrastructure materials,
              transport strength, and precision execution come together for modern projects.
            </p>
            <p className="muted hero-intro-note">
              From hard rock services to reliable supply and logistics, we help every project start strong and move forward with confidence.
            </p>
            <div className="home-hero-actions">
              <Link href="/services" className="button">Our Projects</Link>
              <Link href="/contact" className="button-secondary">Partner With Us</Link>
            </div>
          </SlideIn>
          <SlideIn direction="right" className="hero-art">
            <div className="hero-visual">
              <MediaFrame
                src={homeImages.hero}
                alt="Trimurti Enterprise home page hero"
                className="hero-frame hero-frame--home"
                priority
                sizes="(max-width: 980px) 100vw, 56vw"
              />
            </div>
          </SlideIn>
        </div>
      </section>
      <section className="section stats-band">
        <FadeIn className="container">
          <StaggerContainer className="card-grid">
            {homeStats.map((stat) => {
              const { number, suffix } = parseStatValue(stat.value);

              return (
                <StaggerItem key={stat.label} className="stat-card">
                  <strong>
                    <CountUp
                      from={0}
                      to={number}
                      duration={1.8}
                      separator=","
                      suffix={suffix}
                      showSuffixOnEnd
                      className="stat-card__count"
                    />
                  </strong>
                  <span>{stat.label}</span>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </FadeIn>
      </section>
      <section className="section">
        <div className="container">
          <FadeIn className="section-heading">
            <div>
              <span className="eyebrow">Our Expertise</span>
              <h2 className="headline">Comprehensive Industrial <em>Solutions</em></h2>
            </div>
          </FadeIn>
          <StaggerContainer className="card-grid">
            {featuredServices.map((service) => (
              <StaggerItem key={service.title}>
                <BorderGlow innerClassName="service-card" backgroundColor="var(--surface-card)" borderRadius={24} glowRadius={28}>
                  <Link href={service.href} style={{ display: "block", textDecoration: "none", color: "inherit", height: "100%" }}>
                    <div className="service-icon"><Icon name={service.icon} /></div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </Link>
                </BorderGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <FadeIn className="section-heading center">
            <span className="eyebrow">Trusted By Industry Leaders</span>
            <h2 className="headline" style={{ marginTop: "1rem" }}>
              Clients Who Build at <em>Scale</em>
            </h2>
            <p className="muted" style={{ maxWidth: "46rem", margin: "1.2rem auto 0" }}>
              Our materials, execution support, and rock engineering services have supported leading
              developers, EPC contractors, and infrastructure partners across major projects.
            </p>
          </FadeIn>
          <div className="client-marquee" aria-label="Client logos and names">
            {clientRows.map((row, rowIndex) => (
              <div
                key={`client-row-${rowIndex}`}
                className={`client-marquee__row${rowIndex % 2 === 1 ? " client-marquee__row--reverse" : ""}`}
              >
                <div className="client-marquee__track">
                  {[0, 1].map((copyIndex) => (
                    <div
                      key={`client-group-${rowIndex}-${copyIndex}`}
                      className="client-marquee__group"
                      aria-hidden={copyIndex === 1}
                    >
                      {row.map((client) => (
                        <article key={`${client.name}-${rowIndex}-${copyIndex}`} className="client-card">
                          <div className="client-card__logo">
                            <Image
                              src={client.logo}
                              alt={client.alt}
                              fill
                              sizes="(max-width: 720px) 74vw, (max-width: 980px) 38vw, 17rem"
                            />
                          </div>
                          <p>{client.name}</p>
                        </article>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <FadeIn className="section-heading center">
            <span className="eyebrow">FAQ</span>
            <h2 className="headline" style={{ marginTop: "1rem" }}>
              Frequently Asked <em>Questions</em>
            </h2>
            <p className="muted" style={{ maxWidth: "42rem", margin: "1.1rem auto 0" }}>
              Quick answers to common questions about our execution, quality process, and project coordination.
            </p>
          </FadeIn>
          <StaggerContainer className="faq-list">
            {faqs.map((item) => (
              <StaggerItem key={item.question} className="faq-item">
                <details>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <WhatsAppFloat />
    </>
  );
}

