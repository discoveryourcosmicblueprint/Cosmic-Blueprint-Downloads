/**
 * Chakra Data
 * Complete information for chakra energy readings
 */

const CHAKRA_DATA = {
    7: {
        name: "Crown Chakra",
        sanskrit: "Sahasrara",
        location: "Top of the head",
        color: "#9400D3",
        element: "Cosmic Energy / Thought",
        symbol: "Thousand-petaled lotus",
        themes: ["Spirituality", "Enlightenment", "Connection to Divine", "Pure Consciousness", "Universal Truth"],
        balanced: "Spiritual connection, wisdom, understanding, bliss, transcendence",
        overactive: "Disconnection from body, spiritual addiction, confusion, dissociation",
        underactive: "Spiritual skepticism, closed-minded, disconnection, lack of purpose",
        physicalConnection: "Brain, nervous system, pineal gland",
        emotionalConnection: "Faith, spirituality, connection to something greater",
        affirmation: "I am connected to the infinite wisdom of the universe.",
        healingPractices: ["Meditation", "Prayer", "Silence", "Fasting", "Violet light visualization"]
    },
    6: {
        name: "Third Eye Chakra",
        sanskrit: "Ajna",
        location: "Between the eyebrows",
        color: "#4B0082",
        element: "Light",
        symbol: "Two-petaled lotus",
        themes: ["Intuition", "Vision", "Imagination", "Clarity", "Psychic Ability"],
        balanced: "Clear intuition, imagination, concentration, insight, wisdom",
        overactive: "Hallucinations, nightmares, obsessive thoughts, delusions",
        underactive: "Poor intuition, confusion, inability to plan, denial",
        physicalConnection: "Eyes, sinuses, lower brain, pituitary gland",
        emotionalConnection: "Intuition, perception, imagination, memory",
        affirmation: "I trust my intuition and inner wisdom.",
        healingPractices: ["Visualization", "Dream work", "Indigo light meditation", "Third eye focus"]
    },
    5: {
        name: "Throat Chakra",
        sanskrit: "Vishuddha",
        location: "Throat",
        color: "#00BFFF",
        element: "Sound / Ether",
        symbol: "Sixteen-petaled lotus",
        themes: ["Communication", "Truth", "Expression", "Authenticity", "Listening"],
        balanced: "Clear communication, creative expression, good listening, speaking truth",
        overactive: "Talking too much, inability to listen, gossiping, harsh speech",
        underactive: "Fear of speaking, difficulty expressing, secretive, dishonest",
        physicalConnection: "Throat, neck, thyroid, mouth, ears",
        emotionalConnection: "Expression, communication, creativity, truth",
        affirmation: "I express my truth with clarity and compassion.",
        healingPractices: ["Singing", "Chanting", "Blue light visualization", "Writing", "Active listening"]
    },
    4: {
        name: "Heart Chakra",
        sanskrit: "Anahata",
        location: "Center of chest",
        color: "#00FF00",
        element: "Air",
        symbol: "Twelve-petaled lotus",
        themes: ["Love", "Compassion", "Healing", "Forgiveness", "Connection"],
        balanced: "Unconditional love, compassion, empathy, acceptance, peace",
        overactive: "Codependency, jealousy, poor boundaries, giving too much",
        underactive: "Fear of intimacy, coldness, bitterness, isolation",
        physicalConnection: "Heart, lungs, circulatory system, arms, hands",
        emotionalConnection: "Love, compassion, grief, joy, peace",
        affirmation: "I give and receive love freely and unconditionally.",
        healingPractices: ["Heart-opening yoga", "Green/pink light meditation", "Forgiveness work", "Nature connection"]
    },
    3: {
        name: "Solar Plexus Chakra",
        sanskrit: "Manipura",
        location: "Upper abdomen",
        color: "#FFFF00",
        element: "Fire",
        symbol: "Ten-petaled lotus",
        themes: ["Personal Power", "Will", "Self-esteem", "Confidence", "Action"],
        balanced: "Confident, empowered, decisive, clear purpose, self-respect",
        overactive: "Dominating, aggressive, perfectionist, controlling, competitive",
        underactive: "Low self-esteem, indecisive, passive, victim mentality",
        physicalConnection: "Digestive system, liver, gallbladder, pancreas",
        emotionalConnection: "Self-worth, confidence, personal power, will",
        affirmation: "I am confident, powerful, and capable of achieving my goals.",
        healingPractices: ["Core strengthening", "Yellow light meditation", "Setting boundaries", "Achievement activities"]
    },
    2: {
        name: "Sacral Chakra",
        sanskrit: "Svadhisthana",
        location: "Lower abdomen",
        color: "#FF7F00",
        element: "Water",
        symbol: "Six-petaled lotus",
        themes: ["Creativity", "Emotions", "Sensuality", "Pleasure", "Flow"],
        balanced: "Creative flow, healthy emotions, pleasure, passion, flexibility",
        overactive: "Emotional overreaction, addiction, sexual obsession, manipulation",
        underactive: "Emotional numbness, fear of pleasure, rigidity, creative blocks",
        physicalConnection: "Reproductive organs, bladder, kidneys, lower back",
        emotionalConnection: "Creativity, sexuality, emotions, pleasure, desire",
        affirmation: "I embrace my creativity, emotions, and the flow of life.",
        healingPractices: ["Dance", "Water meditation", "Orange light visualization", "Creative expression"]
    },
    1: {
        name: "Root Chakra",
        sanskrit: "Muladhara",
        location: "Base of spine",
        color: "#FF0000",
        element: "Earth",
        symbol: "Four-petaled lotus",
        themes: ["Security", "Stability", "Grounding", "Survival", "Foundation"],
        balanced: "Grounded, secure, stable, present, connected to body",
        overactive: "Materialism, greed, hoarding, resistance to change, paranoia",
        underactive: "Fearful, anxious, ungrounded, disconnected, spacey",
        physicalConnection: "Legs, feet, bones, adrenals, colon",
        emotionalConnection: "Safety, security, belonging, survival instincts",
        affirmation: "I am safe, grounded, and secure in my existence.",
        healingPractices: ["Grounding exercises", "Walking in nature", "Red light meditation", "Root vegetables"]
    }
};

// Chakra energy calculations based on numerology
const CHAKRA_NUMBER_ASSOCIATIONS = {
    1: { primaryChakra: 1, secondaryChakra: 3, energy: "Grounding and empowerment" },
    2: { primaryChakra: 2, secondaryChakra: 4, energy: "Emotional and heart connection" },
    3: { primaryChakra: 5, secondaryChakra: 2, energy: "Expression and creativity" },
    4: { primaryChakra: 1, secondaryChakra: 6, energy: "Foundation and vision" },
    5: { primaryChakra: 5, secondaryChakra: 7, energy: "Communication and spirituality" },
    6: { primaryChakra: 4, secondaryChakra: 2, energy: "Love and nurturing" },
    7: { primaryChakra: 7, secondaryChakra: 6, energy: "Spiritual and intuitive" },
    8: { primaryChakra: 3, secondaryChakra: 1, energy: "Power and manifestation" },
    9: { primaryChakra: 4, secondaryChakra: 7, energy: "Universal love and wisdom" },
    11: { primaryChakra: 6, secondaryChakra: 7, energy: "Intuition and spiritual vision" },
    22: { primaryChakra: 1, secondaryChakra: 7, energy: "Grounded spirituality" },
    33: { primaryChakra: 4, secondaryChakra: 7, energy: "Master heart and spirit" }
};

// Energy flow patterns
const ENERGY_PATTERNS = {
    ascending: {
        name: "Ascending Energy",
        description: "Your energy naturally rises from lower to higher chakras",
        guidance: "Remember to ground yourself and stay connected to the physical"
    },
    descending: {
        name: "Descending Energy",
        description: "Your energy flows from higher to lower chakras",
        guidance: "Trust your spiritual insights and bring them into physical reality"
    },
    balanced: {
        name: "Balanced Energy",
        description: "Your energy flows evenly through all chakras",
        guidance: "Maintain your balance through regular spiritual practice"
    },
    concentrated: {
        name: "Concentrated Energy",
        description: "Your energy is focused in specific chakras",
        guidance: "Work on distributing energy more evenly through all centers"
    }
};
