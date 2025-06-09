import Link from "next/link"
import Image from "next/image"
import { Download } from "lucide-react"

export interface Poem {
  id: string
  title: string
  excerpt: string
  date: string
  image?: string // optional image field
}

interface PoemCardProps {
  poem: Poem
}

export default function PoemCard({ poem }: PoemCardProps) {
  return (
    <div className="card-gradient backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-primary-100/50 dark:border-neutral-700/50 group hover:-translate-y-2">
      
      {/* Optional Image */}
      {poem.image && (
 <div className="mb-4 relative aspect-[2/1] w-full rounded-xl overflow-hidden">
  <Image
    src={poem.image}
    alt={`Image for ${poem.title}`}
    fill
    className="object-cover"
  />
</div>

      )}

      <time className="text-sm text-primary-600 dark:text-primary-400 font-medium">
        {new Date(poem.date).toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <h3 className="text-xl font-bold mt-2 mb-3 text-neutral-800 dark:text-neutral-100 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
        {poem.title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-3 leading-relaxed">{poem.excerpt}</p>
      <div className="flex gap-3">
        <Link
          href={`/poems/${poem.id}`}
          className="inline-flex items-center text-primary-700 dark:text-primary-400 font-medium hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors group-hover:translate-x-1 duration-300"
        >
          Lire le poème
        </Link>
        <button className="inline-flex items-center bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm">
          <Download size={14} className="mr-1" />
          Télécharger
        </button>
      </div>
    </div>
  )
}
