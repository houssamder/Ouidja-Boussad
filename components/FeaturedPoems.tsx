import type { Poem } from "./PoemCard"
import PoemCard from "./PoemCard"

interface FeaturedPoemsProps {
  poems: Poem[]
}

export default function FeaturedPoems({ poems }: FeaturedPoemsProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50/50 via-secondary-50/30 to-accent-50/50 dark:from-neutral-900/50 dark:via-neutral-800/30 dark:to-neutral-900/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-200/30 dark:bg-primary-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-200/30 dark:bg-secondary-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Poèmes en Vedette</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Une sélection d'œuvres récentes qui capturent l'essence de mon parcours poétique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {poems.map((poem) => (
            <PoemCard key={poem.id} poem={poem} />
          ))}
        </div>
      </div>
    </section>
  )
}
