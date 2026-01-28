// FRENCH MASTERY - COMPREHENSIVE GRAMMAR DATABASE

const FRENCH_GRAMMAR = {
    articles: {
        title: "Articles (Definite & Indefinite)",
        level: "beginner",
        content: `Articles are small words that come before nouns. French has both definite (the) and indefinite (a/an) articles that must agree in gender and number with the noun.`,
        sections: [
            {
                subtitle: "Definite Articles (The)",
                explanation: "Used when referring to specific things or general concepts.",
                rules: [
                    { rule: "le", usage: "masculine singular", example: "le livre (the book)" },
                    { rule: "la", usage: "feminine singular", example: "la table (the table)" },
                    { rule: "l'", usage: "before vowel/h", example: "l'eau (the water), l'homme (the man)" },
                    { rule: "les", usage: "all plurals", example: "les livres (the books)" }
                ]
            },
            {
                subtitle: "Indefinite Articles (A/An/Some)",
                explanation: "Used when referring to unspecified things.",
                rules: [
                    { rule: "un", usage: "masculine singular", example: "un livre (a book)" },
                    { rule: "une", usage: "feminine singular", example: "une table (a table)" },
                    { rule: "des", usage: "all plurals", example: "des livres (some books)" }
                ]
            },
            {
                subtitle: "Partitive Articles (Some/Any)",
                explanation: "Used for unspecified quantities of uncountable nouns.",
                rules: [
                    { rule: "du", usage: "masculine singular", example: "du pain (some bread)" },
                    { rule: "de la", usage: "feminine singular", example: "de la confiture (some jam)" },
                    { rule: "de l'", usage: "before vowel/h", example: "de l'eau (some water)" },
                    { rule: "des", usage: "plural", example: "des fruits (some fruits)" }
                ]
            }
        ],
        examples: [
            { french: "Je mange le gâteau.", english: "I eat the cake." },
            { french: "Elle achète une robe.", english: "She buys a dress." },
            { french: "Nous buvons du café.", english: "We drink (some) coffee." },
            { french: "Les enfants jouent dans le parc.", english: "The children play in the park." }
        ],
        tips: [
            "Always learn nouns with their article to remember the gender",
            "Articles contract with 'à' and 'de': à + le = au, de + le = du",
            "In negative sentences, un/une/des become de/d'"
        ]
    },
    genderNumber: {
        title: "Gender and Number Agreement",
        level: "beginner",
        content: `In French, all nouns have a gender (masculine or feminine) and number (singular or plural). Adjectives must agree with the noun they describe.`,
        sections: [
            {
                subtitle: "Making Nouns Plural",
                explanation: "Most nouns add -s to form the plural.",
                rules: [
                    { rule: "Add -s", usage: "most nouns", example: "livre → livres" },
                    { rule: "Add -x", usage: "nouns ending in -eau, -au, -eu", example: "bateau → bateaux" },
                    { rule: "Change -al to -aux", usage: "nouns ending in -al", example: "animal → animaux" },
                    { rule: "No change", usage: "nouns ending in -s, -x, -z", example: "fils → fils" }
                ]
            },
            {
                subtitle: "Adjective Agreement",
                explanation: "Adjectives change form based on the noun they modify.",
                rules: [
                    { rule: "Add -e", usage: "feminine singular", example: "petit → petite" },
                    { rule: "Add -s", usage: "masculine plural", example: "petit → petits" },
                    { rule: "Add -es", usage: "feminine plural", example: "petit → petites" },
                    { rule: "Irregular forms", usage: "some adjectives", example: "beau → belle, vieux → vieille" }
                ]
            }
        ],
        examples: [
            { french: "Un grand homme / Une grande femme", english: "A tall man / A tall woman" },
            { french: "Les beaux jardins", english: "The beautiful gardens" },
            { french: "Des robes blanches", english: "White dresses" }
        ],
        tips: [
            "Adjectives usually come after the noun in French",
            "Some common adjectives (BANGS) come before: Beauty, Age, Number, Goodness, Size",
            "The final consonant is usually silent in masculine but pronounced in feminine"
        ]
    },
    pronouns: {
        title: "Subject and Object Pronouns",
        level: "beginner",
        content: `Pronouns replace nouns to avoid repetition. French has subject pronouns and various object pronouns.`,
        sections: [
            {
                subtitle: "Subject Pronouns",
                explanation: "Used as the subject of a verb.",
                rules: [
                    { rule: "je", usage: "I", example: "Je parle français." },
                    { rule: "tu", usage: "you (informal)", example: "Tu parles français." },
                    { rule: "il/elle/on", usage: "he/she/one", example: "Il parle français." },
                    { rule: "nous", usage: "we", example: "Nous parlons français." },
                    { rule: "vous", usage: "you (formal/plural)", example: "Vous parlez français." },
                    { rule: "ils/elles", usage: "they", example: "Ils parlent français." }
                ]
            },
            {
                subtitle: "Direct Object Pronouns",
                explanation: "Replace the direct object of a verb.",
                rules: [
                    { rule: "me/m'", usage: "me", example: "Il me voit." },
                    { rule: "te/t'", usage: "you", example: "Je te connais." },
                    { rule: "le/la/l'", usage: "him/her/it", example: "Je le mange." },
                    { rule: "nous", usage: "us", example: "Elle nous appelle." },
                    { rule: "vous", usage: "you", example: "Je vous entends." },
                    { rule: "les", usage: "them", example: "Je les aime." }
                ]
            },
            {
                subtitle: "Indirect Object Pronouns",
                explanation: "Replace the indirect object (to/for someone).",
                rules: [
                    { rule: "me/m'", usage: "to me", example: "Il me parle." },
                    { rule: "te/t'", usage: "to you", example: "Je te donne le livre." },
                    { rule: "lui", usage: "to him/her", example: "Je lui téléphone." },
                    { rule: "nous", usage: "to us", example: "Elle nous écrit." },
                    { rule: "vous", usage: "to you", example: "Je vous réponds." },
                    { rule: "leur", usage: "to them", example: "Je leur parle." }
                ]
            }
        ],
        examples: [
            { french: "Je le vois tous les jours.", english: "I see him every day." },
            { french: "Elle lui a donné un cadeau.", english: "She gave him/her a gift." },
            { french: "Nous leur avons téléphoné.", english: "We called them." }
        ],
        tips: [
            "Object pronouns come before the verb in French",
            "In compound tenses, they come before the auxiliary verb",
            "In positive commands, pronouns come after the verb with a hyphen"
        ]
    },
    presentTense: {
        title: "Present Tense (Le Présent)",
        level: "beginner",
        content: `The present tense describes actions happening now, habitual actions, and general truths. French verbs are divided into three groups based on their infinitive endings.`,
        sections: [
            {
                subtitle: "-ER Verbs (First Group)",
                explanation: "The largest and most regular group. Remove -er and add endings.",
                rules: [
                    { rule: "je -e", usage: "parler", example: "je parle" },
                    { rule: "tu -es", usage: "parler", example: "tu parles" },
                    { rule: "il/elle -e", usage: "parler", example: "il parle" },
                    { rule: "nous -ons", usage: "parler", example: "nous parlons" },
                    { rule: "vous -ez", usage: "parler", example: "vous parlez" },
                    { rule: "ils/elles -ent", usage: "parler", example: "ils parlent" }
                ]
            },
            {
                subtitle: "-IR Verbs (Second Group)",
                explanation: "Regular -ir verbs add -iss- in plural forms.",
                rules: [
                    { rule: "je -is", usage: "finir", example: "je finis" },
                    { rule: "tu -is", usage: "finir", example: "tu finis" },
                    { rule: "il/elle -it", usage: "finir", example: "il finit" },
                    { rule: "nous -issons", usage: "finir", example: "nous finissons" },
                    { rule: "vous -issez", usage: "finir", example: "vous finissez" },
                    { rule: "ils/elles -issent", usage: "finir", example: "ils finissent" }
                ]
            },
            {
                subtitle: "-RE Verbs (Third Group)",
                explanation: "Remove -re and add endings.",
                rules: [
                    { rule: "je -s", usage: "vendre", example: "je vends" },
                    { rule: "tu -s", usage: "vendre", example: "tu vends" },
                    { rule: "il/elle -", usage: "vendre", example: "il vend" },
                    { rule: "nous -ons", usage: "vendre", example: "nous vendons" },
                    { rule: "vous -ez", usage: "vendre", example: "vous vendez" },
                    { rule: "ils/elles -ent", usage: "vendre", example: "ils vendent" }
                ]
            }
        ],
        examples: [
            { french: "Je travaille à Paris.", english: "I work in Paris." },
            { french: "Elle finit son travail à six heures.", english: "She finishes work at six." },
            { french: "Nous vendons des voitures.", english: "We sell cars." }
        ],
        tips: [
            "The endings -e, -es, -ent are silent",
            "Learn the most common irregular verbs: être, avoir, aller, faire",
            "The present can also express near future with context"
        ]
    },
    passeCompose: {
        title: "Past Tense (Le Passé Composé)",
        level: "intermediate",
        content: `The passé composé expresses completed actions in the past. It's formed with an auxiliary verb (avoir or être) plus the past participle.`,
        sections: [
            {
                subtitle: "Formation with Avoir",
                explanation: "Most verbs use avoir as their auxiliary.",
                rules: [
                    { rule: "-ER verbs", usage: "-é", example: "parlé (spoken)" },
                    { rule: "-IR verbs", usage: "-i", example: "fini (finished)" },
                    { rule: "-RE verbs", usage: "-u", example: "vendu (sold)" },
                    { rule: "Irregular", usage: "must memorize", example: "fait, dit, pris, vu" }
                ]
            },
            {
                subtitle: "Formation with Être",
                explanation: "Verbs of motion and reflexive verbs use être. The past participle agrees with the subject.",
                rules: [
                    { rule: "DR MRS VANDERTRAMP", usage: "memory aid", example: "Devenir, Revenir, Monter, Rester, Sortir..." },
                    { rule: "Reflexive verbs", usage: "always être", example: "Je me suis lavé(e)" },
                    { rule: "Agreement", usage: "add -e for feminine", example: "Elle est partie" },
                    { rule: "Agreement", usage: "add -s for plural", example: "Ils sont partis" }
                ]
            }
        ],
        examples: [
            { french: "J'ai mangé une pomme.", english: "I ate an apple." },
            { french: "Elle est allée au cinéma.", english: "She went to the cinema." },
            { french: "Nous nous sommes levés tôt.", english: "We got up early." },
            { french: "Ils ont fini leurs devoirs.", english: "They finished their homework." }
        ],
        tips: [
            "DR MRS VANDERTRAMP: Devenir, Revenir, Monter, Rester, Sortir, Venir, Aller, Naître, Descendre, Entrer, Retourner, Tomber, Rentrer, Arriver, Mourir, Partir",
            "With avoir, past participle only agrees with a preceding direct object",
            "With être, past participle always agrees with subject"
        ]
    },
    imparfait: {
        title: "Imperfect Tense (L'Imparfait)",
        level: "intermediate",
        content: `The imperfect describes ongoing or repeated actions in the past, background descriptions, and states of being.`,
        sections: [
            {
                subtitle: "Formation",
                explanation: "Take the nous form of present tense, remove -ons, add imperfect endings.",
                rules: [
                    { rule: "je -ais", usage: "all verbs", example: "je parlais" },
                    { rule: "tu -ais", usage: "all verbs", example: "tu parlais" },
                    { rule: "il/elle -ait", usage: "all verbs", example: "il parlait" },
                    { rule: "nous -ions", usage: "all verbs", example: "nous parlions" },
                    { rule: "vous -iez", usage: "all verbs", example: "vous parliez" },
                    { rule: "ils/elles -aient", usage: "all verbs", example: "ils parlaient" }
                ]
            },
            {
                subtitle: "Uses",
                explanation: "Different from passé composé in focus and meaning.",
                rules: [
                    { rule: "Habitual actions", usage: "used to", example: "Je jouais au foot." },
                    { rule: "Descriptions", usage: "what things were like", example: "Il faisait beau." },
                    { rule: "Background", usage: "setting the scene", example: "Les oiseaux chantaient." },
                    { rule: "Age/time", usage: "ongoing states", example: "J'avais dix ans." }
                ]
            }
        ],
        examples: [
            { french: "Quand j'étais jeune, j'habitais à Lyon.", english: "When I was young, I lived in Lyon." },
            { french: "Il pleuvait quand je suis sorti.", english: "It was raining when I went out." },
            { french: "Nous allions à la plage chaque été.", english: "We used to go to the beach every summer." }
        ],
        tips: [
            "être is the only verb with an irregular stem: ét-",
            "The imperfect sets the scene, passé composé tells what happened",
            "Time markers: souvent, toujours, chaque jour, d'habitude"
        ]
    },
    futurSimple: {
        title: "Future Tense (Le Futur Simple)",
        level: "intermediate",
        content: `The future simple expresses actions that will happen. It's formed by adding endings to the infinitive (or irregular stem).`,
        sections: [
            {
                subtitle: "Formation",
                explanation: "Add future endings to the infinitive (-re verbs drop the final -e).",
                rules: [
                    { rule: "je -ai", usage: "all verbs", example: "je parlerai" },
                    { rule: "tu -as", usage: "all verbs", example: "tu parleras" },
                    { rule: "il/elle -a", usage: "all verbs", example: "il parlera" },
                    { rule: "nous -ons", usage: "all verbs", example: "nous parlerons" },
                    { rule: "vous -ez", usage: "all verbs", example: "vous parlerez" },
                    { rule: "ils/elles -ont", usage: "all verbs", example: "ils parleront" }
                ]
            },
            {
                subtitle: "Irregular Stems",
                explanation: "Some common verbs have irregular future stems.",
                rules: [
                    { rule: "être → ser-", usage: "to be", example: "je serai" },
                    { rule: "avoir → aur-", usage: "to have", example: "j'aurai" },
                    { rule: "aller → ir-", usage: "to go", example: "j'irai" },
                    { rule: "faire → fer-", usage: "to do", example: "je ferai" },
                    { rule: "venir → viendr-", usage: "to come", example: "je viendrai" },
                    { rule: "voir → verr-", usage: "to see", example: "je verrai" },
                    { rule: "pouvoir → pourr-", usage: "can", example: "je pourrai" },
                    { rule: "vouloir → voudr-", usage: "to want", example: "je voudrai" }
                ]
            }
        ],
        examples: [
            { french: "Demain, j'irai au marché.", english: "Tomorrow, I will go to the market." },
            { french: "Elle sera médecin un jour.", english: "She will be a doctor one day." },
            { french: "Nous aurons beaucoup de travail.", english: "We will have a lot of work." }
        ],
        tips: [
            "The near future (aller + infinitive) is more common in speech",
            "Future endings are the same as avoir in present tense",
            "After quand/lorsque (when), use future in both clauses"
        ]
    },
    conditionnel: {
        title: "Conditional Mood (Le Conditionnel)",
        level: "intermediate",
        content: `The conditional expresses hypothetical situations, polite requests, and what would happen under certain conditions.`,
        sections: [
            {
                subtitle: "Formation",
                explanation: "Use the future stem + imperfect endings.",
                rules: [
                    { rule: "je -ais", usage: "all verbs", example: "je parlerais" },
                    { rule: "tu -ais", usage: "all verbs", example: "tu parlerais" },
                    { rule: "il/elle -ait", usage: "all verbs", example: "il parlerait" },
                    { rule: "nous -ions", usage: "all verbs", example: "nous parlerions" },
                    { rule: "vous -iez", usage: "all verbs", example: "vous parleriez" },
                    { rule: "ils/elles -aient", usage: "all verbs", example: "ils parleraient" }
                ]
            },
            {
                subtitle: "Uses",
                explanation: "Various functions of the conditional.",
                rules: [
                    { rule: "Polite requests", usage: "would like", example: "Je voudrais un café." },
                    { rule: "Hypothetical", usage: "would do", example: "J'irais si je pouvais." },
                    { rule: "Reported speech", usage: "said they would", example: "Il a dit qu'il viendrait." },
                    { rule: "Advice", usage: "should", example: "Tu devrais étudier." }
                ]
            }
        ],
        examples: [
            { french: "Je voudrais réserver une table.", english: "I would like to book a table." },
            { french: "Si j'avais de l'argent, j'achèterais une maison.", english: "If I had money, I would buy a house." },
            { french: "Il a dit qu'il viendrait demain.", english: "He said he would come tomorrow." }
        ],
        tips: [
            "Same stems as future tense, same endings as imperfect",
            "Si + imparfait, conditionnel (If + imperfect, conditional)",
            "Very useful for polite expressions in shops and restaurants"
        ]
    },
    subjonctif: {
        title: "Subjunctive Mood (Le Subjonctif)",
        level: "advanced",
        content: `The subjunctive expresses doubt, wishes, emotions, and subjective views. It's used after certain conjunctions and expressions.`,
        sections: [
            {
                subtitle: "Formation",
                explanation: "Take the ils form of present, remove -ent, add subjunctive endings.",
                rules: [
                    { rule: "que je -e", usage: "regular", example: "que je parle" },
                    { rule: "que tu -es", usage: "regular", example: "que tu parles" },
                    { rule: "qu'il/elle -e", usage: "regular", example: "qu'il parle" },
                    { rule: "que nous -ions", usage: "regular", example: "que nous parlions" },
                    { rule: "que vous -iez", usage: "regular", example: "que vous parliez" },
                    { rule: "qu'ils/elles -ent", usage: "regular", example: "qu'ils parlent" }
                ]
            },
            {
                subtitle: "Triggers",
                explanation: "Expressions that require the subjunctive.",
                rules: [
                    { rule: "Wishes", usage: "vouloir que", example: "Je veux qu'il vienne." },
                    { rule: "Emotions", usage: "être content que", example: "Je suis content qu'elle soit là." },
                    { rule: "Doubt", usage: "douter que", example: "Je doute qu'il comprenne." },
                    { rule: "Necessity", usage: "il faut que", example: "Il faut que tu partes." },
                    { rule: "Conjunctions", usage: "avant que, pour que", example: "avant qu'il parte" }
                ]
            }
        ],
        examples: [
            { french: "Il faut que tu fasses tes devoirs.", english: "You must do your homework." },
            { french: "Je suis triste qu'elle soit malade.", english: "I'm sad that she is sick." },
            { french: "Bien qu'il pleuve, nous sortons.", english: "Although it's raining, we're going out." }
        ],
        tips: [
            "Learn irregular subjunctive forms: être (sois), avoir (aie), aller (aille), faire (fasse)",
            "After verbs of thinking/believing in negative = subjunctive",
            "The subjunctive is always preceded by que"
        ]
    },
    negation: {
        title: "Negation",
        level: "beginner",
        content: `French negation typically uses two parts that surround the verb. The basic negation is ne...pas (not).`,
        sections: [
            {
                subtitle: "Basic Negation",
                explanation: "ne comes before the verb, pas comes after.",
                rules: [
                    { rule: "ne...pas", usage: "not", example: "Je ne parle pas." },
                    { rule: "ne...jamais", usage: "never", example: "Je ne fume jamais." },
                    { rule: "ne...plus", usage: "no longer", example: "Je ne travaille plus." },
                    { rule: "ne...rien", usage: "nothing", example: "Je ne vois rien." },
                    { rule: "ne...personne", usage: "nobody", example: "Je ne connais personne." },
                    { rule: "ne...que", usage: "only", example: "Je n'ai que 10 euros." }
                ]
            },
            {
                subtitle: "With Compound Tenses",
                explanation: "Negation surrounds the auxiliary verb.",
                rules: [
                    { rule: "Position", usage: "around auxiliary", example: "Je n'ai pas mangé." },
                    { rule: "personne", usage: "after past participle", example: "Je n'ai vu personne." },
                    { rule: "rien", usage: "after auxiliary", example: "Je n'ai rien fait." }
                ]
            }
        ],
        examples: [
            { french: "Je ne comprends pas.", english: "I don't understand." },
            { french: "Elle n'a jamais visité Paris.", english: "She has never visited Paris." },
            { french: "Nous ne voyons personne.", english: "We don't see anyone." },
            { french: "Il n'y a plus de pain.", english: "There's no more bread." }
        ],
        tips: [
            "In casual speech, 'ne' is often dropped: Je sais pas",
            "Articles change after negation: un/une/des → de",
            "ne becomes n' before a vowel"
        ]
    },
    questions: {
        title: "Asking Questions",
        level: "beginner",
        content: `There are three main ways to form questions in French: intonation, est-ce que, and inversion.`,
        sections: [
            {
                subtitle: "Three Methods",
                explanation: "From informal to formal.",
                rules: [
                    { rule: "Intonation", usage: "informal, raise voice", example: "Tu viens?" },
                    { rule: "Est-ce que", usage: "neutral", example: "Est-ce que tu viens?" },
                    { rule: "Inversion", usage: "formal", example: "Viens-tu?" }
                ]
            },
            {
                subtitle: "Question Words",
                explanation: "Used with any method.",
                rules: [
                    { rule: "Qui", usage: "who", example: "Qui est là?" },
                    { rule: "Que/Qu'est-ce que", usage: "what", example: "Que fais-tu?" },
                    { rule: "Où", usage: "where", example: "Où habites-tu?" },
                    { rule: "Quand", usage: "when", example: "Quand arrives-tu?" },
                    { rule: "Comment", usage: "how", example: "Comment vas-tu?" },
                    { rule: "Pourquoi", usage: "why", example: "Pourquoi pleures-tu?" },
                    { rule: "Combien", usage: "how much/many", example: "Combien ça coûte?" },
                    { rule: "Quel(le)", usage: "which", example: "Quelle heure est-il?" }
                ]
            }
        ],
        examples: [
            { french: "Est-ce que tu parles français?", english: "Do you speak French?" },
            { french: "Où est la gare?", english: "Where is the station?" },
            { french: "Comment t'appelles-tu?", english: "What's your name?" },
            { french: "Pourquoi est-il parti?", english: "Why did he leave?" }
        ],
        tips: [
            "In inversion, add -t- between vowels: A-t-il mangé?",
            "Quel agrees with the noun: quel livre, quelle page",
            "Use qu'est-ce qui for 'what' as subject"
        ]
    },
    comparatives: {
        title: "Comparatives and Superlatives",
        level: "intermediate",
        content: `Comparatives compare two things, superlatives indicate the extreme degree of a quality.`,
        sections: [
            {
                subtitle: "Comparatives",
                explanation: "More than, less than, as...as",
                rules: [
                    { rule: "plus...que", usage: "more than", example: "Elle est plus grande que moi." },
                    { rule: "moins...que", usage: "less than", example: "Il est moins grand que toi." },
                    { rule: "aussi...que", usage: "as...as", example: "Je suis aussi grand que lui." },
                    { rule: "autant...que", usage: "as much/many as", example: "J'ai autant d'amis que toi." }
                ]
            },
            {
                subtitle: "Superlatives",
                explanation: "The most, the least",
                rules: [
                    { rule: "le/la/les plus", usage: "the most", example: "le plus grand" },
                    { rule: "le/la/les moins", usage: "the least", example: "le moins cher" },
                    { rule: "Position", usage: "after or before noun", example: "la plus belle ville / le film le plus long" }
                ]
            },
            {
                subtitle: "Irregular Forms",
                explanation: "Some adjectives have irregular comparatives.",
                rules: [
                    { rule: "bon → meilleur", usage: "good → better", example: "C'est meilleur." },
                    { rule: "bien → mieux", usage: "well → better", example: "Il va mieux." },
                    { rule: "mauvais → pire", usage: "bad → worse", example: "C'est pire." }
                ]
            }
        ],
        examples: [
            { french: "Paris est plus grand que Lyon.", english: "Paris is bigger than Lyon." },
            { french: "C'est le meilleur restaurant de la ville.", english: "It's the best restaurant in the city." },
            { french: "Elle chante mieux que moi.", english: "She sings better than me." }
        ],
        tips: [
            "bon/meilleur for adjectives, bien/mieux for adverbs",
            "de replaces que after superlatives",
            "The article in superlatives agrees with the noun"
        ]
    },
    reflexiveVerbs: {
        title: "Reflexive Verbs (Les Verbes Pronominaux)",
        level: "intermediate",
        content: `Reflexive verbs indicate that the subject performs an action on itself. They always use reflexive pronouns.`,
        sections: [
            {
                subtitle: "Reflexive Pronouns",
                explanation: "Match the subject pronoun.",
                rules: [
                    { rule: "je → me/m'", usage: "myself", example: "Je me lave." },
                    { rule: "tu → te/t'", usage: "yourself", example: "Tu te lèves." },
                    { rule: "il/elle → se/s'", usage: "himself/herself", example: "Elle se regarde." },
                    { rule: "nous → nous", usage: "ourselves", example: "Nous nous parlons." },
                    { rule: "vous → vous", usage: "yourselves", example: "Vous vous reposez." },
                    { rule: "ils/elles → se/s'", usage: "themselves", example: "Ils se préparent." }
                ]
            },
            {
                subtitle: "Common Reflexive Verbs",
                explanation: "Daily routine verbs are often reflexive.",
                rules: [
                    { rule: "se réveiller", usage: "to wake up", example: "Je me réveille à 7h." },
                    { rule: "se lever", usage: "to get up", example: "Je me lève tard." },
                    { rule: "se laver", usage: "to wash oneself", example: "Je me lave les mains." },
                    { rule: "s'habiller", usage: "to get dressed", example: "Je m'habille vite." },
                    { rule: "se coucher", usage: "to go to bed", example: "Je me couche tôt." },
                    { rule: "se souvenir", usage: "to remember", example: "Je me souviens de toi." }
                ]
            }
        ],
        examples: [
            { french: "Je me brosse les dents.", english: "I brush my teeth." },
            { french: "Nous nous sommes rencontrés à Paris.", english: "We met in Paris." },
            { french: "Ils s'aiment beaucoup.", english: "They love each other very much." }
        ],
        tips: [
            "In passé composé, reflexive verbs always use être",
            "The past participle agrees with the reflexive pronoun (if direct object)",
            "In negation: Je ne me lève pas"
        ]
    }
};

// Get all grammar topics
function getAllGrammarTopics() {
    return Object.keys(FRENCH_GRAMMAR).map(key => ({
        id: key,
        ...FRENCH_GRAMMAR[key]
    }));
}

// Get grammar by level
function getGrammarByLevel(level) {
    return Object.keys(FRENCH_GRAMMAR)
        .filter(key => FRENCH_GRAMMAR[key].level === level)
        .map(key => ({ id: key, ...FRENCH_GRAMMAR[key] }));
}
