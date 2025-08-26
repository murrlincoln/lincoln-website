import { SiteContent } from '@/types';

export const siteContent: SiteContent = {
  work: {
    intro: "Building tools and experiences at the intersection of AI and web3.",
    projects: [
      {
        id: "agentkit",
        title: "AgentKit",
        description: "A toolkit that gives AI agents access to wallet and crypto functionality. Seamlessly integrate blockchain capabilities into AI frameworks.",
        technologies: ["TypeScript", "Ethereum", "Vercel AI SDK"],
        comingSoon: true // Keep as true to show the interactive demo
      },
      {
        id: "x402",
        title: "x402",
        description: "API middleware that enables payment-gated routes. Monetize your APIs with crypto payments through AgentKit or browser wallets.",
        technologies: ["Node.js", "Web3", "API Design"],
        comingSoon: true
      }
    ]
  },
  media: {
    intro: "Articles, interviews, and product mentions across various publications.",
    items: [
      {
        id: "1",
        title: "Building the Future of AI Agents",
        type: "article",
        category: "authored",
        url: "https://example.com/article1",
        description: "Exploring how autonomous agents will reshape the digital economy.",
        date: "2024-01",
        publication: "Tech Blog"
      },
      {
        id: "2",
        title: "Interview: Web3 and AI Convergence",
        type: "interview",
        category: "interview",
        url: "https://example.com/interview1",
        date: "2024-02",
        publication: "Podcast Name"
      },
      {
        id: "3",
        title: "AgentKit Featured in TechCrunch",
        type: "article",
        category: "product-reference",
        url: "https://example.com/techcrunch",
        publication: "TechCrunch"
      }
    ]
  },
  about: {
    intro: "Hi, I'm Lincoln.",
    paragraphs: [
      "I'm a builder focused on creating tools that bridge the gap between AI and web3 technologies.",
      "My work explores how autonomous agents can interact with blockchain systems, enabling new forms of digital commerce and interaction.",
      "When I'm not coding, you'll find me thinking about the future of human-AI collaboration and how we can build more intuitive, powerful tools for developers."
    ]
  }
};
