const API_BASE = "https://api.restcountries.com/countries/v5";

export async function fetchAllCountries() {
  const res = await fetch(`${API_BASE}?limit=100`, {
    headers: { Authorization: `Bearer ${process.env.RC_API_KEY}` },
    cache: "force-cache",
  });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data?.objects || [];
}

export async function fetchCountryByCode(code) {
  const res = await fetch(`${API_BASE}/codes.alpha_3/${code}`, {
    headers: { Authorization: `Bearer ${process.env.RC_API_KEY}` },
    cache: "no-store",
  });
  if (!res.ok) return null;
  const json = await res.json();
  return json.data?.objects?.[0] || null;
}
