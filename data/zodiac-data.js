/**
 * Zodiac and Astrology Data
 * Complete data for sun signs, moon signs, rising signs, planets, and aspects
 */

const ZODIAC_SIGNS = {
    aries: {
        name: "Aries",
        symbol: "♈",
        element: "Fire",
        modality: "Cardinal",
        ruler: "Mars",
        dates: { start: [3, 21], end: [4, 19] },
        traits: ["Bold", "Ambitious", "Pioneering", "Energetic", "Competitive"],
        strengths: ["Courageous", "Determined", "Confident", "Enthusiastic", "Optimistic"],
        weaknesses: ["Impatient", "Moody", "Short-tempered", "Impulsive", "Aggressive"],
        description: "Aries is the first sign of the zodiac, and that's exactly how those born under this sign see themselves: first. Aries are the leaders of the pack, first in line to get things going.",
        loveStyle: "Passionate and direct in romance, Aries falls fast and loves intensely. They need a partner who can match their energy and independence.",
        careerPath: "Natural leaders who excel in competitive environments, entrepreneurship, athletics, military, and any field requiring courage and initiative.",
        lifeLesson: "Learning patience and considering others' perspectives before acting."
    },
    taurus: {
        name: "Taurus",
        symbol: "♉",
        element: "Earth",
        modality: "Fixed",
        ruler: "Venus",
        dates: { start: [4, 20], end: [5, 20] },
        traits: ["Reliable", "Patient", "Practical", "Devoted", "Sensual"],
        strengths: ["Dependable", "Patient", "Practical", "Devoted", "Responsible"],
        weaknesses: ["Stubborn", "Possessive", "Uncompromising", "Materialistic"],
        description: "Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene environments surrounded by soft sounds, soothing aromas, and succulent flavors.",
        loveStyle: "Sensual and devoted, Taurus seeks stability and comfort in relationships. They show love through physical affection and material security.",
        careerPath: "Excels in finance, banking, art, music, culinary arts, real estate, and any field requiring patience and an eye for beauty.",
        lifeLesson: "Learning flexibility and embracing change as a path to growth."
    },
    gemini: {
        name: "Gemini",
        symbol: "♊",
        element: "Air",
        modality: "Mutable",
        ruler: "Mercury",
        dates: { start: [5, 21], end: [6, 20] },
        traits: ["Adaptable", "Curious", "Communicative", "Witty", "Versatile"],
        strengths: ["Gentle", "Affectionate", "Curious", "Adaptable", "Quick learner"],
        weaknesses: ["Nervous", "Inconsistent", "Indecisive", "Superficial"],
        description: "Gemini is represented by the twins, and this air sign is all about duality. Geminis are interested in so many pursuits that they need to clone themselves to get everything done.",
        loveStyle: "Intellectually stimulating and playful in love, Gemini needs mental connection and variety. Communication is their love language.",
        careerPath: "Thrives in journalism, writing, teaching, sales, marketing, public relations, and any field requiring communication and adaptability.",
        lifeLesson: "Finding depth and commitment while honoring their need for variety."
    },
    cancer: {
        name: "Cancer",
        symbol: "♋",
        element: "Water",
        modality: "Cardinal",
        ruler: "Moon",
        dates: { start: [6, 21], end: [7, 22] },
        traits: ["Nurturing", "Intuitive", "Protective", "Emotional", "Home-loving"],
        strengths: ["Tenacious", "Highly imaginative", "Loyal", "Emotional", "Sympathetic"],
        weaknesses: ["Moody", "Pessimistic", "Suspicious", "Manipulative", "Insecure"],
        description: "Cancer is a cardinal water sign. Represented by the crab, this oceanic crustacean seamlessly weaves between the sea and shore, representing Cancer's ability to exist in both emotional and material realms.",
        loveStyle: "Deeply nurturing and protective, Cancer creates emotional security in relationships. They need to feel safe before opening their heart.",
        careerPath: "Excels in caregiving, nursing, teaching, hospitality, real estate, and any profession involving nurturing or home environments.",
        lifeLesson: "Learning to release the past and trust in emotional vulnerability."
    },
    leo: {
        name: "Leo",
        symbol: "♌",
        element: "Fire",
        modality: "Fixed",
        ruler: "Sun",
        dates: { start: [7, 23], end: [8, 22] },
        traits: ["Dramatic", "Creative", "Confident", "Generous", "Warm-hearted"],
        strengths: ["Creative", "Passionate", "Generous", "Warm-hearted", "Cheerful"],
        weaknesses: ["Arrogant", "Stubborn", "Self-centered", "Lazy", "Inflexible"],
        description: "Leo is represented by the lion, and these spirited fire signs are the kings and queens of the celestial jungle. Leo rules the heart and is associated with courage, creativity, and self-expression.",
        loveStyle: "Romantic and generous, Leo loves grand gestures and being adored. They need appreciation and loyalty from their partner.",
        careerPath: "Natural performers who excel in entertainment, leadership, politics, fashion, and any field where they can shine and inspire others.",
        lifeLesson: "Learning humility and recognizing the light in others."
    },
    virgo: {
        name: "Virgo",
        symbol: "♍",
        element: "Earth",
        modality: "Mutable",
        ruler: "Mercury",
        dates: { start: [8, 23], end: [9, 22] },
        traits: ["Analytical", "Practical", "Helpful", "Perfectionist", "Modest"],
        strengths: ["Loyal", "Analytical", "Kind", "Hardworking", "Practical"],
        weaknesses: ["Shyness", "Worry", "Overly critical", "All work no play"],
        description: "Virgo is an earth sign historically represented by the goddess of wheat and agriculture. Virgos are logical, practical, and systematic in their approach to life.",
        loveStyle: "Shows love through acts of service and attention to detail. Virgo seeks a partner who appreciates their devotion and practical support.",
        careerPath: "Excels in healthcare, analysis, editing, accounting, research, and any field requiring precision and attention to detail.",
        lifeLesson: "Learning self-acceptance and releasing the pursuit of impossible perfection."
    },
    libra: {
        name: "Libra",
        symbol: "♎",
        element: "Air",
        modality: "Cardinal",
        ruler: "Venus",
        dates: { start: [9, 23], end: [10, 22] },
        traits: ["Diplomatic", "Graceful", "Harmonious", "Aesthetic", "Partnership-oriented"],
        strengths: ["Cooperative", "Diplomatic", "Gracious", "Fair-minded", "Social"],
        weaknesses: ["Indecisive", "Avoids confrontation", "Self-pity", "Holds grudges"],
        description: "Libra is an air sign represented by the scales, an association that reflects Libra's fixation on balance and harmony. Libra is obsessed with symmetry and strives for equilibrium.",
        loveStyle: "Romantic idealist who seeks a true partnership. Libra needs harmony, beauty, and intellectual stimulation in relationships.",
        careerPath: "Thrives in law, diplomacy, counseling, design, art, and any field requiring balance, aesthetics, or mediation.",
        lifeLesson: "Learning to make decisions and stand firm in their own truth."
    },
    scorpio: {
        name: "Scorpio",
        symbol: "♏",
        element: "Water",
        modality: "Fixed",
        ruler: "Pluto",
        dates: { start: [10, 23], end: [11, 21] },
        traits: ["Intense", "Passionate", "Mysterious", "Transformative", "Loyal"],
        strengths: ["Resourceful", "Brave", "Passionate", "Stubborn", "True friend"],
        weaknesses: ["Distrusting", "Jealous", "Secretive", "Violent", "Manipulative"],
        description: "Scorpio is a water sign that derives its strength from the psychic, emotional realm. Like its celestial spirit animals (scorpion, snake, eagle, phoenix), Scorpio represents transformation.",
        loveStyle: "Intensely passionate and deeply loyal, Scorpio loves with their entire being. They need trust, depth, and emotional intimacy.",
        careerPath: "Excels in psychology, research, investigation, surgery, finance, and any field requiring depth, transformation, or uncovering hidden truths.",
        lifeLesson: "Learning to trust, forgive, and release the need for control."
    },
    sagittarius: {
        name: "Sagittarius",
        symbol: "♐",
        element: "Fire",
        modality: "Mutable",
        ruler: "Jupiter",
        dates: { start: [11, 22], end: [12, 21] },
        traits: ["Adventurous", "Optimistic", "Philosophical", "Free-spirited", "Honest"],
        strengths: ["Generous", "Idealistic", "Great sense of humor", "Honest"],
        weaknesses: ["Promises more than can deliver", "Impatient", "Tactless"],
        description: "Sagittarius is a fire sign represented by the archer, a centaur pointing a bow and arrow toward the sky. This sign is always seeking knowledge and philosophical truth.",
        loveStyle: "Freedom-loving and adventurous in romance, Sagittarius needs a partner who shares their love of exploration and growth.",
        careerPath: "Thrives in travel, education, publishing, philosophy, law, and any field offering expansion, adventure, and meaning.",
        lifeLesson: "Learning commitment and finding freedom within stability."
    },
    capricorn: {
        name: "Capricorn",
        symbol: "♑",
        element: "Earth",
        modality: "Cardinal",
        ruler: "Saturn",
        dates: { start: [12, 22], end: [1, 19] },
        traits: ["Ambitious", "Disciplined", "Responsible", "Traditional", "Patient"],
        strengths: ["Responsible", "Disciplined", "Self-control", "Good managers"],
        weaknesses: ["Know-it-all", "Unforgiving", "Condescending", "Expecting worst"],
        description: "Capricorn is an earth sign represented by the sea goat, a mythological creature with the body of a goat and tail of a fish. This speaks to Capricorn's dual ability to navigate material and emotional realms.",
        loveStyle: "Serious and committed, Capricorn builds love slowly but surely. They show love through stability, loyalty, and long-term dedication.",
        careerPath: "Natural executives who excel in business, management, politics, finance, and any field requiring discipline and long-term strategy.",
        lifeLesson: "Learning to balance ambition with emotional expression and play."
    },
    aquarius: {
        name: "Aquarius",
        symbol: "♒",
        element: "Air",
        modality: "Fixed",
        ruler: "Uranus",
        dates: { start: [1, 20], end: [2, 18] },
        traits: ["Humanitarian", "Innovative", "Independent", "Eccentric", "Intellectual"],
        strengths: ["Progressive", "Original", "Independent", "Humanitarian"],
        weaknesses: ["Runs from emotional expression", "Temperamental", "Uncompromising"],
        description: "Aquarius is an air sign represented by the water bearer, the mystical healer who bestows water (life) upon the land. Aquarius is the most humanitarian astrological sign.",
        loveStyle: "Values friendship and intellectual connection above all. Aquarius needs space for independence and a partner who accepts their uniqueness.",
        careerPath: "Excels in technology, science, humanitarian work, social activism, and any innovative or unconventional field.",
        lifeLesson: "Learning to connect emotionally while maintaining their individuality."
    },
    pisces: {
        name: "Pisces",
        symbol: "♓",
        element: "Water",
        modality: "Mutable",
        ruler: "Neptune",
        dates: { start: [2, 19], end: [3, 20] },
        traits: ["Intuitive", "Compassionate", "Artistic", "Dreamy", "Spiritual"],
        strengths: ["Compassionate", "Artistic", "Intuitive", "Gentle", "Wise"],
        weaknesses: ["Fearful", "Overly trusting", "Sad", "Desire to escape reality"],
        description: "Pisces is a water sign represented by two fish swimming in opposite directions. This imagery speaks to the constant division of Pisces' attention between fantasy and reality.",
        loveStyle: "Romantic and devoted, Pisces loves unconditionally and seeks a soul connection. They need a partner who appreciates their sensitivity.",
        careerPath: "Thrives in arts, music, healing, spirituality, film, and any creative or compassionate profession.",
        lifeLesson: "Learning healthy boundaries while maintaining their compassionate nature."
    }
};

const PLANETS = {
    sun: {
        name: "Sun",
        symbol: "☉",
        rules: "Leo",
        meaning: "Core identity, ego, life force",
        description: "The Sun represents your core self, your identity, and your conscious mind. It's who you are at your most fundamental level."
    },
    moon: {
        name: "Moon",
        symbol: "☽",
        rules: "Cancer",
        meaning: "Emotions, instincts, subconscious",
        description: "The Moon represents your emotional nature, instincts, and subconscious patterns. It shows how you nurture and seek comfort."
    },
    mercury: {
        name: "Mercury",
        symbol: "☿",
        rules: "Gemini, Virgo",
        meaning: "Communication, thinking, learning",
        description: "Mercury governs how you think, communicate, and process information. It represents your intellectual nature and learning style."
    },
    venus: {
        name: "Venus",
        symbol: "♀",
        rules: "Taurus, Libra",
        meaning: "Love, beauty, values, pleasure",
        description: "Venus represents love, beauty, pleasure, and values. It shows what you find attractive and how you express affection."
    },
    mars: {
        name: "Mars",
        symbol: "♂",
        rules: "Aries",
        meaning: "Action, energy, desire, aggression",
        description: "Mars represents your drive, ambition, and how you assert yourself. It governs passion, anger, and physical energy."
    },
    jupiter: {
        name: "Jupiter",
        symbol: "♃",
        rules: "Sagittarius",
        meaning: "Expansion, luck, wisdom, growth",
        description: "Jupiter represents expansion, luck, and higher learning. It shows where you seek growth and how you find meaning."
    },
    saturn: {
        name: "Saturn",
        symbol: "♄",
        rules: "Capricorn",
        meaning: "Structure, discipline, limitations, karma",
        description: "Saturn represents structure, discipline, and life lessons. It shows where you face challenges and must develop mastery."
    },
    uranus: {
        name: "Uranus",
        symbol: "♅",
        rules: "Aquarius",
        meaning: "Innovation, rebellion, sudden change",
        description: "Uranus represents innovation, revolution, and sudden change. It shows where you seek freedom and express your uniqueness."
    },
    neptune: {
        name: "Neptune",
        symbol: "♆",
        rules: "Pisces",
        meaning: "Dreams, spirituality, illusion",
        description: "Neptune represents dreams, spirituality, and transcendence. It governs intuition, imagination, and connection to the divine."
    },
    pluto: {
        name: "Pluto",
        symbol: "♇",
        rules: "Scorpio",
        meaning: "Transformation, power, rebirth",
        description: "Pluto represents transformation, power, and rebirth. It shows where you experience profound change and tap into hidden power."
    }
};

const HOUSES = {
    1: { name: "First House", theme: "Self & Identity", description: "Your appearance, personality, and how you present yourself to the world." },
    2: { name: "Second House", theme: "Values & Resources", description: "Money, possessions, self-worth, and personal values." },
    3: { name: "Third House", theme: "Communication", description: "Communication, learning, siblings, and short journeys." },
    4: { name: "Fourth House", theme: "Home & Family", description: "Home, family, roots, and emotional foundation." },
    5: { name: "Fifth House", theme: "Creativity & Romance", description: "Creative expression, romance, children, and pleasure." },
    6: { name: "Sixth House", theme: "Health & Service", description: "Daily routines, health, work, and service to others." },
    7: { name: "Seventh House", theme: "Partnerships", description: "Marriage, partnerships, contracts, and open enemies." },
    8: { name: "Eighth House", theme: "Transformation", description: "Shared resources, intimacy, death, and rebirth." },
    9: { name: "Ninth House", theme: "Philosophy", description: "Higher education, travel, philosophy, and beliefs." },
    10: { name: "Tenth House", theme: "Career & Status", description: "Career, public image, authority, and achievements." },
    11: { name: "Eleventh House", theme: "Community", description: "Friends, groups, hopes, and humanitarian pursuits." },
    12: { name: "Twelfth House", theme: "Spirituality", description: "Subconscious, secrets, spirituality, and endings." }
};

const ASPECTS = {
    conjunction: { name: "Conjunction", degrees: 0, orb: 8, nature: "Powerful", symbol: "☌", description: "Intensifies and fuses energies together" },
    sextile: { name: "Sextile", degrees: 60, orb: 6, nature: "Harmonious", symbol: "⚹", description: "Opportunities and easy flow of energy" },
    square: { name: "Square", degrees: 90, orb: 8, nature: "Challenging", symbol: "□", description: "Tension that promotes growth and action" },
    trine: { name: "Trine", degrees: 120, orb: 8, nature: "Harmonious", symbol: "△", description: "Natural talents and easy expression" },
    opposition: { name: "Opposition", degrees: 180, orb: 8, nature: "Challenging", symbol: "☍", description: "Awareness through contrast and balance" }
};

const ELEMENTS = {
    fire: { signs: ["aries", "leo", "sagittarius"], traits: "Passionate, energetic, impulsive, inspiring" },
    earth: { signs: ["taurus", "virgo", "capricorn"], traits: "Practical, grounded, reliable, sensual" },
    air: { signs: ["gemini", "libra", "aquarius"], traits: "Intellectual, communicative, social, objective" },
    water: { signs: ["cancer", "scorpio", "pisces"], traits: "Emotional, intuitive, nurturing, deep" }
};

const MODALITIES = {
    cardinal: { signs: ["aries", "cancer", "libra", "capricorn"], traits: "Initiating, leading, active" },
    fixed: { signs: ["taurus", "leo", "scorpio", "aquarius"], traits: "Stabilizing, persistent, determined" },
    mutable: { signs: ["gemini", "virgo", "sagittarius", "pisces"], traits: "Adaptable, flexible, changeable" }
};

// Moon sign calculations (simplified - based on lunar cycle)
const MOON_SIGNS_BY_DAY = [
    "aries", "aries", "taurus", "taurus", "gemini", "gemini", "cancer", "cancer",
    "leo", "leo", "virgo", "virgo", "libra", "libra", "scorpio", "scorpio",
    "sagittarius", "sagittarius", "capricorn", "capricorn", "aquarius", "aquarius",
    "pisces", "pisces", "aries", "aries", "taurus", "taurus", "gemini", "gemini", "cancer"
];

// Rising sign calculations (simplified - based on birth hour)
const RISING_BY_HOUR = {
    0: "aries", 1: "aries", 2: "taurus", 3: "taurus", 4: "gemini", 5: "gemini",
    6: "cancer", 7: "cancer", 8: "leo", 9: "leo", 10: "virgo", 11: "virgo",
    12: "libra", 13: "libra", 14: "scorpio", 15: "scorpio", 16: "sagittarius", 17: "sagittarius",
    18: "capricorn", 19: "capricorn", 20: "aquarius", 21: "aquarius", 22: "pisces", 23: "pisces"
};

/**
 * Get zodiac sign from date
 */
function getZodiacSign(month, day) {
    const signs = Object.keys(ZODIAC_SIGNS);
    for (let sign of signs) {
        const dates = ZODIAC_SIGNS[sign].dates;
        const startMonth = dates.start[0];
        const startDay = dates.start[1];
        const endMonth = dates.end[0];
        const endDay = dates.end[1];
        
        if (startMonth === endMonth) {
            if (month === startMonth && day >= startDay && day <= endDay) {
                return sign;
            }
        } else if (startMonth > endMonth) {
            // Handles Capricorn (Dec-Jan)
            if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
                return sign;
            }
        } else {
            if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
                return sign;
            }
        }
    }
    return "capricorn"; // Default fallback
}

/**
 * Get moon sign (simplified calculation)
 */
function getMoonSign(day, month, year) {
    // Simplified: uses day of month combined with year offset
    const offset = (year % 12) * 2;
    const index = (day + offset + month) % 31;
    return MOON_SIGNS_BY_DAY[index];
}

/**
 * Get rising sign (simplified - requires birth time)
 */
function getRisingSign(hour, sunSign) {
    if (hour === null || hour === undefined || hour === '') {
        return null;
    }
    
    // Simplified calculation: offset from sun sign based on birth hour
    const signs = Object.keys(ZODIAC_SIGNS);
    const sunIndex = signs.indexOf(sunSign);
    const hourOffset = Math.floor(hour / 2);
    const risingIndex = (sunIndex + hourOffset) % 12;
    return signs[risingIndex];
}

/**
 * Get element from sign
 */
function getElement(sign) {
    for (let element in ELEMENTS) {
        if (ELEMENTS[element].signs.includes(sign)) {
            return element;
        }
    }
    return "fire";
}

/**
 * Get modality from sign
 */
function getModality(sign) {
    for (let modality in MODALITIES) {
        if (MODALITIES[modality].signs.includes(sign)) {
            return modality;
        }
    }
    return "cardinal";
}
