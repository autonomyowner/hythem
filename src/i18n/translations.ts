import type { ProductNeed, ProductType } from '@/data/products'

export type SupportedLanguage = 'fr' | 'ar'

type NavbarTranslations = {
  announcement: string
  links: {
    home: string
    services: string
  }
  social: {
    instagram: string
    tiktok: string
  }
  languageToggle: {
    ariaLabel: string
    shortLabel: string
  }
}

type HeroTranslations = {
  subtitle: string
  title: string
  description: string
  primaryCta: string
  secondaryCta: string
  originLabel: string
  highlights: string[]
  whatsappMessage: string
}

type FooterTranslations = {
  signature: string
  madeBy: string
}

type ShopFilterTranslations = {
  title: string
  availability: {
    label: string
    all: string
    inStock: (count: number) => string
    outOfStock: (count: number) => string
  }
  price: string
  brand: string
  category: string
  selectCategory: string
  clear: string
  allCategories: string
  usage: string
  mobileToggle: string
  needs: Record<
    'Hiver' | 'Quotidien' | 'Sport' | 'Élégant',
    string
  >
  categoryGroups: Array<{
    id: string
    label: string
    subcategories: string[]
  }>
}

type ProductControlTranslations = {
  gridAria: string
  listAria: string
  count: (count: number) => string
  sortLabel: string
  sorts: Record<
    'best-sellers' | 'price-asc' | 'price-desc' | 'newest' | 'highest-rated',
    string
  >
}

type ProductTranslations = {
  promoBadge: string
  productTypeSeparator: string
  viewersLabel: (count: number) => string
  stock: {
    inStock: string
    outOfStock: string
  }
  wishlist: string
  quantity: string
  addToCart: string
  buyNow: string
  productTypes: Record<ProductType, string>
  needs: Record<ProductNeed, string>
  accordion: {
    info: string
    ingredients: string
    usage: string
    benefits: string
    delivery: string
    returns: string
    exclusive: string
    payment: string
  }
  trustBadges: [string, string, string]
  emptyState: string
}

type CheckoutTranslations = {
  title: string
  closeLabel: string
  summary: string
  form: {
    name: string
    namePlaceholder: string
    phone: string
    phonePlaceholder: string
    city: string
    cityPlaceholder: string
    commune: string
    communePlaceholder: string
    delivery: string
    deliveryOptions: {
      house: { title: string; description: string }
      office: { title: string; description: string }
    }
    address: string
    addressPlaceholder: string
    submit: string
    cancel: string
    errors: {
      name: string
      phone: string
      phoneInvalid: string
      city: string
      commune: string
      address: string
    }
  }
  recap: {
    title: string
    product: string
    category: string
    quantity: string
    total: string
  }
  success: string
}

export type UITranslation = {
  navbar: NavbarTranslations
  hero: HeroTranslations
  footer: FooterTranslations
  shopFilters: ShopFilterTranslations
  productControls: ProductControlTranslations
  product: ProductTranslations
  checkout: CheckoutTranslations
  catalog: {
    women: string
    men: string
  }
  gallery: {
    viewImage: (index: number) => string
    previous: string
    next: string
  }
  whatsapp: {
    label: string
    aria: string
    message: string
  }
}

export const uiTranslations: Record<SupportedLanguage, UITranslation> = {
  fr: {
    navbar: {
      announcement: 'Livraison 58 wilayas · Paiement à la livraison',
      links: {
        home: 'Boutique',
        services: 'Services',
      },
      social: {
        instagram: 'Instagram',
        tiktok: 'TikTok',
      },
      languageToggle: {
        ariaLabel: 'Basculer entre le français et l’arabe',
        shortLabel: 'AR',
      },
    },
    hero: {
      subtitle:
        'Des vêtements de qualité pour Algériens, conçus avec passion pour votre style et votre confort.',
      title: 'WinterDZ : Vêtements pour Algériens, Style et Élégance à Votre Image.',
      description:
        'Découvrez notre collection de vêtements spécialement conçus pour les Algériens.',
      primaryCta: 'DÉCOUVRIR NOS COMPLÉMENTS',
      secondaryCta: 'En savoir plus',
      originLabel: 'Formulé en France',
      highlights: ['Ingrédients actifs purs', 'Sans OGM ni gluten', 'Facile à assimiler'],
      whatsappMessage: 'Bonjour! Je suis intéressé(e) par vos vêtements WinterDZ.',
    },
    footer: {
      signature: 'Made by',
      madeBy: 'www.sitedz.store',
    },
    shopFilters: {
      title: 'Filtres',
      availability: {
        label: 'Disponibilité',
        all: 'Tous',
        inStock: (count) => `En stock (${count})`,
        outOfStock: (count) => `Épuisé (${count})`,
      },
      price: 'Prix',
      brand: 'Marque',
      category: 'Catégorie',
      selectCategory: 'Sélectionner une catégorie',
      clear: 'Effacer',
      allCategories: 'Toutes les catégories',
      usage: 'Usage',
      mobileToggle: 'Filtres',
      needs: {
        Hiver: 'Pour l’hiver',
        Quotidien: 'Usage quotidien',
        Sport: 'Sport & Activités',
        Élégant: 'Style élégant',
      },
      categoryGroups: [
        {
          id: 'feminine',
          label: 'Parfums Féminins',
          subcategories: ['Floraux lumineux', 'Orientaux sensuels', 'Musc & poudré'],
        },
        {
          id: 'masculine',
          label: 'Parfums Masculins',
          subcategories: ['Boisés sophistiqués', 'Ambrés cuirés', 'Fraîcheur aromatique'],
        },
        {
          id: 'unisex',
          label: 'Parfums Unisexes',
          subcategories: ['Citrus contemporains', 'Epicés signatures', 'Notes aquatiques'],
        },
        {
          id: 'exclusives',
          label: 'Fragrances Exclusives',
          subcategories: ['Éditions limitées', 'Collection privée', 'Cuir & oud'],
        },
        {
          id: 'rituals',
          label: 'Rituels & Coffrets',
          subcategories: ['Coffrets découverte', 'Formats voyage', 'Layering & accessoires'],
        },
      ],
    },
    productControls: {
      gridAria: 'Vue en grille',
      listAria: 'Vue en liste',
      count: (count) => `${count} ${count === 1 ? 'Produit' : 'Produits'}`,
      sortLabel: 'Trier par',
      sorts: {
        'best-sellers': 'Meilleures ventes',
        'price-asc': 'Prix croissant',
        'price-desc': 'Prix décroissant',
        newest: 'Nouveautés',
        'highest-rated': 'Mieux notés',
      },
    },
    product: {
      promoBadge: 'PROMO',
      productTypeSeparator: '•',
      viewersLabel: (count) => `${count} personnes regardent cet article.`,
      stock: {
        inStock: '✓ En stock',
        outOfStock: 'En rupture de stock',
      },
      wishlist: 'Ajouter à ma liste d’envies',
      quantity: 'Quantité',
      addToCart: 'AJOUTER AU PANIER',
      buyNow: 'ACHETER MAINTENANT',
      productTypes: {
        Veste: 'Veste',
        Pull: 'Pull',
        'T-Shirt': 'T-Shirt',
        Pantalon: 'Pantalon',
        Accessoire: 'Accessoire',
      },
      needs: {
        Hiver: 'Hiver',
        Quotidien: 'Quotidien',
        Sport: 'Sport',
        Élégant: 'Élégant',
      },
      accordion: {
        info: 'Informations supplémentaires',
        ingredients: 'Ingrédients',
        usage: 'Conseils d’utilisation',
        benefits: 'Bénéfices',
        delivery: 'Livraison',
        returns: 'Retours',
        exclusive: 'Offres Exclusives',
        payment: 'Paiements Sécurisés',
      },
      trustBadges: [
        'Garantie Satisfait ou Remboursé',
        'Garantie à vie',
        'Cadeau Offert',
      ],
      emptyState: 'Aucun produit ne correspond à vos critères de recherche.',
    },
    checkout: {
      title: 'Informations de Commande',
      closeLabel: 'Fermer',
      summary: 'Résumé de la commande',
      form: {
        name: 'Nom complet',
        namePlaceholder: 'Votre nom complet',
        phone: 'Numéro de téléphone',
        phonePlaceholder: '+213 671 38 91 13 ou 0671 38 91 13',
        city: 'Wilaya',
        cityPlaceholder: 'Sélectionnez une wilaya',
        commune: 'Baladia (Commune)',
        communePlaceholder: 'Nom de votre commune',
        delivery: 'Type de livraison',
        deliveryOptions: {
          house: {
            title: 'À domicile',
            description: 'Livraison à votre adresse',
          },
          office: {
            title: 'Au bureau',
            description: 'Livraison au lieu de travail',
          },
        },
        address: 'Adresse complète',
        addressPlaceholder: 'Rue, numéro, quartier, etc.',
        submit: 'Confirmer la commande',
        cancel: 'Annuler',
        errors: {
          name: 'Le nom est requis',
          phone: 'Le téléphone est requis',
          phoneInvalid: 'Numéro de téléphone invalide',
          city: 'La wilaya est requise',
          commune: 'La baladia est requise',
          address: 'L’adresse est requise',
        },
      },
      recap: {
        title: 'Récapitulatif',
        product: 'Produit',
        category: 'Catégorie',
        quantity: 'Quantité',
        total: 'Total',
      },
      success: 'Votre demande a été envoyée avec succès !',
    },
    catalog: {
      women: 'Parfums féminins',
      men: 'Parfums masculins',
    },
    gallery: {
      viewImage: (index) => `Voir l'image ${index}`,
      previous: 'Image précédente',
      next: 'Image suivante',
    },
    whatsapp: {
      label: 'WhatsApp',
      aria: 'Discuter sur WhatsApp',
      message: 'Bonjour ! Je suis intéressé(e) par vos produits.',
    },
  },
  ar: {
    navbar: {
      announcement: 'توصيل إلى 58 ولاية · الدفع عند الاستلام',
      links: {
        home: 'المتجر',
        services: 'الخدمات',
      },
      social: {
        instagram: 'إنستغرام',
        tiktok: 'تيك توك',
      },
      languageToggle: {
        ariaLabel: 'التبديل بين الفرنسية والعربية',
        shortLabel: 'FR',
      },
    },
    hero: {
      subtitle:
        'ملابس عالية الجودة صُمّمت بشغف لتلائم ذوق الجزائريين وتمنحهم الراحة.',
      title: 'WinterDZ: أزياء جزائرية تنبض بالأناقة وتعبر عنك.',
      description: 'اكتشف تشكيلتنا المصممة خصيصاً للجزائريين بلمسات معاصرة.',
      primaryCta: 'اكتشف مكملاتنا',
      secondaryCta: 'اكتشف المزيد',
      originLabel: 'مصمّم في فرنسا',
      highlights: ['مكوّنات فعّالة ونقية', 'خالية من الـ OGM والغلوتين', 'سهل الامتصاص'],
      whatsappMessage: 'مرحباً! أنا مهتم/مهتمة بمنتجات WinterDZ لديكم.',
    },
    footer: {
      signature: 'برمجة',
      madeBy: 'www.sitedz.store',
    },
    shopFilters: {
      title: 'الفلاتر',
      availability: {
        label: 'التوفر',
        all: 'الكل',
        inStock: (count) => `متوفر (${count})`,
        outOfStock: (count) => `غير متوفر (${count})`,
      },
      price: 'السعر',
      brand: 'العلامة',
      category: 'الفئة',
      selectCategory: 'اختر فئة',
      clear: 'مسح الاختيار',
      allCategories: 'كل الفئات',
      usage: 'الاستعمال',
      mobileToggle: 'الفلاتر',
      needs: {
        Hiver: 'للشتاء',
        Quotidien: 'لاستخدام يومي',
        Sport: 'للرياضة والنشاط',
        Élégant: 'للمناسبات الأنيقة',
      },
      categoryGroups: [
        {
          id: 'feminine',
          label: 'عطور نسائية',
          subcategories: ['زهور مشرقة', 'لمسات شرقية دافئة', 'مزيج مسكي بودري'],
        },
        {
          id: 'masculine',
          label: 'عطور رجالية',
          subcategories: ['أخشاب راقية', 'عنبر وجلد', 'انتعاش عطري'],
        },
        {
          id: 'unisex',
          label: 'عطور للجنسين',
          subcategories: ['حمضيات عصرية', 'بهارات توقيعية', 'نغمات مائية'],
        },
        {
          id: 'exclusives',
          label: 'إصدارات حصرية',
          subcategories: ['طبعات محدودة', 'مجموعة خاصة', 'جلد وعود'],
        },
        {
          id: 'rituals',
          label: 'طقوس وهدايا',
          subcategories: ['علب استكشاف', 'حجم السفر', 'طبقات وإكسسوارات'],
        },
      ],
    },
    productControls: {
      gridAria: 'عرض شبكي',
      listAria: 'عرض قائم',
      count: (count) => `${count} ${count === 1 ? 'منتج' : 'منتجات'}`,
      sortLabel: 'ترتيب حسب',
      sorts: {
        'best-sellers': 'الأكثر مبيعاً',
        'price-asc': 'السعر تصاعدي',
        'price-desc': 'السعر تنازلي',
        newest: 'الأحدث',
        'highest-rated': 'الأعلى تقييماً',
      },
    },
    product: {
      promoBadge: 'عرض',
      productTypeSeparator: '•',
      viewersLabel: (count) => `${count} شخصاً يشاهدون هذا المنتج.`,
      stock: {
        inStock: '✓ متوفر',
        outOfStock: 'غير متوفر حالياً',
      },
      wishlist: 'أضف إلى مفضلتي',
      quantity: 'الكمية',
      addToCart: 'أضف إلى السلة',
      buyNow: 'اطلب الآن',
      productTypes: {
        Veste: 'سترة',
        Pull: 'كنزة',
        'T-Shirt': 'قميص خفيف',
        Pantalon: 'بنطال',
        Accessoire: 'إكسسوار',
      },
      needs: {
        Hiver: 'شتوي',
        Quotidien: 'يومي',
        Sport: 'رياضي',
        Élégant: 'أنـيق',
      },
      accordion: {
        info: 'معلومات إضافية',
        ingredients: 'المكوّنات',
        usage: 'طريقة الاستخدام',
        benefits: 'الفوائد',
        delivery: 'التوصيل',
        returns: 'الاسترجاع',
        exclusive: 'عروض حصرية',
        payment: 'دفعات آمنة',
      },
      trustBadges: ['ضمان استرجاع المال', 'ضمان مدى الحياة', 'هدية مرفقة'],
      emptyState: 'لا يوجد أي منتج مطابق لمعايير البحث.',
    },
    checkout: {
      title: 'معلومات الطلب',
      closeLabel: 'إغلاق',
      summary: 'ملخص الطلب',
      form: {
        name: 'الاسم الكامل',
        namePlaceholder: 'اكتب اسمك الكامل',
        phone: 'رقم الهاتف',
        phonePlaceholder: '+213 671 38 91 13',
        city: 'الولاية',
        cityPlaceholder: 'اختر ولايتك',
        commune: 'البلدية',
        communePlaceholder: 'اسم بلديتك',
        delivery: 'طريقة التوصيل',
        deliveryOptions: {
          house: {
            title: 'لمنزلك',
            description: 'توصيل مباشرة إلى عنوانك',
          },
          office: {
            title: 'لمكان العمل',
            description: 'توصيل إلى مقر العمل',
          },
        },
        address: 'العنوان الكامل',
        addressPlaceholder: 'الشارع، رقم المنزل، الحي، إلخ',
        submit: 'تأكيد الطلب',
        cancel: 'إلغاء',
        errors: {
          name: 'الاسم مطلوب',
          phone: 'رقم الهاتف مطلوب',
          phoneInvalid: 'رقم الهاتف غير صحيح',
          city: 'الولاية مطلوبة',
          commune: 'البلدية مطلوبة',
          address: 'العنوان مطلوب',
        },
      },
      recap: {
        title: 'ملخص الطلب',
        product: 'المنتج',
        category: 'الفئة',
        quantity: 'الكمية',
        total: 'الإجمالي',
      },
      success: 'تم إرسال طلبك بنجاح!',
    },
    catalog: {
      women: 'عطور نسائية',
      men: 'عطور رجالية',
    },
    gallery: {
      viewImage: (index) => `عرض الصورة ${index}`,
      previous: 'الصورة السابقة',
      next: 'الصورة التالية',
    },
    whatsapp: {
      label: 'واتساب',
      aria: 'التواصل عبر واتساب',
      message: 'مرحباً! أنا مهتم بمنتجاتكم.',
    },
  },
}

