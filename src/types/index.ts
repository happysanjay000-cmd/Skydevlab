export type ProjectCategory = 'AI' | 'Web' | 'App' | 'Security' | 'All';

export interface Project {
  id: string;
  title: string;
  category: 'AI' | 'Web' | 'App' | 'Security';
  description: string;
  fullDetails?: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
  published: boolean;
  featured?: boolean;
  date: string;
}

export interface Website {
  id: string;
  title: string;
  description: string;
  screenshotUrl: string;
  liveDemoUrl: string;
  sourceCodeUrl?: string;
  technologies: string[];
  category: string;
  published: boolean;
  date: string;
}

export interface AppItem {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  platform: 'Android' | 'Web' | 'Cross-Platform';
  features: string[];
  downloadUrl: string;
  rating?: number;
  version: string;
  published: boolean;
  date: string;
}

export type ClassCategory = 'Class 10' | 'Class 11' | 'Class 12' | 'B.Sc. Computer Science';

export type SubjectCategory =
  | 'Physics'
  | 'Chemistry'
  | 'Mathematics'
  | 'Computer Science'
  | 'Operating System'
  | 'Linux'
  | 'Cyber Security';

export interface StudyNote {
  id: string;
  title: string;
  classCategory: ClassCategory;
  subject: SubjectCategory;
  summary: string;
  content: string;
  readTime: string;
  downloadPdfAvailable: boolean;
  published: boolean;
  date: string;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  popular?: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  projectType: string;
  message: string;
  date: string;
  read: boolean;
}

export interface SiteStats {
  projectsCount: string;
  websitesCount: string;
  appsCount: string;
  studentStatus: string;
}

export interface FounderProfile {
  name: string;
  role: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  socials: {
    github: string;
    youtube: string;
    instagram: string;
    linkedin: string;
    twitter?: string;
  };
}

export interface AppDatabase {
  projects: Project[];
  websites: Website[];
  apps: AppItem[];
  notes: StudyNote[];
  stats: SiteStats;
  founder: FounderProfile;
  messages: ContactMessage[];
}
