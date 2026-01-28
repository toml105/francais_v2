// FRENCH MASTERY - CONNECTIVE WORDS DATABASE
// Essential linking words with usage explanations

const FRENCH_CONNECTIVES = {
    addition: {
        name: "Addition & Emphasis",
        icon: "➕",
        words: [
            { word: "et", translation: "and", usage: "Basic addition. Most common connector.", example: "J'aime le café et le thé.", exampleTranslation: "I like coffee and tea." },
            { word: "aussi", translation: "also, too", usage: "Add information. Usually at end of sentence or after verb.", example: "Elle parle aussi espagnol.", exampleTranslation: "She also speaks Spanish." },
            { word: "également", translation: "equally, also", usage: "More formal than 'aussi'. Written French.", example: "Il est également professeur.", exampleTranslation: "He is also a teacher." },
            { word: "de plus", translation: "moreover, furthermore", usage: "Add important information. Start of sentence.", example: "De plus, il est très intelligent.", exampleTranslation: "Moreover, he is very intelligent." },
            { word: "en plus", translation: "in addition, besides", usage: "Slightly informal. Additional info.", example: "En plus, c'est gratuit!", exampleTranslation: "Besides, it's free!" },
            { word: "de même", translation: "likewise, similarly", usage: "Shows similarity between two ideas.", example: "De même, sa sœur travaille dur.", exampleTranslation: "Likewise, his sister works hard." },
            { word: "non seulement...mais aussi", translation: "not only...but also", usage: "Emphasize two related things.", example: "Il est non seulement intelligent mais aussi gentil.", exampleTranslation: "He is not only intelligent but also kind." },
            { word: "d'ailleurs", translation: "besides, by the way", usage: "Add related but slightly different point.", example: "D'ailleurs, je l'ai vu hier.", exampleTranslation: "By the way, I saw him yesterday." },
            { word: "en outre", translation: "furthermore, besides", usage: "Formal. Add to argument.", example: "En outre, les résultats sont positifs.", exampleTranslation: "Furthermore, the results are positive." },
            { word: "surtout", translation: "especially, above all", usage: "Emphasize most important point.", example: "J'aime les fruits, surtout les fraises.", exampleTranslation: "I like fruits, especially strawberries." }
        ]
    },
    contrast: {
        name: "Contrast & Opposition",
        icon: "⚡",
        words: [
            { word: "mais", translation: "but", usage: "Basic contrast. Most common.", example: "Je veux venir, mais je ne peux pas.", exampleTranslation: "I want to come, but I can't." },
            { word: "cependant", translation: "however", usage: "Formal contrast. Start or middle of sentence.", example: "Cependant, il a refusé.", exampleTranslation: "However, he refused." },
            { word: "pourtant", translation: "yet, nevertheless", usage: "Unexpected contrast.", example: "Il est riche, pourtant il est malheureux.", exampleTranslation: "He is rich, yet he is unhappy." },
            { word: "néanmoins", translation: "nevertheless", usage: "Very formal. Written French.", example: "Néanmoins, nous continuons.", exampleTranslation: "Nevertheless, we continue." },
            { word: "toutefois", translation: "however, nonetheless", usage: "Formal. Slight reservation.", example: "Toutefois, il faut être prudent.", exampleTranslation: "However, we must be careful." },
            { word: "par contre", translation: "on the other hand", usage: "Present alternative or opposite.", example: "J'aime le café. Par contre, je déteste le thé.", exampleTranslation: "I like coffee. On the other hand, I hate tea." },
            { word: "en revanche", translation: "on the other hand", usage: "More formal than 'par contre'.", example: "Elle est timide. En revanche, son frère est extraverti.", exampleTranslation: "She is shy. On the other hand, her brother is outgoing." },
            { word: "au contraire", translation: "on the contrary", usage: "Strong opposition to previous statement.", example: "Ce n'est pas difficile, au contraire!", exampleTranslation: "It's not difficult, on the contrary!" },
            { word: "alors que", translation: "whereas, while", usage: "Contrast within same sentence.", example: "Elle travaille alors qu'il dort.", exampleTranslation: "She works while he sleeps." },
            { word: "tandis que", translation: "whereas, while", usage: "Simultaneous contrast.", example: "Je lis tandis que tu regardes la télé.", exampleTranslation: "I read while you watch TV." },
            { word: "bien que", translation: "although", usage: "Followed by subjunctive.", example: "Bien qu'il pleuve, nous sortons.", exampleTranslation: "Although it's raining, we're going out." },
            { word: "malgré", translation: "despite, in spite of", usage: "Followed by noun, not verb.", example: "Malgré la pluie, nous sommes sortis.", exampleTranslation: "Despite the rain, we went out." },
            { word: "quand même", translation: "anyway, still", usage: "Despite what was said.", example: "Il pleut, mais je sors quand même.", exampleTranslation: "It's raining, but I'm going out anyway." }
        ]
    },
    cause: {
        name: "Cause & Reason",
        icon: "🔍",
        words: [
            { word: "parce que", translation: "because", usage: "Most common. Explains reason.", example: "Je suis fatigué parce que j'ai mal dormi.", exampleTranslation: "I'm tired because I slept badly." },
            { word: "car", translation: "because, for", usage: "More formal than 'parce que'. Written.", example: "Je reste car il pleut.", exampleTranslation: "I'm staying because it's raining." },
            { word: "puisque", translation: "since, as", usage: "Reason is known/obvious.", example: "Puisque tu insistes, d'accord.", exampleTranslation: "Since you insist, okay." },
            { word: "comme", translation: "as, since", usage: "Usually at start. Reason before result.", example: "Comme il pleut, je reste.", exampleTranslation: "As it's raining, I'm staying." },
            { word: "à cause de", translation: "because of", usage: "Negative reason. Followed by noun.", example: "À cause de la pluie, le match est annulé.", exampleTranslation: "Because of the rain, the match is cancelled." },
            { word: "grâce à", translation: "thanks to", usage: "Positive reason. Followed by noun.", example: "Grâce à toi, j'ai réussi.", exampleTranslation: "Thanks to you, I succeeded." },
            { word: "en raison de", translation: "due to, because of", usage: "Formal. Official contexts.", example: "En raison du mauvais temps...", exampleTranslation: "Due to bad weather..." },
            { word: "étant donné que", translation: "given that", usage: "Formal. State known fact.", example: "Étant donné qu'il est malade...", exampleTranslation: "Given that he is sick..." },
            { word: "vu que", translation: "seeing that, since", usage: "Informal version of 'étant donné que'.", example: "Vu qu'il est tard, je pars.", exampleTranslation: "Seeing that it's late, I'm leaving." }
        ]
    },
    consequence: {
        name: "Consequence & Result",
        icon: "➡️",
        words: [
            { word: "donc", translation: "so, therefore", usage: "Most common. Logical conclusion.", example: "Je pense, donc je suis.", exampleTranslation: "I think, therefore I am." },
            { word: "alors", translation: "so, then", usage: "Conclusion or next action.", example: "Tu es prêt? Alors, allons-y!", exampleTranslation: "Are you ready? Then let's go!" },
            { word: "ainsi", translation: "thus, so", usage: "Formal consequence.", example: "Ainsi, tout est bien qui finit bien.", exampleTranslation: "Thus, all's well that ends well." },
            { word: "par conséquent", translation: "consequently, therefore", usage: "Very formal. Written.", example: "Par conséquent, nous devons agir.", exampleTranslation: "Consequently, we must act." },
            { word: "c'est pourquoi", translation: "that's why", usage: "Explain reason for action.", example: "C'est pourquoi je suis venu.", exampleTranslation: "That's why I came." },
            { word: "du coup", translation: "so, as a result", usage: "Informal. Very common in speech.", example: "Il pleut, du coup je reste.", exampleTranslation: "It's raining, so I'm staying." },
            { word: "si bien que", translation: "so much so that", usage: "Strong consequence.", example: "Il a plu si bien que la route est inondée.", exampleTranslation: "It rained so much that the road is flooded." },
            { word: "de sorte que", translation: "so that, in such a way that", usage: "Intentional or natural result.", example: "Il travaille de sorte que tout soit prêt.", exampleTranslation: "He works so that everything is ready." },
            { word: "d'où", translation: "hence, from which", usage: "Conclude from evidence.", example: "D'où ma question...", exampleTranslation: "Hence my question..." }
        ]
    },
    purpose: {
        name: "Purpose & Goal",
        icon: "🎯",
        words: [
            { word: "pour", translation: "for, in order to", usage: "Basic purpose. Followed by infinitive.", example: "Je travaille pour gagner de l'argent.", exampleTranslation: "I work to earn money." },
            { word: "pour que", translation: "so that", usage: "Purpose with different subject. + subjunctive.", example: "Je parle fort pour que tu m'entendes.", exampleTranslation: "I speak loudly so that you hear me." },
            { word: "afin de", translation: "in order to", usage: "Formal purpose. + infinitive.", example: "Afin de réussir, il faut travailler.", exampleTranslation: "In order to succeed, you must work." },
            { word: "afin que", translation: "so that", usage: "Formal purpose. + subjunctive.", example: "Afin que tout soit clair...", exampleTranslation: "So that everything is clear..." },
            { word: "dans le but de", translation: "with the aim of", usage: "Very formal. + infinitive.", example: "Dans le but d'améliorer...", exampleTranslation: "With the aim of improving..." },
            { word: "de façon à", translation: "so as to", usage: "Method to achieve goal. + infinitive.", example: "Parle de façon à être compris.", exampleTranslation: "Speak so as to be understood." },
            { word: "de manière à", translation: "so as to", usage: "Similar to 'de façon à'.", example: "Agis de manière à réussir.", exampleTranslation: "Act so as to succeed." }
        ]
    },
    time: {
        name: "Time & Sequence",
        icon: "⏰",
        words: [
            { word: "d'abord", translation: "first, firstly", usage: "First action in sequence.", example: "D'abord, je me lève.", exampleTranslation: "First, I get up." },
            { word: "ensuite", translation: "then, next", usage: "Following action.", example: "Ensuite, je prends mon petit-déjeuner.", exampleTranslation: "Then, I have my breakfast." },
            { word: "puis", translation: "then", usage: "Next step. More formal.", example: "Puis, je pars au travail.", exampleTranslation: "Then, I leave for work." },
            { word: "après", translation: "after, afterwards", usage: "After an action.", example: "Après, je rentre chez moi.", exampleTranslation: "Afterwards, I go home." },
            { word: "enfin", translation: "finally, at last", usage: "Last in sequence or relief.", example: "Enfin, je me couche.", exampleTranslation: "Finally, I go to bed." },
            { word: "finalement", translation: "finally, eventually", usage: "Eventual outcome.", example: "Finalement, il a accepté.", exampleTranslation: "Eventually, he accepted." },
            { word: "pendant que", translation: "while", usage: "Simultaneous actions.", example: "Pendant que je cuisine, tu peux mettre la table.", exampleTranslation: "While I cook, you can set the table." },
            { word: "avant de", translation: "before", usage: "Before doing. + infinitive.", example: "Avant de partir, vérifie tout.", exampleTranslation: "Before leaving, check everything." },
            { word: "après avoir/être", translation: "after having", usage: "After completing. + past participle.", example: "Après avoir mangé, je suis sorti.", exampleTranslation: "After eating, I went out." },
            { word: "dès que", translation: "as soon as", usage: "Immediate sequence.", example: "Dès que j'arrive, je t'appelle.", exampleTranslation: "As soon as I arrive, I'll call you." },
            { word: "aussitôt que", translation: "as soon as", usage: "Same as 'dès que'.", example: "Aussitôt qu'il part, appelle-moi.", exampleTranslation: "As soon as he leaves, call me." },
            { word: "lorsque", translation: "when", usage: "Formal 'quand'.", example: "Lorsque j'étais jeune...", exampleTranslation: "When I was young..." },
            { word: "au moment où", translation: "at the moment when", usage: "Precise timing.", example: "Au moment où il est entré...", exampleTranslation: "At the moment he entered..." },
            { word: "depuis que", translation: "since", usage: "From a point in time.", example: "Depuis qu'il est parti...", exampleTranslation: "Since he left..." },
            { word: "jusqu'à ce que", translation: "until", usage: "+ subjunctive.", example: "Attends jusqu'à ce qu'il vienne.", exampleTranslation: "Wait until he comes." }
        ]
    },
    condition: {
        name: "Condition & Hypothesis",
        icon: "❓",
        words: [
            { word: "si", translation: "if", usage: "Basic condition.", example: "Si tu viens, appelle-moi.", exampleTranslation: "If you come, call me." },
            { word: "à condition que", translation: "on condition that", usage: "+ subjunctive. Strong condition.", example: "J'accepte à condition que tu viennes.", exampleTranslation: "I accept on condition that you come." },
            { word: "à condition de", translation: "on condition of", usage: "+ infinitive.", example: "J'accepte à condition de partir tôt.", exampleTranslation: "I accept on condition of leaving early." },
            { word: "pourvu que", translation: "provided that", usage: "+ subjunctive. Hope or condition.", example: "Pourvu qu'il fasse beau!", exampleTranslation: "Let's hope the weather is nice!" },
            { word: "à moins que", translation: "unless", usage: "+ subjunctive.", example: "Je viendrai à moins qu'il pleuve.", exampleTranslation: "I'll come unless it rains." },
            { word: "au cas où", translation: "in case", usage: "+ conditional.", example: "Prends un parapluie au cas où il pleuvrait.", exampleTranslation: "Take an umbrella in case it rains." },
            { word: "en cas de", translation: "in case of", usage: "+ noun.", example: "En cas d'urgence, appelez le 15.", exampleTranslation: "In case of emergency, call 15." },
            { word: "sinon", translation: "otherwise, if not", usage: "Alternative outcome.", example: "Dépêche-toi, sinon tu seras en retard.", exampleTranslation: "Hurry up, otherwise you'll be late." },
            { word: "même si", translation: "even if", usage: "Concessive condition.", example: "Même si tu es fatigué, viens.", exampleTranslation: "Even if you're tired, come." }
        ]
    },
    example: {
        name: "Examples & Illustration",
        icon: "💡",
        words: [
            { word: "par exemple", translation: "for example", usage: "Introduce example.", example: "J'aime les fruits, par exemple les pommes.", exampleTranslation: "I like fruits, for example apples." },
            { word: "comme", translation: "like, such as", usage: "Introduce examples.", example: "Des pays comme la France...", exampleTranslation: "Countries like France..." },
            { word: "tel que", translation: "such as", usage: "Specific examples.", example: "Des problèmes tels que la pollution...", exampleTranslation: "Problems such as pollution..." },
            { word: "notamment", translation: "notably, particularly", usage: "Highlight specific examples.", example: "Plusieurs pays, notamment la France...", exampleTranslation: "Several countries, notably France..." },
            { word: "en particulier", translation: "in particular", usage: "Focus on specific.", example: "J'aime la musique, en particulier le jazz.", exampleTranslation: "I like music, in particular jazz." },
            { word: "c'est-à-dire", translation: "that is to say", usage: "Clarify or rephrase.", example: "Il est végétarien, c'est-à-dire qu'il ne mange pas de viande.", exampleTranslation: "He's vegetarian, that is to say he doesn't eat meat." },
            { word: "autrement dit", translation: "in other words", usage: "Rephrase more clearly.", example: "Autrement dit, c'est impossible.", exampleTranslation: "In other words, it's impossible." }
        ]
    },
    conclusion: {
        name: "Conclusion & Summary",
        icon: "✅",
        words: [
            { word: "en conclusion", translation: "in conclusion", usage: "Final summary.", example: "En conclusion, je pense que...", exampleTranslation: "In conclusion, I think that..." },
            { word: "pour conclure", translation: "to conclude", usage: "Begin final statement.", example: "Pour conclure, j'aimerais dire...", exampleTranslation: "To conclude, I would like to say..." },
            { word: "en résumé", translation: "in summary", usage: "Summarize key points.", example: "En résumé, voici les points importants.", exampleTranslation: "In summary, here are the important points." },
            { word: "bref", translation: "in short", usage: "Quick summary. Informal.", example: "Bref, c'était une catastrophe.", exampleTranslation: "In short, it was a disaster." },
            { word: "en somme", translation: "in sum, all in all", usage: "Overall assessment.", example: "En somme, c'était bien.", exampleTranslation: "All in all, it was good." },
            { word: "en fin de compte", translation: "ultimately, in the end", usage: "Final assessment.", example: "En fin de compte, tu avais raison.", exampleTranslation: "In the end, you were right." },
            { word: "tout compte fait", translation: "all things considered", usage: "After weighing everything.", example: "Tout compte fait, j'accepte.", exampleTranslation: "All things considered, I accept." },
            { word: "en définitive", translation: "ultimately, in the final analysis", usage: "Formal conclusion.", example: "En définitive, c'est la meilleure solution.", exampleTranslation: "Ultimately, it's the best solution." },
            { word: "somme toute", translation: "all in all", usage: "After consideration.", example: "Somme toute, c'était réussi.", exampleTranslation: "All in all, it was successful." }
        ]
    },
    opinion: {
        name: "Opinion & Viewpoint",
        icon: "💭",
        words: [
            { word: "à mon avis", translation: "in my opinion", usage: "Personal view.", example: "À mon avis, c'est trop cher.", exampleTranslation: "In my opinion, it's too expensive." },
            { word: "selon moi", translation: "according to me", usage: "Personal perspective.", example: "Selon moi, il a tort.", exampleTranslation: "According to me, he's wrong." },
            { word: "d'après moi", translation: "in my view", usage: "Similar to 'selon moi'.", example: "D'après moi, c'est possible.", exampleTranslation: "In my view, it's possible." },
            { word: "je pense que", translation: "I think that", usage: "Express opinion.", example: "Je pense que c'est vrai.", exampleTranslation: "I think that it's true." },
            { word: "je crois que", translation: "I believe that", usage: "Express belief.", example: "Je crois qu'il viendra.", exampleTranslation: "I believe he'll come." },
            { word: "il me semble que", translation: "it seems to me that", usage: "Careful opinion.", example: "Il me semble qu'il a raison.", exampleTranslation: "It seems to me that he's right." },
            { word: "j'ai l'impression que", translation: "I have the impression that", usage: "Tentative view.", example: "J'ai l'impression qu'il ment.", exampleTranslation: "I have the impression he's lying." },
            { word: "personnellement", translation: "personally", usage: "Emphasize personal view.", example: "Personnellement, je préfère rester.", exampleTranslation: "Personally, I prefer to stay." },
            { word: "quant à moi", translation: "as for me", usage: "Introduce personal position.", example: "Quant à moi, j'accepte.", exampleTranslation: "As for me, I accept." },
            { word: "pour ma part", translation: "for my part", usage: "Personal contribution/view.", example: "Pour ma part, je suis d'accord.", exampleTranslation: "For my part, I agree." }
        ]
    }
};

// Get all connectives as flat array
function getAllConnectives() {
    const all = [];
    for (const category in FRENCH_CONNECTIVES) {
        FRENCH_CONNECTIVES[category].words.forEach(word => {
            all.push({ ...word, category: category });
        });
    }
    return all;
}

// Get connectives count
function getConnectivesCount() {
    let count = 0;
    for (const category in FRENCH_CONNECTIVES) {
        count += FRENCH_CONNECTIVES[category].words.length;
    }
    return count;
}
