import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <h1>Discover the World</h1>
        <p>
          Explore countries around the world and learn about their flags,
          capitals, populations, currencies, and languages.
        </p>
        <div className="hero-actions">
          <Link href="/countries" className="btn btn-primary">
            Explore Countries
          </Link>
          <Link href="/search" className="btn btn-secondary">
            Search Countries
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Why World Explorer?</h2>
          </div>
          <div className="country-grid">
            <div className="country-card" style={{ cursor: "default" }}>
              <div className="country-card-body">
                <h3>🗺️ 200+ Countries</h3>
                <ul className="country-card-info">
                  <li>
                    Access data for every country in the world, from Afghanistan
                    to Zimbabwe.
                  </li>
                </ul>
              </div>
            </div>
            <div className="country-card" style={{ cursor: "default" }}>
              <div className="country-card-body">
                <h3>📊 Rich Details</h3>
                <ul className="country-card-info">
                  <li>
                    View flags, capitals, populations, regions, currencies,
                    languages, and more.
                  </li>
                </ul>
              </div>
            </div>
            <div className="country-card" style={{ cursor: "default" }}>
              <div className="country-card-body">
                <h3>⚡ Fast & Modern</h3>
                <ul className="country-card-info">
                  <li>
                    Built with Next.js App Router for fast navigation and
                    seamless experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
