import CountrySearch from "@/components/CountrySearch";
import { fetchAllCountries } from "@/lib/api";

export default async function SearchPage() {
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
    <section className="search-page">
      <div className="container">
        <div className="section-header">
          <h2>Search Countries</h2>
        </div>
        <CountrySearch countries={countries} />
      </div>
    </section>
  );
}
