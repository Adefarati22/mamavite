export const SplashLoader = ({ message = "perfect meal for your baby" }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">

      {/* Logo with gentle pulse */}
      <div style={{ animation: "fx-pulse 2s ease-in-out infinite", transformOrigin: "center" }}>
        <img
          src="/logo.png"
          loading="lazy"
          alt="Mamavite Logo"
          className="h-60 w-auto"
        />
      </div>
      {message && (
        <p className="text-xs md:text-sm font-medium font-serif tracking-[0.2em] uppercase text-brown animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
}