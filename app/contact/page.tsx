import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = {
  title: "Contact | Vers Poétiques",
  description: "Prenez contact pour des collaborations, des lectures, ou simplement pour partager vos pensées.",
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50/50 via-secondary-50/30 to-accent-50/50 dark:from-neutral-900/50 dark:via-neutral-800/30 dark:to-neutral-900/50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center gradient-text">Contact</h1>
          <p className="text-neutral-600 dark:text-neutral-300 text-center max-w-2xl mx-auto text-lg">
            Vous avez une question, un commentaire ou êtes intéressé par une collaboration ? J'aimerais vous entendre.
          </p>
        </div>
      </section> 

      <section className="py-16">
        <div className="text-neutral-600 dark:text-neutral-300  container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Envoyez un Message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Connectez-vous Avec Moi</h2>
              <div className="prose prose-neutral dark:prose-invert mb-8">
                <p>
                  Je suis toujours intéressée à entendre des lecteurs, d'autres poètes et de potentiels collaborateurs.
                  Que vous ayez une question sur mon travail, souhaitiez discuter d'un projet, ou simplement partager vos
                  pensées, je vous invite à me contacter.
                </p>
                <p>
                  Pour les demandes littéraires, les lectures ou toute autre collaboration, veuillez me contacter via le formulaire ci-dessus ou par email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
