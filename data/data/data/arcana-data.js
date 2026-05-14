/**
 * Major Arcana Data for Destiny Matrix
 * Each arcana corresponds to a number 1-22 and carries specific energies
 */

const MAJOR_ARCANA = {
    1: {
        name: "The Magician",
        keywords: ["Manifestation", "Willpower", "Action", "Resourcefulness"],
        symbol: "☿",
        element: "Air",
        planet: "Mercury",
        lightEnergy: "The ability to manifest desires, skilled communication, creative power, resourcefulness",
        shadowEnergy: "Manipulation, scattered energy, unused talents, trickery",
        lifeLesson: "You have all the tools you need - learn to use them wisely",
        spiritualGift: "Natural manifester and communicator with the power to transform ideas into reality",
        bodyConnection: "Throat, hands, nervous system",
        guidance: "Trust in your abilities. You are capable of creating your reality through focused intention and action."
    },
    2: {
        name: "The High Priestess",
        keywords: ["Intuition", "Mystery", "Inner knowledge", "Subconscious"],
        symbol: "☽",
        element: "Water",
        planet: "Moon",
        lightEnergy: "Deep intuition, spiritual wisdom, patience, inner knowing, psychic ability",
        shadowEnergy: "Secrets, disconnection from intuition, confusion, passivity",
        lifeLesson: "Trust your inner voice - the answers lie within",
        spiritualGift: "Gateway to the subconscious and spiritual realms, natural psychic abilities",
        bodyConnection: "Pineal gland, reproductive system",
        guidance: "Go within to find your answers. Your intuition is your greatest guide."
    },
    3: {
        name: "The Empress",
        keywords: ["Abundance", "Fertility", "Nature", "Nurturing"],
        symbol: "♀",
        element: "Earth",
        planet: "Venus",
        lightEnergy: "Creative abundance, nurturing love, sensual pleasure, growth and fertility",
        shadowEnergy: "Creative blocks, neglecting self-care, smothering, dependency",
        lifeLesson: "Embrace the creative flow of the universe",
        spiritualGift: "Channel of creative and nurturing energy, ability to bring things to fruition",
        bodyConnection: "Heart, reproductive organs, throat",
        guidance: "Create beauty and nurture growth. You are a vessel for abundant love and creativity."
    },
    4: {
        name: "The Emperor",
        keywords: ["Authority", "Structure", "Control", "Father figure"],
        symbol: "♈",
        element: "Fire",
        planet: "Mars",
        lightEnergy: "Leadership, protection, structure, stability, setting boundaries",
        shadowEnergy: "Tyranny, rigidity, control issues, domination",
        lifeLesson: "True authority comes from inner strength and integrity",
        spiritualGift: "Ability to create order and provide protection and stability",
        bodyConnection: "Head, muscles, bones",
        guidance: "Lead with wisdom and compassion. Your strength serves to protect and guide."
    },
    5: {
        name: "The Hierophant",
        keywords: ["Tradition", "Spiritual wisdom", "Teaching", "Conformity"],
        symbol: "♉",
        element: "Earth",
        planet: "Taurus",
        lightEnergy: "Spiritual teaching, tradition with meaning, guidance, shared wisdom",
        shadowEnergy: "Dogma, rigid beliefs, cult mentality, spiritual bypassing",
        lifeLesson: "Honor tradition while remaining open to new understanding",
        spiritualGift: "Bridge between spiritual and material wisdom, natural teacher",
        bodyConnection: "Throat, ears, neck",
        guidance: "Seek teachers and become one. Wisdom is meant to be shared and passed on."
    },
    6: {
        name: "The Lovers",
        keywords: ["Love", "Harmony", "Relationships", "Values"],
        symbol: "♊",
        element: "Air",
        planet: "Gemini",
        lightEnergy: "True love, harmonious relationships, aligned values, meaningful choices",
        shadowEnergy: "Disharmony, fear of commitment, poor choices, co-dependency",
        lifeLesson: "Love is both a gift and a choice - choose wisely",
        spiritualGift: "Ability to create deep connection and harmonious relationships",
        bodyConnection: "Heart, lungs, arms",
        guidance: "Follow your heart in alignment with your highest values. Love authentically."
    },
    7: {
        name: "The Chariot",
        keywords: ["Willpower", "Victory", "Direction", "Control"],
        symbol: "♋",
        element: "Water",
        planet: "Cancer",
        lightEnergy: "Determination, willpower, overcoming obstacles, directed movement",
        shadowEnergy: "Aggression, lack of direction, being controlled, powerlessness",
        lifeLesson: "Master your emotions to direct your destiny",
        spiritualGift: "Strong willpower and the ability to triumph over challenges",
        bodyConnection: "Stomach, chest, immune system",
        guidance: "Take the reins of your life. Victory comes through focused determination."
    },
    8: {
        name: "Strength",
        keywords: ["Courage", "Patience", "Compassion", "Inner strength"],
        symbol: "♌",
        element: "Fire",
        planet: "Leo",
        lightEnergy: "Courage, patience, gentle strength, compassion, inner fortitude",
        shadowEnergy: "Self-doubt, weakness, raw power without wisdom, cruelty",
        lifeLesson: "True strength is gentle - it tames rather than destroys",
        spiritualGift: "Inner strength that endures and the courage to face any challenge",
        bodyConnection: "Heart, spine, nervous system",
        guidance: "Meet challenges with patience and courage. Your gentle strength is your power."
    },
    9: {
        name: "The Hermit",
        keywords: ["Soul searching", "Introspection", "Guidance", "Solitude"],
        symbol: "♍",
        element: "Earth",
        planet: "Virgo",
        lightEnergy: "Wisdom seeking, inner guidance, contemplation, purposeful solitude",
        shadowEnergy: "Isolation, loneliness, rejection of help, excessive withdrawal",
        lifeLesson: "The greatest wisdom comes from within through reflection",
        spiritualGift: "Deep inner wisdom and the ability to guide others on their path",
        bodyConnection: "Digestive system, nervous system",
        guidance: "Retreat when needed to find your light. Then shine it for others to follow."
    },
    10: {
        name: "Wheel of Fortune",
        keywords: ["Cycles", "Fate", "Turning point", "Destiny"],
        symbol: "♃",
        element: "Fire",
        planet: "Jupiter",
        lightEnergy: "Good fortune, positive change, cycles of growth, synchronicity",
        shadowEnergy: "Bad luck, resistance to change, repeating negative patterns",
        lifeLesson: "Life moves in cycles - embrace the turns of the wheel",
        spiritualGift: "Understanding of life's cycles and ability to work with destiny",
        bodyConnection: "Liver, hips, thighs",
        guidance: "Trust in the timing of the universe. Each turn brings new opportunities."
    },
    11: {
        name: "Justice",
        keywords: ["Fairness", "Truth", "Karma", "Law"],
        symbol: "♎",
        element: "Air",
        planet: "Libra",
        lightEnergy: "Truth, fairness, accountability, karmic balance, clarity",
        shadowEnergy: "Unfairness, dishonesty, avoiding responsibility, harsh judgment",
        lifeLesson: "Truth and balance are the foundations of a meaningful life",
        spiritualGift: "Natural sense of justice and ability to see truth clearly",
        bodyConnection: "Kidneys, lower back, balance",
        guidance: "Act with integrity. Karma is simply cause and effect - choose wisely."
    },
    12: {
        name: "The Hanged Man",
        keywords: ["Surrender", "New perspective", "Sacrifice", "Letting go"],
        symbol: "♆",
        element: "Water",
        planet: "Neptune",
        lightEnergy: "Surrender to higher wisdom, gaining new perspective, willing sacrifice",
        shadowEnergy: "Martyrdom, stalling, fear of surrender, feeling stuck",
        lifeLesson: "Sometimes letting go is the most powerful action",
        spiritualGift: "Ability to see from new perspectives and find meaning in sacrifice",
        bodyConnection: "Feet, lymphatic system, pineal gland",
        guidance: "Surrender what no longer serves. A new perspective awaits when you let go."
    },
    13: {
        name: "Death",
        keywords: ["Transformation", "Endings", "New beginnings", "Release"],
        symbol: "♏",
        element: "Water",
        planet: "Scorpio",
        lightEnergy: "Profound transformation, necessary endings, rebirth, liberation",
        shadowEnergy: "Resistance to change, fear of endings, stagnation, depression",
        lifeLesson: "Endings are always followed by new beginnings",
        spiritualGift: "Power of transformation and ability to release what no longer serves",
        bodyConnection: "Reproductive organs, elimination systems",
        guidance: "Embrace endings as doorways. Death of the old makes way for new life."
    },
    14: {
        name: "Temperance",
        keywords: ["Balance", "Moderation", "Patience", "Purpose"],
        symbol: "♐",
        element: "Fire",
        planet: "Sagittarius",
        lightEnergy: "Balance, moderation, patience, purpose, healing synthesis",
        shadowEnergy: "Imbalance, excess, impatience, lack of purpose",
        lifeLesson: "Balance and moderation lead to lasting fulfillment",
        spiritualGift: "Natural healer with ability to find balance in all things",
        bodyConnection: "Hips, thighs, liver",
        guidance: "Find your middle way. True fulfillment comes through balance and patience."
    },
    15: {
        name: "The Devil",
        keywords: ["Shadow", "Bondage", "Materialism", "Temptation"],
        symbol: "♑",
        element: "Earth",
        planet: "Capricorn",
        lightEnergy: "Shadow integration, releasing bondage, healthy pleasure, material mastery",
        shadowEnergy: "Addiction, materialism, bondage to lower nature, unconscious patterns",
        lifeLesson: "Face your shadow to free yourself from its control",
        spiritualGift: "Ability to face shadow and help others release from bondage",
        bodyConnection: "Bones, knees, skin",
        guidance: "Your chains are self-created and can be self-released. Face your shadows."
    },
    16: {
        name: "The Tower",
        keywords: ["Sudden change", "Revelation", "Awakening", "Liberation"],
        symbol: "♂",
        element: "Fire",
        planet: "Mars",
        lightEnergy: "Breakthrough, necessary destruction, sudden awakening, liberation",
        shadowEnergy: "Catastrophe, destruction, resistance causing collapse, trauma",
        lifeLesson: "Sometimes structures must fall for truth to emerge",
        spiritualGift: "Catalyst for transformation who can handle sudden change",
        bodyConnection: "Head, muscles, adrenals",
        guidance: "Let go of what crumbles. What's built on truth will stand."
    },
    17: {
        name: "The Star",
        keywords: ["Hope", "Inspiration", "Serenity", "Faith"],
        symbol: "♒",
        element: "Air",
        planet: "Aquarius",
        lightEnergy: "Hope, inspiration, serenity, faith, healing, cosmic connection",
        shadowEnergy: "Despair, lack of faith, disconnection, hopelessness",
        lifeLesson: "Hope is the light that guides us through darkness",
        spiritualGift: "Natural healer and inspirer who brings hope to others",
        bodyConnection: "Ankles, circulatory system",
        guidance: "Keep faith even in darkness. Your light inspires hope in others."
    },
    18: {
        name: "The Moon",
        keywords: ["Illusion", "Intuition", "Dreams", "Subconscious"],
        symbol: "♓",
        element: "Water",
        planet: "Pisces",
        lightEnergy: "Deep intuition, dream wisdom, navigating uncertainty, psychic gifts",
        shadowEnergy: "Illusion, fear, confusion, deception, anxiety",
        lifeLesson: "Trust your inner knowing to navigate the unknown",
        spiritualGift: "Powerful intuition and connection to the subconscious realm",
        bodyConnection: "Feet, lymphatic system, hormones",
        guidance: "Trust your intuition through uncertainty. The moon lights even the darkest path."
    },
    19: {
        name: "The Sun",
        keywords: ["Joy", "Success", "Vitality", "Confidence"],
        symbol: "☉",
        element: "Fire",
        planet: "Sun",
        lightEnergy: "Joy, success, vitality, confidence, clarity, celebration",
        shadowEnergy: "Ego inflation, burn-out, excessive pride, depression (blocked sun)",
        lifeLesson: "Your light is meant to shine - let it!",
        spiritualGift: "Natural ability to bring joy, light, and success to all endeavors",
        bodyConnection: "Heart, spine, eyes",
        guidance: "Shine your light fully. Your joy and success inspire others."
    },
    20: {
        name: "Judgement",
        keywords: ["Rebirth", "Calling", "Awakening", "Absolution"],
        symbol: "♇",
        element: "Fire/Spirit",
        planet: "Pluto",
        lightEnergy: "Spiritual calling, rebirth, absolution, answering the call, awakening",
        shadowEnergy: "Ignoring the call, self-judgment, inability to forgive, spiritual bypassing",
        lifeLesson: "Answer your higher calling - your soul has a purpose",
        spiritualGift: "Ability to hear and answer the soul's calling and help others do the same",
        bodyConnection: "Reproductive system, transformative processes",
        guidance: "Heed your calling. Forgive yourself and others. Rise to your highest purpose."
    },
    21: {
        name: "The World",
        keywords: ["Completion", "Integration", "Accomplishment", "Travel"],
        symbol: "♄",
        element: "Earth/All",
        planet: "Saturn",
        lightEnergy: "Completion, wholeness, accomplishment, celebration, world citizenship",
        shadowEnergy: "Incompletion, lack of closure, delayed success, stagnation",
        lifeLesson: "Celebrate your accomplishments before moving to the next cycle",
        spiritualGift: "Natural ability to complete cycles and achieve wholeness",
        bodyConnection: "Whole body integration, skeletal system",
        guidance: "Celebrate completion. You've earned this achievement. Prepare for the next level."
    },
    22: {
        name: "The Fool",
        keywords: ["New beginnings", "Innocence", "Spontaneity", "Faith"],
        symbol: "♅",
        element: "Air/Spirit",
        planet: "Uranus",
        lightEnergy: "New beginnings, trust in life, spontaneity, innocence, unlimited potential",
        shadowEnergy: "Recklessness, naivety, chaos, poor judgment",
        lifeLesson: "Have the courage to begin again with openness and trust",
        spiritualGift: "Childlike wisdom and trust in life's journey",
        bodyConnection: "Nervous system, breath",
        guidance: "Trust in the journey. Each step is exactly where you need to be."
    }
};

// Matrix positions and their meanings
const MATRIX_POSITIONS = {
    comfort: {
        name: "Comfort Zone",
        position: "center",
        description: "Your natural talents and where you feel most comfortable",
        guidance: "These gifts come easily to you - don't take them for granted"
    },
    soul: {
        name: "Soul Purpose",
        position: "top",
        description: "What your soul came to learn and express in this lifetime",
        guidance: "This is your highest potential - reach for it"
    },
    karma: {
        name: "Karmic Lesson",
        position: "bottom",
        description: "Past life energies you're working to balance",
        guidance: "These are lessons you're learning - be patient with yourself"
    },
    maleTalent: {
        name: "Masculine Talent",
        position: "top-right",
        description: "Your active, assertive gifts (regardless of gender)",
        guidance: "Express these energies through action and initiative"
    },
    femaleTalent: {
        name: "Feminine Talent",
        position: "top-left",
        description: "Your receptive, nurturing gifts (regardless of gender)",
        guidance: "Express these energies through receptivity and nurturing"
    },
    maleKarma: {
        name: "Masculine Karma",
        position: "bottom-right",
        description: "Lessons related to action, assertion, and masculine energy",
        guidance: "Heal your relationship with masculine energy"
    },
    femaleKarma: {
        name: "Feminine Karma",
        position: "bottom-left",
        description: "Lessons related to receptivity, emotions, and feminine energy",
        guidance: "Heal your relationship with feminine energy"
    },
    spiritual: {
        name: "Spiritual Path",
        position: "right",
        description: "Your connection to higher guidance and spiritual growth",
        guidance: "Develop this energy through spiritual practice"
    },
    material: {
        name: "Material Path",
        position: "left",
        description: "Your relationship with the physical world and resources",
        guidance: "Ground your spiritual gifts in practical reality"
    }
};

// Age period cycles for destiny matrix
const MATRIX_AGE_CYCLES = [
    { start: 0, end: 10, name: "Foundation", description: "Building the foundation of self" },
    { start: 10, end: 20, name: "Awakening", description: "Discovering talents and challenges" },
    { start: 20, end: 30, name: "Initiation", description: "Testing and proving yourself" },
    { start: 30, end: 40, name: "Integration", description: "Bringing together all parts of self" },
    { start: 40, end: 50, name: "Mastery", description: "Achieving mastery of your gifts" },
    { start: 50, end: 60, name: "Wisdom", description: "Sharing wisdom gained" },
    { start: 60, end: 70, name: "Transcendence", description: "Rising above limitations" },
    { start: 70, end: 80, name: "Legacy", description: "Creating lasting impact" },
    { start: 80, end: 100, name: "Completion", description: "Completing the cycle" }
];
