import avatarUrl from "../../assets/OlivierLogo.png";

export const portfolioData = {
  person: {
    name: "Olivier Poirier",
    initials: "OP",
    role: "Développeur Web & Applicatif Full-Stack",
    availability: "Disponible pour projets web, applications full-stack et automatisations",
    avatar: avatarUrl,
    email: "poirier.oli@gmail.com",
    phone: "+1 438 870-0489",
    linkedin: "https://linkedin.com/in/olivier-poirier-66a3782bb",
    website: "https://github.com/olivierpoirier"
  },

  hero: {
    line1: "Développeur full-stack",
    line2: "produit & applicatif.",
    text: "Je conçois des applications web robustes, des interfaces réactives et des architectures client-serveur pensées pour être utiles, maintenables et bien déployées."
  },

  marquee: [
    "React",
    "TypeScript",
    "Node.js",
    "Firebase",
    "Firestore",
    "Cloud Functions",
    "API REST",
    "Vercel",
    "Cloudflare",
    "JavaScript ES6+",
    "HTML5",
    "CSS3",
    "Redux",
    "Context API",
    "i18n",
    "Postman",
    "GitHub",
    "CI/CD",
    "ServiceNow",
    "SAS"
  ],

  bio: {
    title: "Un développeur full-stack orienté produit, capable de relier l'interface, la logique métier et le déploiement.",
    paragraphs: [
      "Développeur Web & Applicatif Full-Stack, je me spécialise dans la création d'applications web robustes avec React, TypeScript, Node.js, Firebase et des architectures client-serveur modernes.",
      "Mon expérience couvre autant les interfaces réactives que les APIs, les bases de données, les automatisations cloud, la sécurité applicative et les déploiements en production.",
      "J'aime concevoir des solutions claires et concrètes : comprendre le besoin, structurer l'architecture, développer les fonctionnalités essentielles et livrer un produit stable, utile et agréable à utiliser."
    ]
  },

  skills: [
    {
      title: "Front-end moderne",
      icon: "monitor",
      kind: "demonstrated",
      summary: "Interfaces rapides, responsive et animées, avec une attention au détail visuel et à l'expérience mobile.",
      items: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "JavaScript ES6+"],
      proof: ["Music Bot", "Owl Soundboard", "Swap-it", "Royal LePage", "synCOS"]
    },
    {
      title: "Temps réel & audio",
      icon: "radio",
      kind: "demonstrated",
      summary: "Contrôle audio local, files d'attente en temps réel et intégrations médias pensées pour des usages concrets.",
      items: ["Socket.IO", "mpv", "yt-dlp", "VoiceMeeter", "Préchargement audio", "Cloudflare Tunnels"],
      proof: ["Music Bot"]
    },
    {
      title: "Back-end & API",
      icon: "server",
      kind: "demonstrated",
      summary: "APIs REST, logique serveur, routes documentées et déploiements serverless prêts à être testés.",
      items: ["Node.js", "API REST", "Serverless Functions", "CORS", "OpenAPI 3.1", "Scalar"],
      proof: ["Owl backend", "Music Bot"]
    },
    {
      title: "Données & cloud",
      icon: "database",
      kind: "demonstrated",
      summary: "Synchronisation, authentification, stockage externe et environnements cloud utilisés dans des projets livrés.",
      items: ["Firebase Auth", "Firestore", "Cloud Functions", "Dropbox API v2", "Vercel", "CI/CD"],
      proof: ["Swap-it", "Royal LePage", "Owl backend"]
    },
    {
      title: "Extensions & intégrations",
      icon: "plug",
      kind: "demonstrated",
      summary: "Intégrations dans des écosystèmes existants, avec upload, pré-écoute locale et documentation technique.",
      items: ["Owlbear SDK", "Manifest d'extension", "Dropbox proxy", "Upload audio", "Pré-écoute locale", "Docs API"],
      proof: ["Owl Soundboard"]
    },
    {
      title: "Applications desktop",
      icon: "app",
      kind: "demonstrated",
      summary: "Applications locales avec interface riche, thèmes, audio système, guide intégré et expérience bilingue.",
      items: ["Python", "PySide6 / Qt", "Pygame", "Thèmes UI", "FR / EN", "Mises à jour GitHub"],
      proof: ["SoundMaker"]
    },
    {
      title: "Méthodes & outils",
      icon: "tool",
      kind: "professional",
      summary: "Outils de travail et méthodes utiles pour collaborer, documenter et livrer proprement.",
      items: ["Git", "GitHub", "Postman", "Agile", "Scrum", "Documentation technique", "ServiceNow", "SAS"],
      proof: ["Expérience professionnelle"]
    },
    {
      title: "Produit & architecture",
      icon: "layout",
      kind: "professional",
      summary: "Capacité à structurer un produit, modéliser les flux et transformer une idée en parcours utilisable.",
      items: ["Architecture client-serveur", "Modélisation", "UX interactive", "Matchmaking", "Automatisation", "SEO local"],
      proof: ["Troc local", "StarBoost", "Projets clients"]
    }
  ],

  projects: [
    {
      title: "Royal LePage Tendance",
      eyebrow: "Portail immobilier",
      date: "2025",
      description: "Développement full-stack d'un portail immobilier interactif en équipe Agile : interface React, hooks personnalisés, thèmes Dark/Light, intégration des données Centris, API Cloud sécurisée, messagerie privée interne, panneau d'administration, règles de sécurité Firebase et pipeline CI/CD.",
      url: "https://royallepagetendance.ca/",
      links: {
        live: "https://royallepagetendance.ca/"
      },
      media: {
        type: "image",
        src: "/media/projects/royal-lepage-home.png",
        alt: "Accueil du site Royal LePage Tendance"
      },
      highlights: ["Portail client", "API Cloud sécurisée", "CI/CD"],
      tags: ["React", "Vite", "Firebase", "Cloud Functions", "API", "Centris", "CI/CD"]
    },
    {
      title: "Swap-it",
      eyebrow: "Plateforme d'échange",
      date: "2024 - 2026",
      description: "Plateforme d'échange de cadeaux de type Secret Santa, avec gestion des comptes, groupes, participants, listes de souhaits, algorithme de tirage automatisé et synchronisation des résultats en temps réel.",
      url: "https://swap-it.ca/",
      links: {
        live: "https://swap-it.ca/"
      },
      media: {
        type: "image",
        src: "/media/projects/swap-it-home.png",
        alt: "Accueil de la plateforme Swap-it"
      },
      highlights: ["Comptes et groupes", "Tirage automatisé", "Temps réel"],
      tags: ["React", "TypeScript", "Firebase Auth", "Firestore", "Cloud Functions", "Vercel"]
    },
    {
      title: "synCOS",
      eyebrow: "Site d'équipe",
      date: "2026",
      description: "Site vitrine de l'équipe synCOS pour présenter les services, les projets et les profils de l'agence avec une identité visuelle cohérente et une navigation bilingue.",
      url: "https://www.syncos.ca/",
      links: {
        live: "https://www.syncos.ca/"
      },
      media: {
        type: "image",
        src: "/media/projects/syncos-home.png",
        alt: "Accueil du site synCOS"
      },
      highlights: ["Site d'équipe", "Navigation bilingue", "Présentation des services"],
      tags: ["Site vitrine", "UI/UX", "Responsive", "Bilingue", "Équipe web"]
    },
    {
      title: "Miss Noémie Music Bot",
      eyebrow: "Application audio",
      date: "2025 - 2026",
      featured: true,
      description: "Interface web moderne pour piloter un bot musical local, gérer une file d'attente partagée en temps réel et router l'audio vers une entrée virtuelle avec mpv.",
      url: "https://miss-noemie-music-bot.vercel.app/",
      links: {
        live: "https://miss-noemie-music-bot.vercel.app/",
        github: "https://github.com/olivierpoirier/Miss-Noemie-Music-Bot"
      },
      repoBadges: ["GitHub public", "TypeScript", "React 19", "Socket.IO", "mpv", "Mis à jour: juillet 2026"],
      media: {
        type: "image",
        src: "/media/projects/music-bot-themes.gif",
        alt: "Démo des thèmes et du tableau de bord du Music Bot"
      },
      gallery: [
        {
          type: "image",
          src: "/media/projects/music-bot-dashboard.png",
          alt: "Tableau de bord desktop du Music Bot"
        },
        {
          type: "image",
          src: "/media/projects/music-bot-mobile.png",
          alt: "Interface mobile du Music Bot"
        }
      ],
      highlights: ["Contrôle temps réel avec Socket.IO", "Sources YouTube, SoundCloud, Spotify et Twitch", "Préchargement des pistes", "Routage audio virtuel sécurisé"],
      tags: ["React", "TypeScript", "Node.js", "Socket.IO", "Audio", "Cloudflare", "yt-dlp", "VoiceMeeter"]
    },
    {
      title: "Owl Soundboard",
      eyebrow: "Extension Owlbear Rodeo",
      date: "2025 - 2026",
      featured: true,
      description: "Soundboard moderne intégrée à Owlbear Rodeo pour organiser, téléverser, pré-écouter et déclencher des sons synchronisés pendant une partie.",
      url: "https://owl-soundboard-frontend.vercel.app/",
      links: {
        live: "https://owl-soundboard-frontend.vercel.app/",
        extra: [
          {
            label: "Code frontend",
            url: "https://github.com/olivierpoirier/owl-soundboard-frontend"
          },
          {
            label: "Code backend",
            url: "https://github.com/olivierpoirier/owl-soundboard-backend"
          },
          {
            label: "API docs",
            url: "https://owl-soundboard-backend.vercel.app/"
          }
        ]
      },
      repoBadges: ["GitHub public", "React 19", "Vite", "Owlbear SDK", "Dropbox API", "OpenAPI 3.1"],
      media: {
        type: "image",
        src: "/media/projects/owl-soundboard-demo.gif",
        alt: "Démo animée de l'Owl Soundboard"
      },
      gallery: [
        {
          type: "image",
          src: "/media/projects/owl-soundboard-overview.png",
          alt: "Aperçu de l'interface Owl Soundboard"
        },
        {
          type: "image",
          src: "/media/projects/owl-docs-desktop.png",
          alt: "Documentation API desktop de l'Owl Soundboard"
        },
        {
          type: "image",
          src: "/media/projects/owl-docs-mobile.png",
          alt: "Documentation API mobile de l'Owl Soundboard"
        }
      ],
      highlights: ["Lecture synchronisée dans Owlbear Rodeo", "Pré-écoute locale pour le MJ", "Upload audio mp3/wav", "Backend serverless Dropbox documenté"],
      tags: ["React", "Vite", "Tailwind", "Owlbear SDK", "API REST", "Dropbox API", "Vercel", "Audio"]
    }
  ],

  privateProjects: [
    {
      title: "SoundMaker",
      eyebrow: "Application desktop",
      date: "Projet personnel",
      featured: true,
      description: "Console desktop Python/Qt pour programmer des sons, pop-ups meme, fausses alertes et modes Chaos dans une interface propre, thémable, bilingue et documentée.",
      url: "https://github.com/olivierpoirier/periodic-sound-player",
      links: {
        github: "https://github.com/olivierpoirier/periodic-sound-player"
      },
      repoBadges: ["GitHub public", "Python", "PySide6", "Pygame audio", "FR / EN", "Mis à jour: juillet 2026"],
      media: {
        type: "image",
        src: "/media/projects/soundmaker-tour.gif",
        alt: "Tour animé de l'application SoundMaker"
      },
      gallery: [
        {
          type: "image",
          src: "/media/projects/soundmaker-main-fr.png",
          alt: "Interface principale de SoundMaker"
        },
        {
          type: "image",
          src: "/media/projects/soundmaker-help-fr.png",
          alt: "Guide d'aide de SoundMaker"
        }
      ],
      highlights: ["Timer visible avec recalcul manuel", "Modes sons, memes, alertes et Chaos", "Bibliothèque Images/Sounds locale", "Guide intégré et mises à jour GitHub"],
      tags: ["Python", "PySide6", "Application desktop", "Sons système", "Pop-up", "GitHub"]
    },
    {
      title: "Architecture produit - Troc local",
      eyebrow: "Concept produit",
      date: "Concept produit",
      description: "Architecture d'une plateforme de troc local basée sur un formulaire guidé en quatre étapes : type d'échange, catégorie, tags et évaluation en tokens. La logique de matchmaking déclenche une notification lorsque les offres et recherches utilisent les mêmes tags.",
      url: "#",
      media: {
        type: "video",
        src: "/media/projects/troc-local-demo.mp4",
        alt: "Démo vidéo du prototype Troc local"
      },
      highlights: ["Formulaire guidé", "Matchmaking", "Évaluation en tokens"],
      tags: ["UX", "UI", "Matchmaking", "Tags", "Tokens", "Base de données", "Architecture produit"]
    },
    {
      title: "StarBoost",
      eyebrow: "Concept SaaS",
      date: "Concept SaaS",
      description: "SaaS de gestion automatisée des avis pour commerces locaux. Le système envoie un SMS après un rendez-vous ou un paiement, redirige les avis positifs vers Google Business ou Facebook, et intercepte les avis négatifs dans un formulaire privé avec alerte au propriétaire.",
      url: "#",
      media: {
        type: "video",
        src: "/media/projects/starboost-demo.mp4",
        alt: "Démo vidéo du concept StarBoost"
      },
      highlights: ["SMS automatisés", "Avis Google Business", "Alerte propriétaire"],
      tags: ["SaaS", "Automatisation", "Twilio", "Node.js", "Python", "SEO local", "API"]
    }
  ],

  videos: {
    title: "Démos et médias de projets",
    description: "Les projets non hébergés et les interfaces plus difficiles à expliquer en texte sont présentés avec GIFs, captures et walkthroughs courts.",
    playlistId: "",
    fallbackVideoId: ""
  },

  contactPitch: "Disponible pour créer une application web, structurer une architecture full-stack, connecter des APIs, automatiser un processus ou transformer une idée technique en produit concret."
};
