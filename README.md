# La Casa Di Toma

**Site web pour restaurant italien** - Application React avec système de panier et animations

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.16-06B6D4?style=flat-square&logo=tailwindcss)

## À propos

J'ai développé ce site pour un restaurant italien fictif afin de mettre en pratique mes compétences en React et TypeScript. L'objectif était de créer une expérience utilisateur fluide avec un système de commande fonctionnel.

## Fonctionnalités réalisées

**Système de panier**
- Ajout/suppression d'articles
- Gestion des quantités
- Calcul automatique du total
- Dropdown accessible depuis la navigation

**Interface utilisateur**
- Design responsive (mobile/desktop)
- Animations scroll avec Framer Motion
- Navigation fluide entre sections
- Formulaire de contact avec géolocalisation

**Aspects techniques**
- Context API pour la gestion d'état globale
- Composants TypeScript typés
- Architecture modulaire
- Optimisations de performance

## Stack technique

- **React 18** avec hooks modernes
- **TypeScript** pour la sécurité des types
- **Vite** comme bundler et serveur de développement
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **Context API** pour l'état global

## Structure du projet

```
src/
├── components/
│   ├── Hero.tsx              # Section d'accueil avec vidéo
│   ├── PizzaPastaSection.tsx # Menu avec boutons d'ajout
│   ├── CartDropdown.tsx      # Interface du panier
│   ├── Navbar.tsx            # Navigation principale
│   └── ...
├── context/
│   └── CartContext.tsx       # Gestion globale du panier
└── lib/
    └── menuDatas.ts          # Données des menus
```

## Défis techniques surmontés

**Gestion du panier**
- Implémentation d'un Context robuste
- Synchronisation des états entre composants
- Gestion des cas limites (quantités, suppression)

**Responsive design**
- Adaptation du dropdown panier sur mobile
- Navigation hamburger fonctionnelle
- Optimisation des animations pour tous les écrans

**Performance**
- Lazy loading des animations
- Optimisation des re-renders
- Gestion efficace du state

## Installation

```bash
git clone https://github.com/ovo-thom/la-casa-di-toma.git
cd la-casa-di-toma
npm install
npm run dev
```

## Ce que j'ai appris

Ce projet m'a permis d'approfondir mes connaissances en :
- Architecture d'applications React modernes
- Gestion d'état avec Context API
- Intégration d'animations performantes
- Développement mobile-first
- TypeScript en contexte réel

## Améliorations futures

- Intégration d'une API de paiement
- Système de comptes utilisateurs
- Base de données pour les menus
- Tests unitaires et d'intégration
- Déploiement en production

---

**Développé par Thomas** | [GitHub](https://github.com/ovo-thom)
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
