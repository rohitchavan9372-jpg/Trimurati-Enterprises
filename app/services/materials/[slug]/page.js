import Link from "next/link";
import { notFound } from "next/navigation";
import BorderGlow from "@/components/border-glow";
import HeroImageCarousel from "@/components/hero-image-carousel";
import { Icon } from "@/components/icons";
import { MediaFrame } from "@/components/media";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { StructuredData } from "@/components/structured-data";
import { siteConfig, materialServicePages } from "@/data/site";

const DIVISION_PAGE_CONFIG = {
  "trimurti-stone-crusher": {
    galleryLabel: "Project Photos",
    iconOverrides: {
      "stone-crusher-20-mm": "crusher",
      "stone-crusher-m-sand": "foundation",
      "stone-crusher-plaster-sand": "spark"
    },
    technicalDescription:
      "All materials are processed to meet industry grading standards, ensuring performance reliability in structural applications.",
    technicalPoints: [
      "Suitable for RCC and structural concrete",
      "Controlled particle distribution",
      "Clean and tested material output"
    ],
    productionTitle: "Controlled Production for Reliable Quality",
    productionIntro:
      "Our production process is designed for precision and consistency at every stage:",
    productionSteps: [
      "Raw stone selection",
      "Multi-stage crushing process",
      "Screening and grading",
      "Quality inspection",
      "Bulk dispatch readiness"
    ],
    productionClosing:
      "Every batch is processed to maintain uniformity and performance.",
    promiseTitle: "Why Clients Choose This Division",
    promiseIntro:
      "We maintain stable material quality, dependable dispatch, and consistent support from production to delivery.",
    promisePoints: [
      "Daily quality checks and grading control",
      "High-volume production for uninterrupted site work",
      "Reliable project support for urgent and planned demand"
    ]
  },
  "trimurti-transport": {
    galleryLabel: "Transport Operations",
    iconOverrides: {
      "transport-rubble": "truck",
      "transport-metal-10-20": "foundation",
      "transport-m-sand": "arch",
      "transport-plaster-sand": "spark"
    },
    technicalDescription:
      "Our logistics operations follow controlled dispatch standards to ensure safe handling, timely delivery, and dependable supply flow.",
    technicalPoints: [
      "Optimized routes for faster turnaround",
      "Material-specific loading and handling protocols",
      "Tracked dispatch windows for active sites"
    ],
    productionTitle: "Controlled Logistics for Reliable Delivery",
    productionIntro:
      "Our transport execution model is built for consistency at every stage:",
    productionSteps: [
      "Material pickup planning",
      "Vehicle allocation and route scheduling",
      "Safe loading and dispatch",
      "Transit coordination and delivery confirmation",
      "Rapid turnaround for next-cycle demand"
    ],
    productionClosing:
      "Every load is managed to protect quality, timeline, and site continuity.",
    promiseTitle: "Why Clients Choose Our Transport Division",
    promiseIntro:
      "We deliver disciplined logistics support that keeps construction timelines stable and material flow uninterrupted.",
    promisePoints: [
      "Committed delivery windows",
      "Responsive support for urgent site requirements",
      "Reliable fleet coordination across project phases"
    ]
  }
};

const MATERIAL_LOCAL_IMAGES = {
  "trimurti-stone-crusher": [
    "/images/services/Stone Crusher1.jpeg",
    "/images/services/Stone Crusher2.jpeg",
    "/images/services/Stone Crusher3.jpeg",
    "/images/services/Stone Crusher4.jpeg"
  ],
  "trimurti-transport": [
    "/images/services/Trimurti Transport1.jpeg",
    "/images/services/Trimurti Transport2.jpeg",
    "/images/services/Trimurti Transport3.jpeg",
    "/images/services/Trimurti Transport4.jpeg",
    "/images/services/Trimurti Transport5.jpeg",
    "/images/services/Trimurti Transport6.jpeg"
  ]
};

export function generateStaticParams() {
  return materialServicePages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = materialServicePages.find((entry) => entry.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle ?? service.title,
    description: service.metaDescription ?? service.description,
    alternates: {
      canonical: `/services/materials/${service.slug}`
    }
  };
}

export default async function MaterialServicePage({ params }) {
  const { slug } = await params;
  const service = materialServicePages.find((entry) => entry.slug === slug);

  if (!service) {
    notFound();
  }

  const hasSubServices = Array.isArray(service.subServices) && service.subServices.length > 0;
  const divisionConfig = DIVISION_PAGE_CONFIG[service.slug];
  const isDivisionPage = Boolean(divisionConfig) && hasSubServices;

  const subServiceImages = hasSubServices ? service.subServices.flatMap((item) => item.images ?? []) : [];
  const localImages = Array.from(new Set([...(MATERIAL_LOCAL_IMAGES[slug] ?? []), ...subServiceImages]));
  const heroImage = localImages[0];
  const galleryImages = localImages.length ? [...localImages, ...localImages] : [];

  const linkedSlugs = (service.children ?? [])
    .map((child) => child.href?.match(/^\/services\/materials\/([^#/]+)/)?.[1])
    .filter(Boolean);

  const related = materialServicePages.filter((entry) => {
    if (entry.slug === service.slug) {
      return false;
    }

    if (linkedSlugs.length) {
      return linkedSlugs.includes(entry.slug);
    }

    return entry.group === service.group;
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    url: `${siteConfig.url}/services/materials/${service.slug}`
  };

  return (
    <>
      <StructuredData data={schema} />

      <section className="section material-detail-hero">
        <div className="container split-grid material-detail-hero__grid">
          <SlideIn direction="left" className="material-detail-hero__copy">
            <div className="material-detail-hero__copy-inner">
              <span className="eyebrow material-detail-hero__tag">
                {service.group}
              </span>
              <h1 className="display material-detail-hero__title">
                {service.title}
              </h1>
              <p className="lede material-detail-hero__lede">
                {service.description}
              </p>
            </div>
          </SlideIn>

          {heroImage ? (
            <SlideIn direction="right" delay={0.1} className="material-detail-hero__art">
              <div className="material-detail-hero__media">
                {localImages.length > 1 ? (
                  <HeroImageCarousel images={localImages} alt={service.title} />
                ) : (
                  <MediaFrame src={heroImage} alt={service.title} className="image-frame" sizes="(max-width: 560px) 100vw, (max-width: 980px) 92vw, 44vw" />
                )}
              </div>
            </SlideIn>
          ) : null}
        </div>
      </section>

      <section className="section">
        {isDivisionPage ? (
          <>
            <div className="container material-detail-section-gap">
              <FadeIn>
                <div className="section-heading">
                  <div>
                    <h2 className="headline">Sub Services</h2>
                    <div className="underline" />
                  </div>
                </div>
              </FadeIn>

              <StaggerContainer className="feature-grid">
                {service.subServices.map((subService) => (
                  <StaggerItem key={subService.slug}>
                    <BorderGlow innerClassName="benefit-card" backgroundColor="var(--surface-card)" borderRadius={24}>
                      <article id={subService.slug} className="material-detail-subservice">
                        <div className="material-detail-subservice__head">
                          <div className="mini-icon material-detail-subservice__icon">
                            <Icon name={divisionConfig.iconOverrides[subService.slug] ?? subService.icon} />
                          </div>
                          <h3 className="material-detail-subservice__title">{subService.title}</h3>
                        </div>
                        <p>{subService.description}</p>
                        <ul className="bullet-list material-detail-list-gap">
                          {subService.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </article>
                    </BorderGlow>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {galleryImages.length ? (
              <FadeIn className="container material-detail-gallery-gap">
                <span className="eyebrow">{divisionConfig.galleryLabel}</span>
                <div className="auto-strip" aria-label={`${service.title} gallery`}>
                  <div className="auto-strip__track">
                    {galleryImages.map((image, index) => (
                      <div key={`${image}-${index}`} className="auto-strip__item">
                        <MediaFrame
                          src={image}
                          alt={`${service.title} image ${index + 1}`}
                          className="image-frame"
                          sizes="(max-width: 980px) 70vw, 28vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ) : null}

            <div className="container material-detail-section-gap">
              <StaggerContainer className="split-grid">
                <StaggerItem>
                  <BorderGlow innerClassName="panel" backgroundColor="var(--surface-low)" borderRadius={24}>
                    <article>
                      <span className="eyebrow">Technical Specifications</span>
                      <h2 className="headline material-detail-card-title">Technical Specifications</h2>
                      <p className="material-detail-card-copy">{divisionConfig.technicalDescription}</p>
                      <ul className="bullet-list material-detail-list-gap">
                        {divisionConfig.technicalPoints.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </article>
                  </BorderGlow>
                </StaggerItem>

                <StaggerItem>
                  <BorderGlow innerClassName="panel" backgroundColor="var(--surface-low)" borderRadius={24}>
                    <article>
                      <span className="eyebrow">Production Process</span>
                      <h2 className="headline material-detail-card-title">{divisionConfig.productionTitle}</h2>
                      <p className="material-detail-card-copy">{divisionConfig.productionIntro}</p>
                      <ul className="bullet-list material-detail-list-gap">
                        {divisionConfig.productionSteps.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ul>
                      <p className="material-detail-card-copy material-detail-card-copy--strong">{divisionConfig.productionClosing}</p>
                    </article>
                  </BorderGlow>
                </StaggerItem>
              </StaggerContainer>
            </div>

            <FadeIn className="container material-detail-section-gap">
              <BorderGlow innerClassName="panel" backgroundColor="var(--surface-low)" borderRadius={24}>
                <article>
                  <span className="eyebrow">Operational Promise</span>
                  <h2 className="headline material-detail-card-title">{divisionConfig.promiseTitle}</h2>
                  <p className="material-detail-card-copy">{divisionConfig.promiseIntro}</p>
                  <div className="material-detail-promise-list">
                    {divisionConfig.promisePoints.map((point) => (
                      <div key={point} className="nav-dropdown__item material-detail-pill">
                        {point}
                      </div>
                    ))}
                  </div>
                  <div className="material-detail-button-row">
                    <Link href="/contact" className="button">Request Quote</Link>
                  </div>
                </article>
              </BorderGlow>
            </FadeIn>
          </>
        ) : (
          <div className="container material-detail-section-gap">
            <StaggerContainer className="split-grid">
              <StaggerItem>
                <BorderGlow innerClassName="panel" backgroundColor="var(--surface-low)" borderRadius={24}>
                  <article>
                    <div className="service-icon">
                      <Icon name={service.icon} />
                    </div>
                    <h2 className="headline">Service Highlights</h2>
                    <ul className="bullet-list material-detail-list-gap">
                      {service.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <div className="material-detail-button-row material-detail-button-row--wrap">
                      <Link href="/contact" className="button">Request Quote</Link>
                      <Link href="/services" className="button-secondary">All Services</Link>
                    </div>
                  </article>
                </BorderGlow>
              </StaggerItem>

              {related.length ? (
                <StaggerItem>
                  <BorderGlow innerClassName="panel" backgroundColor="var(--surface-low)" borderRadius={24}>
                    <article>
                      <h3 className="material-detail-related-title">Related Services</h3>
                      <div className="material-detail-related-list">
                        {related.map((item) => (
                          <Link key={item.slug} href={`/services/materials/${item.slug}`} className="nav-dropdown__item material-detail-pill">
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </article>
                  </BorderGlow>
                </StaggerItem>
              ) : null}
            </StaggerContainer>
          </div>
        )}
      </section>
    </>
  );
}
