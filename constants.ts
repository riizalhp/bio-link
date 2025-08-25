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
    title: 'Personal Website',
    description: 'Cocok buat: Content creator, fotografer, videografer, arsitek, desainer fashion, freelancer.',
    tiers: [
      {
        name: 'Start',
        description: 'Biar personal brand kamu kelihatan rapi dan profesional, tapi tetap hemat.',
        oldPrice: '1.200.000',
        newPrice: '799.000',
        features: [
          'Unlimited halaman & section (portofolio, galeri foto/video, bio, kontak)',
          'Desain custom sesuai personal style',
          'Mobile friendly',
          '1x konsultasi singkat (30 menit)',
          '1x revisi gratis',
          'SEO basic (biar gampang dicari di Google)',
          'Hosting 12 bulan + free SSL',
          'Garansi maintenance 1 minggu',
        ],
        buttonText: 'Pilih Paket Ini',
      },
      {
        name: 'Pro',
        description: 'Biar karya kamu nggak cuma dilihat, tapi juga di-notice orang.',
        oldPrice: '1.800.000',
        newPrice: '1.299.000',
        features: [
          'Semua di Start, plus:',
          'Desain premium + animasi smooth',
          'Galeri portofolio interaktif',
          'Integrasi WhatsApp langsung',
          '3x revisi gratis',
          '2x konsultasi (total 1 jam)',
          'Hosting 12 bulan',
          'Garansi maintenance 1 bulan',
        ],
        buttonText: 'Pilih Paket Ini',
        popular: true,
      },
      {
        name: 'Custom',
        description: 'Buat yang mau websitenya beda banget dari orang lain.',
        pricePrefix: 'Mulai',
        newPrice: '2.000.000',
        oldPrice: '3.000.000',
        features: [
          'Semua di Pro, plus:',
          'Request fitur spesial (booking jadwal, form custom, dll.)',
          'Desain interaktif full',
          'Speed optimization',
          'Revisi fleksibel selama project',
          'Hosting 12 bulan',
          'Maintenance 2 bulan',
        ],
        buttonText: 'Pilih Paket Ini',
      },
    ],
  },
  {
    title: 'Business Website',
    description: 'Cocok buat: Restoran, coffee shop, toko online, jasa lokal.',
    tiers: [
      {
        name: 'Start',
        description: 'Biar bisnis kamu langsung ada di Google tanpa ribet.',
        oldPrice: '1.500.000',
        newPrice: '999.000',
        features: [
          'Unlimited halaman & section (produk, testimoni, kontak, promo)',
          'Desain custom simple & profesional',
          'Mobile friendly',
          '1x konsultasi singkat',
          '1x revisi gratis',
          'SEO basic untuk bisnis lokal',
          'Hosting 12 bulan + free SSL',
          'Garansi maintenance 1 minggu',
        ],
        buttonText: 'Pilih Paket Ini',
      },
      {
        name: 'Pro',
        description: 'Website yang nggak cuma ada, tapi juga jualan.',
        oldPrice: '2.200.000',
        newPrice: '1.499.000',
        features: [
          'Semua di Start, plus:',
          'Desain premium + animasi smooth',
          'Halaman produk + galeri foto/video',
          'WhatsApp order langsung',
          'Form pemesanan sederhana',
          '3x revisi gratis',
          'Hosting 12 bulan',
          'Garansi maintenance 1 bulan',
        ],
        buttonText: 'Pilih Paket Ini',
        popular: true,
      },
      {
        name: 'Custom',
        description: 'Full fitur, siap gas buat scale up bisnis.',
        pricePrefix: 'Mulai',
        newPrice: '2.500.000',
        oldPrice: '3.500.000',
        features: [
          'Semua di Pro, plus:',
          'Fitur katalog lengkap + filter produk',
          'Form booking / reservasi custom',
          'Desain interaktif full',
          'Speed optimization',
          'Hosting 12 bulan',
          'Maintenance 2 bulan',
        ],
        buttonText: 'Pilih Paket Ini',
      },
    ],
  },
    {
    title: 'Corporate Website',
    description: 'Cocok buat: Perusahaan, startup, lembaga pendidikan.',
    tiers: [
      {
        name: 'Start',
        description: 'Paket entry-level buat kebutuhan profil perusahaan sederhana.',
        oldPrice: '2.000.000',
        newPrice: '1.500.000',
        features: [
          'Unlimited halaman & section (profil, layanan, kontak, news)',
          'Desain corporate clean & profesional',
          'Mobile friendly',
          '1x konsultasi singkat',
          '1x revisi gratis',
          'SEO basic',
          'Hosting 12 bulan + free SSL',
          'Garansi maintenance 1 minggu',
        ],
        buttonText: 'Pilih Paket Ini',
      },
      {
        name: 'Pro',
        description: 'Biar citra perusahaan makin meyakinkan di mata klien dan investor.',
        oldPrice: '3.500.000',
        newPrice: '2.500.000',
        features: [
          'Semua di Start, plus:',
          'Desain premium + animasi profesional',
          'Integrasi chat / form kontak cepat',
          'Halaman layanan & portofolio lengkap',
          '3x revisi gratis',
          '2x konsultasi intensif',
          'Hosting 12 bulan',
          'Garansi maintenance 1 bulan',
        ],
        buttonText: 'Pilih Paket Ini',
        popular: true,
      },
      {
        name: 'Custom',
        description: 'Website kelas korporat dengan fitur sesuai kebutuhan bisnis skala besar.',
        pricePrefix: 'Mulai',
        newPrice: '4.000.000',
        oldPrice: '6.000.000',
        features: [
          'Semua di Pro, plus:',
          'Integrasi sistem internal / API khusus',
          'Fitur login user / portal karyawan',
          'Desain interaktif premium',
          'Speed optimization',
          'Hosting 12 bulan',
          'Maintenance 2 bulan',
        ],
        buttonText: 'Pilih Paket Ini',
      },
    ],
  },
];