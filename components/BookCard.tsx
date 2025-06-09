import Image from "next/image"
import { Download } from "lucide-react"

export interface Book {
  id: string
  title: string
  description: string
  coverImage: string
  year: number
}

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-6 card-gradient backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-primary-100/50 dark:border-neutral-700/50 group hover:-translate-y-1">
      <div className="w-full md:w-1/4 relative aspect-[5/6] overflow-hidden rounded-xl shadow-md">
        <Image
          src={book.coverImage  }
          alt={`Couverture de ${book.title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="w-full md:w-2/3">
        <h3 className="text-2xl font-bold mb-2 text-neutral-800 dark:text-neutral-100 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
          {book.title}
        </h3>
        <p className="text-primary-600 dark:text-primary-400 mb-4 font-medium">{book.year}</p>
        <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">{book.description}</p>
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            <Download size={16} className="mr-2" />
            Télécharger le Livre
          </button>
          <button className="inline-flex items-center bg-gradient-to-r from-secondary-500 to-accent-500 hover:from-secondary-600 hover:to-accent-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Aperçu
          </button>
        </div>
      </div>
    </div>
  )
}
