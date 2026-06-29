import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/countries">Countries</Link>
          <Link href="/search">Search</Link>
          <Link href="/about">About</Link>
        </div>
        <p>
          Built with Next.js &middot; Powered by{" "}
          <a href="https://restcountries.com" target="_blank" rel="noopener noreferrer">
            REST Countries API
          </a>
        </p>
      </div>
    </footer>
  );
}
