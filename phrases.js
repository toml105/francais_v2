// FRENCH MASTERY - ESSENTIAL PHRASES DATABASE

const FRENCH_PHRASES = {
    survival: {
        name: "Survival Phrases",
        icon: "🆘",
        phrases: [
            { french: "Au secours!", english: "Help!", context: "Emergency" },
            { french: "Appelez la police!", english: "Call the police!", context: "Emergency" },
            { french: "J'ai besoin d'un médecin", english: "I need a doctor", context: "Health" },
            { french: "Où sont les toilettes?", english: "Where are the toilets?", context: "Essential" },
            { french: "Je suis allergique à...", english: "I'm allergic to...", context: "Health" },
            { french: "Je ne parle pas français", english: "I don't speak French", context: "Communication" },
            { french: "Parlez plus lentement, s'il vous plaît", english: "Speak more slowly, please", context: "Communication" },
            { french: "Pouvez-vous répéter?", english: "Can you repeat?", context: "Communication" },
            { french: "Je suis perdu(e)", english: "I'm lost", context: "Navigation" },
            { french: "C'est urgent", english: "It's urgent", context: "Emergency" }
        ]
    },
    greetings: {
        name: "Greetings & Politeness",
        icon: "🤝",
        phrases: [
            { french: "Enchanté(e) de faire votre connaissance", english: "Pleased to meet you", context: "Formal meeting" },
            { french: "Comment allez-vous?", english: "How are you? (formal)", context: "Formal" },
            { french: "Ça va? / Comment ça va?", english: "How are you? (informal)", context: "Informal" },
            { french: "Je vais bien, merci", english: "I'm fine, thank you", context: "Response" },
            { french: "Et vous? / Et toi?", english: "And you?", context: "Response" },
            { french: "Bonne journée!", english: "Have a nice day!", context: "Farewell" },
            { french: "Bonne soirée!", english: "Have a nice evening!", context: "Farewell" },
            { french: "À bientôt!", english: "See you soon!", context: "Farewell" },
            { french: "À tout à l'heure!", english: "See you later!", context: "Farewell" },
            { french: "Passez une bonne journée", english: "Have a good day", context: "Farewell" }
        ]
    },
    restaurant: {
        name: "At the Restaurant",
        icon: "🍽️",
        phrases: [
            { french: "Une table pour deux, s'il vous plaît", english: "A table for two, please", context: "Arriving" },
            { french: "Je voudrais réserver une table", english: "I'd like to reserve a table", context: "Reservation" },
            { french: "La carte, s'il vous plaît", english: "The menu, please", context: "Ordering" },
            { french: "Qu'est-ce que vous recommandez?", english: "What do you recommend?", context: "Ordering" },
            { french: "Je suis végétarien(ne)", english: "I'm vegetarian", context: "Dietary" },
            { french: "C'est délicieux!", english: "It's delicious!", context: "Compliment" },
            { french: "L'addition, s'il vous plaît", english: "The bill, please", context: "Paying" },
            { french: "Est-ce que le service est compris?", english: "Is service included?", context: "Paying" },
            { french: "Je peux payer par carte?", english: "Can I pay by card?", context: "Paying" },
            { french: "Gardez la monnaie", english: "Keep the change", context: "Tipping" }
        ]
    },
    shopping: {
        name: "Shopping",
        icon: "🛍️",
        phrases: [
            { french: "Je regarde seulement", english: "I'm just looking", context: "Browsing" },
            { french: "Combien ça coûte?", english: "How much does it cost?", context: "Price" },
            { french: "C'est trop cher", english: "It's too expensive", context: "Negotiating" },
            { french: "Avez-vous ceci en d'autres couleurs?", english: "Do you have this in other colors?", context: "Options" },
            { french: "Puis-je l'essayer?", english: "Can I try it on?", context: "Clothing" },
            { french: "Où sont les cabines d'essayage?", english: "Where are the fitting rooms?", context: "Clothing" },
            { french: "Quelle est votre taille?", english: "What's your size?", context: "Clothing" },
            { french: "C'est trop petit/grand", english: "It's too small/big", context: "Fit" },
            { french: "Je le prends", english: "I'll take it", context: "Buying" },
            { french: "Acceptez-vous les cartes de crédit?", english: "Do you accept credit cards?", context: "Payment" }
        ]
    },
    transport: {
        name: "Transportation",
        icon: "🚆",
        phrases: [
            { french: "Un billet pour Paris, s'il vous plaît", english: "A ticket to Paris, please", context: "Buying tickets" },
            { french: "Aller simple ou aller-retour?", english: "One-way or round-trip?", context: "Ticket type" },
            { french: "À quelle heure part le train?", english: "What time does the train leave?", context: "Schedule" },
            { french: "De quel quai?", english: "From which platform?", context: "Navigation" },
            { french: "Est-ce que ce siège est libre?", english: "Is this seat free?", context: "Seating" },
            { french: "Où dois-je descendre?", english: "Where should I get off?", context: "Navigation" },
            { french: "C'est le bon train pour...?", english: "Is this the right train for...?", context: "Confirmation" },
            { french: "Pouvez-vous m'appeler un taxi?", english: "Can you call me a taxi?", context: "Taxi" },
            { french: "Conduisez-moi à cette adresse", english: "Take me to this address", context: "Taxi" },
            { french: "Arrêtez-vous ici, s'il vous plaît", english: "Stop here, please", context: "Taxi" }
        ]
    },
    hotel: {
        name: "At the Hotel",
        icon: "🏨",
        phrases: [
            { french: "J'ai une réservation", english: "I have a reservation", context: "Check-in" },
            { french: "Une chambre pour une nuit", english: "A room for one night", context: "Booking" },
            { french: "Avec petit-déjeuner?", english: "With breakfast?", context: "Amenities" },
            { french: "À quelle heure est le check-out?", english: "What time is checkout?", context: "Rules" },
            { french: "Le wifi est gratuit?", english: "Is the wifi free?", context: "Amenities" },
            { french: "Pouvez-vous garder mes bagages?", english: "Can you keep my luggage?", context: "Service" },
            { french: "La clé de la chambre, s'il vous plaît", english: "The room key, please", context: "Access" },
            { french: "Il y a un problème avec la chambre", english: "There's a problem with the room", context: "Complaints" },
            { french: "Le climatiseur ne marche pas", english: "The AC doesn't work", context: "Problems" },
            { french: "Pouvez-vous me réveiller à...?", english: "Can you wake me up at...?", context: "Service" }
        ]
    },
    directions: {
        name: "Asking Directions",
        icon: "🗺️",
        phrases: [
            { french: "Excusez-moi, où est...?", english: "Excuse me, where is...?", context: "Asking" },
            { french: "Comment puis-je aller à...?", english: "How can I get to...?", context: "Asking" },
            { french: "C'est loin d'ici?", english: "Is it far from here?", context: "Distance" },
            { french: "Allez tout droit", english: "Go straight ahead", context: "Direction" },
            { french: "Tournez à gauche/droite", english: "Turn left/right", context: "Direction" },
            { french: "C'est à côté de...", english: "It's next to...", context: "Location" },
            { french: "C'est en face de...", english: "It's opposite...", context: "Location" },
            { french: "Au coin de la rue", english: "At the corner of the street", context: "Location" },
            { french: "À cinq minutes à pied", english: "Five minutes on foot", context: "Distance" },
            { french: "Vous ne pouvez pas le manquer", english: "You can't miss it", context: "Reassurance" }
        ]
    },
    conversation: {
        name: "Making Conversation",
        icon: "💬",
        phrases: [
            { french: "D'où venez-vous?", english: "Where are you from?", context: "Small talk" },
            { french: "Je viens de...", english: "I come from...", context: "Response" },
            { french: "Qu'est-ce que vous faites dans la vie?", english: "What do you do for a living?", context: "Small talk" },
            { french: "Je suis en vacances", english: "I'm on vacation", context: "Response" },
            { french: "C'est votre première visite?", english: "Is this your first visit?", context: "Small talk" },
            { french: "Qu'est-ce que vous pensez de...?", english: "What do you think of...?", context: "Opinion" },
            { french: "Je suis d'accord", english: "I agree", context: "Agreement" },
            { french: "Je ne suis pas d'accord", english: "I disagree", context: "Disagreement" },
            { french: "Vraiment? / Ah bon?", english: "Really?", context: "Surprise" },
            { french: "C'est intéressant!", english: "That's interesting!", context: "Reaction" }
        ]
    },
    time: {
        name: "Talking About Time",
        icon: "⏰",
        phrases: [
            { french: "Quelle heure est-il?", english: "What time is it?", context: "Asking time" },
            { french: "Il est trois heures", english: "It's three o'clock", context: "Telling time" },
            { french: "À quelle heure...?", english: "At what time...?", context: "Asking schedule" },
            { french: "Le matin / L'après-midi / Le soir", english: "Morning / Afternoon / Evening", context: "Time of day" },
            { french: "Hier / Aujourd'hui / Demain", english: "Yesterday / Today / Tomorrow", context: "Days" },
            { french: "La semaine prochaine", english: "Next week", context: "Future" },
            { french: "La semaine dernière", english: "Last week", context: "Past" },
            { french: "Dans une heure", english: "In one hour", context: "Duration" },
            { french: "Il y a une heure", english: "An hour ago", context: "Past" },
            { french: "Je suis en retard", english: "I'm late", context: "Status" }
        ]
    },
    opinions: {
        name: "Expressing Opinions",
        icon: "🤔",
        phrases: [
            { french: "Je pense que...", english: "I think that...", context: "Opinion" },
            { french: "À mon avis...", english: "In my opinion...", context: "Opinion" },
            { french: "Je crois que...", english: "I believe that...", context: "Belief" },
            { french: "J'aime / Je n'aime pas", english: "I like / I don't like", context: "Preference" },
            { french: "Je préfère...", english: "I prefer...", context: "Preference" },
            { french: "C'est génial!", english: "It's great!", context: "Positive" },
            { french: "C'est nul", english: "It's rubbish", context: "Negative" },
            { french: "Ça m'est égal", english: "I don't mind", context: "Neutral" },
            { french: "Je ne suis pas sûr(e)", english: "I'm not sure", context: "Uncertainty" },
            { french: "Ça dépend", english: "It depends", context: "Conditional" }
        ]
    }
};

// Pronunciation Guide
const PRONUNCIATION_GUIDE = {
    vowels: [
        { letter: "a", sound: "ah", example: "chat (shah) - cat", tip: "Like 'a' in 'father'" },
        { letter: "e", sound: "uh", example: "le (luh) - the", tip: "Like 'u' in 'but'" },
        { letter: "é", sound: "ay", example: "été (ay-tay) - summer", tip: "Like 'ay' in 'say'" },
        { letter: "è/ê", sound: "eh", example: "père (pehr) - father", tip: "Like 'e' in 'bet'" },
        { letter: "i", sound: "ee", example: "vie (vee) - life", tip: "Like 'ee' in 'see'" },
        { letter: "o", sound: "oh", example: "mot (moh) - word", tip: "Like 'o' in 'go'" },
        { letter: "u", sound: "oo", example: "tu (too) - you", tip: "Purse lips, say 'ee'" },
        { letter: "ou", sound: "oo", example: "nous (noo) - we", tip: "Like 'oo' in 'food'" },
        { letter: "oi", sound: "wah", example: "moi (mwah) - me", tip: "Like 'wa' in 'wander'" },
        { letter: "eu/œu", sound: "uh", example: "peu (puh) - few", tip: "Round lips, say 'eh'" }
    ],
    consonants: [
        { letter: "c (before e,i)", sound: "s", example: "merci (mehr-see)", tip: "Soft 'c' like 'city'" },
        { letter: "c (before a,o,u)", sound: "k", example: "café (kah-fay)", tip: "Hard 'c' like 'cat'" },
        { letter: "ç", sound: "s", example: "français (frahn-seh)", tip: "Always soft 's'" },
        { letter: "ch", sound: "sh", example: "chat (shah)", tip: "Like 'sh' in 'ship'" },
        { letter: "g (before e,i)", sound: "zh", example: "manger (mahn-zhay)", tip: "Like 's' in 'measure'" },
        { letter: "gn", sound: "ny", example: "montagne (mohn-tahn-yuh)", tip: "Like 'ny' in 'canyon'" },
        { letter: "h", sound: "(silent)", example: "homme (ohm)", tip: "Never pronounced" },
        { letter: "j", sound: "zh", example: "je (zhuh)", tip: "Like 's' in 'measure'" },
        { letter: "qu", sound: "k", example: "qui (kee)", tip: "Like 'k', no 'w' sound" },
        { letter: "r", sound: "r (throat)", example: "rouge (roozh)", tip: "Gargle in throat" },
        { letter: "th", sound: "t", example: "thé (tay)", tip: "Just 't', not English 'th'" }
    ],
    nasal: [
        { letter: "an/am/en/em", sound: "ahn", example: "dans (dahn)", tip: "Nasal 'ah'" },
        { letter: "in/im/ain/ein", sound: "ahn", example: "vin (vahn)", tip: "Nasal short 'a'" },
        { letter: "on/om", sound: "ohn", example: "bon (bohn)", tip: "Nasal 'o'" },
        { letter: "un/um", sound: "uhn", example: "un (uhn)", tip: "Nasal 'u'" }
    ],
    rules: [
        { rule: "Silent final consonants", explanation: "Most final consonants are not pronounced: petit (puh-tee), grand (grahn)", exception: "C, R, F, L are often pronounced (CaReFuL)" },
        { rule: "Liaison", explanation: "Final consonant links to next vowel: les amis (lay-zah-mee)", exception: "Only in certain combinations" },
        { rule: "Elision", explanation: "Vowel drops before another vowel: l'ami (not le ami)", exception: "Common with le, la, je, ne, que" },
        { rule: "Final -er/-ez", explanation: "Pronounced 'ay': parler (pahr-lay), vous parlez (voo pahr-lay)", exception: "" },
        { rule: "Final -ent (verbs)", explanation: "Silent in 3rd person plural: ils parlent (eel pahrl)", exception: "Not silent in adverbs: vraiment (vreh-mahn)" }
    ]
};

function getAllPhrases() {
    const all = [];
    for (const category in FRENCH_PHRASES) {
        FRENCH_PHRASES[category].phrases.forEach(phrase => {
            all.push({ ...phrase, category: category });
        });
    }
    return all;
}

function getPhrasesCount() {
    let count = 0;
    for (const category in FRENCH_PHRASES) {
        count += FRENCH_PHRASES[category].phrases.length;
    }
    return count;
}
