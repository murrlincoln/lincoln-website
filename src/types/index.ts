export interface MediaItem {
  id: string;
  title: string;
  type: 'article' | 'video' | 'interview' | 'research' | 'talk' | 'mention';
  category: 'authored' | 'interview' | 'product-reference' | 'talk' | 'research' | 'mention';
  url: string;
  description?: string;
  date?: string;
  publication?: string;
  favorite?: boolean;
}

export interface WorkProject {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  category?: 'coinbase' | 'side-projects' | 'previous-work';
  technologies?: string[];
  demoUrl?: string;
  githubUrl?: string;
  comingSoon?: boolean;
  date?: string;
  isUpcoming?: boolean;
  demos?: { name: string; description: string; url: string; date?: string }[];
}

export interface AboutContent {
  intro: string;
  paragraphs: string[];
  currentlyExcitedAbout?: string[];
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
