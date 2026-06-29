export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="container">
        <h1>About World Explorer</h1>
        <p>
          World Explorer is a Next.js project that uses real API data to display
          countries around the world. It practices App Router, file-based
          routing, layouts, server components, client components, data fetching,
          caching, and dynamic routes.
        </p>
        <p>
          The data is sourced from the{" "}
          <a
            href="https://restcountries.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            REST Countries API
          </a>
          , a free and open API that provides comprehensive data about countries
          worldwide.
        </p>

        <div className="about-card">
          <h2>Next.js Topics Practiced</h2>
          <ul>
            <li>App Router for file-based routing</li>
            <li>Shared layouts with Navbar and Footer</li>
            <li>Dynamic routes for country details</li>
            <li>Server components for data fetching</li>
            <li>Client components for interactivity</li>
            <li>Static rendering with force-cache</li>
            <li>Dynamic rendering with no-store</li>
            <li>generateMetadata for SEO</li>
            <li>Client-side search with useState</li>
            <li>Responsive design with CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
