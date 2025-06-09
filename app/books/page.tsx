import type { Metadata } from "next"
import BookCard, { type Book } from "@/components/BookCard"

export const metadata: Metadata = {
  title: "Livres | Vers Poétiques",
  description: "Explorez les collections de poésie et œuvres publiées.",
}

async function getBooks(): Promise<Book[]> {
  // Dans une application réelle, ceci récupérerait depuis votre API
  // const res = await fetch('https://api.example.com/api/books')
  // return res.json()

  // Données fictives pour démonstration
  return [
    {
      id: "1",
      title: "Échos du Silence",
      description:
        "Une collection de poèmes explorant les espaces entre les mots, les moments de réflexion silencieuse et les profondes intuitions trouvées dans le calme. Ce premier recueil examine le pouvoir de la pause dans un monde qui ne s'arrête jamais.",
      coverImage: "/proxy-image (4).jfif",
      year: 2023,
    },
    {
      id: "2",
      title: "Vers Urbains",
      description:
        "Poésie inspirée par la vie urbaine, capturant le rythme, le chaos et la beauté inattendue des environnements urbains. Des rencontres dans le métro aux contemplations sur les toits, ces poèmes trouvent du sens dans le paysage de béton.",
      coverImage: "/proxy-image (5).jfif",
      year: 2021,
    },
    {
      id: "3",
      title: "Saisons de l'Âme",
      description:
        "Un voyage à travers les saisons internes que nous vivons tous—des temps de croissance, d'abondance, de dépouillement et de repos. Cette collection établit des parallèles entre les cycles de la nature et nos paysages émotionnels.",
      coverImage: "/proxy-image (6).jfif",
      year: 2019,
    },

  ]
}

export default async function BooksPage() {
  const books = await getBooks()

  return (
    <>
      <section className="bg-gradient-to-br from-primary-50/50 via-secondary-50/30 to-accent-50/50 dark:from-neutral-900/50 dark:via-neutral-800/30 dark:to-neutral-900/50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center gradient-text">Œuvres Publiées</h1>
          <p className="text-neutral-600 dark:text-neutral-300 text-center max-w-2xl mx-auto text-lg">
            Explorez mes collections de poésie publiées, chacune représentant un chapitre différent de mon parcours
            créatif.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 ">
          <div className="space-y-8">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-50/50 via-secondary-50/30 to-accent-50/50 dark:from-neutral-900/50 dark:via-neutral-800/30 dark:to-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Où Acheter</h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Mes livres sont disponibles auprès de divers détaillants en formats imprimé et numérique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-gradient backdrop-blur-sm rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Librairies Locales</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Soutenez les librairies indépendantes en commandant par l'intermédiaire de votre magasin local.
              </p>
              <a
                href="#find-local"
                className="inline-block text-primary-700 dark:text-primary-400 font-medium hover:underline"
              >
                Trouver une librairie près de chez vous
              </a>
            </div>

            <div className="card-gradient backdrop-blur-sm rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Détaillants en Ligne</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Disponible sur les principales plateformes en formats papier et numérique.
              </p>
              <a
                href="#online"
                className="inline-block text-primary-700 dark:text-primary-400 font-medium hover:underline"
              >
                Voir les options en ligne
              </a>
            </div>

            <div className="card-gradient backdrop-blur-sm rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Achat Direct</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Commandez des exemplaires dédicacés directement auprès de l'auteure.
              </p>
              <a
                href="#direct"
                className="inline-block text-primary-700 dark:text-primary-400 font-medium hover:underline"
              >
                Contactez pour plus de détails
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
