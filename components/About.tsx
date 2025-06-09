import Image from "next/image"
import Link from "next/link"
import { Award, BookOpen, Calendar, MapPin, Pen, Users } from "lucide-react"

interface AboutProps {
  variant?: "full" | "compact"
}

export default function About({ variant = "full" }: AboutProps) {
  const poetInfo = {
    name: "dadda belkacem ",
    title: "Poète Contemporaine & Auteure",
    location: "QUEBEC, CANADA",
    yearsActive: "2015 - Présent",
    bio: "dadda belkacem  est une poète contemporaine primée dont l'œuvre explore l'intersection de la nature, de la vie urbaine et de l'émotion humaine. Sa poésie a été présentée dans de nombreuses revues littéraires et anthologies, reconnue pour ses images vivantes et sa profondeur émotionnelle.",
    longBio:
      "Née et élevée en CANADA, dadda belkacem a découvert sa passion pour la poésie pendant ses années universitaires à la Sorbonne, où elle a étudié la littérature française et l'écriture créative. Son travail s'inspire de la beauté naturelle de la campagne française, de la complexité de la vie urbaine moderne et des moments silencieux qui définissent l'expérience humaine. Au cours des huit dernières années, elle a publié quatre recueils de poésie et a été présentée dans plus de 50 publications littéraires.",
    achievements: [
      "Lauréate du Prix de Poésie Française 2023",
      "Présentée dans l'Anthologie de Poésie Contemporaine 2022",
      "Récipiendaire de la Bourse Littéraire Nationale",
      "Publiée dans Le Monde, La Revue Poétique, et Les Nouveaux Écrivains",
    ],
    stats: [
      { icon: BookOpen, label: "Livres Publiés", value: "4" },
      { icon: Pen, label: "Poèmes Écrits", value: "200+" },
      { icon: Award, label: "Prix Remportés", value: "12" },
      { icon: Users, label: "Lecteurs Atteints", value: "50K+" },
    ],
    influences: ["Arthur Rimbaud", "Baudelaire", "René Char", "Andrée Chedid", "Saint-John Perse"],
    writingStyle:
      "La poésie d'dadda belkacem se caractérise par son accessibilité et sa résonance émotionnelle. Elle croit que la poésie devrait parler au cœur tout en défiant l'esprit, créant des ponts entre l'expérience personnelle et universelle humaine.",
  }

  if (variant === "compact") {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-2/5">
              <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
                <Image src="/received_669479241110507.webp" alt={poetInfo.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
              </div>
            </div>
            <div className="w-full lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">À Propos de la Poète</h2>
              <h3 className="text-xl text-primary-600 dark:text-primary-400 mb-6">{poetInfo.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed text-lg">{poetInfo.bio}</p>
              <Link
                href="/about"
                className="inline-flex items-center bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Lire la Biographie Complète
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50/50 via-secondary-50/30 to-accent-50/50 dark:from-neutral-900/50 dark:via-neutral-800/30 dark:to-neutral-900/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 dark:bg-primary-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/30 dark:bg-secondary-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Rencontrez la Poète</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Découvrez le parcours, l'inspiration et l'art derrière les mots
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Photo and Basic Info */}
          <div className="space-y-8">
            <div className="relative aspect-[3/4] max-w-lg mx-auto overflow-hidden rounded-2xl shadow-2xl">
              <Image src="/received_669479241110507.webp" alt={poetInfo.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{poetInfo.name}</h3>
                <p className="text-primary-200 mb-1">{poetInfo.title}</p>
                <div className="flex items-center text-sm text-neutral-200">
                  <MapPin size={14} className="mr-1" />
                  {poetInfo.location}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {poetInfo.stats.map((stat, index) => (
                <div
                  key={index}
                  className="card-gradient backdrop-blur-sm rounded-xl p-4 text-center border border-primary-100/50 dark:border-neutral-700/50"
                >
                  <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-1">{stat.value}</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Biography and Details */}
          <div className="space-y-8">
            <div className="card-gradient backdrop-blur-sm rounded-2xl p-8 border border-primary-100/50 dark:border-neutral-700/50">
              <h3 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">Biographie</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">{poetInfo.longBio}</p>

              <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                <Calendar size={16} className="mr-2" />
                Active: {poetInfo.yearsActive}
              </div>

              <h4 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-neutral-100">Style d'Écriture</h4>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{poetInfo.writingStyle}</p>
            </div>

            {/* Achievements */}
            <div className="card-gradient backdrop-blur-sm rounded-2xl p-8 border border-primary-100/50 dark:border-neutral-700/50">
              <h3 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-100 flex items-center">
                <Award className="mr-3 text-secondary-600" />
                Réalisations & Reconnaissance
              </h3>
              <ul className="space-y-3">
                {poetInfo.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start text-neutral-600 dark:text-neutral-300">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Literary Influences */}
        <div className="card-gradient backdrop-blur-sm rounded-2xl p-8 border border-primary-100/50 dark:border-neutral-700/50 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-neutral-800 dark:text-neutral-100">
            Influences Littéraires
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {poetInfo.influences.map((influence, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full font-medium border border-primary-200/50 dark:border-primary-700/50"
              >
                {influence}
              </span>
            ))}
          </div>
        </div>



        {/* Interviews Vidéo */}
        <div className="card-gradient backdrop-blur-sm rounded-2xl p-8 border border-primary-100/50 dark:border-neutral-700/50 mb-16">
          <h3 className="text-2xl font-bold mb-4 text-center text-neutral-800 dark:text-neutral-100">
            Interviews Vidéo avec dadda belkacem 
          </h3>
          <p className="text-center text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Découvrez des entretiens exclusifs où dadda belkacem partage sa vision de la poésie, ses inspirations et son parcours d’auteure.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                title: "Interview sur CANADA Poésie",
                description: "dadda belkacem  évoque son processus créatif et l'importance de la poésie contemporaine.",
                youtubeId: "AzdXDHPh8Xg",
              },
              {
                title: "Rencontre littéraire à QUEBEC",
                description: "Discussion autour de son dernier recueil et de ses inspirations QUEBECiennes.",
                youtubeId: "_6-iJZiHAxM",
              },
              // Ajoutez d'autres vidéos ici
            ].map((video, idx) => (
              <div
                key={idx}
                className="w-full md:w-[45%] max-w-xl flex flex-col items-center mb-8"
              >
                <div className="aspect-video w-full mb-3 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 text-center mb-1">
                  {video.title}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 text-center">
                  {video.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
            Connectez-vous avec {poetInfo.name.split(" ")[0]}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Intéressé par des collaborations, des lectures, ou simplement pour partager vos réflexions sur la poésie ?
            J'aimerais vous entendre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Me Contacter
            </Link>
            <Link
              href="/poems"
              className="bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-primary-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 px-8 py-4 rounded-xl font-medium transition-all duration-300"
            >
              Lire Ma Poésie
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
