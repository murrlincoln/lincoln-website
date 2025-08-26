export interface MediaItem {
  id: string;
  title: string;
  type: 'article' | 'video' | 'interview';
  category: 'authored' | 'interview' | 'product-reference';
  url: string;
  description?: string;
  date?: string;
  publication?: string;
}

export interface WorkProject {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  demoUrl?: string;
  githubUrl?: string;
  comingSoon?: boolean;
}

export interface AboutContent {
  intro: string;
  paragraphs: string[];
}

export interface SiteContent {
  work: {
    intro: string;
    projects: WorkProject[];
  };
  media: {
    intro: string;
    items: MediaItem[];
  };
  about: AboutContent;
}
