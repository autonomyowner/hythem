import Link from 'next/link'
import Image from 'next/image'

type CategoryCard = {
  id: string
  title: string
  description: string
  highlight: string
  image: string
  href: string
}

const categories: CategoryCard[] = [
  {
    id: 'immunite-defenses',
    title: 'IMMUNITÉ & DÉFENSES',
    description:
      'Les essentiels pour affronter les saisons et maintenir votre corps résistant.',
    highlight: 'Défenses naturelles',
    image: '/unnamed (2).jpg',
    href: '/services',
  },
  {
    id: 'vitalite-energie',
    title: 'VITALITÉ & ÉNERGIE',
    description:
      'Solutions pour combattre la fatigue et optimiser la concentration mentale.',
    highlight: 'Énergie durable',
    image: '/unnamed (2).jpg',
    href: '/services',
  },
  {
    id: 'sommeil-detente',
    title: 'SOMMEIL & DÉTENTE',
    description:
      'Retrouvez un sommeil réparateur et gérez le stress du quotidien.',
    highlight: 'Bien-être quotidien',
    image: '/unnamed (2).jpg',
    href: '/services',
  },
  {
    id: 'beaute-articulations',
    title: 'BEAUTÉ & ARTICULATIONS',
    description:
      'Compléments ciblés pour la peau, les cheveux et le confort articulaire.',
    highlight: 'Santé & beauté',
    image: '/unnamed (2).jpg',
    href: '/services',
  },
]

export const ServicesPreview = (): JSX.Element => {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-kitchen-lux-dark-green-600">
            Nos catégories
          </p>
          <h2 className="mt-5 text-4xl font-elegant font-semibold text-kitchen-lux-dark-green-800 sm:text-5xl">
            Trouvez Votre Complément Idéal
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-kitchen-lux-dark-green-700">
            Quel que soit votre objectif – sommeil, digestion, énergie ou immunité – 
            Cellavie a la formule qu&apos;il vous faut. Explorez nos catégories principales.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative block overflow-hidden rounded-3xl border border-kitchen-lux-dark-green-200 bg-gradient-to-br from-kitchen-lux-dark-green-50 to-kitchen-lux-dark-green-100 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-kitchen-lux-dark-green-200/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 flex items-center justify-center">
                {category.image ? (
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="text-center text-neutral-400">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-sm">Image à venir</p>
                  </div>
                )}
              </div>

              <div className="flex h-full flex-col gap-5 p-6">
                <span className="text-xs uppercase tracking-[0.35em] text-kitchen-lux-dark-green-600">
                  {category.highlight}
                </span>
                <h3 className="text-xl font-elegant font-semibold text-kitchen-lux-dark-green-800">
                  {category.title}
                </h3>
                <p className="text-sm leading-relaxed text-kitchen-lux-dark-green-700">
                  {category.description}
                </p>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-kitchen-lux-dark-green-800 group-hover:text-kitchen-lux-dark-green-600 transition-colors duration-200">
                  VOIR LES PRODUITS
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
