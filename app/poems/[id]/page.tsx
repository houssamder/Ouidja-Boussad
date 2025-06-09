import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Share2, Heart, Download } from "lucide-react"

interface PoemPageProps {
  params: {
    id: string
  }
}

interface PoemDetail {
  id: string
  title: string
  content: string
  date: string
  tags: string[]
}

export async function generateMetadata(
  resolvedParams: Promise<PoemPageProps>
): Promise<Metadata> {
  const { params } = await resolvedParams
  const poem = await getPoem(params.id)

  if (!poem) {
    return {
      title: "Poème Non Trouvé | Vers Poétiques",
    }
  }

  return {
    title: `${poem.title} | Vers Poétiques`,
    description: poem.content.substring(0, 160),
  }
}

async function getPoem(id: string): Promise<PoemDetail | null> {
  // Données fictives pour démonstration
  const poems: Record<string, PoemDetail> = {
    "9": {
      id: "9",
      title: "Murmures de l'Aube",
      content: `La lumière du matin perce le silence,
Peignant le monde de teintes de possibilité.
Chaque rayon porte la promesse de commencements,
D'histoires encore à se déployer sur la toile du jour.

Les oiseaux annoncent l'arrivée du soleil,
Leurs chants un témoignage de la persistance de la vie.
Les feuilles baignées de rosée scintillent dans la lumière dorée,
Un moment fugace d'harmonie parfaite.

Dans cette heure tranquille, avant que le monde ne s'éveille,
Je trouve la clarté dans les murmures de l'aube.
Les pensées se cristallisent dans la douce lumière,
Alors que le jour émerge de l'étreinte de la nuit.

La frontière entre les rêves et la réalité s'estompe,
Dans cet espace liminal du devenir.
J'inspire la promesse d'un nouveau jour,
Et j'expire les ombres d'hier.`,
      date: "2023-04-15",
      tags: ["nature", "matin", "réflexion"],
    },
    "2": {
      id: "2",
      title: "Mémoires Océaniques",
      content: `Les vagues se brisent contre le rivage,
Chacune portant des histoires de terres lointaines.
Le sel dans l'air se mêle aux souvenirs,
Créant une tapisserie de sensations.

Je me tiens à la lisière de deux mondes,
Là où la terre rencontre le bleu sans fin.
Mes pieds s'enfoncent dans le sable mouvant,
Un rappel de l'impermanence de la vie.

L'océan respire avec un rythme ancien,
S'élevant et retombant comme un géant endormi.
Son immensité humilie mon existence,
Pourtant me connecte à tous ceux qui se sont tenus ici avant.

Les mouettes tournent au-dessus, leurs cris
Faisant écho à la liberté que je cherche.
L'horizon s'étend au-delà de la vue,
Invitant les rêves à naviguer au-delà des limitations.

Je collecte des coquillages comme des fragments de temps,
Chacun un chapitre dans le mémoire de l'océan.
Quand je serai loin de ces rivages,
Leurs murmures me ramèneront ici.`,
      date: "2023-06-22",
      tags: ["océan", "mémoire", "nature"],
    },
    "3": {
      id: "3",
      title: "Symphonie Urbaine",
      content: `La ville respire avec un rythme qui lui est propre,
Une cacophonie de vies entrelacées.
Pas sur le béton, voix dans le vent,
Le pouls mécanique du progrès.

Les gratte-ciels atteignent les nuages,
Tours modernes de l'ambition humaine.
Leurs façades de verre reflètent le ciel,
Brouillant la ligne entre la terre et le ciel.

Dans les rues bondées, des étrangers passent,
Chacun portant des univers en soi.
Brefs regards, connexions fugaces,
Histoires qui se croisent mais ne se rencontrent jamais pleinement.

Les lumières néon peignent la nuit,
Un kaléidoscope de rêves urbains.
La ville ne dort jamais vraiment,
Passe simplement d'un mouvement à l'autre.

Sous la surface du chaos,
Des motifs émergent dans la symphonie urbaine.
Je suis à la fois chef d'orchestre et public,
Trouvant de la poésie dans le pouls de la vie urbaine.`,
      date: "2023-09-10",
      tags: ["ville", "urbain", "vie"],
    },
  }

  return poems[id] || null
}

export default async function PoemPage(
  resolvedParams: Promise<PoemPageProps>
) {
  const { params } = await resolvedParams
  const poem = await getPoem(params.id)

  if (!poem) {
    notFound()
  }

  return (
    <article className="py-16 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 dark:from-neutral-900/50 dark:to-neutral-800/50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/poems"
          className="inline-flex items-center text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 mb-8 transition-colors group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Retour aux poèmes
        </Link>

        <div className="card-gradient backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-primary-100/50 dark:border-neutral-700/50">
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text leading-tight">
              {poem.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-neutral-600 dark:text-neutral-400">
              <time className="flex items-center">
                {new Date(poem.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
                <div className="flex flex-wrap gap-2">
                  {poem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 text-sm rounded-full font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
            </div>
          </header>

          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none mb-12">
            {poem.content.split("\n\n").map((stanza, index) => (
              <p
                key={index}
                className="whitespace-pre-line text-lg leading-relaxed mb-6 text-neutral-700 dark:text-neutral-300"
              >
                {stanza}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-8 border-t border-primary-200 dark:border-neutral-700">
            <button className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <Download size={16} className="mr-2" />
              Télécharger le Poème
            </button>
            <button className="inline-flex items-center bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-primary-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 px-6 py-3 rounded-xl font-medium transition-all duration-300">
              <Heart size={16} className="mr-2" />
              Ajouter aux Favoris
            </button>
            <button className="inline-flex items-center bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-primary-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-secondary-600 dark:hover:text-secondary-400 px-6 py-3 rounded-xl font-medium transition-all duration-300">
              <Share2 size={16} className="mr-2" />
              Partager le Poème
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
