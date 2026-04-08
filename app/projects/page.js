import BorderGlow from "@/components/border-glow";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/motion";
import Link from "next/link";
import { StructuredData } from "@/components/structured-data";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { projectRecords, siteConfig } from "@/data/site";

const projectsHero = "/images/services/abouttop.jpeg";

export const metadata = {
  title: "Projects",
  description: "View Trimurti Enterprise project categories across urban excavation, aggregate supply, and heavy logistics execution."
};

export default function ProjectsPage() {
  const getProjectType = (project, work) => {
    const value = `${project} ${work}`.toLowerCase();

    if (value.includes("tunnel") || value.includes("shaft")) return "Tunnel Works";
    if (value.includes("rail") || value.includes("station") || value.includes("bhavan")) return "Rail Infrastructure";
    if (value.includes("plant")) return "Industrial Plant";
    if (value.includes("residential") || value.includes("villa") || value.includes("housing") || value.includes("tower")) return "Residential";
    if (value.includes("road") || value.includes("sea link")) return "Urban Infrastructure";

    return "Civil Execution";
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Trimurti Enterprise Projects",
    url: `${siteConfig.url}/projects`
  };

  return (
    <>
      <StructuredData data={schema} />

      <section className="equipment-hero">
        <div
          className="equipment-hero__bg"
          style={{ backgroundImage: `url("${projectsHero}")` }}
          aria-hidden="true"
        />
        <div className="equipment-hero__overlay" aria-hidden="true" />
        <div className="container equipment-hero__content">
          <SlideIn direction="up">
            <span className="eyebrow">Project Portfolio</span>
            <h1 className="display">Execution Across Tunnels, Housing, Rail, and <em>City</em> Infrastructure.</h1>
            <p className="lede equipment-hero__lede">
              A professional record of completed blasting, cutting, cracking, and excavation-support assignments delivered for contractors, developers, and public infrastructure works.
            </p>
            <div className="equipment-hero__actions">
              <Link href="#project-cards" className="button">View Projects</Link>
            </div>
          </SlideIn>
        </div>
      </section>

      <section className="section section--soft" id="project-cards">
        <div className="container">
          <FadeIn className="section-heading">
            <div>
              <span className="eyebrow">Project Register</span>
              <h2 className="headline">Completed Project Portfolio</h2>
              <div className="underline" />
            </div>
          </FadeIn>

          <StaggerContainer className="project-card-grid">
            {projectRecords.map((item, index) => {
              const projectType = getProjectType(item.project, item.work);
              const isFeatured = index % 5 === 0;

              return (
                <StaggerItem
                  key={item.serialNo}
                  className={isFeatured ? "project-card-item project-card-item--featured" : "project-card-item"}
                >
                  <BorderGlow
                    innerClassName={isFeatured ? "project-card project-card--featured" : "project-card"}
                    backgroundColor="var(--surface-card)"
                    borderRadius={28}
                  >
                    <div className="project-card__backdrop" aria-hidden="true" />
                    <div className="project-card__head">
                      <span className="project-card__index">{item.serialNo.padStart(2, "0")}</span>
                      <div className="project-card__tags">
                        <span className="project-card__tag">{projectType}</span>
                        <span className="project-card__tag project-card__tag--soft">Completed</span>
                      </div>
                    </div>

                    <div className="project-card__body">
                      <div className="project-card__title-wrap">
                        <p className="project-card__eyebrow">Project Name</p>
                        <h3>{item.project}</h3>
                      </div>

                      <div className="project-card__client-row">
                        <p className="project-card__eyebrow">Client</p>
                        <p className="project-card__client">{item.name}</p>
                      </div>

                      <div className="project-card__meta-grid">
                        <div className="project-card__block">
                          <strong>Work Scope</strong>
                          <p>{item.work}</p>
                        </div>
                        <div className="project-card__block">
                          <strong>Site</strong>
                          <p>{item.site}</p>
                        </div>
                      </div>
                    </div>
                  </BorderGlow>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <WhatsAppFloat />
    </>
  );
}
