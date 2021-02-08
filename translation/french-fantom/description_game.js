/*
Ne pas modifier le nom de la clé !
Modifier seulement la valeur de cette clé

Exemple: 

"Clé" : "Valeur"
*/ 

const WerewolfTemplate = {
    "CHANNEL_LG": {
        "Category" : "• Esprit de fantom •",
        "Village" : "・Place",
        "Cupidon": "・mayukow", 
        "Voyante": "・oracle", 
        "Voyante_bavard": "・oracle Bavard", 
        "Renard": "・fantomitechno", 
        "Oracle": "・Oracle", 
        "Orcale_oeil": "・Oracle au 3e oeil", 
        "Montreur": "・Detecti-bot", 
        "Détective": "・kolb", 
        "Petite_fille": "・alizée",
        "Boucher": "・Lola", 
        "Salvateur": "・boucli-bot", 
        "Sorcière": "・newglace", 
        "Chaman": "・Chaman", 
        "Médium": "・conseil", 
        "Dompteur": "・roger",
        "Chasseur_aveugle": "・notch", 
        "Chasseur": "・guep", 
        "Tireur_d'elite": "・fant0mib0t", 
        "Corbeau": "・billy", 
        "Momie": "・enchanteur", 
        "Hacker": "・z_runner", 
        "Brouilleur": "・Brouilleur", 
        "Chien_loup": "・double face",
        "Enfant_sauvage": "・frigiel",
        "Servante dévouée": "・_redcoal_", 
        "Voleur": "・Evan91380", 
        "Traqueur_Résurrecteur": "・Overlord", 
        "Assassin": "・theguill84", 
        "Toxico": "・Toxico", 
        "Joueur de Flûte": "・Leirof", 
        "flûtistes": "・gunivers",
        "Loup_garou": "・traitre", 
        "Loup_garou_blanc": "・madtechno"
    },
    
    "WIN_LG": {
        "égalité" : {
            "title": "⚖️ • Égalité" , 
            "desc": "Aucune personne remporte cette partie.", 
            "Winner": 0
        },

        "couple" : {
            "title": "♥ • Le couple" , 
            "desc": "Le couple remporte cette partie.", 
            "Winner": "du __couple__"
        },

        "village" : {
            "title": "🏘 • Le village" , 
            "desc": "Le village remporte cette partie.", 
            "Winner": "du __village__"
        },

        "loups" : {
            "title": "🐺 • Les traitres" , 
            "desc": "Les traitres remportent cette partie.", 
            "Winner": "des __traitres__"
        },

        "toxico" : {
            "title": "🚬 • Le toxico" , 
            "desc": "Le toxico remporte cette partie.", 
            "Winner": "du __toxico__"
        },

        "lgb" : {
            "title": "🐺 • MadTechno" , 
            "desc": "MadTechno remporte cette partie.", 
            "Winner": "de __MadTechno__"
        },

        "jdf" : {
            "title": "🎺 • Leirof" , 
            "desc": "Leirof remporte cette partie.", 
            "Winner": "de __Leirof__"
        },

        "assassin" : {
            "title": "🗡️• TheGuill84" , 
            "desc": "TheGuill84 remporte cette partie.", 
            "Winner": "de __TheGuill84__"
        },

        "ange" : {
            "title": "😇 • L'ange" , 
            "desc": "L'ange remporte cette partie.", 
            "Winner": "de l'__ange__"
        },

        "ange2" : {
            "title": "😇 • L'ange" , 
            "desc": "A la suite du vote, l'ange ce suicide en voyant qu'il y'a eu aucun mort le premier jour, l'ange remporte cette partie.", 
            "Winner": "de l'__ange__"
        },

        "fou" : {
            "title": "🃏 • Du fou" , 
            "desc": "Le fou remporte cette victoire.", 
            "Winner": "du __fou__"
        },

        "traqueur" : {
            "title": "🧟‍♂️ • De l'Overlord" , 
            "desc": "L'Overlord' remporte cette partie.", 
            "Winner": "de l'__Overlord__"
        },
    },
    
    "ROLE_LG": {
        "Enfant_sauvage": {"name": "👦 • Frigiel",
            "desc_village": "Frigiel a **30** secondes pour choisir son idole.",
            "desc_channel": "Vous avez **30** secondes pour choisir votre idole:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role": "Frigiel",
            "sleep": "Frigiel s'est endormi."
        },
        "Chien_loup": {"name": "🐶 • Double-Face",
            "villa": "Double-Face a **30** secondes pour choisir un camp.",
            "chann": "Vous disposez de **30** secondes pour choisir votre camp:\n🐺 Loup Garou \n🧒 Village.",
            "role" : "Double-Face",
            "sleep": "Double-Face s'est endormi."
        },

        "Cupidon": {"name": "💘 • Mayukow",
            "villa": "Mayukow a **30** secondes pour choisir ses amoureux.",
            "chann": "Vous pouvez choisir vos amoureux quant vous le souhaitez jusqu'au jour 2:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Mayukow",
            "sleep": "Mayukow s'est endormi."
        },

        "Voleur": {"name": ":spy: • Evan91380",
            "villa": "Evan91380 a **30** secondes pour échanger son rôle.",
            "chann": "Vous disposez de 30 secondes pour échanger votre rôle avec un des joueurs:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Evan91380",
            "sleep": "Evan91380 s'est endormi."
        },

        "Hacker": {"name": "💻 • Z_runner",
            "villa": "Z_runner a **30** secondes pour choisir de passer une nuit ou un jour.",
            "chann": "Vous avez **30** secondes pour choisir de passer une nuit ou un jour \n🌕 Passer la nuit.\n🌞 Passer le jour.",
            "role" : "Z_runner",
            "sleep": "Z_runner s'est endormi."
        },

        "Brouilleur": {"name": "🛰 • Le brouilleur",
            "villa": "Le brouilleur a **30** secondes pour choisir de brouiller les votes nocturne.",
            "chann": "Vous avez **30** secondes pour choisir de brouiller les votes nocturne.",
            "role" : "Brouilleur",
            "sleep": "Le brouilleur s'est endormi."
        },

        "Oracle": {"name": "👴 • L'oracle",
            "villa": "L'oracle a **30** secondes pour regarder 2 cartes.",
            "chann": "Vous avez **30** secondes pour regarder 2 cartes:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Oracle",
            "sleep": "l'oracle s'est endormi."
        },

        "Oracle_oeil": {"name": "👴 • L'oracle au 3 ème œil",
            "villa": "L'oracle a **30** secondes pour regarder 2 cartes.",
            "chann": "Vous avez **30** secondes pour regarder 2 cartes:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Oracle",
            "sleep": "l'oracle s'est endormi."
        },

        "Voyante": {"name": "👁 • L'oracle",
            "villa": "L'oracle a **30** secondes pour regarder la carte d'un joueur.",
            "chann": "Vous avez **30** secondes pour regarder la carte d'un joueur:\nxxx ", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Oracle",
            "sleep": "L'oracle s'est endormie."
        },

        "Voyante_bavard": {"name": "👁 • L'oracle Bavard",
            "villa": "L'oracle Bavard a **30** secondes pour regarder la carte d'un joueur.",
            "chann": "Vous avez **30** secondes pour regarder la carte d'un joueur:\nxxx ", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Oracle Bavard",
            "sleep": "L'oracle Bavard s'est endormie."
        },

        "Renard": {"name": "🦊 • fantomitechno",
            "villa": "fantomitechno a **30** secondes pour renifler la carte d'un joueur.",
            "chann": "Vous avez **30** secondes pour renifler la carte d'un joueur:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "fantomitechno",
            "sleep": "fantomitechno s'est endormi."
        },

        "Montreur": {"name": "🐻 • Detecti-bot",
            "villa": "Detecti-bot a **30** secondes pour choisir deux personnes.",
            "chann": "Vous avez **30** secondes pour choisir vos 2 personnes\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Detecti-bot",
            "sleep": "Detecti-bot s'est endormi."
        },

        "Détective": {"name": "🔎 • Kolb",
            "villa": "Kolb a **30** secondes pour choisir 2 joueurs.",
            "chann": "Vous avez **30** secondes pour choisir 2 joueurs:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Kolb",
            "sleep": "Kolb s'est endormi"
        },

        "Salvateur": {"name": "🛡 • Boucli-bot",
            "villa": "Boucli-bot a **30** secondes pour protéger un joueur.",
            "chann": "Vous avez **30** secondes pour protéger un joueur d'une attaque nocturne:\nsss", //Don't edit "sss" and don't place other "sss"
            "role" : "Boucli-bot",
            "sleep": "Boucli-bot s'est endormi."
        },

        "Loups": {"name": "🐺 • Les traitres",
            "villa": "Les traitres ont **60** secondes pour voter leur victime.",
            "chann": "Vous avez **60** secondes pour choisir une victime:\nlll", //Don't edit "lll" and don't place other "lll"
            "role" : "Traitres",
            "sleep": "Les traitres se sont endormis."
        },

        "Boucher": {"name": "🥩 • Lola",
            "villa": "Lola a **30** secondes pour choisir d'échanger la victime des Traitres par un morceau de viande.",
            "chann": "Vous avez **30** secondes pour choisir de détourné les traitres sur une fausse victime ou de vous rendormir.",
            "role" : "Lola",
            "sleep": "Lola s'est endormi."
        },

        "Infect_père": {"name": "🐺 • Herobrine",
            "villa": "Herobrine a **30** secondes pour infecter un joueur.",
            "chann": "Vous avez **30** secondes pour choisir d'infecter ",
            "role" : "Herobrine",
            "sleep": "Herobrine s'est endormi."
        },

        "Grand_Méchant_Loup": {"name": "🐺 • Urf",
            "villa": "Urf a **30** secondes pour choisir une victime.",
            "chann": "Vous avez **30** secondes pour choisir une victime:\nlll", //Don't edit "lll" and don't place other "lll"
            "role" : "Urf",
            "sleep": "Urf s'est endormi."
        },

        "Loup_Vengeurs": {"name": "🐺 • Terminator",
            "villa": "Terminator a **30** secondes pour se venger de la mort d'un de ses traitres.",
            "chann": "Vous avez **30** secondes pour choisir une victime:\nlll", //Don't edit "lll" and don't place other "lll"
            "role" : "Terminator",
            "sleep": "Terminator s'est endormi."
        },

        "Loup_garou_blanc": {"name": "🐺 • MadTechno",
            "villa": "MadTechno a **30** secondes pour tuer un loup.",
            "chann": "Vous avez **30** secondes pour choisir une victime\nlgb", //Don't edit "lgb" and don't place other "lgb"
            "role" : "MadTechno",
            "sleep": "MadTechno s'est endormi."
        },

        "Assassin": {"name": "🗡 • TheGuill84",
            "villa": "TheGuill84 a **30** secondes pour tuer sa victime.",
            "chann": "Vous avez **30** secondes pour choisir une victime:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "TheGuill84",
            "sleep": "TheGuill84 s'est endormi"
        },

        "Traqueur_résurrecteur": {"name": "🧟‍♂️ • Overlord",
            "villa": "Overlord a **30** secondes pour tuer sa/ses victime(s).",
            "chann": "Vous avez **30** secondes pour choisir une victime:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Overlord",
            "sleep": "Overlord s'est endormi"
        },

        "Joueur_de_flûte": {"name": "🎺 • Leirof",
            "villa": "Leirof a **30** secondes pour choisir les nouveaux flûtistes.",
            "chann": "Vous avez **30** secondes pour choisir vos 2 nouveaux flûtistes:\nfff", //Don't edit "fff" and don't place other "fff"
            "role" : "Leirof",
            "sleep": "Leirof s'est endormi."
        },

        "Toxico": {"name": "🚬 • Le toxico",
            "villa": "Le toxico a **30** secondes pour choisir les ses victimes.",
            "chann": "Vous avez **30** secondes pour choisir vos victimes. \n💀 Permet de tuer tous les toxicos, attention si vous commencez à rendre des gens toxico vous ne pourrez pas utiliser cette fonction. \nttt",
            "role" : "Toxico",
            "sleep": "Le toxico s'est endormi."
        },

        "Sorcière": {"name": "⚗ • NewGlace",
            "villa": "NewGlace a **30** secondes pour utiliser l'une de ses potions.",
            "chann": "",
            "role" : "NewGlace",
            "sleep": "NewGlace s'est endormie."
        },

        "Momie": {"name": "<:momi:619185764286070784> • l'Enchanteur",
            "villa": "l'Enchanteur a **30** secondes pour momifier une personne.",
            "chann": "Vous avez **30** secondes pour momifier une personne cela l'empêchera de voter\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Enchanteur",
            "sleep": "l'Enchanteur s'est endormi."
        },

        "Corbeau": {"name": "<:corbeau:619191960392957971> • Billy",
            "villa": "Billy a **30** secondes pour choisir une personne.",
            "chann": "Vous avez **30** secondes pour choisir une personne\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Billy",
            "sleep": "Billy s'est endormi."
        },

        "Médium": {"name": "🔮 • Conseil",
            "villa": "Conseil a **30** secondes pour parler au mort.",
            "chann": "Vous avez **30** secondes pour communiquer avec les morts.",
            "role" : "Conseil",
            "sleep": "Conseil s'est endormi."
        },

        "Chaman": {"name": "🔮 • Le chaman",
            "villa": "Le chaman a **30** secondes pour parler au mort.",
            "chann": "Vous avez **30** secondes pour communiquer avec les morts.",
            "role" : "Chaman",
            "sleep": "Le chaman s'est endormi."
        },

        "Dompteur": {"name": "🦁 • Roger",
            "villa": "",
            "chann": "Vous avez **30** secondes pour choisir un loup mort à apprivoiser.\nddd", //Don't edit "ddd" and don't place other "ddd"
            "role" : "Roger",
            "sleep": ""
        },

        "Tireur": {"name": "🔫 • fant0mib0t",
            "villa": "",
            "chann": "Vous avez **30** secondes pour choisir une personne à tuer.\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "fant0mib0t",
            "sleep": ""
        },

        "Loup_Chaman": {"name": "🐺 • Le sbire mage",
            "villa": "",
            "chann": "Vous avez **30** secondes pour choisir une personne à chamaniser.\nlll", //Don't edit "lll" and don't place other "lll"
            "role" : "Sbire mage",
            "sleep": ""
        },

        "Chasseur": {"name": "🔫 • Guep",
            "villa": "Guep a **30** secondes pour utiliser sa dernière balle.",
            "chann": "Vous avez **30** secondes pour choisir une victime.\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Guep",
            "sleep": "Guep meurt"
        },

        "Chasseur_aveugle": {"name": "🔫 • Notch",
            "villa": "Notch a **30** secondes pour utiliser sa dernière balle.",
            "chann": "Vous avez **30** secondes pour choisir une victime.\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Notch",
            "sleep": "Notch meurt"
        },

        "Soeurs": {"name": "👭 • Les sœurs",
            "villa": "",
            "chann": "Vous pouvez discuter.",
            "role" : "Sœurs",
            "sleep": "Vous vous endormez."
        },

        "Jumeaux": {"name": "👬 • Les jumeaux",
            "villa": "",
            "chann": "Vous pouvez discuter.",
            "role" : "Jumeaux",
            "sleep": "Vous vous endormez."
        },

        "Petite_fille": {"name": "👧 • Alizée",
            "villa": "Alizée a **15** secondes pour choisir d'ouvrir les yeux.",
            "chann": "vous avez **15** secondes pour choisir d'ouvrir les yeux.",
            "role" : "Alizée",
            "sleep": "Alizée s'est endormie."
        },

        "Servante_dévouée": {"name": "👩 • \_RedCoal\_",
            "villa": "La servante dévoué à **15** secondes pour choisir d'échanger leurs cartes.",
            "chann": "vous avez **15** secondes pour choisir d'échanger votre carte avec xxx.", //Don't edit "xxx" and don't place other "xxx"
            "role" : "\_RedCoal\_",
            "sleep": "\_RedCoal\_ s'est endormie."
        }
    },
    "LG_TEXT": {
            "VOICE_WW": "Loup Garou Vocal",
            "CEMETERIE": "Cimetière",
            "GAME_WEREWOLF": "__Partie__ ► `LoupGarou`",
            "SISTER": "Sœurs",
            "TWIN_BROTHER": "Jumeaux",
            "IDOLE_DIES": "Votre idole meurt, les traitres en vous voyant seule décide de vous recueillire.",
            "IDOLE_DIES_MSG": "L'idole de Frigiel meurt, un nouveau traitre rejoint équipe",
            "VILLAGE_FALLS_ASLEEP": "Le village s'endort",
            "MAYORAL": "Élection du maire",
            "VILLAGE_NOT_ELECT_MAYOR": "Le village n'a élu personne en tant que maire.\nLe village s'endort",
            "MAYOR_NONE": "[Maire] - Aucun",
            "MAYOR_ELECTED": "Le village vient d'élire",
            "MAYOR_ELECTED1": "en tant que maire.\nLe village s'endort",
            "MAYOR_NONE2": "[Maire] - ",
            "WOLFDOG_MSG1": "Vous avez choisi le camp des **Traitres** ",
            "WOLFDOG_MSG2": "Double-Face vient de rejoindre votre camp",
            "WOLFDOG_MSG3": "Vous avez choisi le camp des **Villageois**",
            "COUPLE_MESSAGE": "Vous venez de recevoir une flèche, cette flèche vous rend fou amoureux de",
            "EXCHANGE_THIEFL": "Evan91380 a échangé votre rôle",
            "LITTLE_GIRL": "Alizée",
            "OPEN_EYES": "secondes pour choisir d'ouvrir les yeux",
            "LITTLE_GIRL2": "Alizée",
            "CHOSE_OPEN_EYES": "Vous avez choisi de ne pas ouvrir les yeux.",
            "WOLVES_SEEN": "Vous venez de vous faire remarquer par les traitres",
            "LOOKING_YOU": "est entrain de vous regarder",
            "WITH_WOLVES": "fait partie du camp des Traitres",
            "THE_WOLVES": "Les traitres",
            "WOLVES": "Traitres",
            "IS_A_WEREWOLF": "est un **traitre**",
            "SMELL": "L'odeur de",
            "REMIND_SOMEONE": "vous rappel quelqu'un, vous comprenez qu'il s'agit du sbire amnésique",
            "SMELL_REMINDS": "La voie des traitres, vous rappel des ancien souvenirs, vous vous souvenez être un sbire",
            "GHOST_VOTED": "Le spectateur a voté pour",
            "GHOST_CANCELED": "Le spectateur a annulé son vote",
            "POISON": "Commande de poison",
            "HEAL": "Commande de soin",
            "RESURRECTION": "Commande de résurrection",
            "NEXT_ROUND": "Vous avez déjà commencé à rendre des joueurs toxico, attendez le prochain tour.",
            "SUFFOCATED": "vient de s'asphyxier.",
            "SKIP_NIGHT2": "Z_runner décide de passer la nuit.",
            "INFECTED": "Vous venez d'__infecter__",
            "ERROR_INFECTED": "Pendant la phase de transformation de l'infect quelque chose c'est passé et il meurt de ça transformation.",
            "INFECTED_MESSAGE": "**Herobrine** vient de vous infecter !\n*Ce qui signifie que vous faites maintenant partie des Traitres.*",
            "ALIVE_TO_EAT": "Les traitres ont senties votre odeur, ils ont laissé la victime en vie pour vous manger.",
            "PIECE_OF_MEAT": "Vous avez protéger la victime de votre corp.",
            "ALREADY_FLAUTIST": "Ce joueur est déjà membre de gunivers",
            "BECAME_FLAUTIST": "est devenu un membre de gunivers.",
            "ALREADY_TOXICO": "Il est déjà toxico.",
            "TOXICO": "est devenu un toxico.",
            "MED_MESSAGE": "Conseil a ressuscité",
            "DROP_POISON": "Vous jetez votre commande de poison sur",
            "DROP_HEAL": "Vous jetez votre commande de soin sur",
            "ALREADY_BEAR": "Votre detecteur est déjà à côté de lui.",
            "BEAR": "Votre detecteur c'est mis à côté de",
            "MUMMIFIED": "Vous venez d'envouter",
            "VOVO_SEE": [0, "du **Sbire**", "du **Sbire déguisé**", "du **Sbire mage**", "d'**Urf**", "de **Terminator**", "de **Herobrine**", "du **Villageois**", "de **Mayukow**", "de l'**Idiot du village**", "du **bouc émissaire**", "du **Cavalier**", "du **Fantôme**", "du **Roublard**", "de l'**Oracle**", "de l'**Oracle bavard**", "de **fantomitechno**", "de l'**Oracle**", "de l'**Oracle au 3e oeil**", "du **Detecti-bot**", "de **Kolb**", "d'**Alizée**", "de la **Sœur**", "du **Jumeaux**", "de l'**Ancien**", "du **Nain**", "du **Renard**", "de **Lola**", "du **Boucli-bot**", "de **NewGlace**", "du **Chaman**", "de **Conseil**", "de **Roger**", "du **Chevalier a l'épée rouillée**", "de **Notch**", "de **Guep**", "de **fant0mib0t**", "de **Billy**", "de l'**Enchanteur**", "de **Z_runner**", "du **Brouilleur**", "de **Double-Face**", "du **Sbire amnésique**", "de **Frigiel**", "de **\_RedCoal\_**", "de **Evan91380**", "du **Overlord**", "de **MadTechno**", "de **TheGuill84**", "du **Toxico**", "de **Leirof**", "de l'**Ange**", "du **Fou**"],
            "TALKATIVE": "L'oracle bavard a regardé la carte",
            "THIRD_EYE": "L'oracle au 3e œil a regardé la carte",
            "FOX": "Vous avez reniflé une carte qui est",
            "ROLES_LG": [0, "Sbire", "Sbire déguisé", "Sbire mage", "Urf", "Terminator", "Herobrine", "Villageois", "Mayukow", "Idiot du village", "bouc émissaire", "Cavalier", "Fantôme", "Roublard", "Oracle", "Oracle bavard", "fantomitechno", "Oracle", "Oracle au 3e oeil", "Detecti-bot", "Kolb", "Alizée", "Sœur", "Jumeaux", "Ancien", "Nain", "Renard", "Lola", "Boucli-bot", "NewGlace", "Chaman", "Conseil", "Roger", "Chevalier a l'épée rouillée", "Notch", "Guep", "fant0mib0t", "Billy", "Enchanteur", "Z_runner", "Brouilleur", "Double-Face", "Sbire amnésique", "Frigiel", "\_RedCoal\_", "Evan91380", "Overlord", "MadTechno", "TheGuill84", "Toxico", "Leirof", "Ange", "Fou"],
            "PLANTED_SWORD": "a planté son épée dans",
            "HUNTER_DIES": "Guep meurt",
            "SHOT": "Vous venez de tirer sur",
            "BULLET_ON": "et utilise sa dernière flèche sur",
            "SAVIOR_EFFECT": "mais celui-ci était protégé par Boucli-bot",
            "SKIP_DAY_EFFECT": "Z_runner décide de passer le jour.",
            "VILLAGE_ABLE_VOTE": "Le village pourra voter dans",
            "ROLES_LG2": [0, "le **Sbire**", "le **Sbire déguisé**", "le **Sbire mage**", "**Urf**", "**Terminators**", "**Herobrine**", "le **Villegeois**", "**Mayukow**", "l'**Idiot le villege**", "le **bouc émissaire**", "le **Cavalier**", "le **Fantôme**", "le **Roublerd**", "l'**Oracle**", "l'**Oracle bavard**", "**fantomitechno**", "l'**Oracle**", "l'**Oracle au 3e oeil**", "le **Detecti-bot**", "**Kolb**", "**Alizée**", "la **Sœur**", "le **Jumeaux**", "l'**Ancien**", "La **Doyenne**", "le **Morle**", "**Lola**", "le **Boucli-bot**", "**NewGlace**", "le **Chaman**", "**Conseil**", "**Roger**", "le **Chevalier a l'épée rouillée**", "**Notch**", "**Guep**", "**fant0mib0t**", "**Billy**", "l'**Enchanteur**", "**Z_runner**", "le **Brouilleur**", "**Double-Face**", "le **Sbire amnésique**", "**Frigiel**", "**\_RedCoal\_**", "**Evan91380**", "l'**Overlord**", "**MadTechno**", "**TheGuill84**", "le **Toxico**", "**Leirof**", "l'**Ange**", "le **Fou**"],
            "KILL_2_EYES": "vient de tirer entre les deux yeux de",
            "SHAMANIZED": "Vous avez __modifier__",
            "RESURRECTION2": "Roger viens de ressusciter",
            "FORMULA": "qui était traitre mais si sa formule fonctionne correctement",
            "BECOME_VILLAGER": "deviens un villageois.",
            "FORMULA_NOT_WORK": "La formule de Roger n'a pas fonctionné, vous restez traitre.",
            "FORMULA_WORK": "La formule de Roger n'a pas fonctionné",
            "REMAINS": "reste un traitre.",
            "FORMULA_WORKED": "La formule de Roger a fonctionné, vous devenez villageois.",
            "VILLAGE_CAN_VOTE": "Le village peut voter.",
            "THE_VILLAGE": "Les villageois",
            "THE_VILLAGER_UNABLE": "Le village n'arrive pas à délibérer.",
            "SCAPEGOAT": "Le village n'arrive pas à délibérer mais ils décident de ce déchaîner sur le **Bouc émissaire** qui est",
            "MAID_WOLF": "\_RedCoal\_ fait maintenant partie du camp des Traitres.",
            "VILLAGE_ELIMINATE": "Le village a décidé d'éliminer",
            "HORSEMAN": "Le membre de la Legion Perdu",
            "HORSEMAN2": "est votre cible. Pour vous montrer son innocence, il sacrifie son bien le plus précieux : son cheval. Le village décide d'épargner sa vie.",
            "LAST_BULLET": "Vous venez d'utiliser votre dernière flèche sur",
            "CANT_MUMMIFIED": "vous ne pouvez pas voter vous avez été enchanté.",
            "INFECTED_S": "modifié",
        }
}
