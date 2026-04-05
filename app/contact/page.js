import CountUp from "@/components/count-up";
import { Icon } from "@/components/icons";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/motion";
import BorderGlow from "@/components/border-glow";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import ContactEnquiryForm from "@/components/contact-enquiry-form";
import { contactStats, siteConfig } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Contact Trimurti Enterprise for stone crusher supply, transport logistics, hard rock blasting, and infrastructure consultation."
};

export default function ContactPage() {
  const parseStatValue = (value) => {
    const valueAsText = String(value).trim();
    const match = valueAsText.match(/-?\d+(\.\d+)?/);

    if (!match) {
      return { number: 0, suffix: valueAsText };
    }

    const numberText = match[0];

    return {
      number: Number(numberText),
      suffix: valueAsText.replace(numberText, "")
    };
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Trimurti Enterprise",
    url: `${siteConfig.url}/contact`
  };

  return (
    <>
      <StructuredData data={schema} />

      <section className="section contact-page__intro">
        <FadeIn className="container contact-page__intro-inner">
          <span className="eyebrow">Reach Out To Us</span>
          <h1 className="display contact-page__title">
            Let&apos;s build your <em>vision</em> together.
          </h1>
        </FadeIn>
      </section>

      <section className="section contact-page__content">
        <div className="container contact-grid contact-page__grid">
          <SlideIn direction="left">
            <ContactEnquiryForm />
          </SlideIn>

          <SlideIn direction="right">
            <StaggerContainer className="contact-page__stack">
              <StaggerItem>
                <BorderGlow innerClassName="contact-card panel" backgroundColor="var(--surface-low)" borderRadius={24}>
                  <article>
                    <div className="mini-icon"><Icon name="location" /></div>
                    <h3 className="contact-card__title">Our Headquarter</h3>
                    <p>
                      {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
                    </p>
                  </article>
                </BorderGlow>
              </StaggerItem>

              <StaggerItem>
                <BorderGlow innerClassName="contact-card panel" backgroundColor="var(--surface-low)" borderRadius={24}>
                  <article>
                    <div className="mini-icon"><Icon name="call" /></div>
                    <h3 className="contact-card__title">Phone &amp; Support</h3>
                    <p><a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}>{siteConfig.phone}</a></p>
                    <p>{siteConfig.workingHours}</p>
                    <div className="mini-icon contact-card__icon-gap"><Icon name="mail" /></div>
                    <h3>Email</h3>
                    <p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
                  </article>
                </BorderGlow>
              </StaggerItem>

              <StaggerItem>
                <a className="contact-card whatsapp-card" href={`https://wa.me/${siteConfig.whatsapp}`} aria-label="Chat with us on WhatsApp">
                  <div className="contact-page__whatsapp-row">
                    <div className="contact-page__whatsapp-copy">
                      <span className="mini-icon contact-page__whatsapp-icon">
                        <Icon name="chat" />
                      </span>
                      <strong>Chat on WhatsApp</strong>
                    </div>
                    <Icon name="arrow" />
                  </div>
                </a>
              </StaggerItem>

              <StaggerItem>
                <div className="map-card">
                  <iframe
                    title="Trimurti Enterprise Location"
                    src="https://www.google.com/maps?q=19.174911,72.876675&output=embed"
                    width="100%"
                    height="320"
                    style={{ border: 0, borderRadius: "24px" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <a
                    className="map-card__badge contact-card"
                    href="https://www.google.com/maps/place/19%C2%B010'29.7%22N+72%C2%B052'36.0%22E/@19.174911,72.876675,17z/data=!3m1!4b1!4m4!3m3!8m2!3d19.174911!4d72.876675!18m1!1e1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="contact-page__map-link">
                      <span className="mini-icon contact-page__map-icon"><Icon name="location" /></span>
                      <strong>View Map Location</strong>
                    </div>
                  </a>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </SlideIn>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <FadeIn>
            <StaggerContainer className="card-grid">
              {contactStats.map((stat) => {
                const { number, suffix } = parseStatValue(stat.value);

                return (
                  <StaggerItem key={stat.label} className="stat-card contact-page__stat-card">
                    <strong className="contact-page__stat-value">
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
                    <span className="contact-page__stat-label">{stat.label}</span>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </FadeIn>
        </div>
      </section>

      <WhatsAppFloat />
    </>
  );
}

