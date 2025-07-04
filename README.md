# 🎫 UniTicket
## 🪴 Un Projet d'Achat de Tickets de Bus pour les Étudiants de l'Université de Kara (Togo) 🏫
### 🤔 Pourquoi ce projet ?
⊱ Ce Projet vient faciliter la vie des étudiants en les permettant d'acheter les tickets de transports en toute simplicité. Cela leur évite d'avoir leur tickets parfois déchirés ou perdus.
Les étudiants pourront acheter leur tickets même si les agents chargés de la vente des tickets sont indisponibles, ou si l'étudiant est empêché par un phénomène naturel – Pluie, Innondation...

⊱ Ce projet est d'une importance capitale du côté de l'administration, car il va permettre à l'administration d'avoir une vue générale dans le secteur du transport universitaire – 
Contrôler les tâches assignées aux chauffeurs (voir si ces derniers respectent les heures de départ et d'arrivée, se comporte bien envers la communauté estudiantine, etc.), 
voir les recettes obtenues afin de les utiliser pour pouvoir mettre les étudiants dans des conditions plus favorables. 
Le bien être des étudiants étant l'une, sinon la première des préoccupations de l'université, rend necessaire la mise en place d'un système de sécurité robuste pour protéger les étudiants et les recettes obtenues.

# 🧑‍💻 Plateforme
⊱ Nous proposons une ***Web App (Web Application)*** 📱💻 pour réaliser ce projet.
### 🤔 Pourquoi ce choix ?
- **Accessibilité Universelle** 🌍 \
Une web app est accessible depuis n'importe quel appareil (ordinateur, tablette, smartphone) avec un simple navigateur, 
sans besoin d'installation. Cela permet d’atteindre un public beaucoup plus large. 
- **Plus de Visibilité et d’Audience 🚀** \
Contrairement aux applications desktop ou mobiles qui nécessitent des installations, une web app peut être partagée instantanément via un lien. 
Cela facilite sa diffusion, sa promotion et donc l'acquisition d’utilisateurs.
- **Dynamisme et Interactivité** ⚙️ \
Une web app rend l’expérience utilisateur plus interactive, plus engageante et dynamique. 
On peut y intégrer des animations, des mises à jour en temps réel, des interactions poussées, etc.
- **Mises à Jour Simplifiées** 🔄
Les mises à jour sont immédiates et visibles pour tous les utilisateurs, sans qu’ils aient besoin de télécharger quoi que ce soit.
- **Optimisation des Coûts** 💰
Une seule version fonctionne sur tous les systèmes (Windows, Mac, Android, iOS…), ce qui réduit les coûts de développement par rapport aux applications natives.
- **Scalabilité et Flexibilité** 🏗️
Une web app peut facilement évoluer, ajouter des fonctionnalités, ou s’adapter à de nouveaux besoins sans contraintes majeures.

# 🧰 🌴 Techonologies ultilisées
Nous utilisons le framework Express.JS basée sur l'environnement d'exécution Node.JS pour ce Back-end. 
Nous avons mis en place un système robuste pour faciliter la communication entre le Front et le Back 
en toute sécurité avec un système d'authentification lié aux pages d'inscription et de connexion au Front-end, protégeant ainsi toute 
la communauté universitaire – Administration, Agents, Étudiants... de toute intrusion inopinée sur la plateforme ***UniTicket***.

Cependant, nous comptons améliorer ce projet afin de le rendre encore plus non-vulnérable en ajoutant le **sucre syntaxique** de l'écosystème __JavaScript__ – ***TypeScript*** 🧩💯 
pour faciliter ainsi la **maintenance** et surtout rendre possible la **scalabilité** du projet à tout moment.

Nous utilisons ***PostgreSQL*** 📑🧮  comme base de donnée pour stocker et gérer les données. Nous avons opté ce choix connaissant la robustesse et la vitesse d'exécutions des queries de **PostgreSQL**.

##  🎋 ፦ Les endpoints des parties d'inscription et de connexion du Back pour permettre aux develeoppeurs frontend de tester et comprendre le fonctionement.
### 👨‍🎓 Partie Étudiant
🔏 Inscription : ```api/students/register``` \
🔏 Connexion : ```api/students/login```













