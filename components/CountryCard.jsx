import Link from "next/link";

export default function CountryCard({ country }) {
  if (!country || !country.names) return null;

  return (
    <div className="country-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="country-card-flag"
        src={country.flag?.url_png || ""}
        alt={`Flag of ${country.names.common}`}
        loading="lazy"
      />
      <div className="country-card-body">
        <h3>{country.names.common}</h3>
        <ul className="country-card-info">
          <li>
            Capital:{" "}
            <span>{country.capitals?.[0]?.name || "No capital"}</span>
          </li>
          <li>
            Region: <span>{country.region || "Unknown"}</span>
          </li>
          <li>
            Population:{" "}
            <span>
              {country.population != null
                ? country.population.toLocaleString()
                : "Unknown"}
            </span>
          </li>
        </ul>
        <Link
          href={`/countries/${country.codes?.alpha_3 || "#"}`}
          className="btn btn-primary"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
