import Link from "next/link";
import { fetchCountryByCode } from "@/lib/api";

// This page fetches fresh data every time.
export async function generateMetadata({ params }) {
  const { code } = await params;
  const country = await fetchCountryByCode(code);

  return {
    title: country?.names?.common || "Country Details",
    description: country
      ? `Learn about ${country.names.common} - capital: ${country.capitals?.[0]?.name}, population: ${country.population?.toLocaleString()}, region: ${country.region}`
      : "Country details not found",
  };
}

export default async function CountryDetailsPage({ params }) {
  const { code } = await params;

  const country = await fetchCountryByCode(code);

  if (!country) {
    return (
      <div className="not-found">
        <h1>404</h1>
        <h2>Country not found</h2>
        <p>The country with code &ldquo;{code}&rdquo; could not be found.</p>
        <Link href="/countries" className="btn btn-primary">
          Back to Countries
        </Link>
      </div>
    );
  }

  const languages = country.languages
    ? country.languages.map((l) => l.name)
    : [];

  const currencies = country.currencies
    ? country.currencies.map((c) => `${c.name} (${c.symbol || ""})`)
    : [];

  return (
    <section className="country-details">
      <div className="container">
        <Link href="/countries" className="back-link">
          ← Back to Countries
        </Link>

        <div className="details-grid">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="details-flag"
            src={country.flag?.url_png || ""}
            alt={`Flag of ${country.names.common}`}
          />

          <div className="details-info">
            <h1>{country.names.common}</h1>
            <p className="details-official">
              Official Name: {country.names.official || country.names.common}
            </p>

            <table className="details-table">
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{country.capitals?.[0]?.name || "No capital"}</td>
                </tr>
                <tr>
                  <td>Region</td>
                  <td>{country.region || "Unknown"}</td>
                </tr>
                <tr>
                  <td>Subregion</td>
                  <td>{country.subregion || "No subregion"}</td>
                </tr>
                <tr>
                  <td>Population</td>
                  <td>
                    {country.population != null
                      ? country.population.toLocaleString()
                      : "Unknown"}
                  </td>
                </tr>
                <tr>
                  <td>Languages</td>
                  <td>
                    <div className="details-languages">
                      {languages.length > 0
                        ? languages.map((lang) => (
                            <span key={lang}>{lang}</span>
                          ))
                        : "No languages"}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Currencies</td>
                  <td>
                    {currencies.length > 0
                      ? currencies.join(", ")
                      : "No currencies"}
                  </td>
                </tr>
                <tr>
                  <td>Time Zones</td>
                  <td>{country.timezones?.join(", ") || "No time zones"}</td>
                </tr>
              </tbody>
            </table>

            <div className="details-actions">
              <a
                href={country.links?.google_maps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
