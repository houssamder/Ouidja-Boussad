import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/belkacem2.webp"
          alt="Fond de poésie"
          fill
          priority
          className="object-cover object-[center_20%] "
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent-400/20 rounded-full blur-lg"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Des Mots Qui Résonnent À Travers{" "}
            <span className="bg-gradient-to-r from-secondary-300 to-accent-300 bg-clip-text text-transparent">
              Le Temps
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-200 max-w-2xl">
            Explorez la collection de poèmes qui capturent les moments, les émotions et la beauté de l'expérience
            humaine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/poems"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explorer les Poèmes
            </Link>
            <Link
              href="/books"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-medium transition-all duration-300 text-center"
            >
              Voir les Livres
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
