import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container not-found__inner">
        <span className="eyebrow">404</span>
        <h1 className="display not-found__title">Page not found.</h1>
        <p className="lede not-found__lede">
          The page you requested does not exist or has moved. Use the links below to continue exploring the site.
        </p>
        <div className="not-found__actions">
          <Link href="/" className="button">Home</Link>
          <Link href="/services" className="button-secondary">Services</Link>
        </div>
      </div>
    </section>
  );
}
