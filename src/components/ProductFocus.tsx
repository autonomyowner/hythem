import Link from 'next/link'
import Image from 'next/image'

const benefits = [
  {
    title: 'Défenses Naturelles',
    description: 'Soutient et renforce votre système immunitaire toute l&apos;année.',
  },
  {
    title: 'Énergie Durable',
    description: 'Aide à réduire la fatigue passagère et à retrouver tonus et vitalité.',
  },
  {
    title: 'Synergie d&apos;Actifs',
    description: 'Formule unique et hautement concentrée (Zinc, Vitamine D, Quercétine).',
  },
]

export const ProductFocus = (): JSX.Element => {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-kitchen-lux-dark-green-600">
            Le produit à l&apos;honneur
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-kitchen-lux-dark-green-800 sm:text-5xl">
            Cellavie Immunité & Vitalité
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-kitchen-lux-dark-green-700">
            Face aux défis du quotidien et aux changements de saison, votre système immunitaire mérite le meilleur soutien. 
            Notre formule phare est conçue pour renforcer vos défenses naturelles et maintenir une énergie durable.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[32px] border border-kitchen-lux-dark-green-200 bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 shadow-lg">
            <div className="relative aspect-[4/3] bg-neutral-100 flex items-center justify-center">
              <Image
                src="/unnamed (2).jpg"
                alt="Cellavie Immune Boost"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-elegant font-semibold text-kitchen-lux-dark-green-800">
                IMMUNE BOOST (1000 MG)
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-kitchen-lux-dark-green-600">
                Avantages clés
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-kitchen-lux-dark-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-kitchen-lux-dark-green-800">
                        {benefit.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-kitchen-lux-dark-green-700">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Link
                href="/services"
                className="inline-flex rounded-full border border-kitchen-lux-dark-green-400 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-kitchen-lux-dark-green-700 transition-colors duration-200 hover:border-kitchen-lux-dark-green-600 hover:text-kitchen-lux-dark-green-800 hover:bg-kitchen-lux-dark-green-50"
              >
                VOIR LA FICHE PRODUIT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

