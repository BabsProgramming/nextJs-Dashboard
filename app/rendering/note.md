# **Comparaison technique rapide des méthodes de rendu dans Next.js**

| **Méthode** | **Données disponibles au premier rendu ?** | **Rendement côté SEO ?** | **Temps de génération** | **Cas d'usage typique**             |
| ----------- | ------------------------------------------ | ------------------------ | ----------------------- | ----------------------------------- |
| **CSR**     | Non                                        | Mauvais                  | Immédiat                | Dashboards interactifs              |
| **SSR**     | Oui                                        | Bon                      | Modéré                  | Pages de recherche ou de profil     |
| **SSG**     | Oui                                        | Bon                      | Long (au build)         | Pages fixes (blog, documentation)   |
| **ISR**     | Oui (actualisé périodiquement)             | Bon                      | Long + incrémental      | Contenus semi-statiques (catalogue) |

---

## **Détails des méthodes**

### **1. CSR (Client-Side Rendering)**

- **Implémentation** : Utilise `useEffect` pour charger les données côté client.
- **Avantages** : Interactions riches et dynamiques.
- **Inconvénients** : Contenu indisponible pour le SEO au premier rendu.

### **2. SSR (Server-Side Rendering)**

- **Implémentation** : Le serveur génère la page à chaque requête avec des données fraîches.
- **Avantages** : Données prêtes pour le SEO et actualité garantie.
- **Inconvénients** : Temps de chargement initial plus long.

### **3. SSG (Static Site Generation)**

- **Implémentation** : Prérend les pages lors du build.
- **Avantages** : Performances élevées et rendu rapide.
- **Inconvénients** : Nécessite une reconstruction pour les mises à jour.

### **4. ISR (Incremental Static Regeneration)**

- **Implémentation** : Combine SSG et SSR en permettant une régénération dynamique à intervalles réguliers.
- **Avantages** : Équilibre entre performances et actualité.
- **Inconvénients** : Complexité à gérer dans certains cas.
