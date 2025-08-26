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
    intro: "Talks, articles, interviews, and research spanning AI agents, blockchain, and their convergence.",
    items: [
      // TALKS & PRESENTATIONS
      {
        id: "agents-research-day",
        title: "Where Do Crypto Agents Go From Here?",
        type: "talk",
        category: "talk",
        url: "https://www.youtube.com/watch?v=hdD71fbtuuE",
        description: "Personal favorite touching on the Crypto Agent trend at the peak of the hype, and forecasting where it'll go.",
        date: "Feb 18, 2025",
        publication: "Archetype's Agents Research Day",
        favorite: true
      },
      {
        id: "agent-bootcamp",
        title: "Agent Bootcamp with x402 at ETHGlobal NYC",
        type: "talk",
        category: "talk",
        url: "https://www.youtube.com/watch?v=v8Zohn4kcoE",
        description: "Great overview of where x402 is and how to get started, with a brief explainer on how it works. Full crowd - standing room only!",
        date: "Aug 15, 2025",
        publication: "ETHGlobal NYC",
        favorite: true
      },
      {
        id: "altlayer-keynote",
        title: "Keynote at AltLayer's ETHDenver Agentic Crypto Day",
        type: "talk",
        category: "talk",
        url: "https://www.youtube.com/watch?v=Si9kOcnKU3M",
        date: "Mar 6, 2025",
        publication: "AltLayer"
      },
      {
        id: "tedx-vanderbilt",
        title: "Blockchain Will Revolutionize Higher Education",
        type: "talk",
        category: "talk",
        url: "https://www.ted.com/talks/lincoln_murr_blockchain_will_revolutionize_higher_education",
        description: "TEDx talk at Vanderbilt University - first freshman to give one. This was a legitimizing and catalyzing moment that led to my first real internship at Prescryptive.",
        date: "February 2021",
        publication: "TEDx Vanderbilt"
      },
      {
        id: "openagi-summit",
        title: "Building an Agent with AgentKit",
        type: "talk",
        category: "talk",
        url: "https://www.youtube.com/watch?v=hZR5Fx8RV1c",
        description: "Live demonstration at Devcon 2024 in Bangkok.",
        date: "Nov 25, 2024",
        publication: "OpenAGI Summit"
      },
      
      // INTERVIEWS
      {
        id: "ethereum-thread",
        title: "Guest Thread on AI Agents and x402",
        type: "article",
        category: "authored",
        url: "https://x.com/ethereum/status/1955673870998143383",
        description: "Guest thread on the official @ethereum handle about AI agents and x402.",
        publication: "Ethereum",
        favorite: true
      },
      {
        id: "coin-bureau",
        title: "AI Agents, Blockchain Development, and the Future of Crypto",
        type: "interview",
        category: "interview",
        url: "https://www.youtube.com/watch?v=NkiVqwsxeeU",
        description: "Fun interview since Coin Bureau helped me get into crypto back in 2017.",
        date: "Nov 30, 2024",
        publication: "Coin Bureau"
      },
      {
        id: "smart-contracts-agents",
        title: "Smart Contracts, Smarter Agents: AI Comes Onchain With Coinbase's AgentKit",
        type: "interview",
        category: "interview",
        url: "https://www.youtube.com/watch?v=458asOs1ris",
        date: "Feb 26, 2025",
        publication: "Podcast"
      },
      {
        id: "double-a-media",
        title: "Agentic AI & Blockchain",
        type: "interview",
        category: "interview",
        url: "https://www.youtube.com/watch?v=5VtKpICP-No",
        description: "A podcast by one of my college friends with some of the most thoughtful questions I've been asked.",
        date: "Jul 22, 2025",
        publication: "Double A Media"
      },
      {
        id: "earn-crypto-agents",
        title: "Earn Crypto With Coinbase AI Agents!",
        type: "interview",
        category: "interview",
        url: "https://www.youtube.com/watch?v=qHY0xz8WEaA",
        date: "Dec 20, 2024"
      },
      {
        id: "agents-need-precision",
        title: "Agents Need Precision, Not Hype",
        type: "interview",
        category: "interview",
        url: "https://www.youtube.com/watch?v=t_ShP5gvAy0",
        date: "May 9, 2025",
        publication: "CoinFund's Mined Podcast Ep. 30"
      },
      {
        id: "agentkit-wallet",
        title: "AgentKit: Giving Every AI Agent a Crypto Wallet",
        type: "interview",
        category: "interview",
        url: "https://www.youtube.com/watch?v=Gb9dQwTZIIw",
        date: "Feb 4, 2025"
      },
      {
        id: "american-banker",
        title: "A Futuristic Fireside Chat on Agentic AI",
        type: "interview",
        category: "interview",
        url: "https://www.americanbanker.com/video/artificial-intelligence-virtual-20252025a-futuristic-fireside-chat-on-agentic-ai-crypto-and-self-driving-cars-come-together-with-implications-for-banking",
        description: "Discussion on AI, crypto, and self-driving cars with implications for banking.",
        date: "July 27, 2025",
        publication: "American Banker"
      },
      {
        id: "notes-from-nash",
        title: "Notes From Nash: Notes with Lincoln Murr - Blockchain",
        type: "interview",
        category: "interview",
        url: "https://vanderbilthustler.com/2024/03/16/notes-from-nash-notes-with-lincoln-murr-blockchain/",
        date: "Mar 16, 2024",
        publication: "Vanderbilt Hustler"
      },
      
      // AUTHORED CONTENT
      {
        id: "internet-payment-protocols",
        title: "Evaluating the Future of Internet Payment Protocols",
        type: "article",
        category: "authored",
        url: "https://messari.io/report/evaluating-the-future-of-internet-payment-protocols",
        description: "Report with longtime crypto friend Sam Ruskin on internet payment protocols, broken down into application, coordination, routing, and settlement layers.",
        date: "Aug 13, 2025",
        publication: "Messari"
      },
      {
        id: "bitpush-articles",
        title: "200+ Articles as Lead English Content Writer",
        type: "article",
        category: "authored",
        url: "https://en.bitpush.news/?s=lincoln+murr",
        description: "Main English content writer for nearly four years, publishing over 200 articles garnering hundreds of thousands of views in English and translated Chinese.",
        date: "Dec 2020 - Aug 2024",
        publication: "Bitpush News"
      },
      {
        id: "tldr-crypto",
        title: "TLDR Crypto Newsletter Curator",
        type: "article",
        category: "authored",
        url: "https://tldr.tech/crypto",
        description: "Curate content for the TLDR crypto newsletter, which goes out to 250,000 subscribers Monday-Friday.",
        publication: "TLDR"
      },
      {
        id: "leela-vs-world",
        title: "Leela vs the World - First On-Chain AI Game",
        type: "article",
        category: "authored",
        url: "https://medium.com/@CountableMagic/chapter-6-leela-vs-the-world-the-worlds-1st-on-chain-ai-game-17ea299a06b6",
        description: "Contributed to the world's first onchain AI game built using technology from Modulus Labs, worked on smart contract development for the chess board.",
        date: "Mar 2, 2023",
        publication: "Medium"
      },
      {
        id: "knox-20-under-20",
        title: "Knox News 20 Under 20: Passion for Cryptocurrency",
        type: "mention",
        category: "mention",
        url: "https://www.knoxnews.com/story/money/business/2019/11/05/20-under-20-lincoln-murr-knoxville-catholic-high-school-knox-biz-magazine-news-sentinel/3868574002/",
        description: "One of my first acknowledgements in my home town of Knoxville, Tennessee.",
        date: "2019",
        publication: "Knox News"
      },
      
      // RESEARCH
      {
        id: "llm-code-generation",
        title: "Testing LLMs on Code Generation with Varying Levels of Prompt Specificity",
        type: "research",
        category: "research",
        url: "https://arxiv.org/abs/2311.07599",
        description: "Research paper written as part of my Master's Degree in Computer Science.",
        date: "Nov 10, 2023",
        publication: "arXiv"
      },
      {
        id: "humaneval-gpt",
        title: "HumanEval on Latest GPT Models",
        type: "research",
        category: "research",
        url: "https://arxiv.org/abs/2402.14852",
        date: "Feb 20, 2024",
        publication: "arXiv"
      },
      {
        id: "single-slot-finality",
        title: "Single Slot Finality Research",
        type: "research",
        category: "research",
        url: "https://publish.obsidian.md/single-slot-finality/Welcome+to+My+Research!",
        description: "Master's Thesis research on Single Slot Finality as part of the Ethereum Protocol Fellowship.",
        date: "May 10, 2024",
        publication: "Ethereum Protocol Fellowship",
        favorite: true
      },
      
      // MENTIONS
      {
        id: "coindesk-easier-build",
        title: "It's Easier Than You Think to Build With AI and Web3",
        type: "mention",
        category: "mention",
        url: "https://www.coindesk.com/opinion/2025/01/24/it-s-easier-than-you-think-to-build-with-ai-and-web3",
        description: "Featured quote: 'One day, we'll have AI agents own their own cars and operate their own taxi service that gets paid by customers in crypto.'",
        date: "Jan 27, 2025",
        publication: "CoinDesk"
      },
      {
        id: "cointelegraph-based-agent",
        title: "Coinbase introduces 'Based Agent' for creating AI agents in 3 minutes",
        type: "mention",
        category: "mention",
        url: "https://cointelegraph.com/news/coinbase-based-agent-ai-agent-crypto-transactions-brian-armstrong-base",
        date: "Oct 26, 2024",
        publication: "Cointelegraph"
      },
      {
        id: "yahoo-finance-agent",
        title: "Coinbase Unveils Fast AI Agent Creator To Bridge Crypto and AI",
        type: "mention",
        category: "mention",
        url: "https://finance.yahoo.com/news/coinbase-unveils-fast-ai-agent-083703671.html",
        date: "October 28, 2024",
        publication: "Yahoo Finance"
      },
      
      // PRODUCT REFERENCES
      {
        id: "bloomberg-ai-payments",
        title: "Coinbase Bets on The Rise of AI Payments Fueled By Digital Dollars",
        type: "article",
        category: "product-reference",
        url: "https://www.bloomberg.com/news/articles/2025-08-20/coinbase-bets-on-ai-payments-boom-fueled-by-digital-dollars",
        date: "August 20, 2025",
        publication: "Bloomberg"
      },
      {
        id: "balaji-shoutout",
        title: "Shoutout from Balaji",
        type: "mention",
        category: "mention",
        url: "https://x.com/balajis/status/1952592094964465910",
        date: "August 5, 2025",
        publication: "X (Twitter)"
      },
      {
        id: "messari-stablecoins",
        title: "State of Stablecoins - x402 Featured",
        type: "article",
        category: "product-reference",
        url: "https://messari.io/report/state-of-stablecoins",
        description: "x402 featured in Messari's State of Stablecoins report.",
        date: "July 22, 2025",
        publication: "Messari"
      },
      {
        id: "forbes-agentic-commerce",
        title: "Agentic Commerce And Payments, Money And Identity, AIs And APIs",
        type: "article",
        category: "product-reference",
        url: "https://www.forbes.com/sites/davidbirch/2025/07/06/agentic-commerce-and-payments-money-and-identity-ais-and-apis/",
        description: "x402 mentioned in context of agentic commerce.",
        date: "Jul 06, 2025",
        publication: "Forbes"
      },
      {
        id: "hackernoon-mcp",
        title: "Is MCP Overhyped? The Real Story About Agent Tools and Security",
        type: "article",
        category: "product-reference",
        url: "https://hackernoon.com/is-mcp-overhyped-the-real-story-about-agent-tools-and-security",
        description: "x402 mentioned in discussion about agent tools.",
        date: "June 5, 2025",
        publication: "HackerNoon"
      },
      {
        id: "blockworks-x402",
        title: "Blockworks Thread on x402",
        type: "mention",
        category: "product-reference",
        url: "https://x.com/blockworksres/status/1928104082482548829",
        publication: "Blockworks"
      },
      {
        id: "cointelegraph-x402",
        title: "Coinbase x402 payments protocol to make AI agents more autonomous",
        type: "article",
        category: "product-reference",
        url: "https://cointelegraph.com/news/coinbase-x402-payments-protocol-make-ai-agents-more-autonomous",
        description: "Coverage of the x402 launch.",
        date: "May 06, 2025",
        publication: "Cointelegraph"
      },
      {
        id: "openai-agents-sdk",
        title: "OpenAI's New Tools for Building Agents - AgentKit Case Study",
        type: "mention",
        category: "product-reference",
        url: "https://openai.com/index/new-tools-for-building-agents/",
        description: "AgentKit featured as a case study in OpenAI's Agents SDK launch blog. First toolkit made publicly available for it.",
        publication: "OpenAI"
      },
      {
        id: "99bitcoins-guide",
        title: "AI Agents in Crypto Guide - Based Agent Mentioned",
        type: "mention",
        category: "product-reference",
        url: "https://99bitcoins.com/education/ai-agents-in-crypto/",
        description: "Based Agent (precursor to AgentKit) mentioned in AI agent crypto guide.",
        publication: "99 Bitcoins"
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
