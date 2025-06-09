import Hero from "@/components/Hero"
import FeaturedPoems from "@/components/FeaturedPoems"
import Image from "next/image"
import Link from "next/link"
import type { Book } from "@/components/BookCard"
import type { Poem } from "@/components/PoemCard"
import About from "@/components/About"

// Mock data for featured poems
const featuredPoems: Poem[] = [
  {
    id: "9",
    title: "Murmures de l'Aube",
    excerpt: "La lumière du matin perce le silence, peignant le monde de teintes de possibilité et de renouveau.",
    date: "2023-04-15",
    image: "/proxy-image (4).jfif",
  },
  {
    id: "2",
    title: "Mémoires Océaniques",
    excerpt:
      "Les vagues se brisent contre le rivage, chacune portant des histoires de terres lointaines et de temps oubliés.",
    date: "2023-06-22",
    image: "/proxy-image (4).jfif",
  },
  {
    id: "3",
    title: "Symphonie Urbaine",
    excerpt:
      "La ville respire avec un rythme qui lui est propre, une cacophonie de vies entrelacées dans la danse de l'existence.",
    date: "2023-09-10",
        image: "/proxy-image (5).jfif",
  },
]

// Mock data for featured book
const featuredBook: Book = {
  id: "1",
  title: "Échos du Silence",
  description:
    "Une collection de poèmes explorant les espaces entre les mots, les moments de réflexion silencieuse et les profondes intuitions trouvées dans le calme.",
  coverImage: "/proxy-image (3).jfif",
  year: 2023,
}

export default function Home() {
  return (
    <>
      <Hero />

      <About variant="compact" />

      <FeaturedPoems poems={featuredPoems} />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Publication Récente</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Découvrez ma collection de poèmes la plus récente, disponible maintenant en formats imprimé et numérique.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center card-gradient backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-primary-100/50 dark:border-neutral-700/50">
            <div className="w-full md:w-1/3 relative aspect-[2/3] overflow-hidden rounded-xl shadow-md">
              <Image
                src={featuredBook.coverImage || "/placeholder.svg"}
                alt={`Couverture de ${featuredBook.title}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-2">{featuredBook.title}</h3>
              <p className="text-primary-600 dark:text-primary-400 mb-4">{featuredBook.year}</p>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6">{featuredBook.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/books"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Voir Tous les Livres
                </Link>
            
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
