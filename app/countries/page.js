import CountriesContent from "@/components/CountriesContent";
import { fetchAllCountries } from "@/lib/api";

// This page can be statically rendered and cached.
export default async function CountriesPage() {
  let countries = [];

  try {
    countries = await fetchAllCountries();
  } catch (e) {
    console.error("Failed to fetch countries:", e.message);
  }

  if (!Array.isArray(countries)) {
    countries = [];
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>Explore Countries</h2>
        </div>
        <CountriesContent countries={countries} />
      </div>
    </section>
  );
}
