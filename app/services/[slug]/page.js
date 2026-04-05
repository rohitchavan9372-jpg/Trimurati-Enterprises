import Link from "next/link";
import { notFound } from "next/navigation";
import BorderGlow from "@/components/border-glow";
import { Icon } from "@/components/icons";
import { MediaFrame } from "@/components/media";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { StructuredData } from "@/components/structured-data";
import { services, siteConfig } from "@/data/site";

const SERVICE_LOCAL_IMAGES = {
  "hard-rock-control-blasting": [
    "/images/services/Hard Rock Control Blasting1.jpeg",
    "/images/services/Hard Rock Control Blasting2.jpeg",
    "/images/services/Hard Rock Control Blasting3.jpeg",
    "/images/services/Hard Rock Control Blasting4.jpeg",
    "/images/services/Hard Rock Control Blasting5.jpeg",
    "/images/services/Hard Rock Control Blasting6.png"
  ],
  shotcrete: [
    "/images/services/SHOTCRETE1.jpeg",
    "/images/services/SHOTCRETE2.jpeg",
    "/images/services/SHOTCRETE3.jpeg"
  ],
  "hard-rock-diamond-saw-cutting": [
    "/images/services/HARD ROCK DAIMOND SAW CUTTER1.jpeg",
    "/images/services/HARD ROCK DAIMOND SAW CUTTER2.jpeg"
  ],
  "chemical-hard-rock-cracking": [
    "/images/services/CAMICAL HARD ROCK CRACKING1.jpeg",
    "/images/services/CAMICAL HARD ROCK CRACKING2.jpeg",
    "/images/services/CAMICAL HARD ROCK CRACKING3.jpeg"
  ],
  "manual-hard-rock-breaking": [
    "/images/services/MANUAL HARD ROCK BRAKING1.jpeg",
    "/images/services/MANUAL HARD ROCK BRAKING2.jpeg",
    "/images/services/MANUAL HARD ROCK BRAKING3.jpeg"
  ],
  "all-diameter-rockbolts": [
    "/images/services/ALL DIA ROCKBOLTS1.jpeg",
    "/images/services/ALL DIA ROCKBOLTS2.jpeg",
    "/images/services/ALL DIA ROCKBOLTS3.jpeg"
  ],
  "steel-fabric-wiremesh-fixing": [
    "/images/services/FIXING OF STEEL FABRIC  WIREMESH1.jpeg",
    "/images/services/FIXING OF STEEL FABRIC  WIREMESH2.jpeg",
    "/images/services/FIXING OF STEEL FABRIC  WIREMESH3.jpeg"
  ]
};

function getLocalServiceImages(slug) {
  return SERVICE_LOCAL_IMAGES[slug] ?? [];
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle ?? service.name,
    description: service.metaDescription ?? service.description,
    alternates: {
      canonical: `/services/${service.slug}`
    }
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  const richService = service.benefits ? service : services[0];
  const localImages = await getLocalServiceImages(slug);
  const heroImage = service.heroImage ?? localImages[0] ?? richService.heroImage;
  const detailImage = service.detailImage ?? localImages[1] ?? richService.detailImage;
  const ctaImage = service.ctaImage ?? localImages[2];
  const baseStripImages = localImages.length
    ? localImages
    : [detailImage, heroImage].filter(Boolean);
  const scrollingImages = baseStripImages.length
    ? [...baseStripImages, ...baseStripImages]
    : [];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    url: `${siteConfig.url}/services/${service.slug}`
  };

  return (
    <>
      <StructuredData data={schema} />

      <section className="section service-detail-hero">
        <div className="container hero-grid service-detail-hero__grid">
          <SlideIn direction="left" className="service-detail-hero__copy">
            <div className="service-detail-hero__copy-inner">
              <span className="eyebrow service-detail-hero__tag">
                {richService.heroTag}
              </span>
              <h1 className="display service-detail-hero__title">
                {service.name}
              </h1>
              <p className="lede service-detail-hero__lede">
                {service.short}
              </p>
            </div>
          </SlideIn>
          <SlideIn direction="right" className="hero-art service-detail-hero__art">
            <MediaFrame
              src={heroImage}
              alt={service.name}
              className="hero-frame hero-frame--service-detail"
              priority
              sizes="(max-width: 560px) 100vw, (max-width: 980px) 92vw, 44vw"
            />
          </SlideIn>
        </div>
      </section>

      <section className="section">
        <FadeIn className="container">
          <span className="eyebrow">Technical Overview</span>
          <h2 className="headline" style={{ marginTop: "1rem" }}>
            What it is &amp; How it works
          </h2>
          <p className="lede" style={{ marginTop: "1.5rem", maxWidth: "58rem" }}>
            Control blasting is a specialized technique used in civil engineering and
            mining to break rock precisely while protecting surrounding structures.
            Our approach uses engineered sequencing, geological mapping, and
            vibration-sensitive execution.
          </p>
          <p className="lede" style={{ maxWidth: "58rem" }}>
            Before work begins, the team studies fracture planes, access constraints,
            and nearby utilities to design a site-specific blast sequence that balances
            output with safety.
          </p>

          {scrollingImages.length ? (
            <div className="auto-strip" aria-label={`${service.name} gallery`}>
              <div className="auto-strip__track">
                {scrollingImages.map((image, index) => (
                  <div key={`${image}-${index}`} className="auto-strip__item">
                    <MediaFrame
                      src={image}
                      alt={`${service.name} gallery ${index + 1}`}
                      className="image-frame"
                      sizes="(max-width: 980px) 70vw, 28vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </FadeIn>
      </section>

      <section className="section section--soft">
        <div className="container">
          <FadeIn className="section-heading center">
            <span className="eyebrow">Advantage</span>
            <h2 className="headline" style={{ fontStyle: "italic", marginTop: "1rem" }}>
              Key Strategic Benefits
            </h2>
          </FadeIn>
          <StaggerContainer className="feature-grid">
            {richService.benefits.map((benefit, index) => (
              <StaggerItem key={benefit.title}>
                <BorderGlow innerClassName="benefit-card" backgroundColor="var(--surface-card)" borderRadius={24}>
                  <div className="mini-icon">
                    <Icon name={index === 0 ? "shield" : index === 1 ? "arch" : "speed"} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </BorderGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section">
        <div className="container split-grid">
          <SlideIn direction="left">
            <BorderGlow innerClassName="method-card" backgroundColor="var(--surface-card)" borderRadius={24}>
              <h2 className="headline">Our Engineering Methodology</h2>
              <p style={{ marginTop: "1rem" }}>
                From initial survey to final clearance, we follow a rigorous four-step
                execution model rooted in control, documentation, and repeatable safety.
              </p>
              <div className="panel" style={{ marginTop: "1.5rem" }}>
                <strong
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "3rem",
                    color: "var(--primary)",
                    display: "block"
                  }}
                >
                  250+
                </strong>
                <span className="eyebrow">Successful Projects</span>
              </div>
            </BorderGlow>
          </SlideIn>

          <StaggerContainer className="method-grid">
            {richService.methodology.map((item) => (
              <StaggerItem key={item.step}>
                <BorderGlow innerClassName="method-item" backgroundColor="var(--surface-card)" borderRadius={20}>
                  <strong>{item.step}</strong>
                  <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                  <p>{item.text}</p>
                </BorderGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn>
            <div
              className="cta-panel"
              style={{
                textAlign: "center",
                backgroundImage: ctaImage
                  ? `linear-gradient(135deg, rgba(132,153,224,.92), rgba(70,91,158,.78)), url(${ctaImage})`
                  : undefined,
                backgroundSize: ctaImage ? "cover" : undefined,
                backgroundPosition: ctaImage ? "center" : undefined
              }}
            >
              <h2 className="headline">Ready to Start Your Infrastructure Journey?</h2>
              <p style={{ maxWidth: "42rem", margin: "1rem auto 0", lineHeight: 1.8 }}>
                Consult with our engineering experts for a tailored blast design,
                geological survey, and execution plan aligned with your site.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  marginTop: "2rem"
                }}
              >
                <Link href="/contact" className="button">
                  Request Expert Consultation
                </Link>
                <Link href="/services" className="button-secondary">
                  View More Services
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
