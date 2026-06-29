"use client";

import { useState } from "react";
import CountryCard from "./CountryCard";

export default function CountrySearch({ countries }) {
  const [query, setQuery] = useState("");
  const list = Array.isArray(countries) ? countries : [];

  const filtered = query.trim()
    ? list.filter((c) =>
        c && c.names && c.names.common
          ? c.names.common.toLowerCase().includes(query.toLowerCase())
          : false
      )
    : [];

  return (
    <div>
      <div className="search-input-wrap">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a country..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
      </div>

      {query.trim() && (
        <p className="search-results-count">
          Found {filtered.length} result{filtered.length !== 1 ? "s" : ""} for
          &ldquo;{query}&rdquo;
        </p>
      )}

      {filtered.length > 0 && (
        <div className="country-grid">
          {filtered.map((country) => (
            <CountryCard key={country.codes?.alpha_3 || country.uuid} country={country} />
          ))}
        </div>
      )}

      {query.trim() && filtered.length === 0 && (
        <div className="search-empty">
          <h3>No countries found</h3>
          <p>Try a different search term.</p>
        </div>
      )}

      {!query.trim() && (
        <div className="search-empty">
          <h3>Search Countries</h3>
          <p>Type a country name above to see results.</p>
        </div>
      )}
    </div>
  );
}
