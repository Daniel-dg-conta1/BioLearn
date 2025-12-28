export interface NavItem {
  id: string;
  label: string;
  icon: string;
}

export interface User {
  name: string;
  role: string;
  avatar: string;
  level?: number;
  xp?: number;
}

export interface Stat {
  label: string;
  value: string;
  subValue: string;
  icon: string;
  colorClass: string;
}

export interface Module {
  id: number;
  category: string;
  title: string;
  description: string;
  progress: number;
  duration?: string;
  image: string;
  modulesCount?: number;
  type?: 'video' | 'quiz' | '3d' | 'reading' | 'presentation' | 'animation';
  status?: string;
}

export interface Term {
  id: number;
  term: string;
  category: string;
  definition: string;
  example: string;
  related: string[];
  image?: string;
}

export interface Question {
  id: number;
  text: string;
  type: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  points: number;
}

export interface NewsItem {
  id: number;
  type: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime?: string;
  isFeatured?: boolean;
}

export interface Discussion {
  id: number;
  title: string;
  author: string;
  avatar: string;
  role: string;
  timeAgo: string;
  tags: string[];
  content: string;
  upvotes: number;
  comments: number;
  image?: string;
  isTrending?: boolean;
  isResource?: boolean;
}
