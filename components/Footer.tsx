import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-primary-900/20 to-secondary-900/20 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Vers Poétiques</h3>
            <p className="text-neutral-300 dark:text-neutral-400 mb-6 leading-relaxed">
              Explorer les profondeurs de l'émotion humaine à travers l'écriture.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-white/10 hover:bg-primary-500/20 p-3 rounded-full text-neutral-300 hover:text-primary-300 transition-all duration-300 backdrop-blur-sm"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-white/10 hover:bg-secondary-500/20 p-3 rounded-full text-neutral-300 hover:text-secondary-300 transition-all duration-300 backdrop-blur-sm"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="bg-white/10 hover:bg-accent-500/20 p-3 rounded-full text-neutral-300 hover:text-accent-300 transition-all duration-300 backdrop-blur-sm"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "/" },
                { name: "À Propos", href: "/about" },
                { name: "Poèmes", href: "/poems" },
                { name: "Livres", href: "/books" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-primary-300 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">S'abonner</h3>
            <p className="text-neutral-300 dark:text-neutral-400 mb-6 leading-relaxed">
              Rejoignez ma newsletter pour recevoir des mises à jour sur les nouveaux poèmes et publications.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-3 w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-primary-400 text-white placeholder-neutral-400"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-3 rounded-r-xl transition-all duration-300 font-medium"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-neutral-400">
          <p>&copy; {currentYear} Vers Poétiques. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
