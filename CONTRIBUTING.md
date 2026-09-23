# Guide de Contribution

Merci de votre intérêt pour MarketBot AI ! Ce document fournit les lignes directrices pour contribuer au projet.

## Code de Conduite

En participant à ce projet, vous vous engagez à maintenir un environnement respectueux et inclusif.

## Comment Contribuer

### Signaler des Bugs

1. Vérifiez que le bug n'a pas déjà été signalé dans les Issues
2. Ouvrez une nouvelle Issue en utilisant le template "Bug Report"
3. Fournissez une description claire, les étapes pour reproduire, et votre environnement

### Suggérer des Améliorations

1. Vérifiez que la suggestion n'existe pas déjà dans les Issues
2. Ouvrez une nouvelle Issue avec le label "enhancement"
3. Décrivez clairement la fonctionnalité souhaitée et son intérêt

### Soumettre du Code

1. Forkez le repository
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Pushez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Style de Code

- Utilisez TypeScript pour tous les nouveaux fichiers
- Suivez les conventions ESLint/Prettier du projet
- Commentez le code complexe
- Écrivez des commits descriptifs en français ou anglais

## Structure du Projet

```
src/
├── components/          # Composants React
├── data/               # Données mockées
├── hooks/              # Custom hooks
├── utils/              # Fonctions utilitaires
└── App.tsx             # Composant principal
```

## Tests

Avant de soumettre une PR, assurez-vous que :
- Le projet build sans erreur (`npm run build`)
- Les nouvelles fonctionnalités sont testées manuellement
- La documentation est mise à jour si nécessaire

## Questions ?

N'hésitez pas à ouvrir une Issue pour toute question.

Merci de contribuer à MarketBot AI ! 🚀
