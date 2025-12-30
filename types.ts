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
  source?: string;
  alternatives?: { letter: string; text: string }[];
  correctAlternative?: string;
}

export interface EnemExam {
  id: number;
  year: number;
  color: string;
  type: string;
}

export interface EnemQuestion {
  id: number;
  year: number;
  title: string; // Contexto/Texto base
  description: string; // Enunciado
  alternatives: {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
  };
  correct_answer: string;
  discipline?: string;
  area?: string;
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