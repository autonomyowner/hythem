export type ProductType = 'Veste' | 'Pull' | 'T-Shirt' | 'Pantalon' | 'Accessoire'
export type ProductNeed = 'Hiver' | 'Quotidien' | 'Sport' | 'Élégant'

export type LocalizedText = {
  fr: string
  ar: string
}

const text = (fr: string, ar: string): LocalizedText => ({ fr, ar })

export type AdditionalInfo = {
  shipping: LocalizedText
  returns: LocalizedText
  payment: LocalizedText
  exclusiveOffers?: LocalizedText
}

export type Product = {
  id: string
  slug: string
  name: LocalizedText
  brand: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: LocalizedText
  productType: ProductType
  need?: ProductNeed
  inStock: boolean
  isPromo: boolean
  rating?: number
  isNew?: boolean
  description: LocalizedText
  benefits: LocalizedText[]
  ingredients: LocalizedText
  usageInstructions: LocalizedText
  deliveryEstimate: LocalizedText
  viewersCount: number
  countdownEndDate?: string
  additionalInfo: AdditionalInfo
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

const defaultDeliveryEstimate = text(
  'Livraison estimée sous 2-3 jours',
  'التوصيل في غضون 2-3 أيام',
)

const defaultShipping = text(
  'Livraison gratuite à partir de 20000 DA. Expédition sous 24-48h.',
  'توصيل مجاني ابتداءً من 20000 دج مع تجهيز الطلب خلال 24 إلى 48 ساعة.',
)

const defaultReturns = text('Retours acceptés sous 7 jours.', 'إرجاع مقبول خلال 7 أيام.')

const defaultPayment = text(
  'Paiement sécurisé par carte bancaire ou espèces à la livraison.',
  'دفع آمن بالبطاقة البنكية أو نقداً عند التسليم.',
)

const buildAdditionalInfo = (overrides: Partial<AdditionalInfo> = {}): AdditionalInfo => {
  const info: AdditionalInfo = {
    shipping: overrides.shipping ?? defaultShipping,
    returns: overrides.returns ?? defaultReturns,
    payment: overrides.payment ?? defaultPayment,
  }

  if (overrides.exclusiveOffers) {
    info.exclusiveOffers = overrides.exclusiveOffers
  }

  return info
}

const perfumeCategory = text('Parfums', 'عطور')

// Women's Clothing (for purple boutique - home page)
export const womenPerfumes: Product[] = [
  {
    id: 'wf-1',
    slug: 'veste-north-face-noire',
    name: text('Élixir Noir Intense', 'إكسير نوار إنتنس'),
    brand: 'Allouani',
    price: 15000,
    originalPrice: 18000,
    image: '/perfums/11800.jpg',
    images: ['/perfums/11800.jpg'],
    category: perfumeCategory,
    productType: 'Veste',
    need: 'Hiver',
    inStock: true,
    isPromo: true,
    rating: 4.8,
    isNew: true,
    description: text(
      'Extrait de parfum ambré et boisé, riche en accords fumés qui enveloppent la peau d’une élégance ténébreuse.',
      'مستخلص عطر كهرماني خشبي غني بنفحات مدخنة تغلف البشرة بأناقة غامضة.',
    ),
    benefits: [
      text('Sillage profond et sensuel toute la journée', 'أثر عطري عميق وحسي يدوم طوال اليوم'),
      text('Signature ambrée sophistiquée', 'بصمة كهرمانية راقية'),
      text('Parfum mixte, idéal en soirée', 'عطر للجنسين مثالي للأمسيات'),
      text('Confection artisanale à Bouzareah', 'تركيبة حرفية مصنوعة في بوزريعة'),
    ],
    ingredients: text(
      'Notes de tête: bergamote; Notes de cœur: iris fumé; Notes de fond: oud, ambre noir',
      'النوتات العليا: برغموت؛ الوسطى: سوسن مدخن؛ القاعدة: عود وعنبر أسود',
    ),
    usageInstructions: text(
      'Vaporiser à 20 cm sur les points de pulsation et laisser évoluer sans frotter.',
      'رُشّ العطر على بعد 20 سم من نقاط النبض واتركه يتطور دون فرك.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 45,
    additionalInfo: buildAdditionalInfo({
      exclusiveOffers: text(
        'Code promo WELCOME10 pour 10% de réduction sur votre première commande.',
        'رمز التخفيض WELCOME10 يمنحك خصماً بنسبة 10٪ على أول طلب.',
      ),
    }),
  },
  {
    id: 'wf-2',
    slug: 'veste-north-face-blanche',
    name: text('Voile Blanc Cristallin', 'فواغ بلان كريستالان'),
    brand: 'Allouani',
    price: 16000,
    originalPrice: 19000,
    image: '/perfums/11500.jpg',
    images: ['/perfums/11500.jpg'],
    category: perfumeCategory,
    productType: 'Veste',
    need: 'Hiver',
    inStock: true,
    isPromo: true,
    rating: 4.9,
    description: text(
      'Eau de parfum lumineuse, mariage de fleurs blanches et de muscs cristallins pour une aura pure.',
      'ماء عطر مضيء يجمع بين الزهور البيضاء والمسك البلوري ليمنحك هالة نقية.',
    ),
    benefits: [
      text('Fraîcheur florale aérienne', 'انتعاش زهري خفيف كالهواء'),
      text('Sillage délicat mais présent', 'أثر ناعم لكنه محسوس'),
      text('Idéal pour les journées lumineuses', 'مثالي للأيام المشرقة'),
      text('Formulation hypoallergénique', 'تركيبة مضادة للحساسية'),
    ],
    ingredients: text(
      'Notes de tête: fleur d’oranger; Notes de cœur: jasmin sambac; Notes de fond: muscs blancs, ambrette',
      'النوتات العليا: زهر البرتقال؛ الوسطى: ياسمين سامباك؛ القاعدة: مسك أبيض وأمبريت.',
    ),
    usageInstructions: text(
      'Pulvériser légèrement sur le cou et les poignets, renouveler selon l’intensité désirée.',
      'رُشّ برفق على العنق والمعصمين وأعد التطبيق حسب الشدة المطلوبة.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 32,
    additionalInfo: buildAdditionalInfo(),
  },
  {
    id: 'wf-3',
    slug: 'veste-north-face-bleue',
    name: text('Azure Oud Tonique', 'أزير عود تونيك'),
    brand: 'Allouani',
    price: 15500,
    originalPrice: 18500,
    image: '/perfums/11800da 10ml.jpg',
    images: ['/perfums/11800da 10ml.jpg'],
    category: perfumeCategory,
    productType: 'Veste',
    need: 'Hiver',
    inStock: true,
    isPromo: true,
    rating: 4.7,
    description: text(
      'Boisé aromatique vibrant qui associe agrumes bleus et oud raffiné pour une énergie chic.',
      'عطر خشبي عطري نابض يمزج الحمضيات الزرقاء بالعود الراقي لجرعة طاقة أنيقة.',
    ),
    benefits: [
      text('Alliance fraîche/boisée unique', 'مزج فريد بين الانتعاش والدفء الخشبي'),
      text('Convient aux journées actives', 'مناسب للأيام النشيطة'),
      text('Sillage contrôlé mais charismatique', 'أثر مضبوط لكنه جذاب'),
      text('Macération lente pour plus de profondeur', 'نقع بطيء لعمق أكبر في الرائحة'),
    ],
    ingredients: text(
      'Notes de tête: cédrat, gingembre bleu; Notes de cœur: lavande, cardamome; Notes de fond: oud, bois de santal',
      'النوتات العليا: سيدرات وزنجبيل أزرق؛ الوسطى: لافندر وهال؛ القاعدة: عود وخشب الصندل.',
    ),
    usageInstructions: text(
      'Appliquer après la douche sur peau sèche pour renforcer la tenue.',
      'ضعه بعد الاستحمام على بشرة جافة لتعزيز الثبات.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 28,
    additionalInfo: buildAdditionalInfo(),
  },
  {
    id: 'wf-4',
    slug: 'pull-gris',
    name: text('Cachemire Gris Nébuleux', 'كاشمير رمادي ضبابي'),
    brand: 'Allouani',
    price: 12000,
    originalPrice: 12000,
    image: '/perfums/7500.jpg',
    images: ['/perfums/7500.jpg'],
    category: perfumeCategory,
    productType: 'Pull',
    need: 'Quotidien',
    inStock: true,
    isPromo: false,
    rating: 4.6,
    description: text(
      'Parfum musqué-boisé au confort cotonneux, inspiré de la douceur d’un cachemire frais.',
      'عطر مسكي خشبي مريح بملمس قطني مستوحى من دفء الكشمير الناعم.',
    ),
    benefits: [
      text('Sillage intime et sophistiqué', 'أثر حميمي وراقٍ'),
      text('Accords muscs/iris rassurants', 'تناغم مسك وسوسن يمنح إحساساً بالطمأنينة'),
      text('Parfait pour le bureau ou la maison', 'مثالي للعمل أو المنزل'),
      text('Convient aux peaux sensibles', 'ملائم للبشرة الحساسة'),
    ],
    ingredients: text(
      'Notes de tête: poire givrée; Notes de cœur: iris, muscs doux; Notes de fond: bois flotté, cashmeran',
      'النوتات العليا: كمثرى مثلجة؛ الوسطى: سوسن، مسك ناعم؛ القاعدة: أخشاب طافية وكاشمران.',
    ),
    usageInstructions: text(
      'Vaporiser sur les vêtements ou un foulard pour prolonger la sensation cocoon.',
      'رشّه على الملابس أو على وشاح لإطالة الشعور بالدفء.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 35,
    additionalInfo: buildAdditionalInfo(),
  },
  {
    id: 'wf-5',
    slug: 'pull-marron',
    name: text('Ambre Terre Brûlée', 'عنبر الأرض المحروقة'),
    brand: 'Allouani',
    price: 12500,
    originalPrice: 12500,
    image: '/perfums/7500louis.jpg',
    images: ['/perfums/7500louis.jpg'],
    category: perfumeCategory,
    productType: 'Pull',
    need: 'Quotidien',
    inStock: true,
    isPromo: false,
    rating: 4.7,
    description: text(
      'Oriental moderne mêlant résines, épices et vanille torréfiée pour un parfum chaleureux.',
      'عطر شرقي عصري يمزج بين الراتنجات والتوابل والفانيلا المحمصة لدفء غني.',
    ),
    benefits: [
      text('Accords orientaux enveloppants', 'تناغمات شرقية دافئة تحيط بك'),
      text('Excellent en soirée d’hiver', 'مثالي لأمسيات الشتاء'),
      text('Projection généreuse maîtrisée', 'انتشار غني لكن متوازن'),
      text('Macération artisanale', 'تنقيع حرفي يمنح عمقاً أكبر'),
    ],
    ingredients: text(
      'Notes de tête: cannelle, poivre rose; Notes de cœur: benjoin, ciste; Notes de fond: vanille noire, patchouli',
      'النوتات العليا: قرفة وفلفل وردي؛ الوسطى: بنزوين ولابدانوم؛ القاعدة: فانيلا سوداء وباتشولي.',
    ),
    usageInstructions: text(
      'Appliquer sur la peau hydratée avant une sortie pour un sillage plus chaud.',
      'ضعه على بشرة مرطبة قبل الخروج لتحصل على أثر أكثر دفئاً.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 42,
    additionalInfo: buildAdditionalInfo(),
  },
  {
    id: 'wf-6',
    slug: 't-shirt-adidas-blanc',
    name: text('Pulse Sport Accord', 'بالس سبور أكورد'),
    brand: 'Allouani',
    price: 8500,
    originalPrice: 10000,
    image: '/perfums/6800.jpg',
    images: ['/perfums/6800.jpg'],
    category: perfumeCategory,
    productType: 'T-Shirt',
    need: 'Sport',
    inStock: true,
    isPromo: true,
    rating: 4.6,
    description: text(
      'Nébulisation tonique aux agrumes et notes marines, pensée pour accompagner vos entraînements.',
      'رذاذ منشّط من الحمضيات والنغمات البحرية مخصص لمرافقة حصص التدريب.',
    ),
    benefits: [
      text('Explosion d’agrumes rafraîchissants', 'انفجار من الحمضيات المنعشة'),
      text('Technologie anti-transfert', 'تقنية مقاومة للانتقال على الملابس'),
      text('Idéal après le sport', 'مثالي بعد التمارين'),
      text('Compatible avec toutes les peaux', 'يناسب جميع أنواع البشرة'),
    ],
    ingredients: text(
      'Notes de tête: pamplemousse, citron vert; Notes de cœur: accord marin, feuilles de menthe; Notes de fond: bois clairs, muscs propres',
      'النوتات العليا: جريب فروت وليمون؛ الوسطى: نفحات بحرية وأوراق نعناع؛ القاعدة: أخشاب فاتحة ومسك نقي.',
    ),
    usageInstructions: text(
      'Pulvériser généreusement sur le buste après l’effort pour prolonger la sensation de fraîcheur.',
      'رُشّه بسخاء على الصدر بعد الجهد للحفاظ على الانتعاش.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 38,
    additionalInfo: buildAdditionalInfo(),
  },
  {
    id: 'wf-7',
    slug: 'rose-ambree-sublime',
    name: text('Rose Ambrée Sublime', 'روز عنبر سوبلايم'),
    brand: 'Allouani',
    price: 18000,
    originalPrice: 21000,
    image: '/perfums/8000da 10ml.jpg',
    images: ['/perfums/8000da 10ml.jpg'],
    category: perfumeCategory,
    productType: 'Accessoire',
    need: 'Élégant',
    inStock: true,
    isPromo: true,
    rating: 4.9,
    description: text(
      'Parfum de caractère mêlant rose de Damas et ambre brûlant pour une féminité magnétique.',
      'عطر قوي يمزج بين ورد دمشق والعنبر المتقد لأنوثة آسرة.',
    ),
    benefits: [
      text('Bouquet floral opulent', 'باقة زهرية فخمة'),
      text('Accords ambrés chaleureux', 'نغمات عنبرية دافئة'),
      text('Sillage enveloppant longue durée', 'أثر يلفّك ويدوم طويلاً'),
      text('Edition limitée numérotée', 'إصدار محدود ومرقم'),
    ],
    ingredients: text(
      'Notes de tête: rose centifolia; Notes de cœur: safran, framboise noire; Notes de fond: ambre, oud doux',
      'النوتات العليا: ورد سنتيفوليا؛ الوسطى: زعفران وتوت أسود؛ القاعدة: عنبر وعود ناعم.',
    ),
    usageInstructions: text(
      'Déposer une brume sur le cou et les poignets puis laisser le parfum se développer sans frotter.',
      'رُشّ ضباباً خفيفاً على العنق والمعصمين واترك العطر يتطور دون فرك.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 51,
    additionalInfo: buildAdditionalInfo(),
  },
  {
    id: 'wf-8',
    slug: 'velours-epice-78',
    name: text('Velours Épicé 78', 'فيلور إبيسي 78'),
    brand: 'Allouani',
    price: 14500,
    originalPrice: 16500,
    image: '/perfums/7800da 10ml.jpg',
    images: ['/perfums/7800da 10ml.jpg'],
    category: perfumeCategory,
    productType: 'Accessoire',
    need: 'Quotidien',
    inStock: true,
    isPromo: false,
    rating: 4.8,
    description: text(
      'Alliance gourmande de fruits confits et d’épices dorées pour une sensualité feutrée.',
      'مزيج شهي من الفواكه المسكرة والتوابل الذهبية لحسية دافئة مخملية.',
    ),
    benefits: [
      text('Parfum réconfortant et raffiné', 'عطر مريح وراقي'),
      text('Convient aux soirées cosy', 'يلائم الأمسيات الحميمة'),
      text('Sillage moyen maîtrisé', 'انتشار متوسط متوازن'),
      text('Parfait en layering avec des muscs', 'مثالي للمزج مع عطور المسك'),
    ],
    ingredients: text(
      'Notes de tête: mandarine confite; Notes de cœur: cannelle, prune noire; Notes de fond: vanille, cashmeran',
      'النوتات العليا: يوسفي مسكّر؛ الوسطى: قرفة وبرقوق أسود؛ القاعدة: فانيلا وكاشمران.',
    ),
    usageInstructions: text(
      'Pulvériser sur les vêtements ou un foulard pour prolonger la douceur veloutée.',
      'رُشّه على الملابس أو على وشاح لإطالة النعومة المخملية.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 39,
    additionalInfo: buildAdditionalInfo(),
  },
  {
    id: 'wf-9',
    slug: 'perle-de-musc-68',
    name: text('Perle de Musc 68', 'بيرل دو موسك 68'),
    brand: 'Allouani',
    price: 13200,
    originalPrice: 15000,
    image: '/perfums/6800da 10ml.jpg',
    images: ['/perfums/6800da 10ml.jpg'],
    category: perfumeCategory,
    productType: 'Accessoire',
    need: 'Quotidien',
    inStock: true,
    isPromo: true,
    rating: 4.7,
    description: text(
      'Musc blanc cristallin, adouci par une poire givrée pour un voile propre et sophistiqué.',
      'مسك أبيض بلوري يلينه كمثرى مثلج ليمنحك حجاباً نظيفاً وراقياً.',
    ),
    benefits: [
      text('Sillage intimiste', 'أثر حميمي قريب من البشرة'),
      text('Idéal pour bureau et déplacements', 'مثالي للعمل والتنقل'),
      text('Formule hypoallergénique', 'تركيبة مضادة للحساسية'),
      text('Compatible avec d’autres parfums', 'ينسجم مع عطور أخرى'),
    ],
    ingredients: text(
      'Notes de tête: poire glacée; Notes de cœur: muscs blancs, iris; Notes de fond: bois flotté, ambrette',
      'النوتات العليا: كمثرى مثلجة؛ الوسطى: مسك أبيض وسوسن؛ القاعدة: أخشاب طافية وأمبريت.',
    ),
    usageInstructions: text(
      'Appliquer sur les points de pulsation et sur les vêtements pour une douceur prolongée.',
      'ضعه على نقاط النبض وكذلك على الملابس لدوام النعومة.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 33,
    additionalInfo: buildAdditionalInfo(),
  },
  {
    id: 'wf-10',
    slug: 'nectar-absolu-10',
    name: text('Nectar Absolu 10', 'نيكتار أبسولو 10'),
    brand: 'Allouani',
    price: 12800,
    originalPrice: 13800,
    image: '/perfums/6800 10ml.jpg',
    images: ['/perfums/6800 10ml.jpg'],
    category: perfumeCategory,
    productType: 'Accessoire',
    need: 'Élégant',
    inStock: true,
    isPromo: false,
    rating: 4.6,
    description: text(
      'Parfum miellé aux accents d’abricot et de tubéreuse, parfait pour illuminer les soirées.',
      'عطر مفعم بالعسل مع لمسات مشمش وتيّوب روز لإضاءة أمسياتك.',
    ),
    benefits: [
      text('Accords floraux solaires', 'تناغم زهري مشمس'),
      text('Texture sirupeuse sensuelle', 'ملمس شرابي حسي'),
      text('Idéal pour les fêtes', 'مثالي للحفلات'),
      text('Évolution riche sur la peau', 'يتطور بثراء على البشرة'),
    ],
    ingredients: text(
      'Notes de tête: abricot confit; Notes de cœur: tubéreuse, jasmin; Notes de fond: miel, bois d’oranger',
      'النوتات العليا: مشمش مكرمل؛ الوسطى: تيوب روز وياسمين؛ القاعدة: عسل وخشب زهر البرتقال.',
    ),
    usageInstructions: text(
      'Pulvériser à 15 cm sur peau hydratée pour intensifier la sensation néctarée.',
      'رُشّه على بعد 15 سم فوق بشرة مرطبة لتعزيز الإحساس بالعسل.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 29,
    additionalInfo: buildAdditionalInfo(),
  },
]

// Men's Clothing (for other boutique - services page)
export const menPerfumes: Product[] = [
  {
    id: 'm-1',
    slug: 'veste-north-face-noire-homme',
    name: text('Nuit de Cèdre Absolu', 'نوي دو سيدر أبسولو'),
    brand: 'Allouani',
    price: 15000,
    originalPrice: 18000,
    image: '/perfums/68000.jpg',
    images: ['/perfums/68000.jpg'],
    category: perfumeCategory,
    productType: 'Veste',
    need: 'Hiver',
    inStock: true,
    isPromo: true,
    rating: 4.8,
    isNew: true,
    description: text(
      'Concentré boisé cuiré aux accents fumés conçu pour affirmer une présence magnétique.',
      'تركيز خشبي جلدي مع لمسات مدخنة يرسخ حضوراً مغناطيسياً.',
    ),
    benefits: [
      text('Boisé fumé intense pour soirées', 'خشبي مدخن قوي للأمسيات'),
      text('Dominante cuir/ambre assumée', 'نفحات جلد وعنبر واضحة'),
      text('Tenue supérieure à 12h', 'ثبات يتجاوز 12 ساعة'),
      text('Parfum signature Allouani', 'عطر توقيعي من ألوواني'),
    ],
    ingredients: text(
      'Notes de tête: poivre noir, baies roses; Notes de cœur: cuir, encens; Notes de fond: cèdre fumé, ambre gris',
      'النوتات العليا: فلفل أسود وتوت وردي؛ الوسطى: جلد وبخور؛ القاعدة: أرز مدخن وعنبر رمادي.',
    ),
    usageInstructions: text(
      'Appliquer deux pulvérisations sur la nuque et la poitrine avant sortie.',
      'رشّ مرتين على مؤخرة العنق والصدر قبل الخروج.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 52,
    additionalInfo: buildAdditionalInfo({
      exclusiveOffers: text(
        'Code promo WELCOME10 pour 10% de réduction sur votre première commande.',
        'رمز التخفيض WELCOME10 يمنحك خصماً بنسبة 10٪ على أول طلب.',
      ),
    }),
  },
  {
    id: 'm-2',
    slug: 'veste-north-face-blanche-homme',
    name: text('Lumière d’Ivoire', 'لوميير ديفوار'),
    brand: 'Allouani',
    price: 16000,
    originalPrice: 19000,
    image: '/perfums/6200.jpg',
    images: ['/perfums/6200.jpg'],
    category: perfumeCategory,
    productType: 'Veste',
    need: 'Hiver',
    inStock: true,
    isPromo: true,
    rating: 4.9,
    description: text(
      'Eau de parfum chyprée musquée, inspirée d’un costume blanc immaculé et d’un style minimaliste.',
      'ماء عطر شيبر مسكي مستوحى من بدلة بيضاء أنيقة وأسلوب بسيط.',
    ),
    benefits: [
      text('Éclat frais et sophistiqué', 'لمعان منعش وراقٍ'),
      text('Accords chyprés modernes', 'تناغم شيبر عصري'),
      text('Sillage propre et lumineux', 'أثر نظيف ومضيء'),
      text('Composition non photosensibilisante', 'تركيبة غير فوتوسنسيتيف'),
    ],
    ingredients: text(
      'Notes de tête: bergamote de Calabre; Notes de cœur: néroli, feuilles de violette; Notes de fond: patchouli blanc, muscs propres',
      'النوتات العليا: برغموت كالابري؛ الوسطى: نيرولي وأوراق بنفسج؛ القاعدة: باتشولي أبيض ومسك نظيف.',
    ),
    usageInstructions: text(
      'Vaporiser sur chemise ou veste pour un halo élégant tout au long de la journée.',
      'رُشّه على القميص أو السترة لهالة أنيقة طوال اليوم.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 41,
    additionalInfo: buildAdditionalInfo(),
  },
  {
    id: 'm-3',
    slug: 'veste-north-face-bleue-homme',
    name: text('Azur Atlas Énergique', 'أزور أطلس إنيرجيك'),
    brand: 'Allouani',
    price: 15500,
    originalPrice: 18500,
    image: '/perfums/5800.jpg',
    images: ['/perfums/5800.jpg'],
    category: perfumeCategory,
    productType: 'Veste',
    need: 'Sport',
    inStock: true,
    isPromo: true,
    rating: 4.7,
    description: text(
      'Boisé aromatique sportif mêlant accord ozonique, lavande et cèdre bleu pour un esprit dynamique.',
      'عطر خشبي عطري رياضي يمزج الأوزون باللافندر والأرز الأزرق لروح ديناميكية.',
    ),
    benefits: [
      text('Idéal pour les journées actives', 'مثالي للأيام المليئة بالنشاط'),
      text('Réveil aromatique instantané', 'استفاقة عطرية فورية'),
      text('Projection maîtrisée au bureau', 'انتشار مضبوط يناسب المكتب'),
      text('Sans colorant artificiel', 'خالٍ من الأصباغ الصناعية'),
    ],
    ingredients: text(
      'Notes de tête: mandarine verte, ozone; Notes de cœur: lavande, sauge; Notes de fond: cèdre atlas, vétiver',
      'النوتات العليا: ماندارين أخضر وأوزون؛ الوسطى: لافندر وميرمية؛ القاعدة: أرز أطلس ونجيل هندي.',
    ),
    usageInstructions: text(
      'Pulvériser sur torse et avant-bras pour accompagner l’activité physique.',
      'رُشّه على الصدر والساعدين لمرافقة النشاط البدني.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 36,
    additionalInfo: buildAdditionalInfo(),
  },
  {
    id: 'm-4',
    slug: 'pull-gris-homme',
    name: text('Lin Gris Velours', 'لان غري فيلور'),
    brand: 'Allouani',
    price: 12000,
    originalPrice: 12000,
    image: '/perfums/580.jpg',
    images: ['/perfums/580.jpg'],
    category: perfumeCategory,
    productType: 'Pull',
    need: 'Quotidien',
    inStock: true,
    isPromo: false,
    rating: 4.6,
    description: text(
      'Parfum boisé-musqué qui évoque la finesse d’un costume sur-mesure en lin italien.',
      'عطر مسكي خشبي يستحضر أناقة بدلة لين إيطالية مفصلة.',
    ),
    benefits: [
      text('Sillage discret pour bureau', 'أثر خفيف مثالي للمكتب'),
      text('Sensations poudrées douces', 'إحساس بودري ناعم'),
      text('Adapté aux réunions et voyages', 'ملائم للاجتماعات والسفر'),
      text('Formule non entêtante', 'تركيبة غير مزعجة'),
    ],
    ingredients: text(
      'Notes de tête: cardamome verte; Notes de cœur: iris, graines d’ambrette; Notes de fond: bois de cachemire, muscs doux',
      'النوتات العليا: هيل أخضر؛ الوسطى: سوسن وبذور أمبريت؛ القاعدة: خشب كاشمير ومسك ناعم.',
    ),
    usageInstructions: text(
      'Brumiser légèrement la poitrine avant d’enfiler une chemise pour un voile élégant.',
      'رُشّ بخفة على الصدر قبل ارتداء القميص لهالة أنيقة.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 31,
    additionalInfo: buildAdditionalInfo(),
  },
  {
    id: 'm-5',
    slug: 'pull-marron-homme',
    name: text('Amber Oak Reserve', 'أمبر أوك ريزرف'),
    brand: 'Allouani',
    price: 12500,
    originalPrice: 12500,
    image: '/perfums/5500.jpg',
    images: ['/perfums/5500.jpg'],
    category: perfumeCategory,
    productType: 'Pull',
    need: 'Élégant',
    inStock: true,
    isPromo: false,
    rating: 4.7,
    description: text(
      'Parfum boisé-ambre aux nuances de rhum épicé et de chêne toasté pour une présence charismatique.',
      'عطر خشبي عنبري بلون الروم المتبّل والبلوط المحمّص يمنح حضوراً كاريزمياً.',
    ),
    benefits: [
      text('Idéal pour les rendez-vous nocturnes', 'مثالي للمواعيد المسائية'),
      text('Sillage chaleureux enveloppant', 'أثر دافئ يحتضنك'),
      text('Macération en fûts de chêne', 'منقوع في براميل البلوط'),
      text('Edition limitée numérotée', 'إصدار محدود ومرقم'),
    ],
    ingredients: text(
      'Notes de tête: rhum, zeste d’orange; Notes de cœur: fève tonka, styrax; Notes de fond: chêne, ambre, cuir souple',
      'النوتات العليا: روم وقشر برتقال؛ الوسطى: حبة التونكا وستيراكس؛ القاعدة: بلوط، عنبر، جلد ناعم.',
    ),
    usageInstructions: text(
      'Appliquer derrière les oreilles et sur la nuque pour un effet magnétique.',
      'ضعه خلف الأذنين وعلى مؤخرة العنق لتأثير مغناطيسي.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 44,
    additionalInfo: buildAdditionalInfo(),
  },
  {
    id: 'm-6',
    slug: 't-shirt-adidas-blanc-homme',
    name: text('Momentum Sport Essence', 'مومنتوم سبورت إيسونس'),
    brand: 'Allouani',
    price: 8500,
    originalPrice: 10000,
    image: '/perfums/4900.jpg',
    images: ['/perfums/4900.jpg'],
    category: perfumeCategory,
    productType: 'T-Shirt',
    need: 'Sport',
    inStock: true,
    isPromo: true,
    rating: 4.6,
    description: text(
      'Splash énergisant infusé d’agrume amer et de gingembre glacé pour relancer l’endurance.',
      'رذاذ منشّط ممزوج بالحمضيات المرّة والزنجبيل المثلج لإعادة شحن الطاقة.',
    ),
    benefits: [
      text('Sensation glacée immédiate', 'إحساس مبرد فوري'),
      text('Parfum mixte ultra-frais', 'عطر للجنسين فائق الانتعاش'),
      text('Ne tache pas les vêtements', 'لا يترك بقعاً على الملابس'),
      text('Peut se superposer à d’autres parfums', 'يمكن وضعه فوق عطور أخرى'),
    ],
    ingredients: text(
      'Notes de tête: pamplemousse amer, yuzu; Notes de cœur: gingembre glacé, feuilles de thé; Notes de fond: muscs propres, accord minéral',
      'النوتات العليا: جريب فروت مر ويوزو؛ الوسطى: زنجبيل مثلج وأوراق شاي؛ القاعدة: مسك نقي ونفحة معدنية.',
    ),
    usageInstructions: text(
      'Brumiser sur la peau fraîche ou directement sur la tenue de sport après l’effort.',
      'رُشّه على البشرة المنعشة أو على لباس الرياضة بعد التمرين.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 48,
    additionalInfo: buildAdditionalInfo(),
  },
  {
    id: 'm-7',
    slug: 'atlas-noir-68',
    name: text('Atlas Noir 68', 'أطلس نوار 68'),
    brand: 'Allouani',
    price: 14000,
    originalPrice: 16000,
    image: '/perfums/6800da 10.jpg',
    images: ['/perfums/6800da 10.jpg'],
    category: perfumeCategory,
    productType: 'Accessoire',
    need: 'Sport',
    inStock: true,
    isPromo: true,
    rating: 4.8,
    description: text(
      'Boisé minéral inspiré des reliefs de l’Atlas : encens noir, vétiver fumé et agrumes salins.',
      'عطر خشبي معدني مستوحى من جبال الأطلس مع بخور أسود ونجيل مدخن وحمضيات مالحة.',
    ),
    benefits: [
      text('Parfum énergique et racé', 'عطر طاقوي وأنيق'),
      text('Parfait pour les journées chargées', 'مثالي للأيام المزدحمة'),
      text('Projection maîtrisée', 'انتشار متحكم به'),
      text('Séchage rapide sur la peau', 'يجف بسرعة على البشرة'),
    ],
    ingredients: text(
      'Notes de tête: pamplemousse salé; Notes de cœur: encens, géranium; Notes de fond: vétiver fumé, mousse de chêne',
      'النوتات العليا: جريب فروت مالح؛ الوسطى: بخور وإبرة الراعي؛ القاعدة: نجيل مدخن وطحلب البلوط.',
    ),
    usageInstructions: text(
      'Appliquer sur le torse et les poignets avant de sortir pour un coup d’éclat aromatique.',
      'ضعه على الصدر والمعصمين قبل الخروج لجرعة عطرية منعشة.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 37,
    additionalInfo: buildAdditionalInfo(),
  },
  {
    id: 'm-8',
    slug: 'bois-royal-49',
    name: text('Bois Royal 49', 'بوا روايال 49'),
    brand: 'Allouani',
    price: 12500,
    originalPrice: 14000,
    image: '/perfums/490.jpg',
    images: ['/perfums/490.jpg'],
    category: perfumeCategory,
    productType: 'Accessoire',
    need: 'Élégant',
    inStock: true,
    isPromo: false,
    rating: 4.7,
    description: text(
      'Boisé royal aux facettes cuirées et résines sombres, conçu pour les gentlemen contemporains.',
      'عطر خشبي ملكي بلمسات جلدية وراتنجات داكنة صمم للسادة العصريين.',
    ),
    benefits: [
      text('Sillage affirmé et noble', 'أثر قوي ونبيل'),
      text('Parfait pour cérémonies', 'مثالي للمراسم والاحتفالات'),
      text('Macération longue pour plus de profondeur', 'تنقيع طويل لعمق أكبر'),
      text('Parfum mixte orienté masculin', 'عطر مشترك بلمسة رجالية'),
    ],
    ingredients: text(
      'Notes de tête: bergamote, poivre noir; Notes de cœur: cuir, labdanum; Notes de fond: bois de gaïac, ambre gris',
      'النوتات العليا: برغموت وفلفل أسود؛ الوسطى: جلد ولابدانوم؛ القاعدة: خشب غاياك وعنبر رمادي.',
    ),
    usageInstructions: text(
      'Pulvériser légèrement sur la nuque et sous le col afin d’obtenir une diffusion progressive.',
      'رُشّ بخفة على مؤخرة العنق وتحت الياقة لانتشار تدريجي.',
    ),
    deliveryEstimate: defaultDeliveryEstimate,
    viewersCount: 34,
    additionalInfo: buildAdditionalInfo(),
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
