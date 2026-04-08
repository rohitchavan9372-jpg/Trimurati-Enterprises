import BorderGlow from "@/components/border-glow";
import { Icon } from "@/components/icons";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { MediaFrame } from "@/components/media";
import Link from "next/link";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { equipmentInventory, siteConfig } from "@/data/site";

const equipmentsHero = "/images/services/home.jpeg";

export const metadata = {
  title: "Equipments",
  description: "Explore Trimurti Enterprise equipment capabilities across excavation, crushing, transport, and rock support operations."
};

export default function EquipmentsPage() {
  const equipmentHighlights = [
    {
      title: "Fast Site Mobilization",
      text: "Our machinery lineup helps us respond quickly to excavation, demolition, and transport requirements across active project zones.",
      icon: "speed"
    },
    {
      title: "Multi-Stage Capability",
      text: "The fleet supports cutting, breaking, hauling, and air-compression needs without relying on fragmented third-party coordination.",
      icon: "tools"
    },
    {
      title: "Reliable Project Support",
      text: "We maintain machine availability for continuous execution so civil and infrastructure timelines stay on track.",
      icon: "shield"
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Trimurti Enterprise Equipments",
    url: `${siteConfig.url}/equipments`
  };

  return (
    <>
      <StructuredData data={schema} />

      <section className="equipment-hero">
        <div
          className="equipment-hero__bg"
          style={{ backgroundImage: `url("${equipmentsHero}")` }}
          aria-hidden="true"
        />
        <div className="equipment-hero__overlay" aria-hidden="true" />
        <div className="container equipment-hero__content">
          <SlideIn direction="up">
            <span className="eyebrow">Equipment Division</span>
            <h1 className="display">Heavy Machinery for Civil, Rock, and <em>Transport</em> Operations.</h1>
            <p className="lede equipment-hero__lede">
              Excavators, cutting units, breakers, dumpers, compressors, and support equipment ready for high-demand site execution across active infrastructure projects.
            </p>
            <div className="equipment-hero__actions">
              <Link href="#equipment-inventory" className="button">View Machinery List</Link>
            </div>
          </SlideIn>
        </div>
      </section>

      <section className="section" id="equipment-inventory">
        <div className="container">
          <FadeIn className="section-heading">
            <div>
              <span className="eyebrow">List Of Machinery</span>
              <h2 className="headline">Equipment Inventory</h2>
              <div className="underline" />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="equipment-table-wrap">
              <table className="equipment-table">
                <thead>
                  <tr>
                    <th scope="col">Sir. No.</th>
                    <th scope="col">Machineries</th>
                    <th scope="col">Description &amp; Capacity</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {equipmentInventory.map((item) => (
                    <tr key={item.serialNo}>
                      <td>{item.serialNo}</td>
                      <td>{item.machine}</td>
                      <td>{item.description}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <FadeIn className="section-heading">
            <div>
              <span className="eyebrow">Operational Strength</span>
              <h2 className="headline">What This Fleet Supports</h2>
              <div className="underline" />
            </div>
          </FadeIn>

          <StaggerContainer className="split-grid">
            {equipmentHighlights.map((item) => (
              <StaggerItem key={item.title}>
                <BorderGlow innerClassName="value-card" backgroundColor="var(--surface-card)" borderRadius={24}>
                  <div className="value-card__head">
                    <div className="mini-icon"><Icon name={item.icon} /></div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontStyle: "italic", marginTop: 0 }}>{item.title}</h3>
                  </div>
                  <p>{item.text}</p>
                </BorderGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <WhatsAppFloat />
    </>
  );
}
