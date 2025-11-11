export type ProductType = 'Veste' | 'Pull' | 'T-Shirt' | 'Pantalon' | 'Accessoire'
export type ProductNeed = 'Hiver' | 'Quotidien' | 'Sport' | 'Élégant'

export type AdditionalInfo = {
  shipping: string
  returns: string
  payment: string
  exclusiveOffers?: string
}

export type Product = {
  id: string
  slug: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: string
  productType: ProductType
  need?: ProductNeed
  inStock: boolean
  isPromo: boolean
  rating?: number
  isNew?: boolean
  description: string
  benefits: string[]
  ingredients: string
  usageInstructions: string
  deliveryEstimate: string
  viewersCount: number
  countdownEndDate?: string
  additionalInfo: AdditionalInfo
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

// Women's Clothing (for purple boutique - home page)
export const womenPerfumes: Product[] = [
  {
    id: 'wf-1',
    slug: 'veste-north-face-noire',
    name: 'Veste North Face Noire',
    brand: 'WinterDZ',
    price: 15000,
    originalPrice: 18000,
    image: '/winter/black north face.png',
    images: ['/winter/black north face.png'],
    category: 'Vêtements',
    productType: 'Veste',
    need: 'Hiver',
    inStock: true,
    isPromo: true,
    rating: 4.8,
    isNew: true,
    description: 'Veste North Face noire de qualité supérieure, parfaite pour affronter l\'hiver algérien avec style et confort.',
    benefits: [
      'Protection contre le froid',
      'Matériau de haute qualité',
      'Design élégant et moderne',
      'Parfait pour tous les jours'
    ],
    ingredients: 'Polyester, Coton, Matériaux techniques',
    usageInstructions: 'Veste décontractée pour toutes occasions. Lavable en machine. Taille disponible.',
    deliveryEstimate: 'Livraison estimée sous 2-3 jours',
    viewersCount: 45,
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 20000 DA. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 7 jours.',
      payment: 'Paiement sécurisé par carte bancaire ou espèces à la livraison.',
      exclusiveOffers: 'Code promo WELCOME10 pour 10% de réduction sur votre première commande.',
    },
  },
  {
    id: 'wf-2',
    slug: 'veste-north-face-blanche',
    name: 'Veste North Face Blanche',
    brand: 'WinterDZ',
    price: 16000,
    originalPrice: 19000,
    image: '/winter/white north face.png',
    images: ['/winter/white north face.png'],
    category: 'Vêtements',
    productType: 'Veste',
    need: 'Hiver',
    inStock: true,
    isPromo: true,
    rating: 4.9,
    description: 'Veste North Face blanche élégante, idéale pour un look moderne et sophistiqué pendant l\'hiver.',
    benefits: [
      'Style élégant et moderne',
      'Protection hivernale optimale',
      'Facile à entretenir',
      'Taille disponible'
    ],
    ingredients: 'Polyester, Coton, Matériaux techniques',
    usageInstructions: 'Veste décontractée pour toutes occasions. Lavable en machine. Taille disponible.',
    deliveryEstimate: 'Livraison estimée sous 2-3 jours',
    viewersCount: 32,
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 20000 DA. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 7 jours.',
      payment: 'Paiement sécurisé par carte bancaire ou espèces à la livraison.',
    },
  },
  {
    id: 'wf-3',
    slug: 'veste-north-face-bleue',
    name: 'Veste North Face Bleue',
    brand: 'WinterDZ',
    price: 15500,
    originalPrice: 18500,
    image: '/winter/bluie northface.png',
    images: ['/winter/bluie northface.png'],
    category: 'Vêtements',
    productType: 'Veste',
    need: 'Hiver',
    inStock: true,
    isPromo: true,
    rating: 4.7,
    description: 'Veste North Face bleue sportive, parfaite pour les activités en plein air et le quotidien.',
    benefits: [
      'Style sportif et moderne',
      'Résistance aux intempéries',
      'Confort optimal',
      'Parfait pour le sport'
    ],
    ingredients: 'Polyester, Coton, Matériaux techniques',
    usageInstructions: 'Veste décontractée pour toutes occasions. Lavable en machine. Taille disponible.',
    deliveryEstimate: 'Livraison estimée sous 2-3 jours',
    viewersCount: 28,
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 20000 DA. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 7 jours.',
      payment: 'Paiement sécurisé par carte bancaire ou espèces à la livraison.',
    },
  },
  {
    id: 'wf-4',
    slug: 'pull-gris',
    name: 'Pull Gris Élégant',
    brand: 'WinterDZ',
    price: 12000,
    originalPrice: 12000,
    image: '/winter/grey.png',
    images: ['/winter/grey.png'],
    category: 'Vêtements',
    productType: 'Pull',
    need: 'Quotidien',
    inStock: true,
    isPromo: false,
    rating: 4.6,
    description: 'Pull gris élégant et confortable, idéal pour un look décontracté et moderne.',
    benefits: [
      'Confort exceptionnel',
      'Style intemporel',
      'Facile à porter',
      'Parfait pour tous les jours'
    ],
    ingredients: 'Laine, Coton, Matériaux doux',
    usageInstructions: 'Pull décontracté pour toutes occasions. Lavable en machine. Taille disponible.',
    deliveryEstimate: 'Livraison estimée sous 2-3 jours',
    viewersCount: 35,
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 20000 DA. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 7 jours.',
      payment: 'Paiement sécurisé par carte bancaire ou espèces à la livraison.',
    },
  },
  {
    id: 'wf-5',
    slug: 'pull-marron',
    name: 'Pull Marron Classique',
    brand: 'WinterDZ',
    price: 12500,
    originalPrice: 12500,
    image: '/winter/brown.png',
    images: ['/winter/brown.png'],
    category: 'Vêtements',
    productType: 'Pull',
    need: 'Quotidien',
    inStock: true,
    isPromo: false,
    rating: 4.7,
    description: 'Pull marron classique et raffiné, parfait pour un style élégant et sophistiqué.',
    benefits: [
      'Style classique intemporel',
      'Couleur tendance',
      'Confort optimal',
      'Qualité supérieure'
    ],
    ingredients: 'Laine, Coton, Matériaux doux',
    usageInstructions: 'Pull décontracté pour toutes occasions. Lavable en machine. Taille disponible.',
    deliveryEstimate: 'Livraison estimée sous 2-3 jours',
    viewersCount: 42,
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 20000 DA. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 7 jours.',
      payment: 'Paiement sécurisé par carte bancaire ou espèces à la livraison.',
    },
  },
  {
    id: 'wf-6',
    slug: 't-shirt-adidas-blanc',
    name: 'T-Shirt Adidas Blanc',
    brand: 'WinterDZ',
    price: 8500,
    originalPrice: 10000,
    image: '/winter/addidaswhite.png',
    images: ['/winter/addidaswhite.png'],
    category: 'Vêtements',
    productType: 'T-Shirt',
    need: 'Sport',
    inStock: true,
    isPromo: true,
    rating: 4.6,
    description: 'T-Shirt Adidas blanc sportif et moderne, idéal pour le sport et le quotidien.',
    benefits: [
      'Style sportif authentique',
      'Confort respirant',
      'Marque reconnue',
      'Parfait pour le sport'
    ],
    ingredients: 'Coton, Polyester, Matériaux techniques',
    usageInstructions: 'T-Shirt décontracté pour toutes occasions. Lavable en machine. Taille disponible.',
    deliveryEstimate: 'Livraison estimée sous 2-3 jours',
    viewersCount: 38,
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 20000 DA. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 7 jours.',
      payment: 'Paiement sécurisé par carte bancaire ou espèces à la livraison.',
    },
  },
]

// Men's Clothing (for other boutique - services page)
export const menPerfumes: Product[] = [
  {
    id: 'm-1',
    slug: 'veste-north-face-noire-homme',
    name: 'Veste North Face Noire',
    brand: 'WinterDZ',
    price: 15000,
    originalPrice: 18000,
    image: '/winter/black north face.png',
    images: ['/winter/black north face.png'],
    category: 'Vêtements',
    productType: 'Veste',
    need: 'Hiver',
    inStock: true,
    isPromo: true,
    rating: 4.8,
    isNew: true,
    description: 'Veste North Face noire de qualité supérieure, parfaite pour affronter l\'hiver algérien avec style et confort.',
    benefits: [
      'Protection contre le froid',
      'Matériau de haute qualité',
      'Design élégant et moderne',
      'Parfait pour tous les jours'
    ],
    ingredients: 'Polyester, Coton, Matériaux techniques',
    usageInstructions: 'Veste décontractée pour toutes occasions. Lavable en machine. Taille disponible.',
    deliveryEstimate: 'Livraison estimée sous 2-3 jours',
    viewersCount: 52,
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 20000 DA. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 7 jours.',
      payment: 'Paiement sécurisé par carte bancaire ou espèces à la livraison.',
      exclusiveOffers: 'Code promo WELCOME10 pour 10% de réduction sur votre première commande.',
    },
  },
  {
    id: 'm-2',
    slug: 'veste-north-face-blanche-homme',
    name: 'Veste North Face Blanche',
    brand: 'WinterDZ',
    price: 16000,
    originalPrice: 19000,
    image: '/winter/white north face.png',
    images: ['/winter/white north face.png'],
    category: 'Vêtements',
    productType: 'Veste',
    need: 'Hiver',
    inStock: true,
    isPromo: true,
    rating: 4.9,
    description: 'Veste North Face blanche élégante, idéale pour un look moderne et sophistiqué pendant l\'hiver.',
    benefits: [
      'Style élégant et moderne',
      'Protection hivernale optimale',
      'Facile à entretenir',
      'Taille disponible'
    ],
    ingredients: 'Polyester, Coton, Matériaux techniques',
    usageInstructions: 'Veste décontractée pour toutes occasions. Lavable en machine. Taille disponible.',
    deliveryEstimate: 'Livraison estimée sous 2-3 jours',
    viewersCount: 41,
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 20000 DA. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 7 jours.',
      payment: 'Paiement sécurisé par carte bancaire ou espèces à la livraison.',
    },
  },
  {
    id: 'm-3',
    slug: 'veste-north-face-bleue-homme',
    name: 'Veste North Face Bleue',
    brand: 'WinterDZ',
    price: 15500,
    originalPrice: 18500,
    image: '/winter/bluie northface.png',
    images: ['/winter/bluie northface.png'],
    category: 'Vêtements',
    productType: 'Veste',
    need: 'Sport',
    inStock: true,
    isPromo: true,
    rating: 4.7,
    description: 'Veste North Face bleue sportive, parfaite pour les activités en plein air et le quotidien.',
    benefits: [
      'Style sportif et moderne',
      'Résistance aux intempéries',
      'Confort optimal',
      'Parfait pour le sport'
    ],
    ingredients: 'Polyester, Coton, Matériaux techniques',
    usageInstructions: 'Veste décontractée pour toutes occasions. Lavable en machine. Taille disponible.',
    deliveryEstimate: 'Livraison estimée sous 2-3 jours',
    viewersCount: 36,
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 20000 DA. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 7 jours.',
      payment: 'Paiement sécurisé par carte bancaire ou espèces à la livraison.',
    },
  },
  {
    id: 'm-4',
    slug: 'pull-gris-homme',
    name: 'Pull Gris Élégant',
    brand: 'WinterDZ',
    price: 12000,
    originalPrice: 12000,
    image: '/winter/grey.png',
    images: ['/winter/grey.png'],
    category: 'Vêtements',
    productType: 'Pull',
    need: 'Quotidien',
    inStock: true,
    isPromo: false,
    rating: 4.6,
    description: 'Pull gris élégant et confortable, idéal pour un look décontracté et moderne.',
    benefits: [
      'Confort exceptionnel',
      'Style intemporel',
      'Facile à porter',
      'Parfait pour tous les jours'
    ],
    ingredients: 'Laine, Coton, Matériaux doux',
    usageInstructions: 'Pull décontracté pour toutes occasions. Lavable en machine. Taille disponible.',
    deliveryEstimate: 'Livraison estimée sous 2-3 jours',
    viewersCount: 31,
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 20000 DA. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 7 jours.',
      payment: 'Paiement sécurisé par carte bancaire ou espèces à la livraison.',
    },
  },
  {
    id: 'm-5',
    slug: 'pull-marron-homme',
    name: 'Pull Marron Classique',
    brand: 'WinterDZ',
    price: 12500,
    originalPrice: 12500,
    image: '/winter/brown.png',
    images: ['/winter/brown.png'],
    category: 'Vêtements',
    productType: 'Pull',
    need: 'Élégant',
    inStock: true,
    isPromo: false,
    rating: 4.7,
    description: 'Pull marron classique et raffiné, parfait pour un style élégant et sophistiqué.',
    benefits: [
      'Style classique intemporel',
      'Couleur tendance',
      'Confort optimal',
      'Qualité supérieure'
    ],
    ingredients: 'Laine, Coton, Matériaux doux',
    usageInstructions: 'Pull décontracté pour toutes occasions. Lavable en machine. Taille disponible.',
    deliveryEstimate: 'Livraison estimée sous 2-3 jours',
    viewersCount: 44,
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 20000 DA. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 7 jours.',
      payment: 'Paiement sécurisé par carte bancaire ou espèces à la livraison.',
    },
  },
  {
    id: 'm-6',
    slug: 't-shirt-adidas-blanc-homme',
    name: 'T-Shirt Adidas Blanc',
    brand: 'WinterDZ',
    price: 8500,
    originalPrice: 10000,
    image: '/winter/addidaswhite.png',
    images: ['/winter/addidaswhite.png'],
    category: 'Vêtements',
    productType: 'T-Shirt',
    need: 'Sport',
    inStock: true,
    isPromo: true,
    rating: 4.6,
    description: 'T-Shirt Adidas blanc sportif et moderne, idéal pour le sport et le quotidien.',
    benefits: [
      'Style sportif authentique',
      'Confort respirant',
      'Marque reconnue',
      'Parfait pour le sport'
    ],
    ingredients: 'Coton, Polyester, Matériaux techniques',
    usageInstructions: 'T-Shirt décontracté pour toutes occasions. Lavable en machine. Taille disponible.',
    deliveryEstimate: 'Livraison estimée sous 2-3 jours',
    viewersCount: 48,
    additionalInfo: {
      shipping: 'Livraison gratuite à partir de 20000 DA. Expédition sous 24-48h.',
      returns: 'Retours acceptés sous 7 jours.',
      payment: 'Paiement sécurisé par carte bancaire ou espèces à la livraison.',
    },
  },
]

// Combined products array (for backward compatibility)
export const products: Product[] = [...womenPerfumes, ...menPerfumes]

export type SortOption = 'best-sellers' | 'price-asc' | 'price-desc' | 'newest' | 'highest-rated'

export type FilterState = {
  availability: 'all' | 'in-stock' | 'out-of-stock'
  brands: string[]
  priceRange: { min: number; max: number }
  productTypes: ProductType[]
  needs: ProductNeed[]
}
