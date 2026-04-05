import Link from "next/link";
import { Icon } from "@/components/icons";
import { navigation, siteConfig } from "@/data/site";

const socialIconMap = {
  instagram: "instagram",
  youtube: "youtube"
};

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>Trimurti Enterprise</h3>
            <p>
              Defining structural excellence with premium aggregates, transport
              logistics, and precision rock engineering across India.
            </p>
          </div>
          <div>
            <h4>Core Divisions</h4>
            <ul className="footer-links">
              <li><Link href="/services">Stone Crusher</Link></li>
              <li><Link href="/services">Transport Services</Link></li>
              <li><Link href="/services/hard-rock-control-blasting">Rock Blasting</Link></li>
              <li><Link href="/services">Site Survey</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <p>{siteConfig.address.street}</p>
            <p>{siteConfig.address.city}, {siteConfig.address.region}</p>
            <p>{siteConfig.email}</p>
            <div className="social-row" style={{ marginTop: "1rem" }}>
              {siteConfig.socials.map((social) => (
                <a
                  key={social.label}
                  className="social-icon"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Icon name={socialIconMap[social.label.toLowerCase()] ?? "instagram"} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Trimurti Enterprise. Architectural Archive Edition.</span>
          <span>Infrastructure services built for discoverability and trust.</span>
        </div>
      </div>
    </footer>
  );
}

