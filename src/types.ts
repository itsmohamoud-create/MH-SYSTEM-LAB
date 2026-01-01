export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface Programme {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  isPopular?: boolean;
}

export interface Expert {
  id: string;
  name: string;
  title: string;
  credentials: string[];
  bio: string;
  image?: string;
}

export interface AssessmentScore {
  mind: number;
  body: number;
  business: number;
  total: number;
}