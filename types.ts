export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Article {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
    url: string;
}

export interface PricingTier {
  name: string;
  description: string;
  oldPrice?: string;
  newPrice: string;
  pricePrefix?: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export interface PricingCategory {
  title: string;
  description: string;
  tiers: PricingTier[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  discount: number;
  imageUrl: string;
  url: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  rating: number;
  imageUrl: string;
  url: string;
}

export interface MainLink {
  text: string;
  url: string;
}

export interface IconLink {
  text: string;
  url: string;
  imageUrl: string;
}

// FIX: Add missing InfoItem type for InfoListPage component.
export interface InfoItem {
  icon: string;
  title: string;
  description: string;
}
