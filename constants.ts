import { SocialLink, Article, PricingCategory, Product, Book, MainLink, IconLink } from './types';

export const PROFILE_DATA = {
  name: 'Rizal Hanifa Pratama',
  imageUrl: 'https://assets.website-files.com/62e0f8da35144168e1be6f3d/62e0f9bf4aea8612818e5856_Group%2059.png',
  bio: 'I bring ideas to life by managing projects and crafting websites that turn big visions into impactful digital experiences.',
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Twitter', url: 'https://x.com/riizalhp', icon: 'Twitter' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rizal-hanifa-pratama/', icon: 'LinkedIn' },
  { name: 'Instagram', url: 'https://www.instagram.com/riizalhp/', icon: 'Instagram' },
  { name: 'YouTube', url: 'https://www.youtube.com/@riizalhp', icon: 'YouTube' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@riizalhp', icon: 'TikTok' },
];

export const YOUTUBE_VIDEOS: Article[] = [
    {
        id: 'yt1',
        title: 'How to create a stunning link-in-bio page',
        description: 'A step-by-step tutorial on designing and building a page like this one from scratch.',
        date: 'Feb 15',
        imageUrl: 'https://assets.website-files.com/62e0f8da35144168e1be6f3d/62e0f8da3514417378be6f4a_Rectangle%2019.png',
        url: '#'
    },
    {
        id: 'yt2',
        title: 'My Top 5 Design Tools in 2024',
        description: 'Discover the tools I use every day to create amazing designs and streamline my workflow.',
        date: 'Feb 1',
        imageUrl: 'https://assets.website-files.com/62e0f8da35144168e1be6f3d/62e0f8da3514416dc0be6f49_Rectangle%2019-1.png',
        url: '#'
    }
];

export const ARTICLES: Article[] = [
    {
        id: 'art1',
        title: 'How to build a personal brand',
        description: 'A guide to building a strong personal brand that gets you noticed.',
        date: 'Jan 20',
        imageUrl: 'https://assets.website-files.com/62e0f8da35144168e1be6f3d/62e0f8da3514414bf7be6f4f_Rectangle%2019-2.png',
        url: '#'
    },
    {
        id: 'art2',
        title: 'The future of Web Design',
        description: 'Trends and predictions for the future of web design and development.',
        date: 'Jan 10',
        imageUrl: 'https://assets.website-files.com/62e0f8da35144168e1be6f3d/62e0f8da3514416ec1be6f4e_Rectangle%2019-3.png',
        url: '#'
    }
];

export const MAIN_LINKS: MainLink[] = [
  { text: 'My Website', url: 'https://riizalhp.site' },
  { text: 'My Shop', url: '#' },
  { text: 'Collaboration', url: '#' }
];

export const ICON_LINKS: IconLink[] = [
  { text: 'Design files', imageUrl: 'https://assets.website-files.com/62e0f8da35144168e1be6f3d/62e0f8da35144102d1be6f56_figma.svg', url: '#' },
  { text: 'Project files', imageUrl: 'https://assets.website-files.com/62e0f8da35144168e1be6f3d/62e0f8da3514415b3cbe6f55_webflow.svg', url: '#' },
  { text: 'Video tutorials', imageUrl: 'https://assets.website-files.com/62e0f8da35144168e1be6f3d/62e0f8da351441b80cbe6f57_youtube.svg', url: '#' }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod1',
    name: 'Cool T-Shirt',
    price: 25.00,
    discount: 10,
    imageUrl: 'https://assets.website-files.com/62e0f8da35144168e1be6f3d/62e0f8da351441113bbe6f51_Rectangle%2022.png',
    url: '#'
  },
  {
    id: 'prod2',
    name: 'Awesome Cap',
    price: 15.00,
    discount: 5,
    imageUrl: 'https://assets.website-files.com/62e0f8da35144168e1be6f3d/62e0f8da3514415848be6f50_Rectangle%2022-1.png',
    url: '#'
  }
];

export const BOOKS: Book[] = [
  {
    id: 'book1',
    title: 'Atomic Habits',
    author: 'James Clear',
    rating: 5,
    imageUrl: 'https://assets.website-files.com/62e0f8da35144168e1be6f3d/62e0f8da3514411b98be6f54_image%202.png',
    url: '#'
  },
  {
    id: 'book2',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    rating: 4,
    imageUrl: 'https://assets.website-files.com/62e0f8da35144168e1be6f3d/62e0f8da35144143a4be6f53_image%202-1.png',
    url: '#'
  },
  {
    id: 'book3',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    rating: 5,
    imageUrl: 'https://assets.website-files.com/62e0f8da35144168e1be6f3d/62e0f8da3514414457be6f52_image%202-2.png',
    url: '#'
  }
];

export const PRICING_DATA: PricingCategory[] = [
  {
    title: 'Perorangan',
    description: 'Paket website untuk personal branding, portofolio, dan profil profesional.',
    tiers: [
      {
        name: 'Paket Hemat Personal',
        description: 'Untuk mahasiswa atau fresh graduate yang butuh profil online sederhana.',
        oldPrice: '799.000',
        newPrice: '499.900',
        features: [
          'Domain gratis .my.id, .web.id, .site, atau .online',
          'Upgrade domain premium (.com: +299rb, .id: +375rb)',
          'Landing Page dengan section bebas isi. Lihat Section',
          'Desain Template Premium',
          'Desain responsif dan mobile friendly dengan SSL aktif',
          'Form kontak langsung ke WhatsApp atau Email',
          'Gratis 2x revisi minor',
          'Gratis 12 bulan hosting.',
          'Maintenance 3 bulan pertama',
        ],
        buttonText: 'Pilih Paket Ini',
      },
      {
        name: 'Paket Starter Personal',
        description: 'Untuk individu yang mulai serius membangun personal branding.',
        oldPrice: '2.499.000',
        newPrice: '1.499.000',
        features: [
          'Domain gratis .my.id atau .web.id',
          'Upgrade domain premium (.com: +299rb, .id: +375rb)',
          'Landing Page dengan section bebas isi. Lihat Section',
          'Desain custom sesuai personal brand',
          'Desain responsif dan mobile friendly dengan SSL aktif',
          'Form kontak langsung ke WhatsApp atau Email',
          'SEO dasar agar lebih mudah ditemukan di Google',
          'Google Analytics untuk memantau pengunjung',
          'Gratis 3x revisi minor',
          'Gratis 12 bulan hosting.',
          'Maintenance 3 bulan pertama',
        ],
        buttonText: 'Pilih Paket Ini',
      },
      {
        name: 'Paket Business Personal',
        description: 'Untuk freelancer, tutor, atau personal brand yang ingin tampil profesional.',
        oldPrice: '4.999.000',
        newPrice: '2.999.900',
        popular: true,
        features: [
            'Domain premium .com atau .id',
            'Website multi-halaman (Home, About, Services, Portfolio, dll). Lihat Halaman',
            'Blog mini untuk menulis artikel',
            'Section bebas isi. Lihat Section',
            'Desain custom sesuai personal brand',
            'Form kontak langsung ke WhatsApp atau Email',
            'Optimasi SEO lebih lengkap',
            'Google Analytics untuk memantau pengunjung',
            'Gratis 5x revisi minor + 1x revisi mayor',
            'Gratis 12 bulan hosting.',
            'Maintenance & support penuh 1 tahun',
        ],
        buttonText: 'Pilih Paket Ini',
      },
      {
        name: 'Paket Custom Personal',
        description: 'Untuk content creator, trainer, atau personal brand besar dengan kebutuhan spesifik.',
        pricePrefix: 'Mulai',
        newPrice: '5.999.900',
        oldPrice: '9.999.000',
        features: [
            'Domain premium sesuai pilihan (.com, .id, .ai, .school, dll.)',
            'Fitur custom sesuai kebutuhan',
            'Desain custom sesuai personal brand',
            'Keamanan lebih ketat',
            'Unlimited revisi minor selama 1 tahun + 2x revisi mayor',
            'Gratis 12 bulan hosting.',
            'Maintenance & support penuh 1 tahun',
        ],
        buttonText: 'Pilih Paket Ini',
      },
    ],
  },
  {
    title: 'UMKM',
    description: 'Solusi website untuk Usaha Mikro, Kecil, dan Menengah agar dapat menjangkau pelanggan secara online.',
    tiers: [
      {
        name: 'Paket Hemat UMKM',
        description: 'Cocok untuk UMKM baru atau bisnis kecil yang ingin sekadar hadir online dengan profil usaha sederhana.',
        oldPrice: '999.000',
        newPrice: '499.900',
        features: [
          'Domain gratis: .my.id, .web.id, .site, atau .online',
          'Upgrade domain premium (.com: +299rb, .id: +375rb)',
          'Landing Page dengan section bebas isi. Lihat Section',
          'Desain template siap pakai',
          'Desain responsif dan mobile friendly dengan SSL aktif',
          'Form kontak langsung ke WhatsApp atau Email',
          'Gratis 2x revisi minor',
          'Gratis 12 bulan hosting.',
          'Maintenance gratis 3 bulan pertama',
        ],
        buttonText: 'Pilih Paket Ini',
      },
      {
        name: 'Paket Starter UMKM',
        description: 'Cocok untuk UMKM yang ingin mulai serius menjangkau pelanggan online.',
        oldPrice: '3.499.000',
        newPrice: '1.999.000',
        features: [
            'Domain gratis: .my.id atau .web.id',
            'Upgrade domain premium (.com: +299rb, .id: +375rb)',
            'Landing Page lengkap dengan section bebas isi. Lihat Section',
            'Desain custom sesuai brand usaha',
            'Desain responsif dan mobile friendly dengan SSL aktif',
            'Form order ke WhatsApp atau Email',
            'SEO dasar agar produk/jasa lebih mudah ditemukan',
            'Google Analytics untuk memantau pengunjung',
            'Gratis 3x revisi minor',
            'Gratis 12 bulan hosting.',
            'Maintenance gratis 3 bulan pertama',
        ],
        buttonText: 'Pilih Paket Ini',
      },
      {
        name: 'Paket Business UMKM',
        description: 'Pilihan terbaik untuk UMKM yang membutuhkan website lebih profesional dan interaktif.',
        oldPrice: '6.999.000',
        newPrice: '3.999.900',
        popular: true,
        features: [
          'Domain premium: .com atau .id (sudah termasuk)',
          'Website multi-halaman (Home, Produk/Jasa, Tentang, dll). Lihat Halaman',
          'Katalog produk sederhana dengan fitur keranjang/booking',
          'Section bebas isi. Lihat Section',
          'Desain custom sesuai identitas brand usaha',
          'Form kontak dan order langsung ke WhatsApp atau Email',
          'Optimasi SEO lebih lengkap',
          'Google Analytics untuk insight pengunjung',
          'Gratis 5x revisi minor + 1x revisi mayor',
          'Gratis 12 bulan hosting.',
          'Maintenance dan support penuh 1 tahun',
        ],
        buttonText: 'Pilih Paket Ini',
      },
      {
        name: 'Paket Custom UMKM',
        description: 'Solusi premium untuk UMKM yang ingin berjualan online dengan fitur lengkap sesuai kebutuhan khusus.',
        pricePrefix: 'Mulai',
        newPrice: '7.999.900',
        oldPrice: '14.999.000',
        features: [
          'Domain premium sesuai pilihan (.com, .id, .store, dll.)',
          'Fitur custom (marketplace, payment gateway, membership, dll.)',
          'Desain full custom sesuai brand usaha',
          'Keamanan lebih ketat dengan backup otomatis',
          'Unlimited revisi minor selama 1 tahun + 2x revisi mayor',
          'Gratis 12 bulan hosting.',
          'Maintenance dan support penuh 1 tahun',
        ],
        buttonText: 'Pilih Paket Ini',
      },
    ],
  },
    {
    title: 'Enterprise',
    description: 'Website profesional untuk perusahaan, organisasi, dan korporasi dengan kebutuhan skala besar.',
    tiers: [
      {
        name: 'Paket Hemat Enterprise',
        description: 'Cocok untuk perusahaan kecil atau organisasi yang membutuhkan profil online sederhana namun tetap kredibel.',
        oldPrice: '1.499.000',
        newPrice: '749.900',
        features: [
          'Domain gratis: .my.id, .web.id, .site, atau .online',
          'Upgrade domain premium (.com: +299rb, .co.id/.id: +450rb)',
          'Landing Page dengan section bebas isi. Lihat Section',
          'Desain template profesional',
          'Desain responsif dan mobile friendly dengan SSL aktif',
          'Form kontak langsung ke WhatsApp, Email, atau kantor',
          'Gratis 2x revisi',
          'Gratis 12 bulan hosting.',
          'Maintenance gratis 3 bulan pertama',
        ],
        buttonText: 'Pilih Paket Ini',
      },
      {
        name: 'Paket Starter Enterprise',
        description: 'Cocok untuk perusahaan yang ingin menampilkan profil resmi secara profesional.',
        oldPrice: '6.499.000',
        newPrice: '3.499.000',
        features: [
          'Domain premium: .co.id atau .id',
          'Website multi-halaman (Home, About, Services, Clients, Contact). Lihat Halaman',
          'Section khusus korporasi (Partner, Statistik, Testimoni)',
          'Desain custom sesuai corporate branding',
          'Desain responsif dan mobile friendly dengan SSL aktif',
          'Optimasi SEO dasar',
          'Google Analytics untuk memantau performa',
          'Gratis 3x revisi minor (revisi bebas saat tahap desain)',
          'Gratis 12 bulan hosting.',
          'Maintenance gratis 3 bulan pertama',
        ],
        buttonText: 'Pilih Paket Ini',
      },
      {
        name: 'Paket Business Enterprise',
        description: 'Pilihan terbaik untuk perusahaan menengah yang membutuhkan website dengan fitur interaktif dan sistem internal sederhana.',
        oldPrice: '12.999.000',
        newPrice: '7.499.900',
        popular: true,
        features: [
          'Domain premium: .co.id atau .id (sudah termasuk)',
          'Website multi-halaman lengkap (Home, About, Services, Blog, Career, dll.). Lihat Halaman',
          'Fitur tambahan: Login, Dashboard, Booking, Ticketing',
          'Section bebas isi. Lihat Section',
          'Desain custom sesuai brand guidelines perusahaan',
          'Integrasi Google Analytics dan SEO lebih lengkap',
          'Gratis 5x revisi minor + 1x revisi mayor',
          'Gratis 12 bulan hosting.',
          'Maintenance & support penuh 1 tahun',
        ],
        buttonText: 'Pilih Paket Ini',
      },
      {
        name: 'Paket Custom Enterprise',
        description: 'Solusi premium untuk perusahaan besar atau startup teknologi yang membutuhkan sistem website khusus.',
        pricePrefix: 'Mulai',
        newPrice: '14.999.000',
        oldPrice: '24.999.000',
        features: [
          'Domain premium sesuai kebutuhan (.co.id, .com, .ai, dll.)',
          'Fitur custom (Sistem HR, Proyek, SaaS, ERP/CRM)',
          'Desain full custom sesuai corporate identity',
          'Keamanan enterprise-level dengan backup & audit',
          'Unlimited revisi minor selama 1 tahun + 2x revisi mayor',
          'Gratis 12 bulan hosting.',
          'Maintenance & support penuh 1 tahun',
        ],
        buttonText: 'Pilih Paket Ini',
      },
    ],
  },
];
