/**
 * Cosmic Blueprint - Calculations Module
 * All numerology, astrology, matrix, and chakra calculations
 */

// ============== NUMEROLOGY CALCULATIONS ==============

/**
 * Reduce a number to single digit or master number
 */
function reduceNumber(num, keepMaster = true) {
    if (typeof num === 'string') {
        num = parseInt(num, 10);
    }
    if (isNaN(num)) return 0;
    
    while (num > 9) {
        if (keepMaster && (num === 11 || num === 22 || num === 33)) {
            return num;
        }
        num = String(num).split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    }
    return num;
}

/**
 * Calculate Life Path Number from birth date
 */
function calculateLifePath(month, day, year) {
    const steps = [];
    
    // Reduce each component separately first
    const monthReduced = reduceNumber(month, false);
    const dayReduced = reduceNumber(day, false);
    const yearReduced = reduceNumber(year, false);
    
    steps.push(`Month: ${month} → ${monthReduced}`);
    steps.push(`Day: ${day} → ${dayReduced}`);
    steps.push(`Year: ${year} → ${yearReduced}`);
    
    const sum = monthReduced + dayReduced + yearReduced;
    steps.push(`Sum: ${monthReduced} + ${dayReduced} + ${yearReduced} = ${sum}`);
    
    const lifePath = reduceNumber(sum, true);
    steps.push(`Life Path: ${sum} → ${lifePath}`);
    
    return { number: lifePath, steps };
}

/**
 * Calculate Destiny/Expression Number from full name
 */
function calculateDestiny(name) {
    const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
    const steps = [];
    let total = 0;
    let breakdown = '';
    
    for (let letter of cleanName) {
        const value = LETTER_VALUES[letter] || 0;
        total += value;
        breakdown += `${letter.toUpperCase()}(${value}) + `;
    }
    
    breakdown = breakdown.slice(0, -3);
    steps.push(`Letters: ${breakdown}`);
    steps.push(`Sum: ${total}`);
    
    const destiny = reduceNumber(total, true);
    steps.push(`Destiny: ${total} → ${destiny}`);
    
    return { number: destiny, steps };
}

/**
 * Calculate Soul Urge Number from vowels in name
 */
function calculateSoulUrge(name) {
    const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
    const steps = [];
    let total = 0;
    let breakdown = '';
    
    for (let i = 0; i < cleanName.length; i++) {
        const letter = cleanName[i];
        let isVowel = VOWELS.includes(letter);
        
        // Handle Y as sometimes vowel
        if (SOMETIMES_Y && letter === 'y') {
            // Y is a vowel if it's the only vowel sound in a syllable
            const prevLetter = i > 0 ? cleanName[i - 1] : '';
            const nextLetter = i < cleanName.length - 1 ? cleanName[i + 1] : '';
            const prevIsConsonant = prevLetter && !VOWELS.includes(prevLetter);
            const nextIsConsonant = !nextLetter || !VOWELS.includes(nextLetter);
            isVowel = prevIsConsonant && nextIsConsonant;
        }
        
        if (isVowel) {
            const value = LETTER_VALUES[letter] || 0;
            total += value;
            breakdown += `${letter.toUpperCase()}(${value}) + `;
        }
    }
    
    breakdown = breakdown.slice(0, -3) || 'No vowels found';
    steps.push(`Vowels: ${breakdown}`);
    steps.push(`Sum: ${total}`);
    
    const soulUrge = reduceNumber(total, true);
    steps.push(`Soul Urge: ${total} → ${soulUrge}`);
    
    return { number: soulUrge, steps };
}

/**
 * Calculate Personality Number from consonants in name
 */
function calculatePersonality(name) {
    const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
    const steps = [];
    let total = 0;
    let breakdown = '';
    
    for (let i = 0; i < cleanName.length; i++) {
        const letter = cleanName[i];
        let isVowel = VOWELS.includes(letter);
        
        // Handle Y
        if (SOMETIMES_Y && letter === 'y') {
            const prevLetter = i > 0 ? cleanName[i - 1] : '';
            const nextLetter = i < cleanName.length - 1 ? cleanName[i + 1] : '';
            const prevIsConsonant = prevLetter && !VOWELS.includes(prevLetter);
            const nextIsConsonant = !nextLetter || !VOWELS.includes(nextLetter);
            isVowel = prevIsConsonant && nextIsConsonant;
        }
        
        if (!isVowel) {
            const value = LETTER_VALUES[letter] || 0;
            total += value;
            breakdown += `${letter.toUpperCase()}(${value}) + `;
        }
    }
    
    breakdown = breakdown.slice(0, -3) || 'No consonants found';
    steps.push(`Consonants: ${breakdown}`);
    steps.push(`Sum: ${total}`);
    
    const personality = reduceNumber(total, true);
    steps.push(`Personality: ${total} → ${personality}`);
    
    return { number: personality, steps };
}

/**
 * Get Birthday Number (just the day reduced)
 */
function calculateBirthday(day) {
    return { 
        number: reduceNumber(day, true), 
        steps: [`Day: ${day} → ${reduceNumber(day, true)}`] 
    };
}

/**
 * Calculate Personal Year
 */
function calculatePersonalYear(month, day, currentYear) {
    const sum = reduceNumber(month, false) + reduceNumber(day, false) + reduceNumber(currentYear, false);
    return reduceNumber(sum, true);
}

/**
 * Calculate Personal Month
 */
function calculatePersonalMonth(personalYear, currentMonth) {
    const sum = personalYear + reduceNumber(currentMonth, false);
    return reduceNumber(sum, true);
}

/**
 * Calculate Pinnacle Cycles
 */
function calculatePinnacles(month, day, year) {
    const lifePath = calculateLifePath(month, day, year).number;
    const m = reduceNumber(month, true);
    const d = reduceNumber(day, true);
    const y = reduceNumber(year, true);
    
    const firstPinnacle = reduceNumber(m + d, true);
    const secondPinnacle = reduceNumber(d + y, true);
    const thirdPinnacle = reduceNumber(firstPinnacle + secondPinnacle, true);
    const fourthPinnacle = reduceNumber(m + y, true);
    
    // Calculate timing
    const firstEnds = 36 - lifePath;
    
    return [
        { number: firstPinnacle, start: 0, end: firstEnds, name: "First Pinnacle" },
        { number: secondPinnacle, start: firstEnds, end: firstEnds + 9, name: "Second Pinnacle" },
        { number: thirdPinnacle, start: firstEnds + 9, end: firstEnds + 18, name: "Third Pinnacle" },
        { number: fourthPinnacle, start: firstEnds + 18, end: 100, name: "Fourth Pinnacle" }
    ];
}

/**
 * Calculate Challenge Numbers
 */
function calculateChallenges(month, day, year) {
    const m = reduceNumber(month, false);
    const d = reduceNumber(day, false);
    const y = reduceNumber(year, false);
    
    const firstChallenge = Math.abs(m - d);
    const secondChallenge = Math.abs(d - y);
    const thirdChallenge = Math.abs(firstChallenge - secondChallenge);
    const fourthChallenge = Math.abs(m - y);
    
    return [
        { number: firstChallenge, name: "First Challenge" },
        { number: secondChallenge, name: "Second Challenge" },
        { number: thirdChallenge, name: "Main Challenge" },
        { number: fourthChallenge, name: "Fourth Challenge" }
    ];
}

/**
 * Calculate Karmic Lessons (missing numbers in name)
 */
function calculateKarmicLessons(name) {
    const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
    const numbersPresent = new Set();
    
    for (let letter of cleanName) {
        const value = LETTER_VALUES[letter];
        if (value) numbersPresent.add(value);
    }
    
    const karmicLessons = [];
    for (let i = 1; i <= 9; i++) {
        if (!numbersPresent.has(i)) {
            karmicLessons.push(i);
        }
    }
    
    return karmicLessons;
}

/**
 * Calculate Hidden Passion (most frequent number in name)
 */
function calculateHiddenPassion(name) {
    const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
    const numberCounts = {};
    
    for (let letter of cleanName) {
        const value = LETTER_VALUES[letter];
        if (value) {
            numberCounts[value] = (numberCounts[value] || 0) + 1;
        }
    }
    
    let maxCount = 0;
    let hiddenPassion = 0;
    for (let [num, count] of Object.entries(numberCounts)) {
        if (count > maxCount) {
            maxCount = count;
            hiddenPassion = parseInt(num);
        }
    }
    
    return { number: hiddenPassion, count: maxCount };
}

// ============== DESTINY MATRIX CALCULATIONS ==============

/**
 * Calculate Destiny Matrix points
 */
function calculateDestinyMatrix(day, month, year) {
    // Reduce to Arcana (1-22)
    const toArcana = (num) => {
        let result = num;
        while (result > 22) {
            result = String(result).split('').reduce((sum, d) => sum + parseInt(d, 10), 0);
        }
        return result || 22;
    };
    
    const d = day;
    const m = month;
    const y = year % 100; // Use last two digits of year
    
    // Core matrix points
    const soul = toArcana(d);
    const personality = toArcana(m);
    const destiny = toArcana(y);
    
    // Calculated points
    const comfort = toArcana(d + m + y);
    const spiritual = toArcana(d + m);
    const material = toArcana(m + y);
    
    // Talent and Karma points
    const maleTalent = toArcana(d + personality);
    const femaleTalent = toArcana(d + destiny);
    const maleKarma = toArcana(personality + comfort);
    const femaleKarma = toArcana(destiny + comfort);
    
    // Sky and Earth
    const sky = toArcana(soul + spiritual);
    const earth = toArcana(soul + material);
    
    return {
        soul: { value: soul, position: 'top', label: 'Soul Purpose' },
        personality: { value: personality, position: 'top-left', label: 'Personality' },
        destiny: { value: destiny, position: 'top-right', label: 'Destiny' },
        comfort: { value: comfort, position: 'center', label: 'Comfort Zone' },
        spiritual: { value: spiritual, position: 'left', label: 'Spiritual Path' },
        material: { value: material, position: 'right', label: 'Material Path' },
        maleTalent: { value: maleTalent, position: 'bottom-left', label: 'Masculine Talent' },
        femaleTalent: { value: femaleTalent, position: 'bottom-right', label: 'Feminine Talent' },
        maleKarma: { value: maleKarma, position: 'bottom', label: 'Karmic Lesson' },
        sky: { value: sky, label: 'Higher Self' },
        earth: { value: earth, label: 'Earthly Mission' }
    };
}

// ============== CHAKRA CALCULATIONS ==============

/**
 * Calculate chakra energies from birth date
 */
function calculateChakraEnergies(day, month, year) {
    const chakras = {};
    
    // Calculate three aspects for each chakra
    for (let i = 1; i <= 7; i++) {
        const physical = reduceToChakra((day + i) % 22 || 22);
        const energetic = reduceToChakra((month + i * 2) % 22 || 22);
        const emotional = reduceToChakra((year % 100 + i * 3) % 22 || 22);
        const total = reduceToChakra(physical + energetic + emotional);
        
        chakras[i] = {
            physical,
            energetic,
            emotional,
            total,
            status: determineChakraStatus(total)
        };
    }
    
    // Calculate overall totals
    const physicalTotal = Object.values(chakras).reduce((sum, c) => sum + c.physical, 0);
    const energeticTotal = Object.values(chakras).reduce((sum, c) => sum + c.energetic, 0);
    const emotionalTotal = Object.values(chakras).reduce((sum, c) => sum + c.emotional, 0);
    const grandTotal = physicalTotal + energeticTotal + emotionalTotal;
    
    return {
        chakras,
        totals: {
            physical: reduceToChakra(physicalTotal),
            energetic: reduceToChakra(energeticTotal),
            emotional: reduceToChakra(emotionalTotal),
            grand: reduceToChakra(grandTotal)
        }
    };
}

function reduceToChakra(num) {
    while (num > 22) {
        num = String(num).split('').reduce((sum, d) => sum + parseInt(d, 10), 0);
    }
    return num;
}

function determineChakraStatus(total) {
    if (total <= 7) return 'underactive';
    if (total <= 15) return 'balanced';
    return 'overactive';
}

// ============== ASTROLOGY CALCULATIONS ==============

/**
 * Calculate complete astrological profile
 */
function calculateAstrology(month, day, year, hour = null, location = '') {
    const sunSign = getZodiacSign(month, day);
    const moonSign = getMoonSign(day, month, year);
    const risingSign = hour !== null ? getRisingSign(hour, sunSign) : null;
    
    // Calculate planetary positions (simplified)
    const planets = calculatePlanetaryPositions(month, day, year);
    
    // Calculate house placements if rising sign known
    const houses = risingSign ? calculateHouses(risingSign) : null;
    
    // Calculate aspects between planets
    const aspects = calculateAspects(planets);
    
    return {
        sunSign: ZODIAC_SIGNS[sunSign],
        moonSign: ZODIAC_SIGNS[moonSign],
        risingSign: risingSign ? ZODIAC_SIGNS[risingSign] : null,
        element: getElement(sunSign),
        modality: getModality(sunSign),
        planets,
        houses,
        aspects
    };
}

/**
 * Calculate simplified planetary positions
 */
function calculatePlanetaryPositions(month, day, year) {
    const signs = Object.keys(ZODIAC_SIGNS);
    const positions = {};
    
    // Sun position (accurate)
    positions.sun = { sign: getZodiacSign(month, day), house: 1 };
    
    // Moon position (simplified - changes every 2.5 days)
    const moonIndex = (day + month + (year % 12)) % 12;
    positions.moon = { sign: signs[moonIndex], house: 4 };
    
    // Mercury (never far from Sun)
    const mercuryOffset = ((year + month) % 3) - 1;
    const mercuryIndex = (signs.indexOf(positions.sun.sign) + mercuryOffset + 12) % 12;
    positions.mercury = { sign: signs[mercuryIndex], house: 3 };
    
    // Venus (never more than 48° from Sun)
    const venusOffset = ((year + day) % 5) - 2;
    const venusIndex = (signs.indexOf(positions.sun.sign) + venusOffset + 12) % 12;
    positions.venus = { sign: signs[venusIndex], house: 2 };
    
    // Mars
    const marsIndex = (year + month * 2) % 12;
    positions.mars = { sign: signs[marsIndex], house: 1 };
    
    // Jupiter (changes sign yearly)
    const jupiterIndex = (year - 2000) % 12;
    positions.jupiter = { sign: signs[jupiterIndex >= 0 ? jupiterIndex : jupiterIndex + 12], house: 9 };
    
    // Saturn (changes sign every 2.5 years)
    const saturnIndex = Math.floor((year - 2000) / 2.5) % 12;
    positions.saturn = { sign: signs[saturnIndex >= 0 ? saturnIndex : saturnIndex + 12], house: 10 };
    
    // Uranus (changes sign every 7 years)
    const uranusIndex = Math.floor((year - 2000) / 7) % 12;
    positions.uranus = { sign: signs[uranusIndex >= 0 ? uranusIndex : uranusIndex + 12], house: 11 };
    
    // Neptune (changes sign every 14 years)
    const neptuneIndex = Math.floor((year - 2000) / 14) % 12;
    positions.neptune = { sign: signs[neptuneIndex >= 0 ? neptuneIndex : neptuneIndex + 12], house: 12 };
    
    // Pluto (varies, simplified)
    const plutoIndex = Math.floor((year - 2000) / 20) % 12;
    positions.pluto = { sign: signs[plutoIndex >= 0 ? plutoIndex : plutoIndex + 12], house: 8 };
    
    return positions;
}

/**
 * Calculate house cusps from rising sign
 */
function calculateHouses(risingSign) {
    const signs = Object.keys(ZODIAC_SIGNS);
    const risingIndex = signs.indexOf(risingSign);
    const houses = {};
    
    for (let i = 1; i <= 12; i++) {
        const signIndex = (risingIndex + i - 1) % 12;
        houses[i] = {
            sign: signs[signIndex],
            ...HOUSES[i]
        };
    }
    
    return houses;
}

/**
 * Calculate aspects between planets
 */
function calculateAspects(planets) {
    const aspects = [];
    const planetNames = Object.keys(planets);
    const signs = Object.keys(ZODIAC_SIGNS);
    
    for (let i = 0; i < planetNames.length; i++) {
        for (let j = i + 1; j < planetNames.length; j++) {
            const planet1 = planetNames[i];
            const planet2 = planetNames[j];
            const sign1Index = signs.indexOf(planets[planet1].sign);
            const sign2Index = signs.indexOf(planets[planet2].sign);
            
            let diff = Math.abs(sign1Index - sign2Index) * 30;
            if (diff > 180) diff = 360 - diff;
            
            // Check for aspects
            for (let [aspectName, aspect] of Object.entries(ASPECTS)) {
                if (Math.abs(diff - aspect.degrees) <= aspect.orb / 3) {
                    aspects.push({
                        planet1,
                        planet2,
                        aspect: aspectName,
                        ...aspect
                    });
                    break;
                }
            }
        }
    }
    
    return aspects;
}

// ============== COMPATIBILITY CALCULATIONS ==============

/**
 * Calculate compatibility between two people
 */
function calculateCompatibility(person1, person2) {
    const scores = {};
    
    // Life Path compatibility
    scores.lifePath = calculateLifePathCompatibility(person1.lifePath, person2.lifePath);
    
    // Destiny compatibility
    scores.destiny = calculateNumberCompatibility(person1.destiny, person2.destiny);
    
    // Soul Urge compatibility
    scores.soulUrge = calculateNumberCompatibility(person1.soulUrge, person2.soulUrge);
    
    // Zodiac compatibility
    scores.zodiac = calculateZodiacCompatibility(person1.sunSign, person2.sunSign);
    
    // Overall score
    const overall = Math.round(
        (scores.lifePath * 0.35 + 
         scores.destiny * 0.25 + 
         scores.soulUrge * 0.25 + 
         scores.zodiac * 0.15)
    );
    
    return {
        overall,
        ...scores,
        level: getCompatibilityLevel(overall),
        description: getCompatibilityDescription(overall, scores)
    };
}

function calculateLifePathCompatibility(lp1, lp2) {
    // Natural matches
    const naturalMatches = {
        1: [3, 5, 7],
        2: [4, 6, 8],
        3: [1, 5, 9],
        4: [2, 6, 8],
        5: [1, 3, 7],
        6: [2, 4, 9],
        7: [1, 5, 7],
        8: [2, 4, 6],
        9: [3, 6, 9],
        11: [2, 4, 6],
        22: [4, 6, 8],
        33: [6, 9, 33]
    };
    
    const matches = naturalMatches[lp1] || [];
    if (matches.includes(lp2) || lp1 === lp2) {
        return 85 + Math.floor(Math.random() * 15);
    }
    
    // Calculate based on number harmony
    const diff = Math.abs(lp1 - lp2);
    return Math.max(40, 80 - diff * 5);
}

function calculateNumberCompatibility(num1, num2) {
    if (num1 === num2) return 90 + Math.floor(Math.random() * 10);
    const diff = Math.abs(num1 - num2);
    return Math.max(50, 85 - diff * 4);
}

function calculateZodiacCompatibility(sign1, sign2) {
    const element1 = getElement(sign1);
    const element2 = getElement(sign2);
    
    // Same element
    if (element1 === element2) return 85 + Math.floor(Math.random() * 15);
    
    // Compatible elements
    const compatible = {
        fire: ['air'],
        air: ['fire'],
        earth: ['water'],
        water: ['earth']
    };
    
    if (compatible[element1]?.includes(element2)) {
        return 70 + Math.floor(Math.random() * 15);
    }
    
    return 50 + Math.floor(Math.random() * 20);
}

function getCompatibilityLevel(score) {
    if (score >= 85) return "Soul Connection";
    if (score >= 70) return "Highly Compatible";
    if (score >= 55) return "Good Potential";
    if (score >= 40) return "Growth Opportunity";
    return "Challenging";
}

function getCompatibilityDescription(overall, scores) {
    if (overall >= 85) {
        return "You share a deep soul connection with harmonious energy flow. This relationship has the potential for profound spiritual growth and lasting partnership.";
    } else if (overall >= 70) {
        return "Your energies complement each other well. With open communication and mutual respect, this relationship can flourish beautifully.";
    } else if (overall >= 55) {
        return "There's good potential here, though some areas may require extra attention and understanding. Growth comes through embracing your differences.";
    } else {
        return "This combination presents growth opportunities through challenges. Success requires conscious effort, patience, and willingness to learn from each other.";
    }
}

// ============== COMPLETE READING GENERATION ==============

/**
 * Generate complete cosmic blueprint reading
 */
function generateCompleteReading(birthData) {
    const { month, day, year, hour, minute, location, fullName, currentName } = birthData;
    
    // Numerology calculations
    const lifePath = calculateLifePath(month, day, year);
    const destiny = calculateDestiny(fullName);
    const soulUrge = calculateSoulUrge(fullName);
    const personality = calculatePersonality(fullName);
    const birthday = calculateBirthday(day);
    
    // Current name calculations if different
    let currentNameNumbers = null;
    if (currentName && currentName !== fullName) {
        currentNameNumbers = {
            destiny: calculateDestiny(currentName),
            soulUrge: calculateSoulUrge(currentName),
            personality: calculatePersonality(currentName)
        };
    }
    
    // Cycles and patterns
    const currentYear = new Date().getFullYear();
    const personalYear = calculatePersonalYear(month, day, currentYear);
    const personalMonth = calculatePersonalMonth(personalYear, new Date().getMonth() + 1);
    const pinnacles = calculatePinnacles(month, day, year);
    const challenges = calculateChallenges(month, day, year);
    const karmicLessons = calculateKarmicLessons(fullName);
    const hiddenPassion = calculateHiddenPassion(fullName);
    
    // Astrology
    const astrology = calculateAstrology(month, day, year, hour, location);
    
    // Destiny Matrix
    const matrix = calculateDestinyMatrix(day, month, year);
    
    // Chakras
    const chakras = calculateChakraEnergies(day, month, year);
    
    // Generate reflection questions based on numbers
    const reflectionQuestions = generateReflectionQuestions(lifePath.number, destiny.number, soulUrge.number);
    
    return {
        // Personal info
        name: fullName,
        currentName,
        birthDate: { month, day, year },
        birthTime: hour !== null ? { hour, minute } : null,
        birthLocation: location,
        
        // Core numbers
        coreNumbers: {
            lifePath,
            destiny,
            soulUrge,
            personality,
            birthday
        },
        
        currentNameNumbers,
        
        // Cycles
        cycles: {
            personalYear,
            personalMonth,
            pinnacles,
            challenges
        },
        
        // Patterns
        patterns: {
            karmicLessons,
            hiddenPassion
        },
        
        // Astrology
        astrology,
        
        // Matrix
        matrix,
        
        // Chakras
        chakras,
        
        // Reflection
        reflectionQuestions,
        
        // Metadata
        generatedAt: new Date().toISOString()
    };
}

/**
 * Generate reflection questions based on numbers
 */
function generateReflectionQuestions(lifePath, destiny, soulUrge) {
    const questions = [
        `As a Life Path ${lifePath}, how do you express ${NUMEROLOGY_DATA[lifePath]?.keywords[0] || 'your gifts'} in your daily life?`,
        `Your Destiny number ${destiny} suggests you're here to ${NUMEROLOGY_DATA[destiny]?.destiny?.worldRole || 'fulfill a unique purpose'}. What steps are you taking toward this?`,
        `With Soul Urge ${soulUrge}, your soul craves ${NUMEROLOGY_DATA[soulUrge]?.soulUrge?.innerDesires || 'deep fulfillment'}. How do you honor this need?`,
        `What patterns do you notice repeating in your life, and how might they relate to your karmic lessons?`,
        `How can you better integrate your spiritual understanding into practical daily living?`,
        `What would it look like to fully embody the highest expression of your Life Path ${lifePath}?`,
        `Which of your chakras do you feel needs the most attention right now?`,
        `How do your numerological patterns align with or challenge your astrological profile?`
    ];
    
    return questions;
}
