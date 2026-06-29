"use client";

import { useState, useMemo } from "react";
import CountryCard from "./CountryCard";

export default function CountriesContent({ countries }) {
  const [region, setRegion] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");

  const allCountries = useMemo(() => {
    return Array.isArray(countries) ? countries : [];
  }, [countries]);

  const filtered = useMemo(() => {
    let result =
      region === "All"
        ? allCountries
        : allCountries.filter((c) => c && c.region === region);

    if (sortOrder === "asc") {
      result = [...result].sort((a, b) => a.population - b.population);
    } else if (sortOrder === "desc") {
      result = [...result].sort((a, b) => b.population - a.population);
    }

    return result;
  }, [allCountries, region, sortOrder]);

  return (
    <>
      <div className="filters">
        <select
          className="filter-select"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="All">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>

        <select
          className="filter-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Default Order</option>
          <option value="asc">Population (Low to High)</option>
          <option value="desc">Population (High to Low)</option>
        </select>

        <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
          Showing {filtered.length} of {allCountries.length} countries
        </span>
      </div>

      <div className="country-grid" style={{ marginTop: "24px" }}>
        {filtered.map((country) => (
          <CountryCard key={country.codes?.alpha_3 || country.uuid} country={country} />
        ))}
      </div>
    </>
  );
}
