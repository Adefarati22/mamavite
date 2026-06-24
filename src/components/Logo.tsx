
export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <h1 className="text-2xl font-bold text-brown font-serif">Mamavite.</h1>
      <img
        src="/logo.png"
        loading="lazy"
        alt="Mamavite Logo"
        className="h-16 w-auto object-contain"
      />
    </div>
  )
}
