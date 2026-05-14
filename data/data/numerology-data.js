/**
 * Numerology Data
 * Complete interpretations for all numbers 1-9, master numbers, and calculation methods
 */

const NUMEROLOGY_DATA = {
    1: {
        name: "The Leader",
        keywords: ["Independence", "Originality", "Leadership", "Ambition", "Courage"],
        strengths: ["Self-reliant", "Innovative", "Determined", "Courageous", "Progressive"],
        challenges: ["Stubbornness", "Self-centeredness", "Impatience", "Aggression"],
        color: "Red",
        planet: "Sun",
        element: "Fire",
        tarot: "The Magician",
        crystals: ["Ruby", "Garnet", "Red Jasper"],
        shortDescription: "The pioneer and innovator, born to lead and create new paths.",
        
        lifePath: {
            meaning: "Your life path is one of independence, leadership, and pioneering spirit. You are here to develop originality and self-reliance.",
            purpose: "To lead by example, create new paths, and inspire others through your independent action and innovative thinking.",
            challenges: "Learning to cooperate with others while maintaining your independence. Avoiding selfishness and recognizing that leadership requires serving others.",
            opportunities: "Entrepreneurship, leadership roles, creative ventures, and any field where you can be a pioneer or innovator.",
            relationships: "You need a partner who respects your independence and supports your ambitions. Avoid partners who try to control or limit you.",
            career: "Natural leader suited for entrepreneurship, management, creative direction, or any role where you can take initiative.",
            spiritualLesson: "True leadership is about service, not ego. Your independence is meant to benefit the collective."
        },
        
        destiny: {
            meaning: "Your destiny is to become a leader and innovator. Your name carries the energy of new beginnings and self-actualization.",
            expression: "You express yourself with confidence, originality, and directness. Others see you as a natural leader.",
            fulfillment: "You fulfill your destiny by taking initiative, creating something new, and inspiring others through your example.",
            worldRole: "Pioneer, innovator, entrepreneur, leader who opens new paths for others to follow."
        },
        
        soulUrge: {
            meaning: "Your soul craves independence, recognition, and the ability to create and lead.",
            innerDesires: "Deep down, you want to be first, to be original, and to make your mark on the world.",
            motivation: "You are motivated by achievement, recognition, and the desire to prove yourself.",
            spiritualNeed: "Your soul needs to learn that true fulfillment comes from using your leadership to serve others."
        },
        
        personality: {
            meaning: "You project an image of confidence, leadership, and independence.",
            firstImpression: "Others see you as capable, strong-willed, and self-assured.",
            publicImage: "You appear as a natural leader who knows what they want and how to get it.",
            socialStyle: "Direct, assertive, and commanding in social situations."
        },
        
        birthday: {
            meaning: "The gift of leadership and originality. You have natural executive ability and pioneering spirit.",
            talent: "Your special talent lies in initiating new projects and leading others toward goals.",
            approach: "You approach life with courage and determination, always ready to take the first step."
        }
    },
    
    2: {
        name: "The Peacemaker",
        keywords: ["Cooperation", "Diplomacy", "Sensitivity", "Partnership", "Harmony"],
        strengths: ["Diplomatic", "Intuitive", "Cooperative", "Patient", "Supportive"],
        challenges: ["Over-sensitivity", "Indecisiveness", "Dependency", "Self-doubt"],
        color: "Orange",
        planet: "Moon",
        element: "Water",
        tarot: "The High Priestess",
        crystals: ["Moonstone", "Pearl", "Selenite"],
        shortDescription: "The diplomat and mediator, born to create harmony and partnerships.",
        
        lifePath: {
            meaning: "Your life path is one of cooperation, diplomacy, and creating harmony. You are here to develop sensitivity and partnership skills.",
            purpose: "To bring people together, mediate conflicts, and create harmonious relationships and environments.",
            challenges: "Overcoming self-doubt and learning to assert yourself while maintaining your diplomatic nature.",
            opportunities: "Counseling, diplomacy, partnerships, and any field requiring sensitivity and cooperation.",
            relationships: "You thrive in partnership and need a supportive, understanding partner. Avoid those who take advantage of your giving nature.",
            career: "Counselor, mediator, diplomat, partner in business, or any role requiring cooperation and sensitivity.",
            spiritualLesson: "Your sensitivity is a strength, not a weakness. Balance giving with receiving."
        },
        
        destiny: {
            meaning: "Your destiny is to become a peacemaker and partner. Your name carries the energy of cooperation and harmony.",
            expression: "You express yourself with tact, diplomacy, and sensitivity. Others see you as a supportive ally.",
            fulfillment: "You fulfill your destiny by creating partnerships, mediating conflicts, and bringing harmony to situations.",
            worldRole: "Peacemaker, diplomat, counselor, partner who helps others find common ground."
        },
        
        soulUrge: {
            meaning: "Your soul craves peace, partnership, and emotional connection.",
            innerDesires: "Deep down, you want harmony in your relationships and to feel deeply connected to others.",
            motivation: "You are motivated by love, partnership, and the desire for peaceful coexistence.",
            spiritualNeed: "Your soul needs to learn self-love and independence within partnership."
        },
        
        personality: {
            meaning: "You project an image of gentleness, cooperation, and approachability.",
            firstImpression: "Others see you as kind, diplomatic, and easy to work with.",
            publicImage: "You appear as a good listener and supportive friend.",
            socialStyle: "Warm, accommodating, and focused on others' needs."
        },
        
        birthday: {
            meaning: "The gift of sensitivity and cooperation. You have natural diplomatic ability and intuition.",
            talent: "Your special talent lies in understanding others' feelings and creating harmony.",
            approach: "You approach life with sensitivity and a desire to create balanced relationships."
        }
    },
    
    3: {
        name: "The Communicator",
        keywords: ["Expression", "Creativity", "Joy", "Communication", "Inspiration"],
        strengths: ["Creative", "Expressive", "Optimistic", "Inspiring", "Social"],
        challenges: ["Scattered energy", "Superficiality", "Moodiness", "Self-doubt"],
        color: "Yellow",
        planet: "Jupiter",
        element: "Fire",
        tarot: "The Empress",
        crystals: ["Citrine", "Yellow Topaz", "Amber"],
        shortDescription: "The creative communicator, born to express joy and inspire others.",
        
        lifePath: {
            meaning: "Your life path is one of creative self-expression, communication, and joy. You are here to inspire others through your creativity.",
            purpose: "To express your creative gifts, communicate ideas that uplift, and spread joy and inspiration.",
            challenges: "Focusing your creative energy and overcoming self-doubt about your talents.",
            opportunities: "Arts, communication, entertainment, writing, speaking, and any creative field.",
            relationships: "You need a partner who appreciates your creativity and social nature. Avoid partners who stifle your expression.",
            career: "Artist, writer, speaker, entertainer, or any role involving creative communication.",
            spiritualLesson: "Your creativity is a gift meant to be shared. Joy is your natural state when you express yourself authentically."
        },
        
        destiny: {
            meaning: "Your destiny is to become a creative communicator. Your name carries the energy of expression and joy.",
            expression: "You express yourself with creativity, enthusiasm, and charm. Others see you as entertaining and inspiring.",
            fulfillment: "You fulfill your destiny by creating and communicating, spreading joy wherever you go.",
            worldRole: "Artist, entertainer, communicator, inspirer who brings joy and creativity to the world."
        },
        
        soulUrge: {
            meaning: "Your soul craves creative expression, joy, and recognition for your talents.",
            innerDesires: "Deep down, you want to create, to be appreciated, and to experience the joy of self-expression.",
            motivation: "You are motivated by creativity, recognition, and the desire to inspire others.",
            spiritualNeed: "Your soul needs to express itself authentically without fear of judgment."
        },
        
        personality: {
            meaning: "You project an image of creativity, charm, and optimism.",
            firstImpression: "Others see you as entertaining, creative, and socially engaging.",
            publicImage: "You appear as someone who brings light and joy to social situations.",
            socialStyle: "Charming, witty, and the life of the party."
        },
        
        birthday: {
            meaning: "The gift of creative expression and communication. You have natural artistic and social abilities.",
            talent: "Your special talent lies in creative communication and inspiring others.",
            approach: "You approach life with optimism and a desire to express yourself creatively."
        }
    },
    
    4: {
        name: "The Builder",
        keywords: ["Stability", "Structure", "Hard work", "Practicality", "Foundation"],
        strengths: ["Disciplined", "Reliable", "Practical", "Organized", "Persistent"],
        challenges: ["Rigidity", "Stubbornness", "Limitation", "Workaholism"],
        color: "Green",
        planet: "Uranus",
        element: "Earth",
        tarot: "The Emperor",
        crystals: ["Emerald", "Jade", "Malachite"],
        shortDescription: "The practical builder, born to create lasting structures and foundations.",
        
        lifePath: {
            meaning: "Your life path is one of building, structure, and creating lasting value. You are here to develop discipline and practical skills.",
            purpose: "To build solid foundations, create systems that last, and bring order to chaos through hard work.",
            challenges: "Avoiding rigidity and learning to be flexible while maintaining your practical nature.",
            opportunities: "Business, construction, management, systems design, and any field requiring organization.",
            relationships: "You need a stable, reliable partner who shares your values. Avoid those who are too chaotic or unreliable.",
            career: "Builder, manager, accountant, systems analyst, or any role requiring organization and practical skills.",
            spiritualLesson: "True security comes from within. Build your inner foundation as diligently as your outer achievements."
        },
        
        destiny: {
            meaning: "Your destiny is to become a master builder. Your name carries the energy of structure and manifestation.",
            expression: "You express yourself with practicality, reliability, and discipline. Others see you as dependable.",
            fulfillment: "You fulfill your destiny by building things that last and creating order in the world.",
            worldRole: "Builder, organizer, manager who creates lasting structures and systems."
        },
        
        soulUrge: {
            meaning: "Your soul craves security, order, and the satisfaction of building something lasting.",
            innerDesires: "Deep down, you want stability, achievement through hard work, and respect for your efforts.",
            motivation: "You are motivated by security, accomplishment, and the desire to create lasting value.",
            spiritualNeed: "Your soul needs to find inner security that doesn't depend on external structures."
        },
        
        personality: {
            meaning: "You project an image of reliability, practicality, and competence.",
            firstImpression: "Others see you as dependable, hardworking, and trustworthy.",
            publicImage: "You appear as someone who gets things done and can be counted on.",
            socialStyle: "Reserved, practical, and focused on substance over style."
        },
        
        birthday: {
            meaning: "The gift of practical ability and perseverance. You have natural organizational skills.",
            talent: "Your special talent lies in building, organizing, and creating lasting structures.",
            approach: "You approach life with discipline and a step-by-step methodology."
        }
    },
    
    5: {
        name: "The Freedom Seeker",
        keywords: ["Freedom", "Change", "Adventure", "Versatility", "Experience"],
        strengths: ["Adaptable", "Resourceful", "Curious", "Dynamic", "Progressive"],
        challenges: ["Restlessness", "Overindulgence", "Inconsistency", "Irresponsibility"],
        color: "Blue",
        planet: "Mercury",
        element: "Air",
        tarot: "The Hierophant",
        crystals: ["Aquamarine", "Turquoise", "Blue Topaz"],
        shortDescription: "The adventurer and free spirit, born to experience life's variety.",
        
        lifePath: {
            meaning: "Your life path is one of freedom, change, and diverse experience. You are here to develop versatility and adaptability.",
            purpose: "To embrace change, seek adventure, and share your diverse experiences with others.",
            challenges: "Finding focus amidst variety and avoiding the trap of constant restlessness.",
            opportunities: "Travel, sales, communications, entertainment, and any field offering variety and freedom.",
            relationships: "You need a partner who gives you freedom and joins your adventures. Avoid controlling partners.",
            career: "Traveler, salesperson, promoter, journalist, or any dynamic role with variety.",
            spiritualLesson: "True freedom is internal. You can be free in any circumstance when you free your mind."
        },
        
        destiny: {
            meaning: "Your destiny is to become a teacher of experience. Your name carries the energy of freedom and change.",
            expression: "You express yourself with versatility, enthusiasm, and adaptability. Others see you as exciting.",
            fulfillment: "You fulfill your destiny by embracing change, having diverse experiences, and sharing your wisdom.",
            worldRole: "Adventurer, teacher, communicator who brings fresh perspectives from diverse experiences."
        },
        
        soulUrge: {
            meaning: "Your soul craves freedom, variety, and the excitement of new experiences.",
            innerDesires: "Deep down, you want adventure, sensory experience, and freedom from restriction.",
            motivation: "You are motivated by curiosity, the desire for freedom, and the thrill of the new.",
            spiritualNeed: "Your soul needs to find inner freedom that doesn't require constant external stimulation."
        },
        
        personality: {
            meaning: "You project an image of excitement, adaptability, and openness to life.",
            firstImpression: "Others see you as fun, dynamic, and interesting.",
            publicImage: "You appear as someone who has been places and done things.",
            socialStyle: "Engaging, versatile, and always ready for the next adventure."
        },
        
        birthday: {
            meaning: "The gift of versatility and resourcefulness. You have natural adaptability.",
            talent: "Your special talent lies in adapting to change and making the most of any situation.",
            approach: "You approach life with curiosity and openness to whatever comes next."
        }
    },
    
    6: {
        name: "The Nurturer",
        keywords: ["Responsibility", "Love", "Family", "Service", "Healing"],
        strengths: ["Caring", "Responsible", "Protective", "Harmonious", "Artistic"],
        challenges: ["Worry", "Self-sacrifice", "Interfering", "Perfectionism"],
        color: "Indigo",
        planet: "Venus",
        element: "Earth",
        tarot: "The Lovers",
        crystals: ["Rose Quartz", "Rhodonite", "Pink Tourmaline"],
        shortDescription: "The caretaker and healer, born to nurture and create harmony.",
        
        lifePath: {
            meaning: "Your life path is one of responsibility, love, and service. You are here to develop the capacity to nurture and heal.",
            purpose: "To care for others, create harmonious environments, and serve your family and community.",
            challenges: "Avoiding martyrdom and learning to care for yourself as well as others.",
            opportunities: "Healthcare, counseling, education, design, and any service-oriented field.",
            relationships: "You thrive when caring for loved ones but must avoid codependency. Seek partners who reciprocate.",
            career: "Healer, teacher, counselor, designer, or any role involving nurturing and creating beauty.",
            spiritualLesson: "Self-love is not selfish. You must fill your own cup before you can truly serve others."
        },
        
        destiny: {
            meaning: "Your destiny is to become a healer and nurturer. Your name carries the energy of love and responsibility.",
            expression: "You express yourself with warmth, responsibility, and artistic sensibility. Others see you as caring.",
            fulfillment: "You fulfill your destiny by nurturing others, creating beauty, and taking responsibility for those you love.",
            worldRole: "Healer, caretaker, artist who creates harmony and nurtures growth in others."
        },
        
        soulUrge: {
            meaning: "Your soul craves love, family, and the opportunity to care for others.",
            innerDesires: "Deep down, you want a loving home, meaningful relationships, and to feel needed.",
            motivation: "You are motivated by love, duty, and the desire to create harmony.",
            spiritualNeed: "Your soul needs to learn that you are worthy of receiving the same love you give."
        },
        
        personality: {
            meaning: "You project an image of warmth, responsibility, and caring.",
            firstImpression: "Others see you as nurturing, trustworthy, and aesthetically aware.",
            publicImage: "You appear as someone who takes care of others and creates beauty.",
            socialStyle: "Warm, responsible, and focused on creating comfortable environments."
        },
        
        birthday: {
            meaning: "The gift of nurturing and responsibility. You have natural healing and artistic abilities.",
            talent: "Your special talent lies in caring for others and creating harmonious environments.",
            approach: "You approach life with love and a sense of duty to those you care about."
        }
    },
    
    7: {
        name: "The Seeker",
        keywords: ["Wisdom", "Analysis", "Spirituality", "Introspection", "Mystery"],
        strengths: ["Analytical", "Intuitive", "Wise", "Contemplative", "Perceptive"],
        challenges: ["Isolation", "Skepticism", "Secretiveness", "Aloofness"],
        color: "Violet",
        planet: "Neptune",
        element: "Water",
        tarot: "The Chariot",
        crystals: ["Amethyst", "Clear Quartz", "Lapis Lazuli"],
        shortDescription: "The philosopher and mystic, born to seek truth and wisdom.",
        
        lifePath: {
            meaning: "Your life path is one of seeking wisdom, spiritual truth, and inner knowledge. You are here to develop understanding.",
            purpose: "To seek truth, develop spiritual wisdom, and share your insights with those ready to receive them.",
            challenges: "Overcoming isolation and learning to connect with others while maintaining your contemplative nature.",
            opportunities: "Research, spirituality, writing, analysis, and any field requiring deep thinking.",
            relationships: "You need a partner who respects your need for solitude and intellectual depth.",
            career: "Researcher, analyst, writer, spiritual teacher, or any role requiring deep thought.",
            spiritualLesson: "Wisdom is meant to be shared. Your insights can help others on their path."
        },
        
        destiny: {
            meaning: "Your destiny is to become a seeker and teacher of wisdom. Your name carries the energy of truth and analysis.",
            expression: "You express yourself with thoughtfulness, depth, and mystery. Others see you as wise.",
            fulfillment: "You fulfill your destiny by seeking truth, developing wisdom, and sharing your insights.",
            worldRole: "Philosopher, mystic, analyst who brings deep understanding to complex questions."
        },
        
        soulUrge: {
            meaning: "Your soul craves truth, understanding, and connection to something greater.",
            innerDesires: "Deep down, you want to understand life's mysteries and find spiritual meaning.",
            motivation: "You are motivated by the quest for truth and the desire for spiritual connection.",
            spiritualNeed: "Your soul needs to balance intellectual seeking with heart-centered faith."
        },
        
        personality: {
            meaning: "You project an image of mystery, intelligence, and depth.",
            firstImpression: "Others see you as thoughtful, reserved, and somewhat mysterious.",
            publicImage: "You appear as someone with hidden depths and special knowledge.",
            socialStyle: "Reserved, observant, and selective about who you open up to."
        },
        
        birthday: {
            meaning: "The gift of analysis and intuition. You have natural investigative and spiritual abilities.",
            talent: "Your special talent lies in deep analysis and understanding hidden truths.",
            approach: "You approach life as a quest for meaning and understanding."
        }
    },
    
    8: {
        name: "The Powerhouse",
        keywords: ["Power", "Abundance", "Achievement", "Authority", "Karma"],
        strengths: ["Ambitious", "Authoritative", "Efficient", "Organized", "Successful"],
        challenges: ["Materialism", "Domination", "Workaholism", "Power struggles"],
        color: "Bronze/Pink",
        planet: "Saturn",
        element: "Earth",
        tarot: "Strength",
        crystals: ["Tiger's Eye", "Pyrite", "Obsidian"],
        shortDescription: "The achiever and manifester, born to master the material world.",
        
        lifePath: {
            meaning: "Your life path is one of power, achievement, and material mastery. You are here to develop abundance consciousness.",
            purpose: "To achieve success, master the material world, and use your power to benefit others.",
            challenges: "Balancing material success with spiritual growth. Avoiding the misuse of power.",
            opportunities: "Business, finance, management, law, and any field offering authority and achievement.",
            relationships: "You need a partner who supports your ambitions and can handle your intensity.",
            career: "Executive, entrepreneur, financier, or any role with authority and potential for achievement.",
            spiritualLesson: "True power comes from within. Use your material success to serve the greater good."
        },
        
        destiny: {
            meaning: "Your destiny is to become a master of manifestation. Your name carries the energy of power and abundance.",
            expression: "You express yourself with authority, competence, and ambition. Others see you as powerful.",
            fulfillment: "You fulfill your destiny by achieving success and using your power wisely.",
            worldRole: "Leader, achiever, manifester who demonstrates the responsible use of power."
        },
        
        soulUrge: {
            meaning: "Your soul craves achievement, recognition, and the experience of abundance.",
            innerDesires: "Deep down, you want power, success, and to be recognized for your achievements.",
            motivation: "You are motivated by ambition, the desire for achievement, and material comfort.",
            spiritualNeed: "Your soul needs to learn that true abundance includes spiritual wealth."
        },
        
        personality: {
            meaning: "You project an image of power, competence, and authority.",
            firstImpression: "Others see you as successful, capable, and authoritative.",
            publicImage: "You appear as someone who has achieved and commands respect.",
            socialStyle: "Confident, businesslike, and focused on results."
        },
        
        birthday: {
            meaning: "The gift of executive ability and material mastery. You have natural business sense.",
            talent: "Your special talent lies in organizing, leading, and achieving tangible results.",
            approach: "You approach life with ambition and the determination to succeed."
        }
    },
    
    9: {
        name: "The Humanitarian",
        keywords: ["Compassion", "Wisdom", "Completion", "Universal love", "Service"],
        strengths: ["Compassionate", "Wise", "Generous", "Artistic", "Inspiring"],
        challenges: ["Martyrdom", "Emotional volatility", "Resentment", "Scattered focus"],
        color: "Gold",
        planet: "Mars",
        element: "Fire",
        tarot: "The Hermit",
        crystals: ["Gold", "Citrine", "Bloodstone"],
        shortDescription: "The humanitarian and wise one, born to serve humanity with compassion.",
        
        lifePath: {
            meaning: "Your life path is one of compassion, universal love, and humanitarian service. You are here to develop wisdom through experience.",
            purpose: "To serve humanity, share your wisdom, and demonstrate unconditional love in action.",
            challenges: "Letting go of personal attachments and learning to serve without expectation of return.",
            opportunities: "Humanitarian work, arts, healing, teaching, and any field serving the greater good.",
            relationships: "You need a partner who shares your ideals and supports your humanitarian nature.",
            career: "Humanitarian, artist, teacher, healer, or any role serving the collective good.",
            spiritualLesson: "You are completing a cycle. Let go gracefully and trust in the universal flow."
        },
        
        destiny: {
            meaning: "Your destiny is to become a humanitarian and teacher of wisdom. Your name carries the energy of completion and service.",
            expression: "You express yourself with compassion, artistic beauty, and universal understanding. Others see you as wise.",
            fulfillment: "You fulfill your destiny by serving others, creating art, and sharing your accumulated wisdom.",
            worldRole: "Humanitarian, artist, sage who demonstrates universal love and wisdom."
        },
        
        soulUrge: {
            meaning: "Your soul craves to serve, to love universally, and to make a difference in the world.",
            innerDesires: "Deep down, you want to help humanity, create beauty, and leave a meaningful legacy.",
            motivation: "You are motivated by compassion, idealism, and the desire to serve the greater good.",
            spiritualNeed: "Your soul needs to learn healthy boundaries while maintaining your compassionate nature."
        },
        
        personality: {
            meaning: "You project an image of wisdom, compassion, and artistic sensibility.",
            firstImpression: "Others see you as kind, creative, and idealistic.",
            publicImage: "You appear as someone with depth, wisdom, and humanitarian concerns.",
            socialStyle: "Warm, inclusive, and interested in the well-being of all."
        },
        
        birthday: {
            meaning: "The gift of compassion and wisdom. You have natural artistic and healing abilities.",
            talent: "Your special talent lies in understanding human nature and serving the greater good.",
            approach: "You approach life with compassion and a desire to make a difference."
        }
    },
    
    11: {
        name: "The Intuitive",
        keywords: ["Illumination", "Intuition", "Inspiration", "Visionary", "Spiritual messenger"],
        strengths: ["Highly intuitive", "Inspiring", "Visionary", "Charismatic", "Idealistic"],
        challenges: ["Nervous tension", "Impracticality", "Self-doubt", "Hypersensitivity"],
        color: "Silver/White",
        planet: "Moon (higher octave)",
        element: "Air/Light",
        tarot: "Justice",
        crystals: ["Clear Quartz", "Selenite", "Moonstone"],
        shortDescription: "The spiritual messenger and intuitive, born to inspire and illuminate.",
        isMasterNumber: true,
        
        lifePath: {
            meaning: "As a Master Number, 11 carries the energy of spiritual illumination and intuitive knowing. You are a spiritual messenger here to inspire others.",
            purpose: "To channel higher wisdom, inspire others through your vision, and serve as a light in times of darkness.",
            challenges: "Managing the intensity of your sensitivity and grounding your spiritual gifts in practical reality.",
            opportunities: "Spiritual teaching, counseling, arts, healing, and any field where you can inspire others.",
            relationships: "You need a grounded partner who appreciates your spiritual nature and can help you stay balanced.",
            career: "Spiritual teacher, counselor, artist, healer, or any role where you can inspire and illuminate.",
            spiritualLesson: "You are a channel for higher wisdom. Trust your intuition but stay grounded in reality."
        },
        
        destiny: {
            meaning: "Your destiny carries the master vibration of 11, the Spiritual Messenger. Your name encodes a mission of illumination.",
            expression: "You express yourself with spiritual insight, inspiration, and visionary thinking. Others see you as enlightened.",
            fulfillment: "You fulfill your destiny by channeling inspiration, illuminating truth, and guiding others toward higher consciousness.",
            worldRole: "Spiritual messenger, visionary, artist who brings light and inspiration to the world."
        },
        
        soulUrge: {
            meaning: "Your soul craves spiritual connection, to fulfill a higher purpose, and to inspire others.",
            innerDesires: "Deep down, you want to understand the mysteries of existence and share that understanding with others.",
            motivation: "You are motivated by spiritual truth, the desire to inspire, and connection to higher wisdom.",
            spiritualNeed: "Your soul needs to balance spiritual seeking with practical living in the material world."
        },
        
        personality: {
            meaning: "You project an image of inspiration, spiritual depth, and illumination.",
            firstImpression: "Others sense something special about you, a spiritual quality or inspiration.",
            publicImage: "You appear as someone connected to higher truths and capable of great inspiration.",
            socialStyle: "Magnetic, inspiring, sometimes appearing otherworldly or dreamy."
        },
        
        birthday: {
            meaning: "The master gift of intuition and spiritual insight. You have extraordinary psychic potential.",
            talent: "Your special talent lies in receiving intuitive guidance and inspiring others.",
            approach: "You approach life as a spiritual journey with deeper meaning in every experience."
        }
    },
    
    22: {
        name: "The Master Builder",
        keywords: ["Master manifestation", "Vision made real", "Practical idealism", "Global influence"],
        strengths: ["Visionary", "Practical", "Powerful manifester", "Diplomatic", "Inspirational leader"],
        challenges: ["Overwhelm", "Self-doubt", "Unrealistic expectations", "Pressure"],
        color: "Coral/Gold",
        planet: "All planets (synthesis)",
        element: "Earth/All",
        tarot: "The Fool (completing the journey)",
        crystals: ["Gold", "Diamond", "Master Crystals"],
        shortDescription: "The master architect, born to build dreams into reality on a grand scale.",
        isMasterNumber: true,
        
        lifePath: {
            meaning: "As a Master Number, 22 carries the highest manifestation potential. You are the Master Builder, capable of turning the grandest visions into practical reality.",
            purpose: "To manifest large-scale visions that benefit humanity, creating lasting structures and systems.",
            challenges: "Managing the enormous potential and pressure of this number. Avoiding becoming overwhelmed by the scope of your vision.",
            opportunities: "Architecture, leadership, international business, humanitarian projects, and any field with large-scale impact.",
            relationships: "You need a partner who understands your mission and can support your ambitious vision.",
            career: "Architect, international leader, entrepreneur, humanitarian, or any role with potential for large-scale positive impact.",
            spiritualLesson: "Your vision is meant to serve humanity. Build not for ego but for the collective good."
        },
        
        destiny: {
            meaning: "Your destiny carries the master vibration of 22, the Master Builder. Your name encodes extraordinary manifesting power.",
            expression: "You express yourself with practical vision, diplomatic skill, and the ability to make dreams real.",
            fulfillment: "You fulfill your destiny by creating something lasting that improves the world.",
            worldRole: "Master Builder, visionary leader who manifests dreams into reality for the benefit of all."
        },
        
        soulUrge: {
            meaning: "Your soul craves to build something meaningful, to leave a lasting legacy that helps humanity.",
            innerDesires: "Deep down, you want to make your mark on the world through practical achievement.",
            motivation: "You are motivated by vision, the desire to manifest, and the opportunity for lasting impact.",
            spiritualNeed: "Your soul needs to balance ambitious building with spiritual centeredness."
        },
        
        personality: {
            meaning: "You project an image of capability, vision, and practical power.",
            firstImpression: "Others see you as someone capable of great achievement and leadership.",
            publicImage: "You appear as a natural leader with the vision and ability to make things happen.",
            socialStyle: "Commanding yet diplomatic, inspiring confidence in your ability to achieve."
        },
        
        birthday: {
            meaning: "The master gift of manifestation and practical vision. You have extraordinary building ability.",
            talent: "Your special talent lies in seeing the big picture and making it real.",
            approach: "You approach life as a master architect, designing and building your vision into reality."
        }
    },
    
    33: {
        name: "The Master Teacher",
        keywords: ["Master healing", "Selfless service", "Spiritual upliftment", "Universal love"],
        strengths: ["Supremely compassionate", "Healing presence", "Inspiring teacher", "Selfless"],
        challenges: ["Martyrdom", "Sacrificing too much", "Unrealistic expectations", "Health strain"],
        color: "Sky Blue/Violet",
        planet: "All planets (transcendent)",
        element: "All/Light",
        tarot: "The World",
        crystals: ["Diamond", "Alexandrite", "Master Crystals"],
        shortDescription: "The master healer and teacher, born to uplift humanity through unconditional love.",
        isMasterNumber: true,
        
        lifePath: {
            meaning: "As the rarest Master Number, 33 carries the energy of the Master Teacher. You are here to heal and uplift through selfless love and service.",
            purpose: "To embody unconditional love, teach by example, and raise human consciousness through your presence.",
            challenges: "Balancing your desire to help everyone with practical self-care. Avoiding martyrdom.",
            opportunities: "Healing arts, spiritual teaching, counseling, and any field serving humanity's highest good.",
            relationships: "You need a partner who supports your humanitarian mission and helps ground you.",
            career: "Spiritual teacher, healer, counselor, humanitarian leader, or any role of service.",
            spiritualLesson: "You embody Christ consciousness. Serve through love, not sacrifice."
        },
        
        destiny: {
            meaning: "Your destiny carries the master vibration of 33, the Master Teacher. Your name encodes the mission of spiritual service.",
            expression: "You express yourself with unconditional love, wisdom, and healing presence.",
            fulfillment: "You fulfill your destiny by teaching, healing, and uplifting others through selfless service.",
            worldRole: "Master Teacher, healer, spiritual leader who embodies and teaches unconditional love."
        },
        
        soulUrge: {
            meaning: "Your soul craves to serve, heal, and uplift humanity.",
            innerDesires: "Deep down, you want to heal the world's pain and guide others to higher consciousness.",
            motivation: "You are motivated by unconditional love and the desire to serve the highest good.",
            spiritualNeed: "Your soul needs to learn to receive love as well as give it."
        },
        
        personality: {
            meaning: "You project an image of love, wisdom, and healing presence.",
            firstImpression: "Others feel uplifted and healed in your presence.",
            publicImage: "You appear as someone with a spiritual mission and healing gift.",
            socialStyle: "Warm, loving, accepting of all, with a healing quality to your presence."
        },
        
        birthday: {
            meaning: "The master gift of healing and teaching. You have extraordinary spiritual gifts.",
            talent: "Your special talent lies in healing and teaching through the power of love.",
            approach: "You approach life as a sacred opportunity to serve and uplift."
        }
    }
};

// Letter to number conversions for name calculations
const LETTER_VALUES = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
    j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
    s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8
};

// Vowels for Soul Urge calculation
const VOWELS = ['a', 'e', 'i', 'o', 'u'];

// Sometimes Y is a vowel
const SOMETIMES_Y = true;

// Pythagorean number meanings (brief)
const PYTHAGOREAN_MEANINGS = {
    1: "New beginnings, independence, self",
    2: "Partnership, balance, cooperation",
    3: "Creativity, expression, joy",
    4: "Foundation, stability, work",
    5: "Change, freedom, adventure",
    6: "Love, responsibility, harmony",
    7: "Wisdom, spirituality, analysis",
    8: "Power, abundance, karma",
    9: "Completion, humanitarianism, wisdom"
};

// Personal year cycle meanings
const PERSONAL_YEAR_MEANINGS = {
    1: "New beginnings, fresh starts, planting seeds",
    2: "Patience, cooperation, relationships developing",
    3: "Creativity, self-expression, social expansion",
    4: "Building foundations, hard work, organization",
    5: "Change, freedom, unexpected events",
    6: "Responsibility, family, home matters",
    7: "Introspection, spiritual growth, analysis",
    8: "Achievement, recognition, material success",
    9: "Completion, endings, clearing the way",
    11: "Spiritual awakening, illumination, intuition",
    22: "Master building, large-scale achievements"
};

// Pinnacle cycle meanings
const PINNACLE_MEANINGS = {
    1: "Time of independence and new beginnings",
    2: "Time of cooperation and patience",
    3: "Time of creative expression and joy",
    4: "Time of building and hard work",
    5: "Time of change and freedom",
    6: "Time of responsibility and family",
    7: "Time of inner work and spiritual seeking",
    8: "Time of achievement and material success",
    9: "Time of completion and humanitarianism",
    11: "Time of spiritual illumination",
    22: "Time of master manifestation"
};

// Challenge meanings
const CHALLENGE_MEANINGS = {
    0: "The cipher challenge - learning to use all talents",
    1: "Learning independence without selfishness",
    2: "Learning sensitivity without over-dependence",
    3: "Learning expression without scattering energy",
    4: "Learning organization without rigidity",
    5: "Learning freedom without irresponsibility",
    6: "Learning responsibility without martyrdom",
    7: "Learning wisdom without isolation",
    8: "Learning power without materialism"
};
