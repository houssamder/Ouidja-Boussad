import type { Metadata } from "next"
import PoemCard, { type Poem } from "@/components/PoemCard"
import VideoSection from "@/components/VideoSection";


export const metadata: Metadata = {
  title: "Poèmes | Vers Poétiques",
  description: "Parcourez une collection de poèmes originaux explorant divers thèmes et émotions.",
}

async function getPoems(): Promise<Poem[]> {
  // Dans une application réelle, ceci récupérerait depuis votre API
  // const res = await fetch('https://api.example.com/api/poems')
  // return res.json()

  // Données fictives pour démonstration
  return [

    {
      id: "2",
      title: "Mémoires Océaniques",
      excerpt:
        "Les vagues se brisent contre le rivage, chacune portant des histoires de terres lointaines et de temps oubliés. Le sel dans l'air se mêle aux souvenirs, créant une tapisserie de sensations qui nous lient au rythme éternel de la mer.",
      date: "2023-06-22",
      image: "/proxy-image (6).jfif"
    },
    {
      id: "3",
      title: "Symphonie Urbaine",
      excerpt:
        "La ville respire avec un rythme qui lui est propre, une cacophonie de vies entrelacées dans la danse de l'existence. Pas sur le béton, voix dans le vent, le pouls mécanique du progrès—tous s'harmonisant dans la symphonie urbaine.",
      date: "2023-09-10",
      image: "/proxy-image (4).jfif"
    },
    {
      id: "4",
      title: "Murmures de la Forêt",
      excerpt:
        "Des arbres anciens se dressent comme témoins silencieux du passage du temps. Leurs feuilles bruissent de secrets, murmures de sagesse recueillis à travers des siècles d'observation patiente.",
      date: "2023-02-28",
      image: "/proxy-image (5).jfif"
    },
    {
      id: "5",
      title: "Réflexions de Minuit",
      excerpt:
        "Dans les heures calmes où le monde dort, des pensées émergent des ombres, dansant à travers l'esprit comme le clair de lune sur l'eau. La clarté vient dans ces moments de solitude.",
      date: "2023-07-19",
      image: "/proxy-image (5).jfif"
    },
    {
      id: "6",
      title: "Sonate d'Automne",
      excerpt:
        "Les feuilles peignent le monde d'ambre et d'or, une dernière floraison avant l'étreinte de l'hiver. Chaque feuille qui tombe est une note dans la sonate d'automne, un bel abandon au cycle des saisons.",
      date: "2023-10-05",
      image: "/proxy-image (4).jfif"
    },
    {
      id: "7",
      title: "Méditations Pluvieuses",
      excerpt:
        "Des gouttelettes tracent des motifs sur les vitres, chacune une lentille reflétant une perspective différente du monde extérieur. Le rythme de la pluie devient une méditation, lavant la poussière des préoccupations quotidiennes.",
      date: "2023-03-12",
      image: "/proxy-image (6).jfif"
    },
    {
      id: "8",
      title: "Rêves d'Étoiles",
      excerpt:
        "Sous le vaste dais de la nuit, les étoiles allument des rêves qui transcendent les limites du possible. Nous ne sommes que poussière d'étoiles nous-mêmes, momentanément conscients de notre héritage cosmique.",
      date: "2023-08-30",
      image: "/proxy-image (5).jfif"
    },
    {
      id: "9",
      title: "Silence Montagneux",
      excerpt:
        "Debout au sommet du pic, entouré de rien que de ciel et de pierre, on trouve un silence si profond qu'il parle des volumes. Les montagnes nous enseignent la force de l'immobilité.",
      date: "2023-05-17",
      image: "/proxy-image (6).jfif"
    },
  ]
}

export default async function PoemsPage() {
  const poems = await getPoems()

  return (
    <>
          {/* Vidéo d'introduction en haut de la page */}
  <VideoSection />
      <section className="bg-gradient-to-br from-primary-50/50 via-secondary-50/30 to-accent-50/50 dark:from-neutral-900/50 dark:via-neutral-800/30 dark:to-neutral-900/50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center gradient-text">Poèmes</h1>
          <p className="text-neutral-600 dark:text-neutral-300 text-center max-w-2xl mx-auto text-lg">
            Une collection d'œuvres originales explorant les thèmes de la nature, de la connexion humaine, de la vie
            urbaine et des moments silencieux qui définissent notre existence.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poems.map((poem) => (
              <PoemCard key={poem.id} poem={poem} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
