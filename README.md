# Tim Lay's Restaurant 🍽️

Application web de commande en ligne pour restaurant avec gestion des stocks et interface d'administration.

## 🚀 Fonctionnalités

### Pour les Clients
- **Menu interactif** avec photos et descriptions
- **Panier intelligent** avec gestion des quantités
- **Livraison à domicile** avec calcul automatique des frais
- **Suivi de commande** en temps réel
- **Interface responsive** (mobile, tablette, desktop)

### Pour les Restaurateurs
- **Gestion des stocks** avec alertes automatiques
- **Gestion des commandes** (accepter, préparer, livrer)
- **Gestion du menu** (ajouter, modifier, supprimer)
- **Statistiques** de ventes et commandes
- **Interface d'administration** sécurisée

## 🛠️ Technologies

- **Frontend** : HTML5, CSS3, JavaScript ES6+
- **Stockage** : localStorage (compatible API future)
- **Design** : CSS Grid, Flexbox, Mobile-First
- **Hébergement** : GitHub Pages

## 📱 Compatibilité

- ✅ Chrome, Firefox, Safari, Edge
- ✅ iOS Safari, Android Chrome
- ✅ Responsive design (320px - 1920px+)
- ✅ PWA Ready (Progressive Web App)

## 🚀 Installation et Déploiement

### Développement Local
```bash
# Cloner le projet
git clone https://github.com/votre-username/menu.git
cd menu

# Ouvrir avec un serveur local (ex: Live Server VS Code)
# Ou utiliser Python
python -m http.server 8000

# Accéder à http://localhost:8000
```

### Déploiement GitHub Pages
1. Fork ou clone ce repository
2. Aller dans Settings > Pages
3. Sélectionner "Deploy from a branch"
4. Choisir "main" branch et "/ (root)"
5. Votre site sera disponible à `https://votre-username.github.io/menu`

## 📁 Structure du Projet

```
menu/
├── index.html              # Page principale
├── css/
│   └── main.css           # Styles principaux
├── js/
│   ├── config.js          # Configuration
│   ├── storage.js         # Gestion des données
│   └── app.js             # Application principale
├── assets/                # Images et ressources
├── backend/               # API Node.js (optionnel)
└── docs/                  # Documentation
```

## ⚙️ Configuration

### Personnalisation du Restaurant
Modifiez le fichier `js/config.js` :

```javascript
const CONFIG = {
  restaurant: {
    name: "Votre Restaurant",
    phone: "+221 XX XXX XX XX",
    email: "contact@votre-restaurant.com"
  },
  pricing: {
    deliveryFee: 1000, // Frais de livraison en F CFA
    currency: "F"
  }
  // ... autres paramètres
};
```

### Menu par Défaut
Le menu initial est défini dans `CONFIG.defaultMenu`. Vous pouvez :
- Modifier les articles existants
- Ajouter de nouvelles catégories
- Changer les images (utilisez des URLs d'images)

## 📊 Gestion des Stocks

### Fonctionnalités
- **Stock automatique** : Décrément lors des commandes
- **Alertes** : Notification quand stock < 5
- **États** : En stock / Stock faible / Rupture
- **Historique** : Suivi des mouvements

### Utilisation
```javascript
// Mettre à jour le stock
storage.updateStock(itemId, newQuantity, 'set');

// Ajouter du stock
storage.updateStock(itemId, 10, 'add');

// Vérifier le statut
const status = storage.getStockStatus(itemId);
// Retourne: 'ok', 'low', 'out'
```

## 🔧 API Backend (Optionnel)

Le projet inclut une API Node.js/Express dans le dossier `backend/` :

```bash
cd backend
npm install
npm start
```

### Endpoints
- `GET /api/menu` - Récupérer le menu
- `POST /api/menu/add` - Ajouter un article
- `POST /api/orders/create` - Créer une commande
- `GET /api/orders` - Lister les commandes
- `PATCH /api/orders/status/:id` - Mettre à jour le statut

## 📱 Progressive Web App (PWA)

L'application est prête pour être installée comme PWA :
- Icône d'application
- Fonctionnement hors ligne (cache)
- Installation sur mobile/desktop

## 🎨 Personnalisation du Design

### Variables CSS
```css
:root {
  --primary-color: #153150;    /* Couleur principale */
  --accent-color: #E97E37;     /* Couleur d'accent */
  --success-color: #28a745;    /* Succès */
  --warning-color: #ffc107;    /* Avertissement */
  --danger-color: #dc3545;     /* Erreur */
}
```

### Thèmes
- Mode clair (par défaut)
- Mode sombre (à venir)
- Personnalisation par CSS

## 🔒 Sécurité

### Données Locales
- Stockage sécurisé avec localStorage
- Validation des données côté client
- Sanitisation des entrées utilisateur

### Production
Pour un usage en production, ajoutez :
- Authentification serveur
- Base de données sécurisée
- HTTPS obligatoire
- Validation côté serveur

## 📈 Évolutions Futures

### Version 2.1
- [ ] Interface d'administration complète
- [ ] Notifications push
- [ ] Mode hors ligne
- [ ] Export des données (CSV, PDF)

### Version 2.2
- [ ] Système de paiement (Stripe, PayPal)
- [ ] Multi-restaurants
- [ ] Application mobile native
- [ ] Intégration SMS/Email

### Version 3.0
- [ ] Intelligence artificielle (recommandations)
- [ ] Analyse prédictive des stocks
- [ ] Intégration réseaux sociaux
- [ ] Programme de fidélité

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit (`git commit -am 'Ajouter nouvelle fonctionnalité'`)
4. Push (`git push origin feature/nouvelle-fonctionnalite`)
5. Créer une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

- **Email** : support@timlays.com
- **Issues** : [GitHub Issues](https://github.com/votre-username/menu/issues)
- **Documentation** : [Wiki](https://github.com/votre-username/menu/wiki)

## 🙏 Remerciements

- Images : [Unsplash](https://unsplash.com)
- Icônes : Emoji Unicode
- Inspiration : Restaurants locaux sénégalais

---

**Tim Lay's Restaurant** - Fait avec ❤️ au Sénégal
