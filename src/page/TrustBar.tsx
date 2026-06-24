
export default function TrustBar() {
  const items = [
    { label: "100% Natural" },
    { label: "No Preservatives" },
    { label: "Safe from 6 Months" },
    { label: "Vegan Friendly" },
    { label: "Satisfaction Guaranteed" },
  ];

  // Duplicate items for seamless looping
  const looped = [...items, ...items];

  return (
    <section className="bg-brown text-brown-foreground">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-3">
        <div
          className="trustbar-marquee relative"
          role="list"
          aria-label="Product assurances"
          tabIndex={0}
        >
          <div className="marquee-track" aria-hidden="false">
            {looped.map((it, idx) => (
              <span
                key={`${it.label}-${idx}`}
                role="listitem"
                className="trustbar-item inline-flex items-center justify-center px-6 text-sm sm:text-base font-semibold whitespace-nowrap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4 mr-2 flex-shrink-0 text-cream"
                  aria-hidden
                >
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {it.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
